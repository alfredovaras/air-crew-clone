import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { NavBar } from "@/components/navbar"
import BackToTop from "@/components/back-to-top"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import { BannerLanguageProvider } from "@/contexts/banner-language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AMST - Aerospace Medicine & Training Simulation",
  description: "AMST is a leading provider of aerospace medicine and training simulation products and services.",
  icons: {
    icon: "/favicon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BannerLanguageProvider>
          <LoadingScreen />
          <NavBar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </BannerLanguageProvider>
      </body>
    </html>
  )
}
