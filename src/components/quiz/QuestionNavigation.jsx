import { cn } from '../../utils/cn'

function QuestionNavigation({ answers, currentQuestionIndex, goToQuestion, questions }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {questions.map((question, index) => {
        const isCurrent = index === currentQuestionIndex
        const isAnswered = Boolean(answers[question.id])

        return (
          <button
            className={cn(
              'aspect-square rounded-md border text-sm font-semibold transition',
              isCurrent && 'border-brand-600 bg-brand-600 text-white',
              !isCurrent &&
                isAnswered &&
                'border-success-600 bg-success-600 text-white',
              !isCurrent && !isAnswered && 'border-line bg-white text-ink-500',
            )}
            key={question.id}
            onClick={() => goToQuestion(index)}
            type="button"
          >
            {index + 1}
          </button>
        )
      })}
    </div>
  )
}

export default QuestionNavigation
