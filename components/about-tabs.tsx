"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ScrollAnimation } from "./scroll-animations"
import { motion } from "framer-motion"
import { Users, History, FileText } from "lucide-react"

interface AboutTabsProps {
  activeTab: string
}

export function AboutTabs({ activeTab }: AboutTabsProps) {
  const tabs = [
    {
      id: "who-we-are",
      label: "Who We Are",
      href: "/about?tab=who-we-are",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "our-history",
      label: "Our History",
      href: "/about?tab=our-history",
      icon: <History className="w-5 h-5" />,
    },
    {
      id: "company-policy",
      label: "Company Policy",
      href: "/about?tab=company-policy",
      icon: <FileText className="w-5 h-5" />,
    },
  ]

  return (
    <div className="w-full border-b border-gray-200 mb-8">
      <ScrollAnimation type="fadeIn">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 sm:space-x-8 justify-center">
            {tabs.map((tab) => (
              <Link key={tab.id} href={tab.href} className="focus:outline-none">
                <motion.div
                  className={cn(
                    "relative py-4 px-4 sm:px-6 flex items-center gap-2 font-medium text-sm sm:text-base whitespace-nowrap transition-all rounded-t-lg",
                    activeTab === tab.id
                      ? "text-blue-500 bg-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className={activeTab === tab.id ? "text-blue-500" : "text-gray-400"}>{tab.icon}</span>
                  {tab.label}

                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                      layoutId="activeTabIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
