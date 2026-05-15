"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollAnimation } from "./scroll-animations"

// Todas as imagens agora usam a mesma URL
const defaultGalleryImages = Array(15).fill({
  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
  alt: "Aircraft training image",
})

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate how many images to show per row based on screen width
  const [imagesPerRow, setImagesPerRow] = useState(5)
  const [maxIndex, setMaxIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImagesPerRow(2)
      } else if (window.innerWidth < 1024) {
        setImagesPerRow(3)
      } else {
        setImagesPerRow(5)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Calculate max index based on number of images and images per row
    setMaxIndex(Math.max(0, Math.ceil(defaultGalleryImages.length / imagesPerRow) - 2))
  }, [imagesPerRow])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const openImage = (src: string) => {
    setSelectedImage(src)
    setIsFullScreen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeImage = () => {
    setSelectedImage(null)
    setIsFullScreen(false)
    document.body.style.overflow = "" // Restore scrolling
  }

  // Close on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  // Dividir as imagens em duas linhas
  const firstRow = defaultGalleryImages.slice(0, Math.ceil(defaultGalleryImages.length / 2))
  const secondRow = defaultGalleryImages.slice(Math.ceil(defaultGalleryImages.length / 2))

  return (
    <section className="py-16 bg-gray-100 text-navy-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <ScrollAnimation type="fadeInUp">
          <h2 className="text-4xl font-bold text-center mb-12">Aircraft Gallery</h2>
        </ScrollAnimation>

        <style jsx global>{`
          .gallery-item {
            position: relative;
            min-width: 250px;
            width: calc(100%/5 - 16px);
            height: 200px;
            flex-shrink: 0;
            cursor: pointer;
            overflow: hidden;
          }
          
          .gallery-item img {
            transition: transform 500ms ease-in-out !important;
          }
          
          .gallery-item:hover img {
            transform: scale(1.1) !important;
          }
          
          .gallery-item .overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 500ms ease-in-out !important;
          }
          
          .gallery-item:hover .overlay {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }
          
          .gallery-item .plus-icon {
            transform: scale(1);
            transition: transform 500ms ease-in-out !important;
          }
          
          .gallery-item:hover .plus-icon {
            transform: scale(1.2) !important;
          }
        `}</style>

        {/* Primeira linha */}
        <ScrollAnimation type="fadeInLeft" delay={0.2}>
          <div className="relative mb-4 overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${currentIndex * (100 / imagesPerRow)}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {firstRow.map((image, index) => (
                <div key={`row1-${index}`} className="gallery-item rounded-[8px]" onClick={() => openImage(image.src)}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="overlay">
                    <Plus className="h-10 w-10 text-white drop-shadow-lg plus-icon" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Segunda linha */}
        <ScrollAnimation type="fadeInRight" delay={0.4}>
          <div className="relative overflow-hidden rounded-lg">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${currentIndex * (100 / imagesPerRow)}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {secondRow.map((image, index) => (
                <div key={`row2-${index}`} className="gallery-item rounded-[8px]" onClick={() => openImage(image.src)}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="overlay">
                    <Plus className="h-10 w-10 text-white drop-shadow-lg plus-icon" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Botões de navegação */}
        <ScrollAnimation type="fadeInUp" delay={0.6}>
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`rounded-[8px] p-3 bg-[rgb(59,130,246)] text-white ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
              } transition-all duration-300 ease-in-out hover:shadow-lg`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`rounded-[8px] p-3 bg-[rgb(59,130,246)] text-white ${
                currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
              } transition-all duration-300 ease-in-out hover:shadow-lg`}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </ScrollAnimation>
      </div>

      {/* Modal de imagem ampliada em tela cheia */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                alt="Enlarged gallery image"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                className="absolute top-4 right-4 p-2 bg-white text-navy-900 hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-[8px]"
                onClick={(e) => {
                  e.stopPropagation()
                  closeImage()
                }}
                aria-label="Close image"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
