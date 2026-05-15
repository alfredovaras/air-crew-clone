"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"

interface MenuItem {
  name: string
  href: string
  submenu?: MenuItem[]
}

interface MultiLevelMenuProps {
  items: MenuItem[]
  className?: string
}

export function MultiLevelMenu({ items, className = "" }: MultiLevelMenuProps) {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({})

  const toggleSubmenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const isOpen = openMenus[item.name] || false
    const paddingLeft = depth > 0 ? `${depth * 1}rem` : "0"

    return (
      <li key={item.name} className="relative">
        {hasSubmenu ? (
          <>
            <button
              onClick={() => toggleSubmenu(item.name)}
              className={`flex items-center justify-between w-full text-left px-4 py-2 text-gray-800 hover:text-navy-900 transition-colors ${
                depth > 0 ? "text-sm" : ""
              }`}
              style={{ paddingLeft }}
            >
              <span>{item.name}</span>
              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {isOpen && (
              <ul className="pl-4 space-y-1 border-l border-gray-200 ml-4">
                {item.submenu?.map((subitem) => renderMenuItem(subitem, depth + 1))}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className={`block px-4 py-2 text-gray-800 hover:text-navy-900 transition-colors ${depth > 0 ? "text-sm" : ""}`}
            style={{ paddingLeft }}
          >
            {item.name}
          </Link>
        )}
      </li>
    )
  }

  return (
    <nav className={className}>
      <ul className="space-y-1">{items.map((item) => renderMenuItem(item))}</ul>
    </nav>
  )
}
