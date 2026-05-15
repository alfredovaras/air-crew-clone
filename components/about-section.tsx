import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "./scroll-animations"

export function AboutSection() {
  return (
    <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side with image */}
          <div className="relative">
            <ScrollAnimation type="fadeInLeft">
              <div className="relative h-[500px] overflow-hidden rounded-[16px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                  alt="Military jet pilot"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Right side with content */}
          <div>
            <ScrollAnimation type="fadeInRight" delay={0.2}>
              <div className="text-[rgb(59,130,246)] font-medium mb-2">ABOUT</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                No Mission too Difficult
                <br />
                No Challenge too Great
              </h2>
              <div className="text-gray-300 mb-8">
                <p className="mb-4">
                  AMST is a world-leading supplier of simulation technology for training, research and development in
                  aviation, space and medicine. With over 30 years of experience, we have established ourselves as
                  pioneers in the field of high-fidelity simulation systems.
                </p>
                <p>
                  Our commitment to innovation, quality, and customer satisfaction has made us the trusted partner for
                  military organizations, civil aviation authorities, and medical institutions worldwide. We understand
                  that effective training is critical for mission success, which is why we develop solutions that
                  prepare professionals for even the most challenging scenarios.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center bg-[rgb(59,130,246)] text-white px-6 py-3 font-medium hover:bg-blue-600 transition-colors rounded-[8px]"
              >
                Read more
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
    </section>
  )
}
