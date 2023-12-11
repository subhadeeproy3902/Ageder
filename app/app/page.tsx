import Made from './components/Made'
import Input from './components/Input'

export default function Home() {

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-200 to-white">
        <h2 className="text-3xl font-bold mb-8">Age Calculator</h2>
        <p className="mb-6 text-xl">Enter your DOB</p>
        <Input />
      </main>
      <Made />
    </>
  )
}
