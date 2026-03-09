const problems = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Binary Tree Paths", difficulty: "Medium" },
  { id: 3, title: "Merge K Sorted Lists", difficulty: "Hard" }
]

export default function Problems() {
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
            {p.title} — {p.difficulty}
          </div>
        ))}
      </div>
    </main>
  )
}
