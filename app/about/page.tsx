"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { CertificateModal } from "@/components/certificate-modal"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"

export default function AboutPage() {
  // Adicione este bloco de estilo global logo após a declaração da função AboutPage()
  const BusinessUnitCardStyles = () => (
    <style jsx global>{`
      .business-unit-image-container {
        overflow: hidden !important;
        position: relative !important;
      }
      
      .business-unit-image {
        transition: transform 500ms ease-in-out !important;
      }
      
      .business-unit-overlay {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%);
        opacity: 0.7;
        transition: opacity 500ms ease-in-out !important;
      }
      
      .business-unit-card:hover .business-unit-image {
        transform: scale(1.1) !important;
      }
      
      .business-unit-card:hover .business-unit-overlay {
        opacity: 0.5 !important;
      }
    `}</style>
  )
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "who-we-are"
  const [isLoaded, setIsLoaded] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState({
    url: "",
    title: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const openCertificateModal = (url: string, title: string) => {
    setSelectedCertificate({ url, title })
    setModalOpen(true)
  }

  const tabs = [
    {
      id: "who-we-are",
      label: "Who We Are",
    },
    {
      id: "our-history",
      label: "Our History",
    },
    {
      id: "company-policy",
      label: "Company Policy",
    },
  ]

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  useEffect(() => {
    // Resetar a posição do scroll quando mudar de tab
    window.scrollTo(0, 0)
  }, [activeTab])

  return (
    <div className="bg-gray-50 mt-[124px] md:mt-[152px]">
      {/* Adicione esta linha */}
      <BusinessUnitCardStyles />

      {/* Hero Section */}
      <PageHero
        subtitle="Established 1982"
        title="About AMST"
        description="AMST Group is a worldwide leader in solutions for flight simulation, aircrew training and aeromedical applications."
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
      />

      {/* Tabs Navigation */}
      <section className="bg-white sticky top-20 z-30 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide justify-center">
            {tabs.map((tab) => (
              <Link key={tab.id} href={`/about?tab=${tab.id}`} className="focus:outline-none">
                <motion.div
                  className={`relative py-6 px-6 flex items-center gap-2 font-medium text-base whitespace-nowrap transition-all ${
                    activeTab === tab.id ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className={activeTab === tab.id ? "text-blue-600" : "text-gray-400"}>{tab.icon}</span>
                  {tab.label}

                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                      layoutId="activeTabIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeVariants}
          className="min-h-screen"
        >
          {activeTab === "who-we-are" && (
            <>
              {/* Overview Section */}
              <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium mb-4 rounded-[100px]">
                        Our Company
                      </div>
                      <h2 className="text-4xl font-bold text-navy-900 mb-6">About AMST Group</h2>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        AMST Group is a worldwide leader in solutions for flight simulation, aircrew training and
                        aeromedical applications. Since 1982, AMST prepares aircrew for extreme situations to make
                        flying safer. Comprising of the business units Aerospace Medicine, Civil Aviation and Visual
                        Systems, the group of private companies strives to provide its customers with industry-leading
                        solutions that lift training capabilities to the next level.
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <span className="w-8 h-1 bg-blue-600"></span>
                        <span>Excellence in Simulation Technology</span>
                      </div>
                    </motion.div>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="relative h-[500px] overflow-hidden rounded-[16px]">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="AMST Headquarters"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Business Units Section */}
              <section className="py-20 px-4 bg-gradient-to-b from-blue-700 to-blue-800">
                <div className="container mx-auto max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-block px-3 py-1 bg-blue-800 text-white text-sm font-medium mb-4 rounded-[100px]">
                      Our Expertise
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">Business Units</h2>
                    <p className="text-white/90 max-w-3xl mx-auto text-lg">
                      Our specialized business units work together to deliver comprehensive solutions for the most
                      demanding training scenarios.
                    </p>
                  </motion.div>
                  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
                    {/* Card 1 */}
                    <article className="business-unit-card group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full min-h-[600px]">
                      <div className="relative h-64 w-full business-unit-image-container">
                        <img
                          alt="Aerospace Medicine Simulation"
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          className="business-unit-image object-cover w-full h-full absolute inset-0"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="business-unit-overlay absolute inset-0"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-10">
                          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-[8px] mb-1">
                            Since 1982
                          </span>
                          <h3 className="text-2xl font-bold text-white">Aerospace Medicine</h3>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex-grow mb-5">
                          <p className="text-gray-600 mb-6">
                            AMST started its business more than 30 years ago in the highly specialised aerospace
                            medicine sector. Since then, the company became the world-wide leader in its field with
                            solutions for aircrew training, aeromedical examinations and pilot selection.
                          </p>
                          <p className="text-gray-600">
                            AMST developed a wide range of specialist solutions that can simulate the experience of high
                            G forces, spatial disorientation and high altitudes.
                          </p>
                        </div>
                        <a
                          href="/aerospace-medicine"
                          className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-[8px] hover:bg-blue-700 transition-colors self-end"
                        >
                          <span>Read More</span>
                          <ArrowRight size={18} />
                        </a>
                      </div>
                    </article>

                    {/* Card 2 */}
                    <article className="business-unit-card group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full min-h-[600px]">
                      <div className="relative h-64 w-full business-unit-image-container">
                        <img
                          alt="Civil Aviation Simulation"
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          className="business-unit-image object-cover w-full h-full absolute inset-0"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="business-unit-overlay absolute inset-0"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-10">
                          <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-medium rounded-[8px] mb-1">
                            Advanced Technology
                          </span>
                          <h3 className="text-2xl font-bold text-white">Civil Aviation</h3>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex-grow mb-5">
                          <p className="text-gray-600 mb-6">
                            Through its business unit Civil Aviation, AMST makes its advanced technologies available to
                            the civil aviation sector. This allows AMST to deliver equipment such as Full Flight
                            Simulators that exceed the standard of current industry devices.
                          </p>
                          <p className="text-gray-600">
                            The business unit uses AMST's experience to expose commercial pilots to extreme conditions
                            such as spatial disorientation and upset conditions.
                          </p>
                        </div>
                        <a
                          href="/civil-aviation"
                          className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white font-medium rounded-[8px] hover:bg-orange-700 transition-colors self-end"
                        >
                          <span>Read More</span>
                          <ArrowRight size={18} />
                        </a>
                      </div>
                    </article>

                    {/* Card 3 */}
                    <article className="business-unit-card group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full min-h-[600px]">
                      <div className="relative h-64 w-full business-unit-image-container">
                        <img
                          alt="Visual System Technology"
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          className="business-unit-image object-cover w-full h-full absolute inset-0"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="business-unit-overlay absolute inset-0"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-10">
                          <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-[8px] mb-1">
                            Cutting-Edge
                          </span>
                          <h3 className="text-2xl font-bold text-white">Visual Systems</h3>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex-grow mb-5">
                          <p className="text-gray-600">
                            The business unit Visual System focusses on the development of visual system solutions for
                            the simulation industry. With its ground-breaking VISIM Image Generator, the business unit
                            started its activities in the field of OTW visualization and continues to invest in the
                            development of a cutting-edge product portfolio.
                          </p>
                        </div>
                        <a
                          href="/visual-systems"
                          className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-medium rounded-[8px] hover:bg-green-700 transition-colors self-end"
                        >
                          <span>Read More</span>
                          <ArrowRight size={18} />
                        </a>
                      </div>
                    </article>
                  </section>
                </div>
              </section>

              {/* Philosophy Section */}
              <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium mb-4 rounded-[100px]">
                      Our Approach
                    </div>
                    <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Philosophy: Building Confidence</h2>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <motion.div
                      className="relative order-2 lg:order-1"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="relative h-[500px] overflow-hidden rounded-[16px]">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="AMST Team"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Removidos os quadrados azuis decorativos */}
                    </motion.div>
                    <motion.div
                      className="order-1 lg:order-2"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        AMST's philosophy is best summed up by our slogan "Building Confidence". We give our customers
                        the confidence that they can always rely on us. As a fair and flexible partner, we listen to
                        customer needs to deliver practical and future-proof solutions for their problems in the
                        expected timeframe. We understand that safety, quality, highest availability and excellent
                        support are the most important factors for customers' confidence in our training solutions.
                      </p>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        AMST has a wealth of experience with human factors, training, simulation and engineering. We are
                        happy to share that knowledge with our customers through our outstanding training solutions.
                        Since 1982, AMST's highly skilled and dedicated personnel breaks new grounds in the simulation
                        market.
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <span className="w-8 h-1 bg-blue-600"></span>
                        <span>Building Confidence Since 1982</span>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="bg-blue-50 p-10 border-l-4 border-blue-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-navy-900 mb-4">Continuous Innovation</h3>
                        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                          The evolution of AMST technology never stops. We invest a significant percentage of our annual
                          revenue in research and development. It is a key factor of our success that we constantly
                          innovate with new solutions and improve the safety, reliability, availability, maintainability
                          and the design of our products.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Customers can be confident that AMST delivers state-of-the-art technology that exceeds
                          expectations and current industry standards. Our customer-centric approach combined with our
                          vast experience and our innovative power give you confidence. You can always be confident that
                          with AMST, you have found the best partner for delivering first-class training.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Vision and Mission Section */}
              <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium mb-4 rounded-[100px]">
                      Our Direction
                    </div>
                    <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Vision and Mission</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                      Guided by clear principles, we strive to make a meaningful impact in the world of simulation
                      technology.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                      className="bg-white p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 relative overflow-hidden group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Vision</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Our vision is a world where any mode of transportation is as safe as possible. All people
                          shall benefit from our experience in simulation and virtual environments. We view us as a
                          business incubator that helps to create revolutionary solutions beyond aerospace medicine and
                          aircrew training that change the world for the better.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 relative overflow-hidden group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Mission</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          It is our mission to make flying safer. With our solutions, we want to protect human lives,
                          not only of aviators but also of passengers and people on the ground. To advance flight
                          safety, we strive to be ahead of the market with tight customer partnerships, team excellence
                          and passion for our products.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "our-history" && (
            <section className="py-20 px-4 bg-white">
              <div className="container mx-auto max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium mb-4 rounded-[100px]">
                    Our Legacy
                  </div>
                  <h2 className="text-4xl font-bold text-navy-900 mb-6">OUR HISTORY</h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    AMST can look back on a successful history of nearly 40 years.
                  </p>
                </motion.div>

                <div className="mb-20">
                  <h3 className="text-2xl font-bold text-navy-900 mb-12 relative inline-block">
                    Company History
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></div>
                  </h3>

                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                      {[
                        {
                          year: "1982",
                          content:
                            "The activities of AMST started as a department within the then state-owned Aluminium factory AMAG, having received its first orders for a Human Training Centrifuge and a Hypobaric Chamber (both products are still in operation and upgraded to the latest technology)",
                        },
                        {
                          year: "1987",
                          content:
                            "AUSTRIA METALL SYSTEMTECHNIK (AMST) was founded as an affiliate and was awarded a major contract for a research centrifuge.",
                        },
                        {
                          year: "1996",
                          content:
                            "AMST was privatised to AMST-Systemtechnik GmbH through a management buyout by its Managing Director Richard Schlüsselberger sen.",
                        },
                        {
                          year: "1999",
                          content:
                            "Further diversification of the product portfolio with solutions for Night Vision and Spatial Disorientation Training to become a main player in the aeromedical business.",
                        },
                        {
                          year: "2001",
                          content: "Development of the company structure with a branch office in Germany.",
                        },
                        {
                          year: "2006",
                          content:
                            "Revolutionizing the market with the installation of the most modern flight training device in the market, the DESDEMONA.",
                        },
                        {
                          year: "2009",
                          content:
                            "Opening of a maintenance branch in Singapore to cover local customers as well as the Southeast Asian market.",
                        },
                        {
                          year: "2010",
                          content:
                            "The equity of Richard Schlüsselberger sen. has been transferred equally to his sons Richard jun. and Rainer.",
                        },
                        {
                          year: "2016",
                          content:
                            "Creation of new Business Unit AMST Aviation to enter the civil aviation market focusing on complete training solutions for fixed wing and rotary aircraft and specializing in the area of its unique Upset Prevention and Recovery Training carried out on DESDEMONA.",
                        },
                        {
                          year: "2017",
                          content:
                            "Creation of new Business Unit AMST Visual Systems with an AMST proprietary Image Generator VISIM serving all aviation simulator markets requiring out of the window views.",
                        },
                        {
                          year: "2018",
                          content:
                            "Opening of the company AMST Aviation B.V. in the Netherlands to satisfy market demands with a specialized team and new production area. The company's founder, Richard Schlüsselberger, resigned as CEO.",
                        },
                        {
                          year: "2019",
                          content:
                            "Completion of the AMST Flight Training Device Solution with the first EASA Level D qualification for a Level D Fullflight Simulator.",
                        },
                        {
                          year: "2020",
                          content:
                            "Further development of DESDEMONA to cover all mission training and development tasks in the field of aircraft simulation and beyond.",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="relative pl-16 md:pl-0"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          {/* Timeline Node - Mantendo formato redondo */}
                          <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-blue-600 flex items-center justify-center transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10 rounded-full">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>

                          {/* Content */}
                          <div
                            className={`md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
                          >
                            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                              <div className="text-blue-600 text-2xl font-bold mb-2">{item.year}</div>
                              <p className="text-gray-700">{item.content}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-12 relative inline-block">
                    Key Milestones
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></div>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        year: "1983",
                        title: "Company Founded",
                        content:
                          "AMST was established in Ranshofen, Austria, with a focus on aerospace medicine training equipment.",
                      },
                      {
                        year: "1992",
                        title: "First International Contract",
                        content:
                          "AMST secured its first major international contract to provide altitude chambers for a leading air force.",
                      },
                      {
                        year: "2005",
                        title: "Expansion to Netherlands",
                        content:
                          "AMST established its presence in the Netherlands with the opening of AMST-Aviation B.V.",
                      },
                      {
                        year: "2015",
                        title: "Space Training Partnership",
                        content:
                          "AMST formed a strategic partnership with a major space agency to develop astronaut training systems.",
                      },
                    ].map((milestone, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-8 shadow-lg border-t-4 border-blue-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-blue-600 text-5xl font-bold">{milestone.year}</div>
                          <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
                            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-navy-900 mb-2">{milestone.title}</h4>
                        <p className="text-gray-700">{milestone.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {activeTab === "company-policy" && (
            <section className="py-20 px-4 bg-white">
              <div className="container mx-auto max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium mb-4 rounded-[100px]">
                    Our Standards
                  </div>
                  <h2 className="text-4xl font-bold text-navy-900 mb-6">COMPANY POLICY</h2>
                </motion.div>

                <motion.div
                  className="bg-blue-50 p-10 mb-16 border-l-4 border-blue-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div>
                      <p className="text-xl text-gray-700 mb-4">
                        Besides safety, quality and sustainability have the highest priority for us. The quality system
                        of AMST meets the requirements of ISO 9001:2015.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-16"
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-8 relative inline-block">
                    QUALITY AND ENVIRONMENTAL POLICY
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></div>
                  </h3>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    The AMST quality and environmental management system covers all activities: from sales, engineering
                    and manufacturing to after sales support, including maintenance and upgrades. We deliver only
                    top-quality products, provide our customers with the expected level of support and protect the
                    environment.
                  </p>

                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    The executive management and all employees are committed to our Quality and Environmental Policy
                    that sets the standards for all organisational, technical and commercial activities:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {[
                      {
                        title: "Fairness & Reliability",
                        content:
                          "We are open towards our customers and suppliers and treat them fairly. Our customers and suppliers can rely on us because we want to collaborate with them in the long term. We encourage relationships to suppliers in geographical proximity to avoid transport over long distances. Furthermore, we are gradually striving for preferred partnerships with environmentally sustainable suppliers.",
                      },
                      {
                        title: "Customer Satisfaction",
                        content:
                          "We want to inspire our customers because an enthusiastic customer is the best form of advertising.",
                      },
                      {
                        title: "Market Leadership",
                        content:
                          "We pay attention to the high quality and longevity of our products because we want to be and remain global market leader and role model.",
                      },
                      {
                        title: "Marketing & Profitability",
                        content:
                          "We market our products and services in a profit-orientated way and support new and existing customers in their purchase decision. We focus on the balance between sustainability and profit-oriented corporate management.",
                      },
                      {
                        title: "Quality in Work",
                        content:
                          "Our employees regard each other as customers and suppliers. Our employees aspire to a level of quality in their own work that is as high as the quality they would expect as a customer.",
                      },
                      {
                        title: "State-of-the-Art",
                        content:
                          "is our aspiration. We take care that our products are developed, designed, manufactured and maintained in a sustainable and environmentally friendly way. Our products distinguish themselves by their longevity. That is why we focus on purchased parts with long lifecycles and a secure supply of spare parts when selecting various components during development.",
                      },
                      {
                        title: "Resources",
                        content:
                          "We commit ourselves to working in a way that conserves resources. The economical use of raw materials and resources as well as the avoidance of waste or its return into the material cycle are a matter of course for us.",
                      },
                      {
                        title: "Safety",
                        content:
                          "When we develop, design, manufacture, document and maintain a product, we take care that the product is as safe as possible for the users and the environment.",
                      },
                      {
                        title: "Professional Development",
                        content:
                          "We train our employees, so that they have the necessary knowledge and skills to meet the expectations of our customers and all interested parties.",
                      },
                      {
                        title: "Teamwork",
                        content:
                          "Our employees work together on implementing the quality and environmental standards. They continuously improve the quality and sustainability of our products and services, and the quality and environmental management system.",
                      },
                      {
                        title: "Cooperation",
                        content:
                          "Our management lives our quality and environmental policy and is a role model for all employees. The management leads cooperatively and supports the employees in implementing our quality and environmental policy.",
                      },
                      {
                        title: "Legal Compliance",
                        content:
                          "We comply to all legal and other binding obligations and regularly evaluate whether the information is up to date and whether the resulting requirements are met.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 mr-2"></span>
                          {item.title}
                        </h4>
                        <p className="text-gray-700">{item.content}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 mr-2"></span>
                      Continuous Improvement
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Promoting the continuous improvement of performance, and also environmental performance, is of
                      central importance in our quality and environmental management system. In order to improve the
                      quality and environmental management system, AMST is committed not only to processing, monitoring
                      and eliminating non-conformities, but also to continuously improving the suitability,
                      appropriateness and effectiveness of its quality and environmental management system in order to
                      optimize performance and environmental performance.
                    </p>
                  </motion.div>
                </motion.div>

                {/* ISO Certificates Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-16"
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-8 relative inline-block">
                    ISO CERTIFICATES
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></div>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: "ISO 9001 & 14001 MAIN" },
                      { title: "ISO 9001 & 14001 AUSTRIA" },
                      { title: "ISO 9001 & 14001 NETHERLANDS" },
                    ].map((cert, index) => (
                      <motion.div
                        key={index}
                        className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                      >
                        <div
                          className="relative h-80 cursor-pointer overflow-hidden"
                          onClick={() =>
                            openCertificateModal(
                              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C5tSJtTQL3rAO1m2goVAPZL9gRd67M.png",
                              cert.title,
                            )
                          }
                        >
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C5tSJtTQL3rAO1m2goVAPZL9gRd67M.png"
                            alt={cert.title}
                            fill
                            className="object-contain transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 w-full">
                              <div className="flex justify-center">
                                <ExternalLink className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-center mb-4">{cert.title}</h4>
                          <div className="flex justify-center">
                            <button
                              onClick={() =>
                                openCertificateModal(
                                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C5tSJtTQL3rAO1m2goVAPZL9gRd67M.png",
                                  cert.title,
                                )
                              }
                              className="text-white font-medium flex items-center gap-2 px-4 py-2 transition-all rounded-[8px] bg-blue-700"
                            >
                              <span>View Certificate</span>
                              <ExternalLink className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Call-to-Action Section - Estilo da página aerospace-medicine/training-simulation-products */}
      <section className="relative bg-blue-700 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience AMST Solutions?</h2>
            <div className="h-1 w-24 bg-white/30 mx-auto mb-6"></div>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
              Contact our team to discuss how our advanced training and simulation products can enhance your aerospace
              medicine program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform rounded-[8px]"
              >
                Request Information
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors rounded-[8px]"
              >
                About Our Company
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageUrl={selectedCertificate.url}
        title={selectedCertificate.title}
      />
    </div>
  )
}
