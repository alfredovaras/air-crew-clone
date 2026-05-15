"use client"

import { usePathname } from "next/navigation"
import { ChevronRight } from 'lucide-react';
import Link from "next/link"

interface BreadcrumbItem {
  href: string
  label: string
  isCurrent?: boolean
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
}

const itemsToRemove = [
  "High g",
  "Spatial Disorientation",
  "Chamber Systems",
  "Night Vision",
  "Anti-G and Breathing",
  "Search and Rescue",
  "Flight Simulation",
  "Pilot Selection",
  "Sports Training Equipment",
  "Full Flight Simulators",
  "Flight Training Devices",
  "Spatial Disorientation Training Devices",
]

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname() || "/"

  // Se estiver na página inicial, não mostrar breadcrumb
  if (pathname === "/" && !items) return null

  // Dividir o caminho em segmentos
  const segments = pathname.split("/").filter(Boolean)

  // Criar os itens do breadcrumb
  const breadcrumbItems =
    items ||
    (segments
      .map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`
        const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")

        // Check if the label should be removed
        if (itemsToRemove.includes(label)) {
          return null // Skip this item
        }

        return {
          href,
          label,
          isCurrent: index === segments.length - 1,
        }
      })
      .filter(Boolean) as BreadcrumbItem[]) // Filter out null values

  return (
    <nav aria-label="Breadcrumb" className="hidden md:block bg-blue-950 py-1 px-3">
      <div className="max-w-7xl mx-auto">
        <ol className="flex flex-wrap items-center text-[13px]">
          <li>
            <Link href="/" className="text-blue-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
          </li>

          {breadcrumbItems &&
            breadcrumbItems.length > 0 &&
            breadcrumbItems.map((item, index) => (
              <li key={item.href || index} className="flex flex-row items-center">
                <ChevronRight size={12} className="text-blue-300 mx-1" />
                {item.isCurrent ? (
                  <span className="text-white font-light">{item.label}</span>
                ) : (
                  <Link href={item.href} className="text-blue-300 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
        </ol>
      </div>
    </nav>
  )
}

// Adicionar exportação padrão
export default Breadcrumb
