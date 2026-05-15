"use client"

import { useState, useEffect } from "react"
import { MapPin, X } from "lucide-react"

interface MapModalProps {
  address: string
  label: string
  className?: string
  iconClassName?: string
  buttonText?: string
}

export function MapModal({ address, label, className = "", iconClassName = "", buttonText = "" }: MapModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const encodedAddress = encodeURIComponent(address)
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`

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
        <button
          onClick={() => setIsOpen(true)}
          className={`flex sm:flex-row items-center sm:items-center bg-blue-600 hover:bg-blue-700 rounded-[8px] ${className}`}
        >
          <MapPin size={16} className={`min-h-[16px] min-w-[16px] mr-2 ${iconClassName}`} />
          <span className="text-center sm:text-left">{buttonText}</span>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`flex sm:flex-row items-center sm:items-center bg-blue-600 hover:bg-blue-700 rounded-[8px] ${className}`}
        >
          <MapPin size={16} className={`min-h-[16px] min-w-[16px] mr-2 ${iconClassName}`} />
          <span className="text-center sm:text-left">{label}</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white dark:bg-navy-900 w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{address}</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-[rgb(59,130,246)]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[500px] w-full">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src={mapUrl}
                allowFullScreen
                title={`Map showing ${address}`}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
