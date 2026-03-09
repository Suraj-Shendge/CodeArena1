import Link from "next/link"
import { problems } from "../../lib/problems"

export default function ProblemsPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Problems</h1>

      <div style={{ marginTop: 20 }}>
        {problems.map((p) => (
          <div
            key={p.id}
            style={{
              padding: "12px 0",
              borderBottom: "1px solid #333"
            }}
          >
            <Link href={`/problem/${p.slug}`}>
              {p.title} — {p.difficulty}
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
