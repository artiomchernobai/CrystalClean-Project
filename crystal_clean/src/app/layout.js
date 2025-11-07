import './globals.css'

export default function GlobalLayout({ children }) {
  return (
    <html lang="en" title="CrystalClean">
      <body>{children}</body>
    </html>
  )
}