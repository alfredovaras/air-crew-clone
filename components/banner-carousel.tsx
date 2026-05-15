"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useBannerLanguage } from "@/contexts/banner-language-context"

interface BannerSlide {
  id: number
}

const bannerSlides: BannerSlide[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

// Default slide content in case context is not available
const defaultSlideContent = {
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
}

export function BannerCarousel() {
  const context = useBannerLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const totalSlides = bannerSlides.length

  // Use default content until context is mounted to avoid hydration mismatch
  const getSlideContent = (slideIndex: number) => {
    // Always use default content on server and until client is mounted
    if (!context?.mounted) {
      return (
        defaultSlideContent[slideIndex as keyof typeof defaultSlideContent] || {
          title: "Slide Title",
          subtitle: "Slide Subtitle",
        }
      )
    }
    return context.getSlideContent(slideIndex)
  }

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Reset auto-play timer when manually changing slides
    setIsAutoPlaying(true)
  }

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play when user interacts with controls
  const handleControlClick = (callback: () => void) => {
    setIsAutoPlaying(false)
    callback()
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Get current slide content
  const currentSlideContent = getSlideContent(bannerSlides[currentSlide].id)

  return (
    <div className="relative w-full h-[400px] md:h-[800px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
            alt={currentSlideContent.title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-1 text-center"
            >
              {currentSlideContent.title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-center max-w-3xl"
            >
              {currentSlideContent.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Updated to remove zoom effect */}
      <button
        onClick={() => handleControlClick(prevSlide)}
        className="absolute left-2 sm:left-6 bottom-8 sm:bottom-1/2 -translate-y-1/2 z-20 bg-[rgb(59,130,246)] text-white p-2 lg:p-4 hover:bg-blue-600 transition-all focus:outline-none rounded-[8px]"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-4 w-4 sm:h-8 sm:w-8" />
      </button>
      <button
        onClick={() => handleControlClick(nextSlide)}
        className="absolute right-2 sm:right-6 bottom-8 sm:bottom-1/2 -translate-y-1/2 z-20 bg-[rgb(59,130,246)] text-white p-2 lg:p-4 hover:bg-blue-600 transition-all focus:outline-none rounded-[8px]"
        aria-label="Next slide"
      >
        <ArrowRight className="h-4 w-4 sm:h-8 sm:w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 transition-all rounded-[100px] ${
              index === currentSlide ? "bg-[rgb(59,130,246)] scale-125 w-10" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
