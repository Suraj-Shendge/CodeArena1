import { problems } from "@/lib/problems"

export default function ProblemPage({ params }: any) {

  const problem = problems.find(p => p.slug === params.slug)

  if (!problem) {
    return <div>Problem not found</div>
  }

  return (
    <main style={{ padding: 40 }}>

      <h1>{problem.title}</h1>

      <p style={{ color: "#aaa", marginTop: 10 }}>
        Difficulty: {problem.difficulty}
      </p>

      <div style={{ marginTop: 20 }}>
        {problem.description}
      </div>

    </main>
  )
}
