export function generateWhatsAppMessage({ level, recommendation, score, user }) {
  const name = user?.name || 'Peserta'
  const targetProgram = user?.targetProgram || recommendation.program
  const message = [
    `Halo, saya ${name}.`,
    '',
    `Saya baru menyelesaikan Placement Test Learnify dengan skor ${score.percentage}% dan level ${level.label}.`,
    `Saya tertarik dengan program ${targetProgram}.`,
    '',
    'Boleh saya konsultasi untuk langkah belajar selanjutnya?',
  ].join('\n')

  return `https://wa.me/?text=${encodeURIComponent(message)}`
}
