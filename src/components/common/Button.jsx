import { cn } from '../../utils/cn'

const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-600',
  secondary:
    'bg-surface-100 text-ink-900 hover:bg-surface-200 focus-visible:ring-ink-500',
  outline:
    'border border-line bg-white text-ink-700 hover:border-brand-600 hover:text-brand-700 focus-visible:ring-brand-600',
  ghost:
    'bg-transparent text-ink-700 hover:bg-surface-100 hover:text-ink-900 focus-visible:ring-ink-500',
}

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

function Button({
  as: Component = 'button',
  children,
  className,
  disabled = false,
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const isDisabled = disabled || isLoading

  return (
    <Component
      className={cn(
        'inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-semibold tracking-normal transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      disabled={isDisabled}
      type={Component === 'button' ? type : undefined}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </Component>
  )
}

export default Button
