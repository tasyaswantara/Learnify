import { cn } from '../../utils/cn'

function OptionButton({ isSelected, option, onSelect }) {
  return (
    <button
      className={cn(
        'flex w-full items-start gap-3 rounded-md border px-4 py-3 text-left transition',
        isSelected
          ? 'border-brand-600 bg-brand-50 text-brand-700'
          : 'border-line bg-white text-ink-700 hover:border-brand-600',
      )}
      onClick={onSelect}
      type="button"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-100 text-sm font-bold">
        {option.id}
      </span>
      <span className="pt-1 text-sm font-medium leading-6">{option.text}</span>
    </button>
  )
}

export default OptionButton
