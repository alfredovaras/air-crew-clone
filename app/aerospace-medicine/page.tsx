"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animations"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export default function AerospaceMedicinePage() {
  // Featured solutions data
  const featuredSolutions = [
    {
      id: 1,
      title: "Human Training Centrifuge",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
      link: "/aerospace-medicine/training-simulation-products/high-g/human-training-centrifuge",
    },
    {
      id: 2,
      title: "Spatial Disorientation Trainer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
      link: "/aerospace-medicine/training-simulation-products/spatial-disorientation",
    },
    {
      id: 3,
      title: "Altitude Chamber",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
      link: "/aerospace-medicine/training-simulation-products/altitude-chamber",
    },
    {
      id: 4,
      title: "Night Vision Training",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
      link: "/aerospace-medicine/human-factors-training-training-support/night-vision",
    },
  ]

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const totalSlides = featuredSolutions.length

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

  // Solution categories
  const solutionCategories = [
    {
      title: "Training & Simulation Products",
      description:
        "Advanced simulation and training systems designed specifically for aerospace medicine applications, including altitude chambers, spatial disorientation trainers, and more.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
      link: "/aerospace-medicine/training-simulation-products/",
    },
    {
      title: "Integrated Logistic Support",
      description:
        "Comprehensive support services for aerospace medicine equipment and facilities, including maintenance, training, and technical documentation.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
      link: "/aerospace-medicine/integrated-logistic-support/",
    },
    {
      title: "Infrastructure & Turn-Key Solutions",
      description:
        "Complete infrastructure solutions for aerospace medicine facilities, from design and construction to equipment installation and commissioning.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
      link: "/aerospace-medicine/infrastructure-turn-key-solutions/",
    },
    {
      title: "Human Factors Training & Training Support",
      description:
        "Specialized training programs focused on human factors in aerospace environments, including spatial disorientation, night vision, and high-G training.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
      link: "/aerospace-medicine/human-factors-training-training-support/",
    },
  ]

  // Breadcrumb items
  const breadcrumbItems = [
    {
      label: "Aerospace Medicine",
      href: "/aerospace-medicine",
      isCurrent: true,
    },
  ]

  return (
    <>
      <div className="bg-gray-50 text-gray-900 min-h-screen mt-[152px]">
        {/* Breadcrumb */}

        {/* Hero Section - Reduced height */}
        <PageHero
          subtitle="Advanced Technology"
          title="Explore Aerospace Medicine"
          description="Amst is a think tank, in other words a centre of excellence dedicated to research, innovation, design, and manufacturing of equipment in the very specialised areas of aeromedicine and aircrew training."
          buttonText="Discover Solutions"
          buttonLink="#solutions"
          imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
        />

        {/* Redesigned Featured Solutions Carousel with square borders */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation type="fadeInUp">
              <div className="flex flex-col items-center mb-16">
                <span className="text-blue-700 font-medium text-sm uppercase tracking-wider mb-2">
                  Advanced Technology
                </span>
                <h2 className="text-4xl font-bold text-navy-900 mb-4 text-center">Featured Solutions</h2>
                <div className="w-24 h-1 bg-blue-700 mb-6"></div>
                <p className="text-gray-600 text-center max-w-2xl">
                  Discover our cutting-edge training systems and medical equipment for aerospace applications
                </p>
              </div>
            </ScrollAnimation>

            {/* Enhanced Carousel Container with square borders */}
            <div className="relative max-w-5xl mx-auto">
              {/* Current Slide */}
              <div className="relative h-[450px] md:h-[650px] overflow-hidden shadow-xl rounded-[16px]">
                <Image
                  src={featuredSolutions[currentSlide].image || "/placeholder.svg"}
                  alt={featuredSolutions[currentSlide].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Content overlay with glass effect - square borders */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 border border-white/10 transform transition-all duration-500">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {featuredSolutions[currentSlide].title}
                    </h3>
                    <Link
                      href={featuredSolutions[currentSlide].link}
                      className="inline-flex items-center bg-blue-700 text-white px-6 py-3 text-sm md:text-base hover:bg-blue-600 transition-all hover:translate-x-1 rounded-[8px]"
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => handleControlClick(prevSlide)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-blue-700/80 backdrop-blur-sm text-white p-3 hover:bg-blue-600 transition-all focus:outline-none shadow-lg rounded-[8px]"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleControlClick(nextSlide)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-blue-700/80 backdrop-blur-sm text-white p-3 hover:bg-blue-600 transition-all focus:outline-none shadow-lg rounded-[8px]"
                aria-label="Next slide"
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              {/* Enhanced Indicators */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {featuredSolutions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-[100px] ${
                      index === currentSlide ? "w-12 h-3 bg-blue-700" : "w-3 h-3 bg-gray-400 hover:bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned Solution Categories with square borders and Aircraft Gallery hover effect */}
        <section className="py-24 bg-white" id="solutions">
          <style jsx global>{`
            .solution-card-image {
              position: relative;
              overflow: hidden;
            }
            
            .solution-card-image img {
              transition: transform 500ms ease-in-out !important;
            }
            
            .solution-card:hover .solution-card-image img {
              transform: scale(1.1) !important;
            }
            
            .solution-card-image .overlay {
              position: absolute;
              inset: 0;
              background-color: rgba(0, 0, 0, 0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background-color 500ms ease-in-out !important;
              z-index: 10;
            }
            
            .solution-card:hover .solution-card-image .overlay {
              background-color: rgba(0, 0, 0, 0.5) !important;
            }
          `}</style>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation type="fadeInUp">
              <div className="flex flex-col items-center mb-16">
                <span className="text-blue-700 font-medium text-sm uppercase tracking-wider mb-2">
                  Complete Portfolio
                </span>
                <h2 className="text-4xl font-bold text-navy-900 mb-4 text-center">Our Comprehensive Solutions</h2>
                <div className="w-24 h-1 bg-blue-700 mb-6"></div>
                <p className="text-gray-600 text-center max-w-2xl">
                  Explore our full range of aerospace medicine solutions designed to meet your specific requirements
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {solutionCategories.map((category, index) => (
                <ScrollAnimation key={index} type="fadeInUp" delay={index * 0.1}>
                  <div className="solution-card group bg-white border border-gray-200 overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-[8px]">
                    <div className="solution-card-image relative h-64 rounded-[8px]">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover rounded-[8px]"
                      />
                      <div className="overlay rounded-[8px]">
                        {/* Título overlay na imagem */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <h3 className="text-2xl font-bold text-white mb-0 group-hover:mb-2 transition-all">
                            {category.title}
                          </h3>
                          <div className="h-0.5 w-0 bg-blue-500 group-hover:w-16 transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-col flex-grow bg-gradient-to-br from-white to-gray-50">
                      <p className="text-gray-700 mb-6 flex-grow">{category.description}</p>

                      <Link
                        href={category.link}
                        className="inline-flex items-center bg-blue-700 text-white px-8 py-3 font-medium hover:bg-blue-600 transition-colors rounded-[8px]"
                      > 
                        Explore Solutions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
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
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Changed background to blue and button to white */}
        <section className="py-20 bg-blue-700 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side with content */}
              <div>
                <ScrollAnimation type="fadeInLeft">
                  <div className="text-white font-medium mb-2">CONTACT US</div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Ready to Enhance Your Aerospace Medicine Capabilities?
                  </h2>
                  <div className="text-white mb-8">
                    <p className="mb-4">
                      Our team of experts is ready to help you find the right solutions for your specific requirements.
                      With decades of experience in aerospace medicine, we understand the unique challenges you face.
                    </p>
                    <p>
                      Contact us today to discuss how our advanced training systems, integrated logistic support, and
                      turn-key solutions can help you achieve your goals.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-white text-blue-700 px-6 py-3 font-medium hover:bg-gray-100 transition-colors rounded-[8px]"
                  >
                    GET IN TOUCH
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
                </ScrollAnimation>
              </div>

              {/* Right side with image */}
              <div className="relative">
                <ScrollAnimation type="fadeInRight" delay={0.2}>
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                      alt="Aerospace Medicine Equipment"
                      fill
                      className="object-cover rounded-[16px]"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
