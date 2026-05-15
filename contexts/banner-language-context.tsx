"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type LanguageCode = "en" | "de" | "es" | "pt"

type BannerTranslations = {
  [key in LanguageCode]: {
    slides: {
      [key: number]: {
        title: string
        subtitle: string
      }
    }
  }
}

const translations: BannerTranslations = {
  en: {
    slides: {
      1: {
        title: "Advanced Flight Simulation",
        subtitle: "State-of-the-art training solutions for pilots",
      },
      2: {
        title: "Spatial Disorientation Training",
        subtitle: "Enhancing safety through specialized training",
      },
      3: {
        title: "Military Aviation Excellence",
        subtitle: "Preparing the next generation of military pilots",
      },
      4: {
        title: "Research & Development",
        subtitle: "Pushing the boundaries of simulation technology",
      },
    },
  },
  de: {
    slides: {
      1: {
        title: "Fortschrittliche Flugsimulation",
        subtitle: "Hochmoderne Trainingslösungen für Piloten",
      },
      2: {
        title: "Training zur räumlichen Desorientierung",
        subtitle: "Verbesserung der Sicherheit durch spezialisiertes Training",
      },
      3: {
        title: "Exzellenz in der Militärluftfahrt",
        subtitle: "Vorbereitung der nächsten Generation von Militärpiloten",
      },
      4: {
        title: "Forschung & Entwicklung",
        subtitle: "Die Grenzen der Simulationstechnologie erweitern",
      },
    },
  },
  es: {
    slides: {
      1: {
        title: "Simulación de Vuelo Avanzada",
        subtitle: "Soluciones de entrenamiento de vanguardia para pilotos",
      },
      2: {
        title: "Entrenamiento de Desorientación Espacial",
        subtitle: "Mejorando la seguridad a través de entrenamiento especializado",
      },
      3: {
        title: "Excelencia en Aviación Militar",
        subtitle: "Preparando la próxima generación de pilotos militares",
      },
      4: {
        title: "Investigación y Desarrollo",
        subtitle: "Ampliando los límites de la tecnología de simulación",
      },
    },
  },
  pt: {
    slides: {
      1: {
        title: "Simulação Avançada de Voo",
        subtitle: "Soluções de treinamento de última geração para pilotos",
      },
      2: {
        title: "Treinamento de Desorientação Espacial",
        subtitle: "Aumentando a segurança através de treinamento especializado",
      },
      3: {
        title: "Excelência em Aviação Militar",
        subtitle: "Preparando a próxima geração de pilotos militares",
      },
      4: {
        title: "Pesquisa e Desenvolvimento",
        subtitle: "Expandindo os limites da tecnologia de simulação",
      },
    },
  },
}

type BannerLanguageContextType = {
  currentLanguage: LanguageCode
  setLanguage: (language: LanguageCode) => void
  getSlideContent: (slideIndex: number) => { title: string; subtitle: string }
}

const BannerLanguageContext = createContext<BannerLanguageContextType | undefined>(undefined)

export function BannerLanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("en")

  // Carregar idioma salvo do localStorage ao iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("bannerLanguage") as LanguageCode
    if (savedLanguage && ["en", "de", "es", "pt"].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  // Escutar eventos de mudança de idioma
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      const newLanguage = event.detail as LanguageCode
      if (["en", "de", "es", "pt"].includes(newLanguage)) {
        setCurrentLanguage(newLanguage)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  const setLanguage = (language: LanguageCode) => {
    setCurrentLanguage(language)
    localStorage.setItem("bannerLanguage", language)
  }

  const getSlideContent = (slideIndex: number) => {
    return (
      translations[currentLanguage].slides[slideIndex] || {
        title: "Slide Title",
        subtitle: "Slide Subtitle",
      }
    )
  }

  return (
    <BannerLanguageContext.Provider value={{ currentLanguage, setLanguage, getSlideContent }}>
      {children}
    </BannerLanguageContext.Provider>
  )
}

export function useBannerLanguage() {
  const context = useContext(BannerLanguageContext)
  if (context === undefined) {
    throw new Error("useBannerLanguage must be used within a BannerLanguageProvider")
  }
  return context
}
