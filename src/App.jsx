import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import { QuizProvider } from './context/QuizContext'

function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </QuizProvider>
  )
}

export default App
