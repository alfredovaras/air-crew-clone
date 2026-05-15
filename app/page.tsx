import { NewsSection } from "@/components/news-section"
import { BannerCarousel } from "@/components/banner-carousel"
import { TrainingSection } from "@/components/training-section"
import { ImageGallery } from "@/components/image-gallery"
import { AboutSection } from "@/components/about-section"
import { ScrollAnimation } from "@/components/scroll-animations"
import { VideoModal } from "@/components/video-modal"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <main className="mt-[116px]">
        {/* Banner Carousel */}
        <BannerCarousel />

        {/* About Section - Sem o bloco 30+ YEARS OF EXPERIENCE */}
        <AboutSection />

        {/* Training Section com o título "BENEFIT FROM OUR EXPERTISE IN THE FOLLOWING AREAS" */}
        <TrainingSection />

        {/* News Section */}
        <ScrollAnimation type="fadeIn" delay={0.2}>
          <NewsSection />
        </ScrollAnimation>

        {/* SIMULATION TECHNOLOGY Section - Redesenhada */}
        <section className="relative bg-navy-900 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation type="fadeInLeft" delay={0.2}>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                    alt="Simulation Technology"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-[16px]"
                  />
                  <div className="absolute inset-0 flex items-end p-6 rounded-[16px]">
                    <VideoModal
                      videoId="dQw4w9WgXcQ"
                      title="Watch Demo"
                      buttonText="Watch Video"
                      className="bg-[rgb(59,130,246)] hover:bg-blue-700 rounded-[8px]"
                    />
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fadeInRight" delay={0.3}>
                <div className="text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[rgb(59,130,246)]">Simulation Technology</h2>
                  <p className="text-lg mb-6 text-gray-300">
                    AMST is a world-leading supplier of simulation technology for training, research and development in
                    aviation, space and medicine. Our cutting-edge solutions are used by major aerospace organizations
                    worldwide.
                  </p>
                  <p className="text-lg mb-8 text-gray-300">
                    We provide innovative solutions for pilot training, spatial disorientation, and aeromedical research
                    with unmatched precision and realism.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <div className="bg-[rgb(59,130,246)] p-2 mr-3 rounded-[8px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">High Fidelity</h3>
                        <p className="text-sm text-gray-400">Ultra-realistic simulation environments</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[rgb(59,130,246)] p-2 mr-3 rounded-[8px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Advanced Tech</h3>
                        <p className="text-sm text-gray-400">Cutting-edge hardware and software</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Image Gallery - Depois dos posts */}
        <ImageGallery />
      </main>
    </>
  )
}
