import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import questions from '../data/questions.json'

const QuizContext = createContext(null)

const initialQuestionIndex = 0
const QUIZ_PROGRESS_KEY = 'learnify:quiz-progress'

function getSavedProgress() {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const savedProgress = window.localStorage.getItem(QUIZ_PROGRESS_KEY)
    return savedProgress ? JSON.parse(savedProgress) : null
  } catch {
    window.localStorage.removeItem(QUIZ_PROGRESS_KEY)
    return null
  }
}

function QuizProvider({ children }) {
  const savedProgress = getSavedProgress()
  const [answers, setAnswers] = useState(savedProgress?.answers || {})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    savedProgress?.currentQuestionIndex || initialQuestionIndex,
  )
  const [isSubmitted, setIsSubmitted] = useState(
    savedProgress?.isSubmitted || false,
  )

  const totalQuestions = questions.length
  const currentQuestion = questions[currentQuestionIndex]
  const answeredCount = Object.keys(answers).length
  const unansweredCount = totalQuestions - answeredCount
  const progressPercentage = totalQuestions
    ? Math.round((answeredCount / totalQuestions) * 100)
    : 0

  const goToQuestion = useCallback(
    (questionIndex) => {
      if (questionIndex < 0 || questionIndex >= totalQuestions) {
        return
      }

      setCurrentQuestionIndex(questionIndex)
    },
    [totalQuestions],
  )

  const nextQuestion = useCallback(() => {
    setCurrentQuestionIndex((index) => Math.min(index + 1, totalQuestions - 1))
  }, [totalQuestions])

  const previousQuestion = useCallback(() => {
    setCurrentQuestionIndex((index) => Math.max(index - 1, 0))
  }, [])

  const resetQuiz = useCallback(() => {
    setAnswers({})
    setCurrentQuestionIndex(initialQuestionIndex)
    setIsSubmitted(false)
    window.localStorage.removeItem(QUIZ_PROGRESS_KEY)
  }, [])

  const selectAnswer = useCallback((questionId, optionId) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: optionId,
    }))
  }, [])

  const submitQuiz = useCallback(() => {
    setIsSubmitted(true)
  }, [])

  useEffect(() => {
    window.localStorage.setItem(
      QUIZ_PROGRESS_KEY,
      JSON.stringify({
        answers,
        currentQuestionIndex,
        isSubmitted,
      }),
    )
  }, [answers, currentQuestionIndex, isSubmitted])

  const value = useMemo(
    () => ({
      answeredCount,
      answers,
      currentQuestion,
      currentQuestionIndex,
      goToQuestion,
      isFirstQuestion: currentQuestionIndex === 0,
      isLastQuestion: currentQuestionIndex === totalQuestions - 1,
      isSubmitted,
      nextQuestion,
      previousQuestion,
      progressPercentage,
      questions,
      resetQuiz,
      selectAnswer,
      submitQuiz,
      totalQuestions,
      unansweredCount,
    }),
    [
      answeredCount,
      answers,
      currentQuestion,
      currentQuestionIndex,
      goToQuestion,
      isSubmitted,
      nextQuestion,
      previousQuestion,
      progressPercentage,
      resetQuiz,
      selectAnswer,
      submitQuiz,
      totalQuestions,
      unansweredCount,
    ],
  )

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export { QuizContext, QuizProvider }
