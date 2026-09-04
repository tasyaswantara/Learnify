function Badge({ children, variant = 'default', size = 'md', className = '' }) {
  const baseStyles = 'inline-flex items-center rounded-full font-semibold transition-all'
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  const variants = {
    default: 'bg-surface-200 text-ink-700',
    brand: 'bg-brand-100 text-brand-700',
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
  }

  return (
    <span
      className={`${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge

