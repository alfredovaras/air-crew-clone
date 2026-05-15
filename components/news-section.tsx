"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { ScrollAnimation } from "./scroll-animations"
import { motion } from "framer-motion"

const newsItems = [
  {
    id: 1,
    title: "AMST Delivers New Altitude Chamber to German Air Force",
    excerpt:
      "AMST has successfully delivered and installed a new state-of-the-art altitude chamber for the German Air Force, enhancing their training capabilities.",
    date: "March 15, 2023",
    category: "aerospace-medicine",
    tags: ["Altitude Chamber", "German Air Force", "Training"],
  },
  {
    id: 2,
    title: "AMST Presents at International Aviation Medicine Symposium",
    excerpt:
      "AMST experts presented the latest developments in spatial disorientation training at the International Aviation Medicine Symposium in Vienna.",
    date: "February 22, 2023",
    category: "aerospace-medicine",
    tags: ["Symposium", "Aviation Medicine", "Research"],
  },
  {
    id: 3,
    title: "New Partnership with European Space Agency",
    excerpt:
      "AMST announces a strategic partnership with the European Space Agency to develop next-generation astronaut training systems.",
    date: "January 18, 2023",
    category: "visual-systems",
    tags: ["ESA", "Partnership", "Space Training"],
  },
  {
    id: 4,
    title: "AMST Completes Major Upgrade for Royal Air Force",
    excerpt:
      "The Royal Air Force's simulation training center has received a comprehensive upgrade of their AMST systems, incorporating the latest technologies.",
    date: "December 5, 2022",
    category: "civil-aviation",
    tags: ["Royal Air Force", "Upgrade", "Simulation"],
  },
  {
    id: 5,
    title: "New Medical Simulation Center Opens in Singapore",
    excerpt:
      "AMST has completed the installation of a cutting-edge medical simulation center in Singapore, supporting advanced training for medical professionals.",
    date: "November 10, 2022",
    category: "aerospace-medicine",
    tags: ["Medical Simulation", "Singapore", "Training Center"],
  },
  {
    id: 6,
    title: "AMST Awarded Contract for Next-Gen Flight Simulators",
    excerpt:
      "A major international airline has selected AMST to provide next-generation flight simulators for their new training academy.",
    date: "October 3, 2022",
    category: "civil-aviation",
    tags: ["Flight Simulators", "Airline", "Contract"],
  },
]

export function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3
  const totalPages = Math.ceil(newsItems.length / postsPerPage)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = newsItems.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Generate page numbers
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation type="fadeInUp">
          <h2 className="text-4xl font-bold text-center">News and events</h2>
          <p className="text-center text-gray-600 mb-12">
            Stay updated with the latest news, events, and developments from AMST.
          </p>
        </ScrollAnimation>

        <style jsx global>{`
          .news-image-container {
            position: relative;
            overflow: hidden;
          }
          
          .news-image {
            transition: transform 500ms ease-in-out !important;
          }
          
          .news-image-container:hover .news-image {
            transform: scale(1.1) !important;
          }
          
          .news-overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.3);
            transition: background-color 500ms ease-in-out !important;
          }
          
          .news-image-container:hover .news-overlay {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {currentPosts.map((item, index) => (
            <ScrollAnimation key={item.id} type="fadeInUp" delay={0.2 + index * 0.1}>
              <motion.div
                className="bg-white shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 ease-in-out rounded-[8px]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
              >
                {/* Image */}
                <div className="h-64 relative overflow-hidden news-image-container rounded-[8px]">
                  <Link href={`/news/${item.id}`}>
                    <div className="h-full w-full rounded-[8px]">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                        alt={item.title}
                        fill
                        className="object-cover news-image rounded-[8px]"
                      />
                      <div className="news-overlay rounded-[8px]"></div>
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>

                  <Link
                    href={`/news/${item.id}`}
                    className="block transition-colors duration-300 ease-in-out group-hover:text-[rgb(59,130,246)]"
                  >
                    <h3 className="text-xl font-bold text-navy-900 mt-2 mb-3 transition-all duration-300 ease-in-out">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-gray-700 mb-4 line-clamp-3">{item.excerpt}</p>

                  {/* Tags - Gray */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-gray-200 text-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-300 rounded-[8px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center bg-[rgb(59,130,246)] text-white px-6 py-3 font-medium transition-all duration-500 ease-in-out hover:bg-blue-600 hover:shadow-lg group rounded-[8px]"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform transition-transform duration-500 ease-in-out group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Pagination - Removed background from arrows */}
        <ScrollAnimation type="fadeInUp" delay={0.6}>
          <div className="flex justify-center items-center space-x-2 mb-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 text-navy-900 hover:text-[rgb(59,130,246)] transition-colors duration-300 ease-in-out rounded-[8px] ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => goToPage(number)}
                className={`px-4 py-2 transition-all duration-300 rounded-[8px] ease-in-out ${
                  currentPage === number
                    ? "bg-[rgb(59,130,246)] text-white"
                    : "bg-navy-900 text-white hover:bg-[rgb(59,130,246)] hover:text-white"
                }`}
                aria-label={`Page ${number}`}
                aria-current={currentPage === number ? "page" : undefined}
              >
                {number}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 text-navy-900 rounded-[8px] hover:text-[rgb(59,130,246)] transition-colors duration-300 ease-in-out ${
                currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : ""
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <Link
                href="/news"
                className="inline-flex items-center justify-center bg-[rgb(59,130,246)] text-white px-8 py-3 font-medium hover:bg-blue-600 transition-colors relative overflow-hidden group rounded-[8px]"
              >
                <span className="relative z-10">VIEW ALL NEWS</span>
                <motion.span
                  className="absolute inset-0 bg-blue-600 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 relative z-10 transform transition-transform duration-500 ease-in-out group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
