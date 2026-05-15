import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Breadcrumb } from "@/components/breadcrumb"

export default function DefenseSecurityPage() {
  // Breadcrumb items
  const breadcrumbItems = [
    {
      label: "Defense & Security",
      href: "/defense-security",
      isCurrent: true,
    },
  ]

  return (
    <main className="flex-grow pt-28">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
          alt="Defense & Security"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <ScrollAnimation type="fadeInUp">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Defense & Security</h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                Advanced training solutions and technologies for defense and security applications
              </p>
              <Link
                href="#solutions"
                className="inline-flex items-center bg-red-500 text-white px-8 py-3 font-medium hover:bg-red-600 transition-colors"
              >
                Explore Solutions
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
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation type="fadeInUp">
          <h2 className="text-3xl font-bold text-navy-900 mb-8" id="solutions">
            Our Defense & Security Solutions
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Solution 1 */}
          <ScrollAnimation type="fadeInUp" delay={0.1}>
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                  alt="Military Training Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">Military Training Systems</h3>
                <p className="text-gray-700 mb-4">
                  Advanced simulation and training systems designed specifically for military applications, including
                  flight simulators, tactical training, and mission rehearsal systems.
                </p>
                <Link
                  href="/defense-security/military-training"
                  className="inline-flex items-center text-red-500 font-medium hover:text-red-600"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Solution 2 */}
          <ScrollAnimation type="fadeInUp" delay={0.2}>
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                  alt="Security Training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">Security Training</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive training solutions for security personnel, including scenario-based training, threat
                  assessment, and emergency response procedures.
                </p>
                <Link
                  href="/defense-security/security-training"
                  className="inline-flex items-center text-red-500 font-medium hover:text-red-600"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Solution 3 */}
          <ScrollAnimation type="fadeInUp" delay={0.3}>
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                  alt="Special Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">Special Operations</h3>
                <p className="text-gray-700 mb-4">
                  Specialized training systems for special operations forces, including tactical simulators, virtual
                  reality training environments, and advanced mission planning tools.
                </p>
                <Link
                  href="/defense-security/special-operations"
                  className="inline-flex items-center text-red-500 font-medium hover:text-red-600"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Additional Content */}
        <ScrollAnimation type="fadeInUp">
          <div className="bg-gray-100 p-8 mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Choose Our Defense & Security Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-700">
                  With decades of experience serving defense and security organizations worldwide, our solutions have
                  been field-tested and proven effective in the most demanding environments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Advanced Technology</h3>
                <p className="text-gray-700">
                  Our systems incorporate the latest advancements in simulation, virtual reality, and training
                  methodologies to provide the most realistic and effective training experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Customized Solutions</h3>
                <p className="text-gray-700">
                  We understand that each organization has unique requirements. Our solutions can be tailored to meet
                  specific training objectives and operational needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Comprehensive Support</h3>
                <p className="text-gray-700">
                  From initial consultation to installation, training, and ongoing maintenance, we provide comprehensive
                  support to ensure the success of your training program.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation type="fadeInUp">
          <div className="bg-navy-900 text-white p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Defense & Security Training?</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Contact our team to discuss how our solutions can meet your specific requirements.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-red-500 text-white px-8 py-3 font-medium hover:bg-red-600 transition-colors"
              >
                Contact Us
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
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  )
}
