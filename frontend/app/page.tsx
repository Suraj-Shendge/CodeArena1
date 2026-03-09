import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-6xl font-bold mb-6">
        CodeArena
      </h1>

      <p className="text-gray-400 mb-8 text-lg">
        Practice algorithms. Compete with coders.
      </p>

      <Link
        href="/problems"
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
      >
        Start Solving
      </Link>

    </main>
  )
}
