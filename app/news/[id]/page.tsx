"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Share, Download, ArrowLeft, Calendar, Tag, ExternalLink, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Helper function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function NewsDetailPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // News data
  const newsData = {
    title:
      "Technische Universität Dresden and AMST Unveil World's First Self-Driving Simulator at Dresden Automotive Symposium",
    date: "2024-10-01T17:43:23",
    main_image:
      "https://www.amst.co.at/wp-content/uploads/2024/10/AMST-News-AM-2024-10-01_Driving_Simulator_Rollout_4.jpg",
    categories: ["Aerospace Medicine", "Civil Aviation", "Visual Systems"],
    excerpt:
      "AMST and Technische Universität Dresden successfully launched the Dresden Driving Simulator (DDS), the world's first self-driving simulator, at the Dresden Automotive Symposium.",
    content: `
      <p><strong>Ranshofen, 1 October 2024</strong> – AMST and Technische Universität Dresden successfully launched the Dresden Driving Simulator (DDS), the world's first self-driving simulator, at the Dresden Automotive Symposium on 26 September 2024.</p>

      <p>The DDS introduces a groundbreaking approach by bridging a critical gap in simulation technology. It is the first driving simulator capable of providing sustained accelerations, made possible through its innovative tire-bound motion platform. The DDS is poised to revolutionize the development and validation of Advanced Driver Assistance Systems (ADAS) and Highly Automated Driving (HAD), ultimately contributing to smarter and safer vehicles.</p>

      <blockquote>"We are proud to have developed a simulator that not only pushes the boundaries of what's possible in automotive simulation but also enhances the entire process of vehicle testing and development," said Franz Pflug, AMST Managing Director.</blockquote>

      <p>This collaboration with Technische Universität Dresden has enabled us to bring to market a unique technology that will support the advancement of ADAS and HAD systems, a crucial step in the future of mobility.</p>

      <h3>Technical Innovation</h3>
      <p>The innovation of the DDS lies in its tire-bound motion platform, which allows the DDS to deliver high-quality motion performance with unparalleled realism. Four pairs of steering and drive motors can accelerate the total system mass of ~5 t omnidirectionally with ~0.8 g. Powered by an onboard HV battery, the platform moves autonomously within an open space, communicating via Wi-Fi with a central control station.</p>

      <p>The self-developed motion control system can therefore be used flexibly and requires a travel area of 70 × 70 m to achieve the full quality of movement.</p>

      <blockquote>"The Dresden Driving Simulator is a testament to the power of collaboration and innovation. By working closely with AMST, we've been able to create a solution that doesn't just meet today's needs but anticipates the future challenges of automotive development," added Prof. Dr.-Ing. Günther Prokop, Chair of Automobile Engineering at TU Dresden.</blockquote>

      <p>The DDS will help engineers and researchers gain unprecedented insights into human-machine interaction, automated driving technologies, and vehicle safety.</p>

      <h3>Market Impact</h3>
      <p>The Dresden Driving Simulator is not only a technological milestone but also a celebration of AMST's commitment to innovation and excellence in the field of simulation. Moving forward, AMST introduces this disruptive technology to the broader market, with the potential to revolutionize automotive research, development and testing worldwide.</p>
    `,
    medias: {
      images: [
        "https://www.amst.co.at/wp-content/uploads/2024/10/AMST-News-AM-2024-10-01_Driving_Simulator_Rollout_1_Large.jpg",
        "https://www.amst.co.at/wp-content/uploads/2024/10/AMST-News-AM-2024-10-01_Driving_Simulator_Rollout_2_Large.jpg",
        "https://www.amst.co.at/wp-content/uploads/2024/10/AMST-News-AM-2024-10-01_Driving_Simulator_Rollout_3_Large.jpg",
        "https://www.amst.co.at/wp-content/uploads/2024/10/AMST-News-AM-2024-10-01_Driving_Simulator_Rollout_4_Large.jpg",
        "https://www.amst.co.at/wp-content/uploads/2024/10/AMST-News-AM-2024-10-01_Driving_Simulator_Rollout_5_Large.jpg",
        "https://www.amst.co.at/wp-content/uploads/2024/10/AMST-News-AM-2024-10-01_Driving_Simulator_Rollout_6_Large.jpg",
      ],
      pdfs: [
        {
          url: "https://www.amst.co.at/wp-content/uploads/2024/10/AMST_Dresden_Driving_Simulator_Rollout_Press_Release_2024-10-01.pdf",
          name: "Press Release (English)",
        },
        {
          url: "https://www.amst.co.at/wp-content/uploads/2024/10/AMST_Dresden_Driving_Simulator_Rollout_Pressemitteilung_2024-10-01.pdf",
          name: "Press Release (German)",
        },
      ],
    },
  }

  const handleShare = async () => {
    const shareData = {
      title: newsData.title,
      text: newsData.excerpt,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      }
    } catch (err) {
      console.error("Error sharing:", err)
    }
  }

  const openImageModal = (image: string, index: number) => {
    setSelectedImage(image)
    setSelectedImageIndex(index)
  }

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (selectedImageIndex - 1 + newsData.medias.images.length) % newsData.medias.images.length
        : (selectedImageIndex + 1) % newsData.medias.images.length

    setSelectedImageIndex(newIndex)
    setSelectedImage(newsData.medias.images[newIndex])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={newsData.main_image || "/placeholder.svg"}
          alt={newsData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Navigation */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/news"
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </div>

        {/* Title and metadata */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">{newsData.title}</h1>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  {formatDate(newsData.date)}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    {newsData.categories.map((category, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-[8px] text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/90 rounded-[8px]"
                >
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Article content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-800"
            dangerouslySetInnerHTML={{ __html: newsData.content }}
          />
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {newsData.medias.images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative aspect-video cursor-pointer overflow-hidden rounded-xl shadow-md group"
                onClick={() => openImageModal(image, index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Dresden Driving Simulator ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Downloads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsData.medias.pdfs.map((pdf, index) => (
              <motion.a
                key={index}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-[8px] flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {pdf.name}
                  </div>
                  <div className="text-sm text-gray-500">PDF Document</div>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 ml-auto group-hover:text-blue-500 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="w-full h-full max-w-[100%] p-0 bg-black/95 border-none [&>button.absolute]:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image src={selectedImage || "/placeholder.svg"} alt="Enlarged view" fill className="object-contain" />

                {/* Navigation buttons */}
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-[8px] flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-[8px] flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ArrowLeft className="h-6 w-6 rotate-180" />
                </button>

                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-[8px] flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5 rounded-[8px]" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-[8px] text-white text-sm">
                  {selectedImageIndex + 1} / {newsData.medias.images.length}
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}
