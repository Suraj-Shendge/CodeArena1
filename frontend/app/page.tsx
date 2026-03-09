import { problems } from "../lib/problems"
export default function Home() {
  return (
    <main style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>CodeArena</h1>
      <p>Welcome to CodeArena — practice algorithms and compete.</p>
      <a href="/problems">Go to Problems</a>
    </main>
  )
}
