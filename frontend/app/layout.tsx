import Navbar from "../components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body style={{ background: "#0B0F19", color: "white", margin: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
