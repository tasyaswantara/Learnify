import Button from '../common/Button'
import Input from '../common/Input'
import { Card, CardContent, CardHeader, CardTitle } from '../common/Card'
import FormField from './FormField'

const programs = [
  'Frontend Development',
  'UI/UX Design',
  'Fullstack JavaScript',
  'Data Analytics',
]

function BiodataForm() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
          Biodata
        </p>
        <CardTitle>Mulai placement test</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <FormField
            htmlFor="fullName"
            label="Nama lengkap"
            required
          >
            <Input
              aria-label="Nama lengkap"
              id="fullName"
              placeholder="Masukkan nama lengkap"
            />
          </FormField>

          <FormField htmlFor="email" label="Email" required>
            <Input
              aria-label="Email"
              id="email"
              placeholder="nama@email.com"
              type="email"
            />
          </FormField>

          <FormField htmlFor="whatsapp" label="WhatsApp" required>
            <Input
              aria-label="WhatsApp"
              id="whatsapp"
              inputMode="tel"
              placeholder="08123456789"
            />
          </FormField>

          <FormField
            htmlFor="targetProgram"
            label="Domisili / Target Program"
            required
          >
            <select
              aria-label="Domisili atau target program"
              className="h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-ink-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
              defaultValue=""
              id="targetProgram"
            >
              <option disabled value="">
                Pilih target program
              </option>
              {programs.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </FormField>

          <Button className="mt-2" fullWidth type="submit">
            Mulai Tes
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default BiodataForm
