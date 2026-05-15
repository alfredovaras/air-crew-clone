"use client"

import Image from "next/image"
import Link from "next/link"

interface PageHeroProps {
  subtitle: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  imageSrc: string
}

export function PageHero({
  subtitle,
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageSrc,
}: PageHeroProps) {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="mb-6 inline-block">
            <div className="bg-blue-500/30 backdrop-blur-sm px-4 py-1 border border-blue-400/30 rounded-[8px]">
              <span className="text-sm font-medium text-blue-100">{subtitle}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-xl md:text-xl text-blue-50 max-w-3xl mx-auto">{description}</p>

          {(buttonText || secondaryButtonText) && (
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {buttonText && buttonLink && (
                <Link
                  href={buttonLink}
                  className="inline-flex items-center bg-blue-700 text-white px-8 py-3 font-medium hover:bg-blue-600 transition-colors rounded-[8px]"
                >
                  {buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}

              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  href={secondaryButtonLink}
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors rounded-[8px]"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
