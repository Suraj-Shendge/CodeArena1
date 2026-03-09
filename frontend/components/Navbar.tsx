import Link from "next/link"

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "16px 40px",
        borderBottom: "1px solid #222",
        background: "#0B0F19"
      }}
    >
      <Link href="/">CodeArena</Link>

      <Link href="/problems">Problems</Link>

      <Link href="/leaderboard">Leaderboard</Link>
    </nav>
  )
}
