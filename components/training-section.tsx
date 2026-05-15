"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "./scroll-animations"

const trainingItems = [
  {
    title: "AEROSPACE MEDICINE",
    description:
      "Research, innovation, design and manufacturing of equipment in the very specialised areas of aeromedicine and aircrew training.",
    link: "/aerospace-medicine",
    color: "bg-[rgb(59,130,246)]",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
  },
  {
    title: "VISUAL SYSTEMS",
    description:
      "In today's aircrew training devices, the out-the-window view and the image-generator become more important as a unique selling proposition.",
    link: "/visual-systems",
    color: "bg-[rgb(59,130,246)]",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
  },
  {
    title: "CIVIL AVIATION",
    description:
      "We offer experience and advanced technology, innovation, reliability and out of the box thinking in all areas of civil aviation.",
    link: "/civil-aviation",
    color: "bg-[rgb(59,130,246)]",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg",
  },
]

export function TrainingSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <ScrollAnimation type="fadeInUp">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-12">
            Benefit from our expertise in the following areas:
          </h2>
        </ScrollAnimation>
      </div>

      <style jsx global>{`
        .training-image {
          transition: transform 500ms ease-in-out !important;
        }
        
        .training-container:hover .training-image {
          transform: scale(1.1) !important;
        }
        
        .training-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.3);
          transition: background-color 500ms ease-in-out !important;
        }
        
        .training-container:hover .training-overlay {
          background-color: rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-6">
        {trainingItems.map((item, index) => (
          <ScrollAnimation key={index} type="fadeIn" delay={0.2 + index * 0.2}>
            <Link href={item.link} className="training-container group relative h-[507px] overflow-hidden block  m-3 rounded-[16px]">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={
                    item.image ||
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg" ||
                    "/placeholder.svg"
                  }
                  alt={item.title}
                  fill
                  className="object-cover training-image"
                />
              </div>
              <div className="training-overlay" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-10 z-10">
                <h3
                  className="text-white text-3xl font-bold mb-2"
                  style={{
                    transition: "transform 500ms ease-in-out !important",
                  }}
                >
                  {item.title}
                </h3>
                <style jsx global>{`
                  .group:hover h3 {
                    transform: translateY(-5px) !important;
                  }
                  .group:hover p {
                    transform: translateY(-5px) !important;
                  }
                  .group:hover svg {
                    transform: translateX(4px) !important;
                  }
                `}</style>
                <p
                  className="text-white mb-6"
                  style={{
                    transition: "transform 500ms ease-in-out !important",
                  }}
                >
                  {item.description}
                </p>
                <span
                  className={`inline-flex items-center ${item.color} text-white px-6 py-3 font-medium rounded-[8px]`}
                  style={{
                    transition: "all 500ms ease-in-out !important",
                  }}
                >
                  LEARN MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    style={{
                      transition: "transform 500ms ease-in-out !important",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}
