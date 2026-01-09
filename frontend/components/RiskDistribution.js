'use client'

export default function RiskDistribution({ data }) {
  const total = Object.values(data).reduce((sum, count) => sum + count, 0)

  const riskLevels = [
    { level: 'Critical', count: data.Critical || 0, color: 'from-red-600 to-red-500' },
    { level: 'High', count: data.High || 0, color: 'from-orange-600 to-orange-500' },
    { level: 'Medium', count: data.Medium || 0, color: 'from-yellow-600 to-yellow-500' },
    { level: 'Low', count: data.Low || 0, color: 'from-green-600 to-green-500' },
  ]

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6">Risk Distribution</h2>

      <div className="grid grid-cols-2 gap-4">
        {riskLevels.map(({ level, count, color }) => {
          const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0

          return (
            <div key={level} className="text-center p-6 glass-hover rounded-xl">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-2xl font-bold`}>
                {count}
              </div>
              <div className="text-lg font-semibold mb-1">{level}</div>
              <div className="text-sm text-gray-400">{percentage}%</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
