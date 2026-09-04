export function calculateScore(questions, answers) {
  const categoryMap = new Map()
  let correct = 0

  questions.forEach((question) => {
    const category = categoryMap.get(question.category) || {
      correct: 0,
      total: 0,
    }
    const isCorrect = answers[question.id] === question.correctAnswer

    category.total += 1
    if (isCorrect) {
      correct += 1
      category.correct += 1
    }

    categoryMap.set(question.category, category)
  })

  const total = questions.length
  const percentage = total ? Math.round((correct / total) * 100) : 0
  const performance = Array.from(categoryMap, ([category, value]) => ({
    category,
    correct: value.correct,
    percentage: Math.round((value.correct / value.total) * 100),
    total: value.total,
  }))

  return {
    correct,
    incorrect: total - correct,
    percentage,
    performance,
    total,
  }
}
