import { cn } from '../../utils/cn'

function Card({ children, className, ...props }) {
  return (
    <section
      className={cn(
        'rounded-lg border border-line bg-white shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}

function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('space-y-1.5 p-5 pb-0', className)} {...props}>
      {children}
    </div>
  )
}

function CardTitle({ children, className, ...props }) {
  return (
    <h2
      className={cn(
        'text-lg font-semibold tracking-normal text-ink-900',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn('text-sm leading-6 text-ink-500', className)} {...props}>
      {children}
    </p>
  )
}

function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('p-5', className)} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 border-t border-line p-5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
