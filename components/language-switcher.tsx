"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Globe } from "lucide-react"

type Language = {
  code: string
  name: string
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "de",
    name: "Deutsch",
  },
  {
    code: "es",
    name: "Español",
  },
  {
    code: "pt",
    name: "Português",
  },
]

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Carregar idioma salvo do localStorage ao iniciar
  useEffect(() => {
    const savedLanguageCode = localStorage.getItem("bannerLanguage")
    if (savedLanguageCode) {
      const savedLanguage = languages.find((lang) => lang.code === savedLanguageCode)
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage)
      }
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (language: Language) => {
    setCurrentLanguage(language)
    localStorage.setItem("bannerLanguage", language.code)
    setIsOpen(false)

    // Disparar um evento personalizado para notificar a mudança de idioma
    window.dispatchEvent(new CustomEvent("languageChange", { detail: language.code }))
  }

  // Fechar dropdown quando clica fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-white hover:text-blue-500 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm sm:inline">{currentLanguage.name}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-sm z-50">
          <ul>
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => selectLanguage(language)}
                  className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                    currentLanguage.code === language.code
                      ? "bg-blue-100 text-navy-900"
                      : "text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  {language.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
