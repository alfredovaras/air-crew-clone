"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Mail, ChevronRight } from "lucide-react"
import { RiYoutubeFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri"
import { MobileMenu } from "./mobile-menu"
import { LanguageSwitcher } from "./language-switcher"
import { Logo } from "./logo"
import Breadcrumb from "./breadcrumb"

const navItems = [
  {
    name: "Aerospace Medicine",
    href: "/aerospace-medicine",
    color: "blue",
    submenu: [
      {
        name: "Training & Simulation Products",
        href: "/aerospace-medicine/training-simulation-products",
        submenu: [
          {
            name: "High G",
            submenu: [
              {
                name: "Human Training Centrifuge",
                href: "/aerospace-medicine/training-simulation-products/high-g/human-training-centrifuge",
              },
              {
                name: "Short Arm Human Centrifuge",
                href: "/aerospace-medicine/training-simulation-products/high-g/short-arm-human-centrifuge",
              },
              { name: "DESDEMONA", href: "/aerospace-medicine/training-simulation-products/high-g/desdemona" },
            ],
          },
          {
            name: "Spatial Disorientation",
            submenu: [
              {
                name: "AIRFOX DISO",
                href: "/aerospace-medicine/training-simulation-products/spatial-disorientation/airfox-diso",
              },
              {
                name: "AIRFOX ASD",
                href: "/aerospace-medicine/training-simulation-products/spatial-disorientation/airfox-asd",
              },
              {
                name: "Barany Chair",
                href: "/aerospace-medicine/training-simulation-products/spatial-disorientation/barany-chair",
              },
            ],
          },
          {
            name: "Chamber Systems",
            submenu: [
              {
                name: "Hypobaric and Rapid Decompression Chamber",
                href: "/aerospace-medicine/training-simulation-products/chamber-systems/hypobaric-rapid-decompression-chamber",
              },
              {
                name: "Normobaric Hypoxia Training System",
                href: "/aerospace-medicine/training-simulation-products/chamber-systems/normobaric-hypoxia-training-system",
              },
            ],
          },
          {
            name: "Night Vision",
            submenu: [
              {
                name: "NIGHTFOX Night Vision Training System",
                href: "/aerospace-medicine/training-simulation-products/night-vision/nightfox-training-system",
              },
              {
                name: "NIGHTFOX Virtual Terrain Image Generation System",
                href: "/aerospace-medicine/training-simulation-products/night-vision/nightfox-virtual-terrain",
              },
              {
                name: "NIGHTFOX Integrated NV Training System",
                href: "/aerospace-medicine/training-simulation-products/night-vision/nightfox-integrated-system",
              },
            ],
          },
          {
            name: "Anti-G and Breathing",
            submenu: [
              {
                name: "Anti-G Straining Manoeuvres Trainer",
                href: "/aerospace-medicine/training-simulation-products/anti-g-breathing/anti-g-straining-trainer",
              },
              {
                name: "Positive Pressure Breathing Trainer",
                href: "/aerospace-medicine/training-simulation-products/anti-g-breathing/positive-pressure-breathing-trainer",
              },
              {
                name: "Software Controlled Anti-G Valve",
                href: "/aerospace-medicine/training-simulation-products/anti-g-breathing/software-controlled-anti-g-valve",
              },
            ],
          },
          {
            name: "Search and Rescue",
            submenu: [
              {
                name: "Helicopter Rescue Hoist Trainer",
                href: "/aerospace-medicine/training-simulation-products/search-rescue/helicopter-rescue-hoist-trainer",
              },
              {
                name: "Underwater Escape Training System",
                href: "/aerospace-medicine/training-simulation-products/search-rescue/underwater-escape-training-system",
              },
              {
                name: "Basic and Advanced Ejection Seat Trainer",
                href: "/aerospace-medicine/training-simulation-products/search-rescue/ejection-seat-trainer",
              },
            ],
          },
          {
            name: "Flight Simulation",
            submenu: [
              {
                name: "AIRFOX UPRT",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/airfox-uprt",
              },
              {
                name: "DESDEMONA",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/desdemona",
              },
              {
                name: "Flight Training Device for Pilatus PC-21 Trainer Aircraft",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/ftd-pc-21",
              },
              {
                name: "Flight Training Device for Pilatus PC-7 Trainer Aircraft",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/ftd-pc-7",
              },
              {
                name: "Flight Training Device For Alpha-Jet Trainer Aircraft",
                href: "/aerospace-medicine/training-simulation-products/flight-simulation/ftd-alpha-jet",
              },
            ],
          },
          {
            name: "Pilot Selection",
            submenu: [
              {
                name: "Pilot Selection System",
                href: "/aerospace-medicine/training-simulation-products/pilot-selection/pilot-selection-system",
              },
            ],
          },
          {
            name: "Sports Training Equipment",
            submenu: [
              {
                name: "Pilot Selection System",
                href: "/aerospace-medicine/training-simulation-products/sports-training/pilot-selection-system",
              },
              {
                name: "Normobaric Hypoxia Training System",
                href: "/aerospace-medicine/training-simulation-products/sports-training/normobaric-hypoxia-training-system",
              },
            ],
          },
        ],
      },
      {
        name: "Integrated Logistic Support",
        href: "/aerospace-medicine/integrated-logistic-support",
        submenu: [
          { name: "Customer Care", href: "/aerospace-medicine/integrated-logistic-support/customer-care" },
          {
            name: "Assembly, Startup and Training",
            href: "/aerospace-medicine/integrated-logistic-support/assembly-startup-training",
          },
          { name: "Material Management", href: "/aerospace-medicine/integrated-logistic-support/material-management" },
          { name: "Maintenance Service", href: "/aerospace-medicine/integrated-logistic-support/maintenance-service" },
          { name: "Test and Measurement", href: "/aerospace-medicine/integrated-logistic-support/test-measurement" },
          {
            name: "Technical Documentation",
            href: "/aerospace-medicine/integrated-logistic-support/technical-documentation",
          },
        ],
      },
      {
        name: "Human Factors Training & Training Support",
        href: "/aerospace-medicine/human-factors-training",
        submenu: [
          {
            name: "Spatial Disorientation Training",
            href: "/aerospace-medicine/human-factors-training/spatial-disorientation-training",
          },
          { name: "Night Vision Training", href: "/aerospace-medicine/human-factors-training/night-vision-training" },
          {
            name: "Integrated Night Vision Training",
            href: "/aerospace-medicine/human-factors-training/integrated-night-vision-training",
          },
        ],
      },
      {
        name: "Infrastructure & Turn-Key Solutions",
        href: "/aerospace-medicine/infrastructure-solutions",
        submenu: [
          { name: "Architectural Design", href: "/aerospace-medicine/infrastructure-solutions/architectural-design" },
          { name: "Infrastructure", href: "/aerospace-medicine/infrastructure-solutions/infrastructure" },
          { name: "Building Construction", href: "/aerospace-medicine/infrastructure-solutions/building-construction" },
        ],
      },
    ],
  },
  {
    name: "Visual Systems",
    href: "/visual-systems",
    color: "green",
    submenu: [
      { name: "VISIM Image Generator", href: "/visual-systems/visim-image-generator" },
      { name: "Service & Support", href: "/visual-systems/service-support" },
    ],
  },
  {
    name: "Civil Aviation",
    href: "/civil-aviation",
    color: "orange",
    submenu: [
      {
        name: "Flight Simulation Training Devices",
        href: "/civil-aviation/flight-simulation-training-devices",
        submenu: [
          {
            name: "Full Flight Simulators",
            submenu: [
              {
                name: "AIRFOX FFS – LEVEL D",
                href: "/civil-aviation/flight-simulation-training-devices/full-flight-simulators/airfox-ffs-level-d",
              },
              {
                name: "DESDEMONA",
                href: "/civil-aviation/flight-simulation-training-devices/full-flight-simulators/desdemona",
              },
            ],
          },
          {
            name: "Flight Training Devices",
            submenu: [
              {
                name: "AIRFOX UPRT – Motion Based",
                href: "/civil-aviation/flight-simulation-training-devices/flight-training-devices/airfox-uprt-motion",
              },
              {
                name: "AIRFOX UPRT – FTD",
                href: "/civil-aviation/flight-simulation-training-devices/flight-training-devices/airfox-uprt-ftd",
              },
              {
                name: "AIRFOX FTD",
                href: "/civil-aviation/flight-simulation-training-devices/flight-training-devices/airfox-ftd",
              },
            ],
          },
          {
            name: "Spatial Disorientation Training Devices",
            submenu: [
              {
                name: "AIRFOX DISO",
                href: "/civil-aviation/flight-simulation-training-devices/spatial-disorientation/airfox-diso",
              },
              {
                name: "AIRFOX Advanced Spatial Disorientation Trainer",
                href: "/civil-aviation/flight-simulation-training-devices/spatial-disorientation/airfox-advanced",
              },
            ],
          },
        ],
      },
      {
        name: "Training",
        href: "/civil-aviation/training",
        submenu: [
          { name: "Night Vision Training", href: "/civil-aviation/training/night-vision-training" },
          {
            name: "Spatial Disorientation Training and Demonstrations",
            href: "/civil-aviation/training/spatial-disorientation-training",
          },
        ],
      },
      {
        name: "Infrastructure & Turn-Key Solutions",
        href: "/civil-aviation/infrastructure-solutions",
        submenu: [
          { name: "ATO Setup", href: "/civil-aviation/infrastructure-solutions/ato-setup" },
          { name: "Architectural Design", href: "/civil-aviation/infrastructure-solutions/architectural-design" },
        ],
      },
    ],
  },
  {
    name: "News and Events",
    href: "/news",
  },
  { name: "Careers", href: "/careers" },
  { name: "About AMST", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: RiInstagramFill, href: "https://instagram.com", label: "Instagram" },
  { icon: RiYoutubeFill, href: "https://youtube.com", label: "YouTube" },
  { icon: RiLinkedinBoxFill, href: "https://linkedin.com", label: "LinkedIn" },
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSubmenu = (name: string) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(name)
    }
  }

  const closeAllSubmenus = () => {
    setOpenSubmenu(null)
  }

  const handleMouseEnter = (name: string) => {
    setOpenSubmenu(name)
  }

  const handleMouseLeave = () => {
    setOpenSubmenu(null)
  }

  // Detectar scroll para adicionar sombra ao menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Função para obter a cor do item de menu
  const getMenuItemColor = (item: any) => {
    if (item.color === "blue") return "hover:text-blue-700 dark:hover:text-blue-400"
    if (item.color === "green") return "hover:text-green-600 dark:hover:text-green-400"
    if (item.color === "orange") return "hover:text-orange-600 dark:hover:text-orange-400"
    return "hover:text-navy-900 dark:hover:text-white"
  }

  // Função para obter a cor de fundo do submenu
  const getSubmenuHoverColor = (item: any) => {
    if (item.color === "blue") return "hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700"
    if (item.color === "green") return "hover:bg-green-600 hover:text-white dark:hover:bg-green-600"
    if (item.color === "orange") return "hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600"
    return "hover:bg-[rgb(59,130,246)] hover:text-white dark:hover:bg-[rgb(59,130,246)]"
  }

  // Função para renderizar um item de menu com submenu
  const renderMenuWithSubmenu = (item: (typeof navItems)[0]) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const menuItemColor = getMenuItemColor(item)

    return (
      <div
        key={item.name}
        className="relative group"
        onMouseEnter={() => hasSubmenu && handleMouseEnter(item.name)}
        onMouseLeave={handleMouseLeave}
      >
        {hasSubmenu ? (
          <>
            <button
              onClick={() => toggleSubmenu(item.name)}
              className={`flex items-center text-gray-800 dark:text-gray-200 ${menuItemColor} px-3 py-2 text-sm font-medium transition-colors`}
            >
              {item.name}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div
              className={`absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg transition-all duration-200 ${
                openSubmenu === item.name ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div>
                {item.submenu?.map((subitem) => (
                  <div key={subitem.name} className="relative group/sub">
                    {subitem.submenu ? (
                      <>
                        <div
                          className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${getSubmenuHoverColor(
                            item,
                          )} dark:hover:text-white`}
                        >
                          {subitem.href ? (
                            <Link href={subitem.href} onClick={closeAllSubmenus}>
                              {subitem.name}
                            </Link>
                          ) : (
                            <span className="cursor-default">{subitem.name}</span>
                          )}
                          <ChevronRight className="h-4 w-4" />
                        </div>
                        <div className="absolute left-full top-0 w-64 bg-white dark:bg-gray-800 shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                          <div>{subitem.submenu?.map((subsubitem) => renderThirdLevelMenu(subsubitem, item))}</div>
                        </div>
                      </>
                    ) : subitem.href ? (
                      <Link
                        href={subitem.href}
                        className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${getSubmenuHoverColor(
                          item,
                        )} dark:hover:text-white`}
                        onClick={closeAllSubmenus}
                      >
                        {subitem.name}
                      </Link>
                    ) : (
                      <span className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-default`}>
                        {subitem.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <Link
            href={item.href}
            className={`text-gray-800 dark:text-gray-200 ${menuItemColor} px-3 py-2 text-sm font-medium transition-colors`}
            onClick={closeAllSubmenus}
          >
            {item.name}
          </Link>
        )}
      </div>
    )
  }

  // Função para renderizar o terceiro nível do menu
  const renderThirdLevelMenu = (item: any, parentItem: any) => {
    if (item.submenu) {
      return (
        <div key={item.name} className="relative group/subsub">
          <div
            className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${getSubmenuHoverColor(
              parentItem,
            )} dark:hover:text-white`}
          >
            {item.href ? (
              <Link href={item.href} onClick={closeAllSubmenus}>
                {item.name}
              </Link>
            ) : (
              <span className="cursor-default">{item.name}</span>
            )}
            <ChevronRight className="h-4 w-4" />
          </div>
          <div className="absolute left-full top-0 w-64 bg-white dark:bg-gray-800 shadow-lg opacity-0 invisible group-hover/subsub:opacity-100 group-hover/subsub:visible transition-all duration-200">
            <div>
              {item.submenu?.map((subitem: any) =>
                subitem.href ? (
                  <Link
                    key={subitem.name}
                    href={subitem.href}
                    className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${getSubmenuHoverColor(
                      parentItem,
                    )} dark:hover:text-white`}
                    onClick={closeAllSubmenus}
                  >
                    {subitem.name}
                  </Link>
                ) : (
                  <span
                    key={subitem.name}
                    className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-default`}
                  >
                    {subitem.name}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      )
    }

    return item.href ? (
      <Link
        key={item.name}
        href={item.href}
        className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${getSubmenuHoverColor(
          parentItem,
        )} dark:hover:text-white`}
        onClick={closeAllSubmenus}
      >
        {item.name}
      </Link>
    ) : (
      <span key={item.name} className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-default`}>
        {item.name}
      </span>
    )
  }

  useEffect(() => {
    // Fechar submenus quando a rota mudar
    const handleRouteChange = () => {
      setOpenSubmenu(null)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-40 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Breadcrumb como primeiro elemento */}
      <Breadcrumb />

      {/* Top Bar with Social Icons and Contact Info */}
      <div className="bg-navy-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <LanguageSwitcher />
          </div>
          <div className="flex items-center space-x-6">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-500" />
                <span className="text-sm">+43 7722 892 0</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-500" />
                <a href="mailto:office@amst.co.at" className="text-sm hover:underline">
                  office@amst.co.at
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-blue-500 hover:text-white transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo com Link */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="cursor-pointer" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => renderMenuWithSubmenu(item))}
          </nav>

          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-navy-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}
