from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
import pickle
import json
from ast import literal_eval
from catboost import Pool
import io

app = FastAPI(title="Fraud Detection API", version="1.0.0")

# CORS - Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production: ["https://yourfrontend.com"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model at startup
try:
    with open("catboost_fraud_model.pkl", "rb") as f:
        model = pickle.load(f)
    print("✅ Model loaded successfully")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None

def parse_velocity(x):
    """Parse velocity_last_hour field"""
    if pd.isna(x):
        return {}
    if isinstance(x, dict):
        return x
    if isinstance(x, str):
        x = x.strip()
        try:
            return json.loads(x)
        except:
            try:
                return literal_eval(x)
            except:
                return {}
    return {}

def preprocess_data(df):
    """Preprocess raw transaction data"""
    # Timestamp
    df["timestamp"] = pd.to_datetime(df["timestamp"], errors="coerce")
    df = df.dropna(subset=["timestamp"])

    # Parse velocity
    if "velocity_last_hour" in df.columns:
        vel = df["velocity_last_hour"].map(parse_velocity)
        vel_df = pd.json_normalize(vel).add_prefix("vel1h_")
        for c in vel_df.columns:
            vel_df[c] = pd.to_numeric(vel_df[c], errors="coerce")
        vel_df = vel_df.fillna(0)
        df = pd.concat([df.drop(columns=["velocity_last_hour"]), vel_df], axis=1)

    # Feature engineering
    df["amount_log1p"] = np.log1p(df["amount"])
    df["hour"] = df["transaction_hour"].astype("int16", errors="ignore")
    df["is_night"] = df["hour"].isin([0, 1, 2, 3, 4, 5]).astype("int8")
    df["is_odd_hour"] = df["hour"].isin([1, 2, 3, 4]).astype("int8")
    df["is_weekend"] = df["weekend_transaction"].fillna(False).astype(bool).astype("int8")
    df["high_risk_merchant"] = df["high_risk_merchant"].fillna(False).astype(bool).astype("int8")

    # Drop unnecessary columns
    drop_cols = [
        "transaction_id", "customer_id", "card_number",
        "device_fingerprint", "ip_address", "card_present", 
        "channel", "timestamp", "weekend_transaction"
    ]
    drop_cols = [c for c in drop_cols if c in df.columns]
    X = df.drop(columns=drop_cols, errors="ignore")

    return X, df

def predict(X):
    """Get fraud predictions"""
    feature_cols = [
        "merchant_category", "merchant_type", "merchant",
        "amount", "currency", "country", "city", "city_size",
        "card_type", "device", "distance_from_home",
        "high_risk_merchant", "transaction_hour",
        "vel1h_num_transactions", "vel1h_total_amount",
        "vel1h_unique_merchants", "vel1h_unique_countries",
        "vel1h_max_single_amount", "amount_log1p", "hour",
        "is_night", "is_odd_hour", "is_weekend"
    ]

    X = X[feature_cols]

    categorical_cols = [
        "merchant_category", "merchant_type", "merchant",
        "currency", "country", "city", "city_size",
        "card_type", "device"
    ]
    cat_idx = [X.columns.get_loc(c) for c in categorical_cols if c in X.columns]

    pool = Pool(X, cat_features=cat_idx)
    proba = model.predict_proba(pool)[:, 1]
    pred = (proba >= 0.5).astype(int)

    return proba, pred

@app.get("/")
def root():
    """Health check endpoint"""
    return {
        "status": "active",
        "message": "Fraud Detection API",
        "version": "1.0.0",
        "model_loaded": model is not None
    }

@app.post("/api/predict")
async def predict_fraud(file: UploadFile = File(...)):
    """Predict fraud from uploaded CSV"""
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")

    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="Only CSV files are supported")

    try:
        # Read CSV
        contents = await file.read()
        df_original = pd.read_csv(io.BytesIO(contents))

        # Validate required columns
        required_cols = ["timestamp", "amount", "merchant_category"]
        missing_cols = [col for col in required_cols if col not in df_original.columns]
        if missing_cols:
            raise HTTPException(
                status_code=400, 
                detail=f"Missing required columns: {missing_cols}"
            )

        # Process and predict
        X, df_processed = preprocess_data(df_original.copy())
        proba, pred = predict(X)

        # Add results
        df_original["fraud_probability"] = proba
        df_original["is_fraud"] = pred
        df_original["risk_level"] = pd.cut(
            proba,
            bins=[0, 0.3, 0.6, 0.8, 1.0],
            labels=["Low", "Medium", "High", "Critical"]
        )

        # Calculate statistics
        fraud_mask = df_original["is_fraud"] == 1

        stats = {
            "total_transactions": len(df_original),
            "fraudulent_count": int(pred.sum()),
            "legitimate_count": int(len(df_original) - pred.sum()),
            "fraud_percentage": float((pred.sum() / len(pred)) * 100),
            "total_amount": float(df_original["amount"].sum()),
            "fraud_amount": float(df_original[fraud_mask]["amount"].sum()),
            "avg_fraud_probability": float(proba.mean()),
            "max_fraud_probability": float(proba.max()),
        }

        # Get fraud transactions
        fraud_transactions = df_original[fraud_mask].nlargest(20, "fraud_probability")
        fraud_list = fraud_transactions[[
            "transaction_id", "amount", "merchant", "merchant_category",
            "country", "fraud_probability", "risk_level"
        ]].to_dict(orient="records")

        # Risk distribution
        risk_dist = df_original["risk_level"].value_counts().to_dict()

        return {
            "success": True,
            "statistics": stats,
            "fraud_transactions": fraud_list,
            "risk_distribution": risk_dist,
            "message": f"Processed {len(df_original)} transactions successfully"
        }

    except pd.errors.EmptyDataError:
        raise HTTPException(status_code=400, detail="Empty CSV file")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Processing error: {str(e)}")

@app.get("/api/health")
def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "model_status": "loaded" if model is not None else "not_loaded",
        "api_version": "1.0.0"
    }
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://fraudforge-production.up.railway.app",  # Add your Vercel URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
