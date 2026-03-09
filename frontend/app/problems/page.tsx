import Link from "next/link"
import { problems } from "../../lib/problems"

export default function ProblemsPage() {
  return (
    <main style={{ padding: 40 }}>

      <h1 style={{ marginBottom: 20 }}>Problems</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #333", textAlign: "left" }}>
            <th style={{ padding: "10px 0" }}>#</th>
            <th>Title</th>
            <th>Difficulty</th>
          </tr>
        </thead>

        <tbody>
          {problems.map((p, i) => (
            <tr key={p.id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: "10px 0" }}>{i + 1}</td>

              <td>
                <Link href={`/problem/${p.slug}`}>
                  {p.title}
                </Link>
              </td>

              <td>{p.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  )
}
