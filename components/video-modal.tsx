"use client"

import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface VideoModalProps {
  videoId: string
  title: string
  className?: string
  iconClassName?: string
  buttonText?: string
}

export function VideoModal({ videoId, title, className = "", iconClassName = "", buttonText = "" }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  return (
    <>
      {buttonText ? (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center mt-2 bg-[rgb(59,130,246)] text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-all duration-300 ease-in-out rounded-[8px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Play className="h-4 w-4 mr-1" />
          {buttonText}
        </motion.button>
      ) : (
        <motion.button
          onClick={() => setIsOpen(true)}
          className={`flex items-center justify-center bg-[rgb(59,130,246)] text-white px-6 py-3 font-medium ${className}`}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        >
          <Play className={`flex-shrink-0 mr-2 ${iconClassName}`} />
          <span>{title}</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
            <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-6xl mx-4">
                <div className="flex justify-between items-center p-4 bg-white border-b">
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none rounded-[8px]"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="w-full aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
