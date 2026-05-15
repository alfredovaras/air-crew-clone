"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  AlertTriangle,
  Lightbulb,
  Award,
  Play,
  Settings,
  Sliders,
  FileText,
  X,
  CheckCircle,
} from "lucide-react"

import { PageHero } from "@/components/page-hero"

// Adicione este componente após as importações
const ScrollAnimationComponent = ({ children, type = "fadeInUp", delay = 0 }) => {
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay },
    },
    scaleUp: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay },
    },
  }

  const animation = animations[type]

  return (
    <motion.div initial={animation.initial} animate={animation.animate} transition={animation.transition}>
      {children}
    </motion.div>
  )
}

export default function HumanTrainingCentrifugePage() {
  // Breadcrumb items
  const breadcrumbItems = [
    {
      label: "Aerospace Medicine",
      href: "/aerospace-medicine",
    },
    {
      label: "Training & Simulation Products",
      href: "/aerospace-medicine/training-simulation-products",
    },
    {
      label: "High G",
      href: "/aerospace-medicine/training-simulation-products/high-g",
    },
    {
      label: "Human Training Centrifuge",
      href: "/aerospace-medicine/training-simulation-products/high-g/human-training-centrifuge",
      isCurrent: true,
    },
  ]
  const [currentVideoUrl, setCurrentVideoUrl] = useState("")
  const [currentVideoTitle, setCurrentVideoTitle] = useState("")

  const openVideoModal = (videoId: string, videoTitle: string) => {
    setCurrentVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`)
    setCurrentVideoTitle(videoTitle)
    setVideoModalOpen(true)
  }
  const [activeTab, setActiveTab] = useState("needs")
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const tabs = [
    { id: "needs", label: "Needs" },
    { id: "solution", label: "Solution" },
    { id: "benefits", label: "Benefits" },
    { id: "videos", label: "Videos" },
    { id: "features", label: "Features" },
    { id: "options", label: "Options" },
    { id: "references", label: "References" },
  ]

  return (
    <>
      <div className="bg-gray-50 text-gray-900 min-h-screen mt-[124px] md:mt-[152px]">
        <PageHero
          subtitle="Join Our Team"
          title="Human training centrifuge"
          description="Advanced G-Force Training for Military and Civil Aviation"
          imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
        />

        {/* Dashboard Header with Stats */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Human Training Centrifuge</h2>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition-colors rounded-[8px]"
                >
                  Request Information
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 transition-colors duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <span className={activeTab === tab.id ? "text-blue-600" : "text-gray-400"}>{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            {/* Needs Tab */}
            {activeTab === "needs" && (
              <motion.div
                key="needs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Needs</h2>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
                    <p className="text-gray-800">
                      Air forces face a serious dilemma between the need to conserve budgets, the fatigue life of costly
                      front line aircraft and the essential demands for high-G pilot training. The HTC is now an
                      essential investment in the future of today&apos;s modern air force.
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Modern fighter aircraft that are currently in operation impose high requirements on G-tolerance
                        and G-protection of the aircrew.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Increasing performance in terms of engine power, airspeed, manoeuvrability, electronic equipment
                        and structural integrity results in the fact that the pilot is becoming more and more a limiting
                        factor in respect to his physiological and psychological tolerance to mission stress and work
                        load.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        High agile fighter aircraft of the latest generation are capable of performing super manoeuvres
                        with rapid, multi-axes motions and have significant advantage and superiority in air combat
                        manoeuvres.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        However, they will expose the pilots to new combinations of high translational accelerations and
                        rotational motions, leading to further increased physical loads.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Air combat requires pilots to undertake complex system management tasks and make quick decisions
                        under intense physical stress. The current ground simulators, used for pre-flight training,
                        provide pilot cognitive skill training but they have a negative training value in not
                        replicating the physiological environment. This major training shortcoming is most serious in
                        preparing pilots for air combat where the aircraft will be aggressively manoeuvred imposing
                        significant strains on pilot and aircraft.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        G-induced Loss of Consciousness (G-LOC) has been a continuing threat in tactical fighter
                        operations and is still one of the most frequent causes of fatal aircraft mishaps.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Pilots need to possess an adequate degree of mandatory skills for protective, anti-G straining
                        muscular and breathing techniques, anti-G suit exploitation and self-control procedures.
                      </p>
                    </li>
                  </ul>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveTab("solution")}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-colors rounded-[8px]"
                    >
                      <span>View Solution</span>
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Solution Tab */}
            {activeTab === "solution" && (
              <motion.div
                key="solution"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Solution</h2>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
                    <p className="text-gray-800">
                      Modern HTC training improves both air combat capabilities and flying safety. The HTC has
                      traditionally been used for pilot selection, qualification and refresher training. Now the HTC
                      begins to be an integral part of modern air force training systems.
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Combining new simulation technology with advanced human centrifuge engineering provides a very
                        cost effective approach to prepare pilots for the mental and physical demands for air combat
                        within visual range. Modern centrifuges reduce Coriolis effects, have good visual displays, and
                        can provide combined cognitive skill and physical capabilities training. Advanced centrifuge
                        systems provide comprehensive, realistic air combat training in a simulator.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        The initial exposure to the impact of G was traditionally gained only when flying commenced. In
                        a HTC, students can become used to operating at their peak capacity much earlier than
                        previously. Any student problems can be revealed early and addressed before significant flying
                        has taken place.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Demonstrations of rapid G-onset to Loss of Consciousness with associated symptoms cannot be
                        carried out in an aircraft. It is essential for flying safety that air combat pilots know how to
                        protect themselves against this characteristic of the human anatomy.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        With a HTC, G-resistance and G-tolerance can be achieved earlier than it would occur if using
                        only flying training. This leads to a more effective training.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        HTC training can provide an early identification of unsuitable candidates for fast jet training.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Continuation training using a HTC incorporating sophisticated medical monitoring equipment can
                        provide early indication of any emerging pilot physical problems that could lead to accidents if
                        experienced airborne.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        HTC training allows pilots to build and maintain their abilities to withstand high-G even if
                        aircraft are G-limited, or the current training regime does not permit it.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Current ground instruction builds only cognitive skills. HTC training can build combined
                        cognitive skills and physiological capabilities.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Pilots can be much more proficient at managing complex aircraft systems while under high-G after
                        suitable HTC instruction in anti-G straining and breathing techniques.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Pilots can be trained for high-G manoeuvres in a safe environment, where their mental and
                        physical performance can be continuously monitored. Corrective instruction can be provided
                        immediately if any shortcomings become evident. This cannot be done airborne.
                      </p>
                    </li>

                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        New air combat aircraft allow complex manoeuvres across combined G-forces. HTC training can
                        replicate this better, preparing pilots for unusual physical stresses not encountered during
                        initial flying training.
                      </p>
                    </li>
                  </ul>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveTab("benefits")}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-colors rounded-[8px]"
                    >
                      <span>View Benefits</span>
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Benefits Tab */}
            {activeTab === "benefits" && (
              <motion.div
                key="benefits"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-white p-6 shadow-lg">
                  <div className="flex items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
                    <p className="text-gray-800">Saves lives – saves budget</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    <div>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">
                            Improves pilot performance, builds G-resistance and G-tolerance in a safe environment,
                            re-establishes and maintains pilots' optimum performance levels.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">
                            G-awareness training in closed-loop using simulated aircraft configuration during target
                            tracking and simulation of typical combat and missile avoidance manoeuvres.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">
                            Execution of tactical tasks in high-G environment has more real operational benefit than any
                            other training system.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">
                            Download of Basic Fighter Manoeuvres (BFM) from frontline aircraft is a considerable cost
                            saving factor and conserves fatigue life on costly front line aircraft.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">
                            One training centrifuge costs much less than one modern fighter aircraft and provides an
                            environment-friendly and cost-effective training of aircrew.
                          </p>
                        </li>

                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">
                            HTC training allows the pilot to re-establish and maintain his optimum performance level
                            even when flights are not possible.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-[500px] w-full overflow-hidden shadow-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                        alt="Human Training Centrifuge Benefits"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">Advanced G-Force Training</h3>
                          <p className="text-sm">Enhancing pilot performance and safety in high-G environments</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveTab("features")}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-colors rounded-[8px]"
                    >
                      <span>View Features</span>
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Features Tab */}
            {activeTab === "features" && (
              <motion.div
                key="features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Features</h2>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
                    <p className="text-gray-800">Modern HTC design requires highest reliability and safety</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Structural Integrity"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Structural Integrity – Design Criteria
                        </h4>
                        <p className="text-gray-700">
                          Structural design is guaranteed for 30 years life time based on static strength and fatigue
                          strength assessment, dynamic analysis (vibrations) and application of advanced materials
                          (CFRP, special aluminium alloys and steel).
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Main Drive System"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Main Drive System – Direct Drives</h4>
                        <p className="text-gray-700">
                          AMST has a long experience how to control and operate direct drives, DC or AC motors with
                          capacities from three to 36 MW. In addition, we also offer motor gearbox solution or hydraulic
                          motors. In case of power shortage or many power failures during daytime, we recommend the
                          installation of a flywheel generator.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC Arm System"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC Arm – Roll and Pitch System</h4>
                        <p className="text-gray-700">
                          The design of high performance HTCs requires a mass optimised arm and gondola system. The arm
                          shall be a high strength steel structure, the gondola of high strength CFRS material to reduce
                          the rotating mass, without neglecting the fatigue behaviour.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Gondola Equipment"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Gondola Equipment – Enables Highest Flexibility
                        </h4>
                        <p className="text-gray-700">
                          The gondola equipment provides the highest flexibility for the user to adapt for future needs.
                          It gives the pilot the look like feeling similar to his working environment and ensures a
                          quick change of the different cockpits.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Control Stations"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Control Stations</h4>
                        <p className="text-gray-700">
                          The control stations have ergonomic design and are equipped with all devices to control and
                          monitor the HTC, the pilot, and to ensure that all data (audio, video, medical, and technical)
                          are time synchronous recorded and available for debriefing.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Modes of Operation"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Modes of Operation</h4>
                        <p className="text-gray-700">
                          The HTC control system provides the user with maximum possible flexibility under different
                          operation modes such as pre-programmed mode, active mode, DFS mode with/without CGFs and a
                          manual mode for maintenance tasks.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Safety Features"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Safety Features</h4>
                        <p className="text-gray-700">
                          Safety has to be the highest priority for the pilot and for the machine. The safety system
                          fulfils international standards (MIL, DEF and EU).
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Medical Monitoring System"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Medical Monitoring System – MMS</h4>
                        <p className="text-gray-700">
                          The MMS has digital Pulse Code Modulation (PCM) transmission technology and uses state-of-the
                          art sensor- and amplifier technology. All required biomedical parameters are measured,
                          recorded and available for debriefing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveTab("options")}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-colors rounded-[8px]"
                    >
                      <span>View Options</span>
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Options Tab */}
            {activeTab === "options" && (
              <motion.div
                key="options"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Options</h2>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
                    <p className="text-gray-800">AMST provides complete turnkey solutions</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Building Services"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Building Services</h4>
                        <p className="text-gray-700">
                          AMST can provide soil tests and soil report at the site, where the HTC will be installed;
                          structural engineering and design of HTC foundation including detailed drawings for the
                          reinforcement and earthen system; basic building architectural design; building engineering
                          drawings, building construction and construction supervision.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Integrated Logistic Support"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Integrated Logistic Support – ILS</h4>
                        <p className="text-gray-700">
                          It is the aim of the AMST ILS team to support customers during the lifetime of the equipment
                          to achieve the operational requirements, in particular operational availability greater than
                          95 % with affordable life cycle costs. AMST can provide different levels of maintenance up to
                          a careless package.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Software-Controlled Anti-G Valve"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Software-Controlled Anti-G Valve</h4>
                        <p className="text-gray-700">
                          The software-controlled anti-G valve can be installed instead of the anti-G valve as in the
                          real aircraft. It has three independent supplies for trousers, mask and vest. Cut-in point,
                          slope and ratio for each supply can be predefined. No ITAR approval is required.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="Simulator Link"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Simulator Link</h4>
                        <p className="text-gray-700">
                          High Level Architecture (HLA) interface to the AMST SD trainer to conduct joint training. Each
                          simulator and its instructor act as a player and control a target aircraft. Ability to conduct
                          basic air combat engagements against each other. Enables network compatibility between other
                          simulators.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveTab("references")}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-colors rounded-[8px]"
                    >
                      <span>View References</span>
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* References Tab */}
            {activeTab === "references" && (
              <motion.div
                key="references"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">References</h2>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
                    <p className="text-gray-800">
                      Since 2005 AMST has succsessfully developed, manufactured, installed and commissioned seven HTCs.
                      All of them in operation with an operational availability of more than 95%. Go – see – and ask our
                      customers!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC – UK 2019"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC – UK 2019</h4>
                        <p className="text-gray-700">
                          The opening ceremony of the High-G Training Facility, a joint project between
                          AMST-Systemtechnik GmbH and Thales UK, took place at RAF Cranwell on 4 February 2019. Chief of
                          Air Staff, Air Chief Marshal Sir Stephen Hillier, tested the capability himself and was deeply
                          impressed.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC – Poland 2011"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC – Poland 2011</h4>
                        <p className="text-gray-700">
                          The contract for the HTC was signed in October 2008. AMST was responsible for the HTC and for
                          the soil tests, the building architectural design, building engineering and construction
                          supervision. The whole facility with the HTC was handed over in October 2011. The HTC was a
                          newly developed system and represents the today's highest technical specification available.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC Upgrade – APRL Gangshan 2010"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC Upgrade – APRL Gangshan 2010</h4>
                        <p className="text-gray-700">
                          The contract for the repair and upgrade of the existing Latecoere HTC was signed in June 2009.
                          Handover was in December 2010. The programme comprises the repair and overhaul of the
                          hydraulic drive system for the main, roll- and pitch drives, installation of new control
                          stations, control software, TSMU and recording/debriefing system.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC – Singapore 2010"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC – Singapore 2010</h4>
                        <p className="text-gray-700">
                          Contract awarded in November 2007 and handover was in October 2010 during ICASM. The new HTC
                          is the replacement for the ETC's HTC installed in 1998. The contract comprises the
                          modification of the existing foundation to make it waterproof and to use the same power
                          supply. The new HTC had to be installed in the existing building at the RSAF Aeromedical
                          Centre.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC – India 2008"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC – India 2008</h4>
                        <p className="text-gray-700">
                          The contract for the HTC was signed in March 2005, handover was in June 2008. The contract
                          included the delivery of the HTC, building design, engineering, construction and construction
                          supervision, a turnkey project. The HTC is installed at the Indian Air Force Institute of
                          Aerospace Medicine in Bangalore.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC – Russia II 2007"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC – Russia II 2007</h4>
                        <p className="text-gray-700">
                          In February 2005 the new owner of the HTC decided to replace the former RUSSIA I HTC by a new
                          one with more advanced parameters for training use only. In addition, minor modifications on
                          the existing foundation were carried out. The new system was installed end of 2006 and handed
                          over in July 2007.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC Upgrade – Germany 2006"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC Upgrade – Germany 2006</h4>
                        <p className="text-gray-700">
                          In 2003, the GAF planned to replace the HTC by a new one. Based on the results of the
                          structure monitoring system, AMST could extend the lifetime for another 30 years. The contract
                          was then awarded in 2003; the handover of the modified HTC was in 2006. The onset rate was
                          increased from 5 to 10 G/s, maximum G from 12 to 15 G.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC – P.R. of China 2005"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC – P.R. of China 2005</h4>
                        <p className="text-gray-700">
                          In December 2000 AMST awarded a contract from the P.R. of China for a HTC, including soil
                          tests, building design and building construction supervision. The handover was in August 2005.
                          The building and the HTC is installed at the Beijing Institute of Aviation Medicine.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC – Russia I 1993"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC – Russia I 1993</h4>
                        <p className="text-gray-700">
                          The contract awarded in June 1989. It was the biggest contract AMST has ever signed. AMST was
                          responsible for the design and production for the HTC, a completely new development, and for
                          the building design. The contract was finished in 1993. The HTC was installed at the LII –
                          GROMOV Flight Research Institute in Zhukovsky and used for research.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                          alt="HTC – Germany 1986"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">HTC – Germany 1986</h4>
                        <p className="text-gray-700">
                          The first contract for a HTC was signed in December 1982. The HTC had to be newly developed.
                          Handover was in March 1986. Design life specified for 20 years. The HTC is installed at the
                          Flight Physiological Training Centre in Königsbrück near Dresden. In 2001 after the
                          unification of Germany, the institute was taken over by the German Air Force (GAF).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveTab("needs")}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-colors rounded-[8px]"
                    >
                      <span>Back to Needs</span>
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Videos Tab */}
            {activeTab === "videos" && (
              <motion.div
                key="videos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Videos</h2>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
                    <p className="text-gray-800">Most Modern HTC including DFS capabilities and CGFs</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div
                      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                      onClick={() => openVideoModal("1Wpp3hgaE8Q", "Human Training Centrifuge in Action")}
                    >
                      <div className="relative h-[425px] w-full">
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                          <div className="w-16 h-16 rounded-full bg-blue-600/80 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <Image
                          src={`https://img.youtube.com/vi/1Wpp3hgaE8Q/maxresdefault.jpg`}
                          alt="Human Training Centrifuge in Action"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Human Training Centrifuge in Action
                        </h4>
                        <p className="text-gray-700">
                          Watch the AMST Human Training Centrifuge in operation, demonstrating its advanced capabilities
                          for pilot training.
                        </p>
                      </div>
                    </div>

                    <div
                      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                      onClick={() => openVideoModal("s83nKhil1RI", "Human Training Centrifuge – Training and Features")}
                    >
                      <div className="relative h-[425px] w-full">
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                          <div className="w-16 h-16 rounded-full bg-blue-600/80 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <Image
                          src={`https://img.youtube.com/vi/s83nKhil1RI/maxresdefault.jpg`}
                          alt="Human Training Centrifuge – Training and Features"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Human Training Centrifuge – Training and Features
                        </h4>
                        <p className="text-gray-700">
                          Explore the training methodology and key features of the AMST Human Training Centrifuge
                          system.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveTab("features")}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition-colors rounded-[8px]"
                    >
                      <span>View Features</span>
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
            <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-6xl mx-4">
                <div className="flex justify-between items-center p-4 bg-white border-b">
                  <h3 className="text-lg font-semibold text-gray-800">{currentVideoTitle}</h3>
                  <button
                    onClick={() => setVideoModalOpen(false)}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="w-full aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={currentVideoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Human Training Centrifuge Video"
                  ></iframe>
                </div>
                <div className="md:hidden p-4 bg-white border-t">
                  <button
                    onClick={() => setVideoModalOpen(false)}
                    className="w-full py-2 bg-blue-600 text-white font-medium rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
