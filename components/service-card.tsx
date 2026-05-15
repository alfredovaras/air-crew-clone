import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  imagePath: string
  altText: string
}

export function ServiceCard({ title, description, imagePath, altText }: ServiceCardProps) {
  return (
    <div className="relative h-[400px] group overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
          alt={altText || "Service image"}
          fill
          className="object-cover brightness-75"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white mb-4">{description}</p>
        <Link
          href="#"
          className="inline-block bg-[rgb(59,130,246)] border border-[rgb(59,130,246)] text-white px-4 py-2 text-sm hover:bg-blue-700 hover:border-blue-700 transition-colors w-fit"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
