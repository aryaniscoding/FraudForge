'use client'

export default function TrendChart({ data }) {
  const topMerchants = data
    .reduce((acc, txn) => {
      acc[txn.merchant_category] = (acc[txn.merchant_category] || 0) + 1
      return acc
    }, {})

  const chartData = Object.entries(topMerchants)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  const maxValue = Math.max(...chartData.map(d => d[1]))

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6">Fraud by Category</h2>

      <div className="space-y-4">
        {chartData.map(([category, count], idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{category}</span>
              <span className="text-sm text-gray-400">{count} transactions</span>
            </div>
            <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000"
                style={{ width: `${(count / maxValue) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {chartData.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No data available
        </div>
      )}
    </div>
  )
}
