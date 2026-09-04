import { Link, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Logo from './components/common/Logo'
import { QuizProvider } from './context/QuizContext'
import useQuiz from './hooks/useQuiz'

function QuizPlaceholder() {
  const { currentQuestion, totalQuestions } = useQuiz()

  return (
    <main className="min-h-screen bg-[#f7f8fb] px-6 py-8 text-ink-900">
      <div className="mx-auto max-w-5xl">
        <Logo />
        <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Next Phase
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-normal">
            Quiz state is ready for {totalQuestions} questions.
          </h1>
          <p className="mt-3 text-sm leading-6 text-ink-500">
            First question: {currentQuestion.question}
          </p>
          <Link
            className="mt-5 inline-flex text-sm font-semibold text-brand-700"
            to="/"
          >
            Back to biodata
          </Link>
        </section>
      </div>
    </main>
  )
}

function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPlaceholder />} />
      </Routes>
    </QuizProvider>
  )
}

export default App
