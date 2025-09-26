import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/hooks/use-theme"
import { StarField } from "@/components/star-field"
import "./globals.css"

export const metadata: Metadata = {
  title: "James Adedini - TumTech | Software Engineer",
  description:
    "Professional Software Engineer specializing in Java, Spring Boot, and full-stack development. Available for hire and consulting services.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="tumtech-ui-theme">
          <StarField />
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
