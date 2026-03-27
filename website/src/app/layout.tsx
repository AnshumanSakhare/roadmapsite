import type { Metadata } from "next"
import { Hanken_Grotesk } from "next/font/google"
import "./globals.css"

const hanken = Hanken_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GenAI Roadmap - Master Generative AI at Your Own Pace",
  description: "A comprehensive step-by-step learning roadmap for mastering Generative AI. From fundamentals to production systems and specialization.",
  keywords: ["GenAI", "LLM", "AI Learning", "Roadmap", "Curriculum"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${hanken.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
