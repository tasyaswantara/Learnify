import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import Logo from './components/common/Logo'
import { QuizProvider } from './context/QuizContext'

function ResultPlaceholder() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] px-6 py-8 text-ink-900">
      <div className="mx-auto max-w-5xl">
        <Logo />
        <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Next Phase
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-normal">
            Result page will be implemented next.
          </h1>
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
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPlaceholder />} />
      </Routes>
    </QuizProvider>
  )
}

export default App
