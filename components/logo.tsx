import Image from "next/image"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 130, height = 32 }: LogoProps) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-3gGfkJ4pNCN7pqBhbkrr29gUtNtsGa.png"
      alt="AMST - Building Confidence"
      width={width}
      height={height}
      className={`transition-opacity hover:opacity-90 ${className || ""}`}
      priority
    />
  )
}
