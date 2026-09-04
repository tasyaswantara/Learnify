import { cn } from '../../utils/cn'

function FormField({ children, className, htmlFor, icon, label, required = false }) {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center gap-2">
        {icon && <img alt="" className="h-4 w-4 object-contain" src={icon} />}
        <label className="text-sm font-semibold text-ink-900" htmlFor={htmlFor}>
          {label}
          {required && <span className="text-danger-600"> *</span>}
        </label>
      </div>
      {children}
    </div>
  )
}

export default FormField
