import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import Header from '../components/common/Header'
import recommendations from '../data/recommendations'
import useLocalStorage from '../hooks/useLocalStorage'
import useQuiz from '../hooks/useQuiz'
import { calculateScore } from '../utils/calculateScore'
import { generateWhatsAppMessage } from '../utils/generateWhatsAppMessage'
import { getLevel } from '../utils/getLevel'
import { USER_STORAGE_KEY } from '../utils/validation'
import advancedBadge from '../assets/images/badge/advanced-sm.png'
import beginnerBadge from '../assets/images/badge/beginner-sm.png'
import intermediateBadge from '../assets/images/badge/intermediate-sm.png'
import mascotImage from '../assets/images/mascot/mascot-congratulations-sm.png'

const badges = {
  Advanced: advancedBadge,
  Beginner: beginnerBadge,
  Intermediate: intermediateBadge,
}

function ResultPage() {
  const { answers, isSubmitted, questions, resetQuiz } = useQuiz()
  const userStorage = useLocalStorage(USER_STORAGE_KEY)
  const user = userStorage.getItem()
  const score = calculateScore(questions, answers)
  const level = getLevel(score.percentage)
  const recommendation = recommendations[level.label]
  const whatsappUrl = generateWhatsAppMessage({
    level,
    recommendation,
    score,
    user,
  })

  if (!user || !isSubmitted || Object.keys(answers).length === 0) {
    return (
      <main className="min-h-screen bg-[#f7f8fb] px-5 py-6 text-ink-900 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Header />
          <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-semibold">Hasil belum tersedia</h1>
            <p className="mt-3 text-sm leading-6 text-ink-500">
              Lengkapi biodata dan submit quiz terlebih dahulu.
            </p>
            <Button as={Link} className="mt-5" to="/">
              Mulai dari biodata
            </Button>
          </section>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f7f8fb] px-5 py-6 text-ink-900 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Header
          rightContent={
            <Link className="text-sm font-semibold text-brand-700 hover:underline" to="/">
              Home
            </Link>
          }
        />

        <section className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
          <section className="rounded-lg border border-line bg-white p-6 text-center shadow-sm">
            <img
              alt="Test complete"
              className="mx-auto h-40 w-full object-contain"
              src={mascotImage}
            />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Test Complete
            </p>
            <div className="mx-auto mt-5 flex aspect-square w-40 items-center justify-center rounded-full border-8 border-brand-100 text-5xl font-semibold text-brand-700">
              {score.percentage}%
            </div>
            <h1 className="mt-5 text-2xl font-semibold">{level.label}</h1>
            <p className="mt-2 text-sm leading-6 text-ink-500">{level.summary}</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-sm">
              <div className="rounded-md bg-surface-100 p-3">
                <strong>{score.correct}</strong>
                <span className="block text-ink-500">Benar</span>
              </div>
              <div className="rounded-md bg-surface-100 p-3">
                <strong>{score.incorrect}</strong>
                <span className="block text-ink-500">Salah</span>
              </div>
              <div className="rounded-md bg-surface-100 p-3">
                <strong>{score.total}</strong>
                <span className="block text-ink-500">Soal</span>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  alt=""
                  className="h-16 w-16 object-contain"
                  src={badges[level.label]}
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Recommendation
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    {recommendation.program}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-ink-500">
                    {recommendation.description}
                  </p>
                </div>
              </div>
              <Button as="a" className="mt-6" fullWidth href={whatsappUrl}>
                Konsultasi via WhatsApp
              </Button>
            </div>

            <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Performance Detail</h2>
              <div className="mt-5 space-y-4">
                {score.performance.map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between text-sm font-semibold">
                      <span>{item.category}</span>
                      <span className="text-brand-700">
                        {item.correct}/{item.total}
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-surface-200">
                      <div
                        className="h-2 rounded-full bg-brand-600"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={resetQuiz} variant="outline">
              Reset Quiz Progress
            </Button>
          </section>
        </section>
      </div>
    </main>
  )
}

export default ResultPage
