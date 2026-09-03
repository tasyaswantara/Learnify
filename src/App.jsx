import Button from './components/common/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/common/Card'
import Input from './components/common/Input'
import Logo from './components/common/Logo'

function App() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] px-6 py-8 text-ink-900">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between">
          <Logo />
          <Button size="sm" variant="outline">
            Setup Ready
          </Button>
        </header>

        <Card className="mt-10 max-w-xl">
          <CardHeader>
            <CardTitle>Design Foundation</CardTitle>
            <CardDescription>
              Reusable UI components are ready for the next implementation phase.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Preview Field" placeholder="Reusable input component" />
            <Button fullWidth>Continue</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default App
