"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { RiYoutubeFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri"
import { useState } from "react"

type MenuItem = {
  title: string
  href?: string
  color?: string
  submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "Aerospace Medicine",
    href: "/aerospace-medicine",
    color: "blue",
    submenu: [
      {
        title: "Training & Simulation Products",
        href: "/aerospace-medicine/training-simulation-products",
        submenu: [
          {
            title: "High G",
            submenu: [
              {
                title: "Human Training Centrifuge",
                href: "/aerospace-medicine/training-simulation-products/high-g/human-training-centrifuge",
              },
              {
                title: "Short Arm Human Centrifuge",
                href: "/aerospace-medicine/training-simulation-products/high-g/short-arm-human-centrifuge",
              },
              { title: "DESDEMONA", href: "/aerospace-medicine/training-simulation-products/high-g/desdemona" },
            ],
          },
          {
            title: "Spatial Disorientation",
            submenu: [
              {
                title: "AIRFOX DISO",
                href: "/aerospace-medicine/training-simulation-products/spatial-disorientation/airfox-diso",
              },
              {
                title: "AIRFOX ASD",
                href: "/aerospace-medicine/training-simulation-products/spatial-disorientation/airfox-asd",
              },
              {
                title: "Barany Chair",
                href: "/aerospace-medicine/training-simulation-products/spatial-disorientation/barany-chair",
              },
            ],
          },
          {
            title: "Chamber Systems",
            submenu: [
              {
                title: "Hypobaric and Rapid Decompression Chamber",
                href: "/aerospace-medicine/training-simulation-products/chamber-systems/hypobaric-rapid-decompression-chamber",
              },
              {
                title: "Normobaric Hypoxia Training System",
                href: "/aerospace-medicine/training-simulation-products/chamber-systems/normobaric-hypoxia-training-system",
              },
            ],
          },
          {
            title: "Night Vision",
            submenu: [
              {
                title: "NIGHTFOX Night Vision Training System",
                href: "/aerospace-medicine/training-simulation-products/night-vision/nightfox-training-system",
              },
              {
                title: "NIGHTFOX Virtual Terrain Image Generation System",
                href: "/aerospace-medicine/training-simulation-products/night-vision/nightfox-virtual-terrain",
              },
              {
                title: "NIGHTFOX Integrated NV Training System",
                href: "/aerospace-medicine/training-simulation-products/night-vision/nightfox-integrated-system",
              },
            ],
          },
          {
            title: "Anti-G and Breathing",
            submenu: [
              {
                title: "Anti-G Straining Manoeuvres Trainer",
                href: "/aerospace-medicine/training-simulation-products/anti-g-breathing/anti-g-straining-trainer",
              },
              {
                title: "Positive Pressure Breathing Trainer",
                href: "/aerospace-medicine/training-simulation-products/anti-g-breathing/positive-pressure-breathing-trainer",
              },
              {
                title: "Software Controlled Anti-G Valve",
                href: "/aerospace-medicine/training-simulation-products/anti-g-breathing/software-controlled-anti-g-valve",
              },
            ],
          },
          {
            title: "Search and Rescue",
            submenu: [
              {
                title: "Helicopter Rescue Hoist Trainer",
                href: "/aerospace-medicine/training-simulation-products/search-rescue/helicopter-rescue-hoist-trainer",
              },
              {
                title: "Underwater Escape Training System",
                href: "/aerospace-medicine/training-simulation-products/search-rescue/underwater-escape-training-system",
              },
              {
                title: "Basic and Advanced Ejection Seat Trainer",
                href: "/aerospace-medicine/training-simulation-products/search-rescue/ejection-seat-trainer",
              },
            ],
          },
          {
            title: "Flight Simulation",
            submenu: [
              {
                title: "AIRFOX UPRT",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/airfox-uprt",
              },
              {
                title: "DESDEMONA",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/desdemona",
              },
              {
                title: "Flight Training Device for Pilatus PC-21 Trainer Aircraft",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/ftd-pc-21",
              },
              {
                title: "Flight Training Device for Pilatus PC-7 Trainer Aircraft",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/ftd-pc-7",
              },
              {
                title: "Flight Training Device For Alpha-Jet Trainer Aircraft",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/ftd-alpha-jet",
              },
            ],
          },
          {
            title: "Pilot Selection",
            submenu: [
              {
                title: "Pilot Selection System",
                href: "/aerospace-medicine/training-simulation-products/pilot-selection/pilot-selection-system",
              },
            ],
          },
          {
            title: "Sports Training Equipment",
            submenu: [
              {
                title: "Pilot Selection System",
                href: "/aerospace-medicine/training-simulation-products/sports-training/pilot-selection-system",
              },
              {
                title: "Normobaric Hypoxia Training System",
                href: "/aerospace-medicine/training-simulation-products/sports-training/normobaric-hypoxia-training-system",
              },
            ],
          },
        ],
      },
      {
        title: "Integrated Logistic Support",
        href: "/aerospace-medicine/integrated-logistic-support",
        submenu: [
          { title: "Customer Care", href: "/aerospace-medicine/integrated-logistic-support/customer-care" },
          {
            title: "Assembly, Startup and Training",
            href: "/aerospace-medicine/integrated-logistic-support/assembly-startup-training",
          },
          { title: "Material Management", href: "/aerospace-medicine/integrated-logistic-support/material-management" },
          { title: "Maintenance Service", href: "/aerospace-medicine/integrated-logistic-support/maintenance-service" },
          { title: "Test and Measurement", href: "/aerospace-medicine/integrated-logistic-support/test-measurement" },
          {
            title: "Technical Documentation",
            href: "/aerospace-medicine/integrated-logistic-support/technical-documentation",
          },
        ],
      },
      {
        title: "Human Factors Training & Training Support",
        href: "/aerospace-medicine/human-factors-training",
        submenu: [
          {
            title: "Spatial Disorientation Training",
            href: "/aerospace-medicine/human-factors-training/spatial-disorientation-training",
          },
          { title: "Night Vision Training", href: "/aerospace-medicine/human-factors-training/night-vision-training" },
          {
            title: "Integrated Night Vision Training",
            href: "/aerospace-medicine/human-factors-training/integrated-night-vision-training",
          },
        ],
      },
      {
        title: "Infrastructure & Turn-Key Solutions",
        href: "/aerospace-medicine/infrastructure-solutions",
        submenu: [
          { title: "Architectural Design", href: "/aerospace-medicine/infrastructure-solutions/architectural-design" },
          { title: "Infrastructure", href: "/aerospace-medicine/infrastructure-solutions/infrastructure" },
          {
            title: "Building Construction",
            href: "/aerospace-medicine/infrastructure-solutions/building-construction",
          },
        ],
      },
    ],
  },
  {
    title: "Visual Systems",
    href: "/visual-systems",
    color: "green",
    submenu: [
      { title: "VISIM Image Generator", href: "/visual-systems/visim-image-generator" },
      { title: "Service & Support", href: "/visual-systems/service-support" },
    ],
  },
  {
    title: "Civil Aviation",
    href: "/civil-aviation",
    color: "orange",
    submenu: [
      {
        title: "Flight Simulation Training Devices",
        href: "/civil-aviation/flight-simulation-training-devices",
        submenu: [
          {
            title: "Full Flight Simulators",
            submenu: [
              {
                title: "AIRFOX FFS – LEVEL D",
                href: "/civil-aviation/flight-simulation-training-devices/full-flight-simulators/airfox-ffs-level-d",
              },
              {
                title: "DESDEMONA",
                href: "/civil-aviation/flight-simulation-training-devices/full-flight-simulators/desdemona",
              },
            ],
          },
          {
            title: "Flight Training Devices",
            submenu: [
              {
                title: "AIRFOX UPRT – Motion Based",
                href: "/civil-aviation/flight-simulation-training-devices/flight-training-devices/airfox-uprt-motion",
              },
              {
                title: "AIRFOX UPRT – FTD",
                href: "/civil-aviation/flight-simulation-training-devices/flight-training-devices/airfox-uprt-ftd",
              },
              {
                title: "AIRFOX FTD",
                href: "/civil-aviation/flight-simulation-training-devices/flight-training-devices/airfox-ftd",
              },
            ],
          },
          {
            title: "Spatial Disorientation Training Devices",
            submenu: [
              {
                title: "AIRFOX DISO",
                href: "/civil-aviation/flight-simulation-training-devices/spatial-disorientation/airfox-diso",
              },
              {
                title: "AIRFOX Advanced Spatial Disorientation Trainer",
                href: "/civil-aviation/flight-simulation-training-devices/spatial-disorientation/airfox-advanced",
              },
            ],
          },
        ],
      },
      {
        title: "Training",
        href: "/civil-aviation/training",
        submenu: [
          { title: "Night Vision Training", href: "/civil-aviation/training/night-vision-training" },
          {
            title: "Spatial Disorientation Training and Demonstrations",
            href: "/civil-aviation/training/spatial-disorientation-training",
          },
        ],
      },
      {
        title: "Infrastructure & Turn-Key Solutions",
        href: "/civil-aviation/infrastructure-solutions",
        submenu: [
          { title: "ATO Setup", href: "/civil-aviation/infrastructure-solutions/ato-setup" },
          { title: "Architectural Design", href: "/civil-aviation/infrastructure-solutions/architectural-design" },
        ],
      },
    ],
  },
  { title: "News and Events", href: "/news"},
  { title: "Careers", href: "/careers" },
  {
    title: "About AMST",
    href: "/about",
  },
  { title: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: RiInstagramFill, href: "https://facebook.com", label: "Facebook" },
  { icon: RiYoutubeFill, href: "https://youtube.com", label: "YouTube" },
  { icon: RiLinkedinBoxFill, href: "https://linkedin.com", label: "LinkedIn" },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({})

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest(".mobile-menu-container") && !target.closest("button")) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleSubmenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Função para obter a cor do item de menu
  const getMenuItemColor = (item: MenuItem) => {
    if (item.color === "blue") return "hover:text-blue-700 dark:hover:text-blue-400"
    if (item.color === "green") return "hover:text-green-600 dark:hover:text-green-400"
    if (item.color === "orange") return "hover:text-orange-600 dark:hover:text-orange-400"
    return "hover:text-[rgb(59,130,246)] dark:hover:text-[rgb(59,130,246)]"
  }

  // Função recursiva para renderizar itens de menu com múltiplos níveis
  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const isOpen = openMenus[item.title] || false
    const menuItemColor = getMenuItemColor(item)

    return (
      <li key={item.title} className="border-b border-gray-100 dark:border-gray-800 pb-2">
        {hasSubmenu ? (
          <div>
            <button
              onClick={() => toggleSubmenu(item.title)}
              className={`flex items-center justify-between w-full py-2 text-left ${
                level > 0 ? "text-sm pl-4" : "font-medium"
              } text-gray-800 dark:text-gray-200 ${menuItemColor} focus:outline-none`}
              style={{ paddingLeft: `${level * 0.75}rem` }}
            >
              <span>{item.title}</span>
              {openMenus[item.title] ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
            <div
              className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                openMenus[item.title] ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="pl-4">{item.submenu?.map((subitem) => renderMenuItem(subitem, level + 1))}</ul>
            </div>
          </div>
        ) : item.href ? (
          <Link
            href={item.href}
            className={`block py-2 ${
              level > 0 ? "text-sm" : "font-medium"
            } text-gray-800 dark:text-gray-200 ${menuItemColor}`}
            style={{ paddingLeft: `${level * 0.75}rem` }}
            onClick={onClose}
          >
            {item.title}
          </Link>
        ) : (
          <span
            className={`block py-2 ${
              level > 0 ? "text-sm" : "font-medium"
            } text-gray-800 dark:text-gray-200 cursor-default`}
            style={{ paddingLeft: `${level * 0.75}rem` }}
          >
            {item.title}
          </span>
        )}
      </li>
    )
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`mobile-menu-container fixed top-0 right-0 w-80 max-w-full h-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-blue-900 dark:text-white">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-[rgb(59,130,246)] dark:hover:text-[rgb(59,130,246)] focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav>
            <ul className="space-y-4">{menuItems.map((item) => renderMenuItem(item))}</ul>
          </nav>

          <div className="mt-8 pt-6">
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  <social.icon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="block w-full py-3 px-4 bg-blue-500 text-white text-center hover:bg-blue-600  transition-colors rounded-[8px]"
              onClick={onClose}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
