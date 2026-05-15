"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"

type MenuItem = {
  title: string
  href: string
  submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "Products",
    href: "/products",
    submenu: [
      { title: "Flight Simulation", href: "/products/flight-simulation" },
      { title: "Spatial Disorientation", href: "/products/spatial-disorientation" },
      { title: "Altitude Training", href: "/products/altitude-training" },
      { title: "Medical Simulation", href: "/products/medical-simulation" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    submenu: [
      { title: "Maintenance", href: "/services/maintenance" },
      { title: "Training", href: "/services/training" },
      { title: "Consulting", href: "/services/consulting" },
      { title: "Upgrades", href: "/services/upgrades" },
    ],
  },
  {
    title: "Research",
    href: "/research",
    submenu: [
      { title: "Aeromedical", href: "/research/aeromedical" },
      { title: "Human Factors", href: "/research/human-factors" },
      { title: "Aerospace Medicine", href: "/research/aerospace-medicine" },
    ],
  },
  {
    title: "References",
    href: "/references",
    submenu: [
      { title: "Military", href: "/references/military" },
      { title: "Civil Aviation", href: "/references/civil-aviation" },
      { title: "Medical", href: "/references/medical" },
      { title: "Research Institutions", href: "/references/research-institutions" },
    ],
  },
  {
    title: "Company",
    href: "/company",
    submenu: [
      { title: "About AMST", href: "/company/about" },
      { title: "History", href: "/company/history" },
      { title: "Management", href: "/company/management" },
      { title: "Quality", href: "/company/quality" },
    ],
  },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
]

export function Sidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({})

  const toggleSubmenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-200 hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">Navigation</h2>
        <nav>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.title} className="text-gray-700">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-200 rounded transition-colors"
                    >
                      <span>{item.title}</span>
                      {openMenus[item.title] ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    {openMenus[item.title] && (
                      <ul className="pl-6 mt-1 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.title}>
                            <Link
                              href={subitem.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-200 rounded transition-colors"
                            >
                              {subitem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className="block px-4 py-2 hover:bg-gray-200 rounded transition-colors">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-4 mt-6 bg-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Contact Sales</h3>
        <p className="text-sm text-gray-600 mb-3">
          Interested in our products? Contact our sales team for more information.
        </p>
        <div className="mt-8 pt-6">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://facebook.com"
              className="text-gray-600 dark:text-gray-400 hover:text-[rgb(59,130,246)] dark:hover:text-[rgb(59,130,246)] transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-600 dark:text-gray-400 hover:text-[rgb(59,130,246)] dark:hover:text-[rgb(59,130,246)] transition-colors"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 dark:text-gray-400 hover:text-[rgb(59,130,246)] dark:hover:text-[rgb(59,130,246)] transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
              </svg>
            </a>
          </div>
          <Link
            href="/contact"
            className="block w-full py-3 px-4 bg-[rgb(59,130,246)] dark:bg-[rgb(59,130,246)] text-white text-center hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </aside>
  )
}
