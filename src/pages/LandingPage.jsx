import BiodataForm from '../components/biodata/BiodataForm'
import Logo from '../components/common/Logo'
import mascotImage from '../assets/images/mascot/mascot-laptop-background-sm.png'

const highlights = ['15 Soal', 'Level Belajar', 'Rekomendasi']

function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fb] text-ink-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between">
          <Logo />
        </header>

        <section
          className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.05fr_420px] lg:py-10"
          id="placement"
        >
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Learnify Placement Test
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-ink-900 sm:text-5xl">
              Temukan level belajar frontend yang paling pas.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink-500">
              Isi biodata singkat, lanjutkan ke placement test, lalu dapatkan
              rekomendasi program belajar berdasarkan hasil evaluasi.
            </p>

            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 shadow-sm"
                  key={item}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-success-600" />
                  <span className="text-sm font-semibold text-ink-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-9 max-w-xl overflow-hidden rounded-lg border border-line bg-white px-5 pt-5 shadow-sm">
              <img
                alt="Learnify student using laptop"
                className="relative mx-auto h-56 w-full max-w-sm object-contain sm:h-64"
                src={mascotImage}
              />
            </div>
          </div>

          <section className="w-full lg:justify-self-end" id="biodata">
            <BiodataForm />
          </section>
        </section>
      </div>
    </main>
  )
}

export default LandingPage
