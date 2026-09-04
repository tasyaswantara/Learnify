import Button from '../common/Button'

function SubmitConfirmation({ onCancel, onConfirm, unansweredCount }) {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-ink-900/50 px-5">
      <section className="w-full max-w-md rounded-lg border border-line bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-ink-900">Submit test?</h2>
        <p className="mt-3 text-sm leading-6 text-ink-500">
          {unansweredCount > 0
            ? `Masih ada ${unansweredCount} soal yang belum dijawab.`
            : 'Semua soal sudah dijawab.'}
          {' '}Setelah submit, jawaban tidak bisa diubah.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <Button onClick={onCancel} variant="outline">
            Review
          </Button>
          <Button onClick={onConfirm}>Submit</Button>
        </div>
      </section>
    </div>
  )
}

export default SubmitConfirmation
