import DarkVeil from "@/components/dark-veil"
import Navigation from "@/components/navigation"
import SplashCursor from "@/components/splash-cursor"
import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import type React from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" })

export const metadata: Metadata = {
  title: "Deepak Yadav - Full Stack Developer",
  description: "Portfolio of Deepak Yadav - Full Stack Developer specializing in modern web technologies",
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
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
          <DarkVeil />
        </div>
        <SplashCursor />
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}

