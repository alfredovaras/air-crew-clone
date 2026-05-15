"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { PageHero } from "@/components/page-hero"
// Define product categories and their items
const productCategories = [
  {
    id: "high-g",
    title: "High G",
    products: [
      {
        id: "human-training-centrifuge",
        title: "Human Training Centrifuge",
        description:
          "Advanced centrifuge for high-G training and research, capable of generating up to 9G with rapid onset rates.",
        image: "/aerospace-centrifuge-training.png",
      },
      {
        id: "short-arm-human-centrifuge",
        title: "Short Arm Human Centrifuge",
        description: "Compact centrifuge designed for space medicine research and astronaut training.",
        image: "/placeholder.svg?key=d5mir",
      },
      {
        id: "desdemona",
        title: "DESDEMONA",
        description:
          "Advanced motion simulator for spatial disorientation training with 6 degrees of freedom and centrifuge capabilities.",
        image: "/images/desdemona-1.png",
      },
    ],
  },
  {
    id: "spatial-disorientation",
    title: "Spatial Disorientation",
    products: [
      {
        id: "airfox-diso",
        title: "AIRFOX DISO",
        description: "Specialized simulator for spatial disorientation training with advanced visual systems.",
        image: "/spatial-disorientation-simulator.png",
      },
      {
        id: "airfox-asd",
        title: "AIRFOX ASD",
        description: "Advanced Spatial Disorientation trainer with realistic flight controls and motion platform.",
        image: "/advanced-spatial-disorientation-trainer.png",
      },
      {
        id: "barany-chair",
        title: "Barany Chair",
        description:
          "Classic rotating chair for vestibular system evaluation and basic spatial disorientation training.",
        image: "/barany-chair-vestibular-training.png",
      },
    ],
  },
  {
    id: "chamber-systems",
    title: "Chamber Systems",
    products: [
      {
        id: "hypobaric-chamber",
        title: "Hypobaric and Rapid Decompression Chamber",
        description:
          "State-of-the-art chamber for altitude training and rapid decompression scenarios up to 30,000 feet.",
        image: "/altitude-chamber-aerospace-medicine.png",
      },
      {
        id: "normobaric-hypoxia",
        title: "Normobaric Hypoxia Training System",
        description:
          "System for simulating altitude effects without pressure changes, using reduced oxygen concentration.",
        image: "/normobaric-hypoxia-system.png",
      },
    ],
  },
  {
    id: "night-vision",
    title: "Night Vision",
    products: [
      {
        id: "nightfox",
        title: "NIGHTFOX Night Vision Training System",
        description: "Comprehensive training system for night vision operations with realistic scenarios.",
        image: "/military-night-vision-training.png",
      },
      {
        id: "nightfox-virtual",
        title: "NIGHTFOX Virtual Terrain Image Generation System",
        description: "Advanced terrain generation system for realistic night vision training environments.",
        image: "/virtual-terrain-night-vision.png",
      },
      {
        id: "nightfox-integrated",
        title: "NIGHTFOX Integrated NV Training System",
        description: "Fully integrated system combining hardware and software for comprehensive night vision training.",
        image: "/integrated-night-vision-training.png",
      },
    ],
  },
  {
    id: "anti-g-breathing",
    title: "Anti-G and Breathing",
    products: [
      {
        id: "anti-g-trainer",
        title: "Anti-G Straining Manoeuvres Trainer",
        description:
          "Specialized trainer for practicing anti-G straining maneuvers to prevent G-induced loss of consciousness.",
        image: "/anti-g-training.png",
      },
      {
        id: "ppb-trainer",
        title: "Positive Pressure Breathing Trainer",
        description: "System for training pilots in positive pressure breathing techniques for high-altitude flight.",
        image: "/placeholder.svg?key=pyh4a",
      },
      {
        id: "anti-g-valve",
        title: "Software Controlled Anti-G Valve",
        description: "Advanced anti-G valve system with software control for precise pressure regulation.",
        image: "/aerospace-anti-g-valve.png",
      },
    ],
  },
  {
    id: "search-rescue",
    title: "Search and Rescue",
    products: [
      {
        id: "hoist-trainer",
        title: "Helicopter Rescue Hoist Trainer",
        description: "Realistic simulator for helicopter hoist rescue operations training.",
        image: "/placeholder.svg?key=jxniy",
      },
      {
        id: "underwater-escape",
        title: "Underwater Escape Training System",
        description: "System for training personnel in underwater escape procedures from aircraft and vehicles.",
        image: "/underwater-escape-training.png",
      },
      {
        id: "ejection-seat",
        title: "Basic and Advanced Ejection Seat Trainer",
        description:
          "Training systems for ejection procedures, from basic familiarization to advanced dynamic simulation.",
        image: "/placeholder.svg?key=a49rz",
      },
    ],
  },
  {
    id: "flight-simulation",
    title: "Flight Simulation",
    products: [
      {
        id: "airfox-uprt",
        title: "AIRFOX UPRT",
        description: "Upset Prevention and Recovery Training simulator for advanced pilot training.",
        image: "/upset-prevention-recovery-simulator.png",
      },
      {
        id: "desdemona-flight",
        title: "DESDEMONA",
        description:
          "Multi-purpose simulator for spatial disorientation and flight training with advanced motion capabilities.",
        image: "/images/desdemona-1.png",
      },
      {
        id: "pc-21-trainer",
        title: "Flight Training Device for Pilatus PC-21 Trainer Aircraft",
        description: "High-fidelity simulator specifically designed for the Pilatus PC-21 advanced trainer aircraft.",
        image: "/pilatus-pc-21-simulator.png",
      },
      {
        id: "pc-7-trainer",
        title: "Flight Training Device for Pilatus PC-7 Trainer Aircraft",
        description:
          "Dedicated simulator for the Pilatus PC-7 basic trainer aircraft with realistic controls and systems.",
        image: "/pilatus-pc-7-simulator.png",
      },
      {
        id: "alpha-jet-trainer",
        title: "Flight Training Device for Alpha-Jet Trainer Aircraft",
        description: "Specialized simulator for the Alpha-Jet advanced trainer and light attack aircraft.",
        image: "/alpha-jet-simulator.png",
      },
    ],
  },
  {
    id: "pilot-selection",
    title: "Pilot Selection",
    products: [
      {
        id: "pilot-selection-system",
        title: "Pilot Selection System",
        description: "Comprehensive assessment system for evaluating pilot candidates' aptitude and capabilities.",
        image: "/placeholder.svg?key=6kfdk",
      },
    ],
  },
  {
    id: "sports-training",
    title: "Sports Training Equipment",
    products: [
      {
        id: "sports-pilot-selection",
        title: "Pilot Selection System",
        description: "Adapted selection system for sports performance assessment and training.",
        image: "/sports-performance-assessment.png",
      },
      {
        id: "sports-hypoxia",
        title: "Normobaric Hypoxia Training System",
        description: "Altitude simulation system for sports performance enhancement and altitude adaptation training.",
        image: "/placeholder.svg?key=2f649",
      },
    ],
  },
]

// Separate Visual Systems and Civil Aviation for "Other Training Solutions" section
const otherSolutionsData = [
  {
    id: "visual-systems",
    title: "Visual Systems",
    color: "green",
    products: [
      {
        id: "visual-system-1",
        title: "Advanced Visual System",
        description: "State-of-the-art visual system for simulation with ultra-high resolution and wide field of view.",
        image: "/images/visual-systems-full.jpg",
      },
    ],
  },
  {
    id: "civil-aviation",
    title: "Civil Aviation",
    color: "orange",
    products: [
      {
        id: "civil-aviation-1",
        title: "Civil Aviation Training System",
        description: "Comprehensive training solutions for commercial pilots and aviation personnel.",
        image: "/images/civil-aviation-full.jpg",
      },
    ],
  },
]

export default function TrainingSimulationProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const productListRef = useRef(null)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setSelectedProduct(null)

    // Scroll to product list with smooth animation
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    // Scroll to top of product details
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Function to get category color - now all use blue
  const getCategoryColor = () => {
    return {
      bg: "bg-blue-600",
      text: "text-blue-600",
      border: "border-blue-600",
      hover: "hover:bg-blue-700",
      gradient: "from-blue-600 to-blue-700",
    }
  }

  // Function to get color for Other Solutions
  const getOtherSolutionColor = (color) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-600",
          text: "text-green-600",
          border: "border-green-600",
          hover: "hover:bg-green-700",
          gradient: "from-green-600 to-green-700",
        }
      case "orange":
        return {
          bg: "bg-orange-600",
          text: "text-orange-600",
          border: "border-orange-600",
          hover: "hover:bg-orange-700",
          gradient: "from-orange-500 to-orange-600",
        }
      default:
        return getCategoryColor()
    }
  }

  // Function to generate product URL with category
  const getProductUrl = (categoryId, productId) => {
    return `/aerospace-medicine/training-simulation-products/${categoryId}/${productId}`
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Breadcrumb items
  const breadcrumbItems = [
    {
      label: "Aerospace Medicine",
      href: "/aerospace-medicine",
    },
    {
      label: "Training & Simulation Products",
      href: "/aerospace-medicine/training-simulation-products",
      isCurrent: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white mt-[124px] md:mt-[152px]">
      {/* CSS for gallery hover effects */}
      <style jsx global>{`
        .gallery-item-hover img {
          transition: transform 500ms ease-in-out !important;
        }
        
        .gallery-item-hover:hover img {
          transform: scale(1.1) !important;
        }
        
        .gallery-item-hover .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 500ms ease-in-out !important;
        }
        
        .gallery-item-hover:hover .overlay {
          background-color: rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>

      {/* Header - Com o estilo da página Careers mas com o conteúdo original */}
      {/* Hero Section */}
      <PageHero
        subtitle="Aerospace Solutions"
        title="Training & Simulation Products"
        description="Advanced solutions for aerospace medicine training and research"
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
      />

      {/* Main Content with Split Layout */}
      <div id="products" className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar - Categories */}
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Categories
              </h2>

              <nav className="space-y-2 mb-8">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-3 transition-all duration-300 flex items-center justify-between group ${
                      selectedCategory.id === category.id
                        ? `bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow-md`
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <span>{category.title}</span>

                    {selectedCategory.id === category.id && (
                      <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="ml-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.span>
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Need Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our team of experts is ready to help you find the perfect solution for your needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Products */}
          <div className="lg:w-3/4" ref={productListRef}>
            <div className="mb-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                  {selectedCategory.title
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 mt-2 mb-6"></div>
                <p className="text-gray-600 max-w-3xl mb-8">
                  Explore our range of {selectedCategory.title.toLowerCase()} training and simulation products designed
                  for aerospace medicine applications.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {selectedCategory.products.map((product) => (
                <motion.div key={product.id} variants={itemVariants} whileHover={{ y: -5 }} className="h-full">
                  {/* Enhanced Card Design with Aircraft Gallery hover effect */}
                  <Link href={getProductUrl(selectedCategory.id, product.id)}>
                    <div className="bg-white h-full shadow-md hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 flex flex-col cursor-pointer group rounded-[8px]">
                      {/* Category Badge */}
                      <div className="relative">
                        <div className="absolute top-4 left-4 z-10 text-xs font-bold text-white px-3 py-1 bg-blue-600 rounded-[8px]">
                          {selectedCategory.title.toUpperCase()}
                        </div>

                        {/* Image with Aircraft Gallery hover effect */}
                        <div className="h-64 relative overflow-hidden gallery-item-hover rounded-[8px]">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                            alt={product.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="overlay rounded-[8px]"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{product.description}</p>

                        {/* Enhanced Button */}
                        <div className="mt-auto pt-4">
                          <span className="inline-flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-all duration-300 shadow-sm rounded-[8px]">
                            View Details
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Related Products Section - Visual Systems and Civil Aviation */}
      {!selectedProduct && (
        <div className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Other Training Solutions</h2>
              <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our specialized training solutions for visual systems and civil aviation applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherSolutionsData.map((category) => {
                if (!category) return null
                const featuredProduct = category.products[0]
                const colors = getOtherSolutionColor(category.color)

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 rounded-[8px]"
                  >
                    <Link href={`/${category.id}`}>
                      <div className="relative h-72 overflow-hidden gallery-item-hover rounded-[8px]">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt={category.title}
                          fill
                          className="object-cover"
                        />
                        <div className="overlay rounded-[8px]"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-10">
                          <div className={`inline-block px-3 py-1 ${colors.bg} text-white text-xs font-semibold mb-3 rounded-[8px]`}>
                            FEATURED
                          </div>
                          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-6 line-clamp-3">{featuredProduct.description}</p>
                        <div className="flex items-center justify-between">
                          <span
                            className={`inline-flex items-center ${colors.bg} text-white px-5 py-2 ${colors.hover} transition-all duration-300 shadow-sm rounded-[8px]`}
                          >
                            Explore {category.title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>

                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CTA Section */}
      <div className="relative bg-blue-700 text-white py-20 overflow-hidden">
        {/* Background Pattern - Removed rect element */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            {/* Removed the rect element */}
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Training Capabilities?</h2>
            <div className="h-1 w-24 bg-white/30 mx-auto mb-6"></div>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
              Contact our team to discuss how our advanced training and simulation products can enhance your aerospace
              medicine program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
              >
                Request Information
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors"
              >
                About Our Company
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
