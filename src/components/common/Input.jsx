import { useId } from 'react'
import { cn } from '../../utils/cn'

function Input({
  className,
  error,
  hint,
  id,
  label,
  required = false,
  type = 'text',
  ...props
}) {
  const generatedId = useId()
  const inputId = id || generatedId
  const descriptionId = `${inputId}-description`
  const hasDescription = Boolean(error || hint)

  return (
    <div className="space-y-2">
      {label && (
        <label
          className="block text-sm font-semibold tracking-normal text-ink-900"
          htmlFor={inputId}
        >
          {label}
          {required && <span className="text-danger-600"> *</span>}
        </label>
      )}
      <input
        aria-describedby={hasDescription ? descriptionId : undefined}
        aria-invalid={Boolean(error)}
        className={cn(
          'h-11 w-full rounded-md border bg-white px-3 text-sm text-ink-900 outline-none transition',
          'placeholder:text-ink-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100',
          error ? 'border-danger-600' : 'border-line',
          className,
        )}
        id={inputId}
        required={required}
        type={type}
        {...props}
      />
      {hasDescription && (
        <p
          className={cn(
            'text-sm leading-5',
            error ? 'text-danger-600' : 'text-ink-500',
          )}
          id={descriptionId}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
}

export default Input
