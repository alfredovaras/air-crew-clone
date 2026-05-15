"use client"
import Image from "next/image"
import { X, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
}

export function CertificateModal({ isOpen, onClose, imageUrl, title }: CertificateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white p-0 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-2xl font-bold">{title}</h3>
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative w-full h-[70vh] bg-gray-50">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>

            <div className="p-4 flex justify-end border-t">
              <a
                href={imageUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Certificate
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
