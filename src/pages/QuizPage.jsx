import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/common/Logo'
import Button from '../components/common/Button'
import QuestionCard from '../components/quiz/QuestionCard'
import QuizSidebar from '../components/quiz/QuizSidebar'
import SubmitConfirmation from '../components/quiz/SubmitConfirmation'
import useLocalStorage from '../hooks/useLocalStorage'
import useQuiz from '../hooks/useQuiz'
import { USER_STORAGE_KEY } from '../utils/validation'

function QuizPage() {
  const quiz = useQuiz()
  const navigate = useNavigate()
  const userStorage = useLocalStorage(USER_STORAGE_KEY)
  const user = userStorage.getItem()
  const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false)
  const selectedAnswer = quiz.answers[quiz.currentQuestion.id]

  function handleConfirmSubmit() {
    quiz.submitQuiz()
    navigate('/result')
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#f7f8fb] px-5 py-6 text-ink-900 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Logo />
          <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-semibold">Biodata belum lengkap</h1>
            <p className="mt-3 text-sm leading-6 text-ink-500">
              Isi biodata terlebih dahulu sebelum mengerjakan quiz.
            </p>
            <Link className="mt-5 inline-flex" to="/">
              <Button>Isi biodata</Button>
            </Link>
          </section>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f7f8fb] px-5 py-6 text-ink-900 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4">
          <Logo />
          <p className="text-right text-sm font-semibold text-ink-500">
            {user.name}
          </p>
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
