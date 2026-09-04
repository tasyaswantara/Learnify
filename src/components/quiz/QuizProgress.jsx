import ProgressBar from '../common/ProgressBar'

function QuizProgress({ answeredCount, progressPercentage, totalQuestions }) {
  return (
    <ProgressBar
      current={answeredCount}
      label="Progress"
      total={totalQuestions}
      value={progressPercentage}
    />
  )
}

export default QuizProgress

