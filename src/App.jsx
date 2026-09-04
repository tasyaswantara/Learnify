import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import { QuizProvider } from './context/QuizContext'

function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </QuizProvider>
  )
}

export default App
