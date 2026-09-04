import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/common/Logo'
import QuestionCard from '../components/quiz/QuestionCard'
import QuizSidebar from '../components/quiz/QuizSidebar'
import SubmitConfirmation from '../components/quiz/SubmitConfirmation'
import useQuiz from '../hooks/useQuiz'

function QuizPage() {
  const quiz = useQuiz()
  const navigate = useNavigate()
  const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false)
  const selectedAnswer = quiz.answers[quiz.currentQuestion.id]

  function handleConfirmSubmit() {
    quiz.submitQuiz()
    navigate('/result')
  }

  return (
    <main className="min-h-screen bg-[#f7f8fb] px-5 py-6 text-ink-900 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4">
          <Logo />
          <Link className="text-sm font-semibold text-brand-700" to="/">
            Edit Biodata
          </Link>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <QuizSidebar
            answeredCount={quiz.answeredCount}
            answers={quiz.answers}
            currentQuestionIndex={quiz.currentQuestionIndex}
            goToQuestion={quiz.goToQuestion}
            progressPercentage={quiz.progressPercentage}
            questions={quiz.questions}
            totalQuestions={quiz.totalQuestions}
          />
          <QuestionCard
            currentQuestionIndex={quiz.currentQuestionIndex}
            isFirstQuestion={quiz.isFirstQuestion}
            isLastQuestion={quiz.isLastQuestion}
            nextQuestion={quiz.nextQuestion}
            onSubmitClick={() => setShowSubmitConfirmation(true)}
            previousQuestion={quiz.previousQuestion}
            question={quiz.currentQuestion}
            selectAnswer={quiz.selectAnswer}
            selectedAnswer={selectedAnswer}
            totalQuestions={quiz.totalQuestions}
          />
        </section>
      </div>
      {showSubmitConfirmation && (
        <SubmitConfirmation
          onCancel={() => setShowSubmitConfirmation(false)}
          onConfirm={handleConfirmSubmit}
          unansweredCount={quiz.unansweredCount}
        />
      )}
    </main>
  )
}

export default QuizPage
