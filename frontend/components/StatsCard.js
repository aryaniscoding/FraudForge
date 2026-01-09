export default function StatsCard({ label, value, sublabel, trend, trendUp, alert }) {
  return (
    <div className={`card hover-scale ${alert ? 'border-red-500/20' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          {label}
        </span>
        {trend && (
          <span className={`text-xs font-semibold ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
            {trend}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      {sublabel && <div className="text-sm text-gray-500">{sublabel}</div>}
    </div>
  )
}
