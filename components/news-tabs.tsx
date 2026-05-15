"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "./animations"
import { Calendar, Search } from "lucide-react"

type NewsCategory = "all" | "aerospace-medicine" | "civil-aviation" | "visual-systems"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  imagePath: string
  category: string
  tags?: string[]
}

interface NewsTabsProps {
  newsItems: NewsItem[]
}

export function NewsTabs({ newsItems }: NewsTabsProps) {
  const [activeTab, setActiveTab] = useState<NewsCategory>("all")
  const [searchTag, setSearchTag] = useState("")
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(newsItems)

  // Extract all unique tags from news items
  const allTags = Array.from(
    new Set(newsItems.filter((item) => item.tags && item.tags.length > 0).flatMap((item) => item.tags || [])),
  )

  useEffect(() => {
    let filtered = activeTab === "all" ? newsItems : newsItems.filter((item) => item.category === activeTab)

    if (searchTag) {
      filtered = filtered.filter(
        (item) => item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchTag.toLowerCase())),
      )
    }

    setFilteredNews(filtered)
  }, [activeTab, searchTag, newsItems])

  return (
    <div className="w-full">
      {/* Tag Search */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by tag..."
            value={searchTag}
            onChange={(e) => setSearchTag(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        {/* Popular Tags */}
        {allTags.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Popular Tags:</p>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTag(tag)}
                  className="text-xs px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === "all"
                ? "border-b-2 border-navy-900 text-navy-900"
                : "text-gray-500 hover:text-navy-900 hover:border-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("aerospace-medicine")}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === "aerospace-medicine"
                ? "border-b-2 border-navy-900 text-navy-900"
                : "text-gray-500 hover:text-navy-900 hover:border-gray-300"
            }`}
          >
            News Aerospace Medicine
          </button>
          <button
            onClick={() => setActiveTab("civil-aviation")}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === "civil-aviation"
                ? "border-b-2 border-navy-900 text-navy-900"
                : "text-gray-500 hover:text-navy-900 hover:border-gray-300"
            }`}
          >
            News Civil Aviation
          </button>
          <button
            onClick={() => setActiveTab("visual-systems")}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === "visual-systems"
                ? "border-b-2 border-navy-900 text-navy-900"
                : "text-gray-500 hover:text-navy-900 hover:border-gray-300"
            }`}
          >
            News Visual Systems
          </button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-12">
        {filteredNews.length > 0 ? (
          filteredNews.map((item, index) => (
            <FadeIn key={item.id} delay={0.1 * index}>
              <article className="bg-white p-8 shadow-lg mb-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/5 h-80 relative">
                    <Image
                      src="https://sjc.microlink.io/NMV5TMAMyrVzYJFoScopwDRIRIOWrKZsGjyNcZkreLlmsevYcyxIyR-iDpvihIxtXjKfWZViHimHySABTeQY3Q.jpeg"
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-3/5">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.date}</span>
                    </div>
                    <Link href={`/news/${item.id}`} className="block hover:text-navy-800 transition-colors">
                      <h2 className="text-2xl font-bold text-navy-900 mt-2 mb-4">{item.title}</h2>
                    </Link>
                    <Link href={`/news/${item.id}`} className="block hover:text-navy-800 transition-colors">
                      <p className="text-gray-700 mb-6">{item.content.substring(0, 300)}...</p>
                    </Link>

                    {/* Tags - Updated to be gray */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs px-2 py-1 bg-gray-200 text-gray-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center bg-red-500 text-white px-6 py-2 hover:bg-red-600 transition-colors"
                    >
                      Read Full Story
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No news items found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
