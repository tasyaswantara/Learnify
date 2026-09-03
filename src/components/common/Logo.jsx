import { cn } from '../../utils/cn'

function Logo({ className, markOnly = false }) {
  return (
    <div className={cn('inline-flex items-center gap-2 text-ink-900', className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-600 text-sm font-bold text-white">
        L
      </span>
      {!markOnly && (
        <span className="text-xl font-semibold tracking-normal">Learnify</span>
      )}
    </div>
  )
}

export default Logo
