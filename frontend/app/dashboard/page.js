'use client'

import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import StatsCard from '../../components/StatsCard'  // ✅ Goes up 2 levels

import FraudTable from '../../components/FraudTable'
import TrendChart from '../../components/TrendChart'
import RiskDistribution from '../../components/RiskDistribution'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export default function Dashboard() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile)
      setError(null)
    } else {
      setError('Please select a valid CSV file')
      setFile(null)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first')
      return
    }

    setLoading(true)
    setError(null)
    setResults(null)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post(`${API_URL}/predict`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      setResults(response.data)
      setActiveTab('overview')
    } catch (err) {
      setError(err.response?.data?.detail || 'Error processing file')
    } finally {
      setLoading(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === 'text/csv') {
      setFile(droppedFile)
      setError(null)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-50 glass">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              F
            </div>
            <span className="text-xl font-bold">FraudGuard AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="badge badge-success">API Connected</div>
            <button className="btn-secondary text-sm px-4 py-2">
              Documentation
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Upload Section */}
        {!results && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Transaction Analysis Dashboard</h1>
              <p className="text-gray-400 text-lg">
                Upload your transaction data to begin fraud detection analysis
              </p>
            </div>

            <div className="card glow-cyan">
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-gray-800 rounded-xl p-12 text-center hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer block">
                  {file ? (
                    <div className="fade-in">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-3xl">
                        ✓
                      </div>
                      <p className="text-xl font-semibold mb-2">{file.name}</p>
                      <p className="text-gray-400">{(file.size / 1024).toFixed(2)} KB</p>
                    </div>
                  ) : (
                    <div>
                      <div className="w-20 h-20 mx-auto mb-4 glass rounded-full flex items-center justify-center text-3xl">
                        📄
                      </div>
                      <p className="text-xl font-semibold mb-2">Drop CSV file here</p>
                      <p className="text-gray-400">or click to browse</p>
                    </div>
                  )}
                </label>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  {error}
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={!file || loading}
                className="btn-primary w-full mt-6 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="spinner w-5 h-5"></div>
                    Analyzing...
                  </span>
                ) : (
                  'Analyze Transactions'
                )}
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="max-w-4xl mx-auto card text-center py-16 fade-in">
            <div className="spinner w-16 h-16 mx-auto mb-4"></div>
            <h3 className="text-2xl font-semibold mb-2">Processing Transactions</h3>
            <p className="text-gray-400">Analyzing patterns and detecting fraud...</p>
          </div>
        )}

        {/* Results */}
        {results && !loading && (
          <div className="fade-in">
            {/* Action Bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Analysis Results</h1>
                <p className="text-gray-400">
                  {results.statistics.total_transactions} transactions processed
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="btn-secondary px-4 py-2">
                  Export Report
                </button>
                <button
                  onClick={() => {
                    setResults(null)
                    setFile(null)
                  }}
                  className="btn-secondary px-4 py-2"
                >
                  New Analysis
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                label="Total Transactions"
                value={results.statistics.total_transactions.toLocaleString()}
                trend="+12%"
                trendUp={true}
              />
              <StatsCard
                label="Fraudulent"
                value={results.statistics.fraudulent_count.toLocaleString()}
                sublabel={`${results.statistics.fraud_percentage.toFixed(1)}%`}
                trend="-8%"
                trendUp={false}
                alert={true}
              />
              <StatsCard
                label="Legitimate"
                value={results.statistics.legitimate_count.toLocaleString()}
                sublabel={`${(100 - results.statistics.fraud_percentage).toFixed(1)}%`}
              />
              <StatsCard
                label="Fraud Amount"
                value={`$${results.statistics.fraud_amount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
                alert={true}
              />
            </div>

            {/* Tabs */}
            <div className="border-b border-white/5 mb-8">
              <div className="flex gap-8">
                <TabButton
                  active={activeTab === 'overview'}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </TabButton>
                <TabButton
                  active={activeTab === 'transactions'}
                  onClick={() => setActiveTab('transactions')}
                >
                  Transactions
                </TabButton>
                <TabButton
                  active={activeTab === 'analytics'}
                  onClick={() => setActiveTab('analytics')}
                >
                  Analytics
                </TabButton>
                <TabButton
                  active={activeTab === 'insights'}
                  onClick={() => setActiveTab('insights')}
                >
                  Insights
                </TabButton>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <RiskDistribution data={results.risk_distribution} />
                  <TrendChart data={results.fraud_transactions} />
                </div>
                <FraudTable transactions={results.fraud_transactions.slice(0, 10)} />
              </div>
            )}

            {activeTab === 'transactions' && (
              <FraudTable transactions={results.fraud_transactions} />
            )}

            {activeTab === 'analytics' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <TrendChart data={results.fraud_transactions} />
                <RiskDistribution data={results.risk_distribution} />
              </div>
            )}

            {activeTab === 'insights' && (
              <div className="grid gap-6">
                <InsightCard
                  title="Fraud Pattern Detected"
                  description="High-risk transactions cluster around specific merchant categories"
                  severity="high"
                />
                <InsightCard
                  title="Geographic Anomaly"
                  description="Unusual transaction volume from specific regions"
                  severity="medium"
                />
                <InsightCard
                  title="Time-based Pattern"
                  description="Increased fraud activity during off-hours"
                  severity="low"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`pb-4 px-2 font-semibold transition-colors relative ${
        active ? 'text-white' : 'text-gray-500 hover:text-gray-300'
      }`}
    >
      {children}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
      )}
    </button>
  )
}

function InsightCard({ title, description, severity }) {
  const colors = {
    high: 'border-red-500/20 bg-red-500/5',
    medium: 'border-yellow-500/20 bg-yellow-500/5',
    low: 'border-blue-500/20 bg-blue-500/5',
  }

  return (
    <div className={`card ${colors[severity]}`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <span className={`badge badge-${severity === 'high' ? 'error' : severity === 'medium' ? 'warning' : 'info'}`}>
          {severity}
        </span>
      </div>
    </div>
  )
}
