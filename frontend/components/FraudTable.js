export default function FraudTable({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="card text-center py-12">
        <div className="text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-semibold text-green-400 mb-2">No Fraud Detected</h3>
        <p className="text-gray-400">All transactions appear to be legitimate</p>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Fraudulent Transactions</h2>
        <span className="badge badge-error">
          {transactions.length} High Risk
        </span>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Merchant</th>
              <th>Category</th>
              <th>Country</th>
              <th>Probability</th>
              <th>Risk Level</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr key={idx}>
                <td className="font-mono text-sm">{txn.transaction_id}</td>
                <td className="font-semibold">${txn.amount.toFixed(2)}</td>
                <td className="text-sm">{txn.merchant}</td>
                <td className="text-sm text-gray-400">{txn.merchant_category}</td>
                <td>
                  <span className="badge badge-info text-xs">
                    {txn.country}
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden max-w-[100px]">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-red-400"
                        style={{ width: `${txn.fraud_probability * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-red-400 min-w-[50px]">
                      {(txn.fraud_probability * 100).toFixed(1)}%
                    </span>
                  </div>
                </td>
                <td>
                  <RiskBadge level={txn.risk_level} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function RiskBadge({ level }) {
  const configs = {
    Critical: 'badge-error',
    High: 'badge-warning',
    Medium: 'badge-warning',
    Low: 'badge-success',
  }

  return (
    <span className={`badge ${configs[level] || 'badge-info'}`}>
      {level}
    </span>
  )
}
