function ProgressBar({ value = 0, max = 100, label, current, total, className = '' }) {
  const percentage = Math.min(100, Math.max(0, max > 0 ? (value / max) * 100 : value))

  return (
    <div className={className}>
      {(label || (current !== undefined && total !== undefined)) && (
        <div className="flex items-center justify-between text-sm font-semibold mb-2">
          {label && <span className="text-ink-700">{label}</span>}
          {current !== undefined && total !== undefined && (
            <span className="text-brand-700">
              {current}/{total}
            </span>
          )}
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-surface-200">
        <div
          className="h-full rounded-full bg-brand-600 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
