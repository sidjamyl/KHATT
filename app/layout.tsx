import type React from "react"
import type { Metadata } from "next"
import { Anton, Gloock } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _anton = Anton({ subsets: ["latin"], weight: ["400"] })
const _gloock = Gloock({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "KHATT - Production Agency",
  description: "KHATT: A North African production agency. Every idea begins with a sketch.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_gloock.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
