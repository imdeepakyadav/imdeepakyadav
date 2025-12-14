import Navigation from "@/components/navigation"
import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import type React from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" })

export const metadata: Metadata = {
  title: "ImDeepakYadav - Full Stack Developer Portfolio",
  description: "Portfolio of ImDeepakYadav - Full Stack Developer specializing in modern web technologies",
  generator: "v0.dev",
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className={spaceGrotesk.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
