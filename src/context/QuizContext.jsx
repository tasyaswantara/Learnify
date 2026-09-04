import { createContext, useCallback, useMemo, useState } from 'react'
import questions from '../data/questions.json'

const QuizContext = createContext(null)

const initialQuestionIndex = 0

function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(initialQuestionIndex)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalQuestions = questions.length
  const currentQuestion = questions[currentQuestionIndex]
  const answeredCount = Object.keys(answers).length
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
    ],
  )

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export { QuizContext, QuizProvider }
