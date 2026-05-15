"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

// Alterando para exportação nomeada em vez de exportação padrão
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Calcular o progresso da rolagem e a visibilidade do botão
  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const docHeight = document.documentElement.scrollHeight
    const totalScrollable = docHeight - windowHeight

    const progress = Math.min(scrollTop / totalScrollable, 1)
    setScrollProgress(progress)

    if (scrollTop > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed right-6 bottom-6 z-30 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative">
        {/* Círculo de progresso */}
        <svg className="w-14 h-14" viewBox="0 0 50 50">
          {/* Círculo de fundo */}
          <rect
            x="5"
            y="5"
            width="40"
            height="40"
            fill="transparent"
            stroke="#e2e8f0"
            strokeWidth="3"
            className="dark:stroke-gray-700"
          />
          {/* Círculo de progresso */}
          <rect
            x="5"
            y="5"
            width="40"
            height="40"
            fill="transparent"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray={`${4 * 40}`}
            strokeDashoffset={`${4 * 40 * (1 - scrollProgress)}`}
            className="dark:stroke-blue-500"
          />
        </svg>

        {/* Botão */}
        <button
          onClick={scrollToTop}
          className="m-[7px] absolute inset-0 flex items-center justify-center bg-[rgb(59,130,246)] text-white focus:outline-none"
          aria-label="Back to top"
        >
          <ChevronUp className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}

// Adicionando também uma exportação padrão para compatibilidade
export default BackToTop
