import Button from '../common/Button'
import OptionButton from './OptionButton'

function QuestionCard({
  currentQuestionIndex,
  isFirstQuestion,
  isLastQuestion,
  nextQuestion,
  onSubmitClick,
  previousQuestion,
  question,
  selectedAnswer,
  selectAnswer,
  totalQuestions,
}) {
  return (
    <section className="rounded-lg border border-line bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-brand-700">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>
      <h2 className="mt-3 text-2xl font-semibold leading-snug text-ink-900">
        {question.question}
      </h2>
      {question.code && (
        <pre className="mt-5 overflow-x-auto rounded-lg bg-ink-900 p-4 text-sm leading-6 text-white">
          <code>{question.code}</code>
        </pre>
      )}
      <div className="mt-6 space-y-3">
        {question.options.map((option) => (
          <OptionButton
            isSelected={selectedAnswer === option.id}
            key={option.id}
            onSelect={() => selectAnswer(question.id, option.id)}
            option={option}
          />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <Button
          disabled={isFirstQuestion}
          onClick={previousQuestion}
          variant="outline"
        >
          Previous
        </Button>
        {isLastQuestion ? (
          <Button onClick={onSubmitClick}>Submit Test</Button>
        ) : (
          <Button onClick={nextQuestion}>Next</Button>
        )}
      </div>
    </section>
  )
}

export default QuestionCard
