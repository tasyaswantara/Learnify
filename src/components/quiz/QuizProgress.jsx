function QuizProgress({ answeredCount, progressPercentage, totalQuestions }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-ink-700">Progress</span>
        <span className="text-brand-700">
          {answeredCount}/{totalQuestions}
        </span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-200">
        <div
          className="h-full rounded-full bg-brand-600 transition-all"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  )
}

export default QuizProgress
