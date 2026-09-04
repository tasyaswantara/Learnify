function Badge({ children, variant = 'default', className = '' }) {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold'
  
  const variants = {
    default: 'bg-surface-200 text-ink-700',
    brand: 'bg-brand-100 text-brand-700',
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
  }

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
