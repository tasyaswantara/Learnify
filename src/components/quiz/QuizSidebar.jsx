import QuizProgress from './QuizProgress'
import QuestionNavigation from './QuestionNavigation'

function QuizSidebar({
  answeredCount,
  answers,
  currentQuestionIndex,
  goToQuestion,
  progressPercentage,
  questions,
  totalQuestions,
}) {
  return (
    <aside className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <QuizProgress
        answeredCount={answeredCount}
        progressPercentage={progressPercentage}
        totalQuestions={totalQuestions}
      />
      <div className="mt-6">
        <h1 className="mb-3 text-lg font-semibold text-ink-900">Nomor Soal</h1>
        <QuestionNavigation
          answers={answers}
          currentQuestionIndex={currentQuestionIndex}
          goToQuestion={goToQuestion}
          questions={questions}
        />
      </div>
    </aside>
  )
}

export default QuizSidebar
