import Link from "next/link"
import { RiYoutubeFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri"
import { Phone, Mail } from "lucide-react"
import { MapModal } from "./map-modal"

const navItems = [
  { name: "Aerospace Medicine", href: "/aerospace-medicine" },
  { name: "Visual Systems", href: "/visual-systems" },
  { name: "Civil Aviation", href: "/civil-aviation" },
  { name: "News and Events", href: "/news" },
  { name: "Careers", href: "/careers" },
  { name: "About AMST", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AMST Description */}
          <div className="col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left pb-8 sm:pb-0 border-b sm:border-0 border-white/20">
            <h3 className="text-lg font-semibold mb-4">AMST</h3>
            <p className="text-sm text-white mb-4">
              World-leading supplier of simulation technology for training, research and development in aviation, space
              and medicine.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-white hover:text-white">
                <RiLinkedinBoxFill className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-white">
                <RiInstagramFill className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-white">
                <RiYoutubeFill className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links - Centered on mobile */}
          <div className="col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left pb-8 sm:pb-0 border-b sm:border-0 border-white/20">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white hover:text-blue-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <hr className="hidden sm:block lg:hidden col-span-2 border-white/20"/>

          {/* Contact Info - Centered on mobile */}
          <div className="col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left pb-8 sm:pb-0 border-b sm:border-0 border-white/20">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <MapModal
                  address="Lamprechtshausener Straße 63, 5282 Ranshofen, Austria"
                  label="Lamprechtshausener Straße 63, 5282 Ranshofen, Austria"
                  className="bg-inherit hover:bg-inherit text-white hover:text-blue-500 flex flex-col sm:flex-row"
                  iconClassName="text-blue-500 hover:text-white"
                />
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-center">
                <Phone size={16} className="min-h-[16px] min-w-[16px] mr-2 text-blue-500" />
                <span className="text-white">+43 7722 892 0</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-center">
                <Mail size={16} className="min-h-[16px] min-w-[16px] mr-2 text-blue-500" />
                <span className="text-white">office@amst.co.at</span>
              </li>
            </ul>
          </div>

          {/* Newsletter - Centered on mobile */}
          <div className="col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-white mb-4 max-w-xs">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="flex flex-col space-y-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-[#111d40] text-white focus:outline-none focus:border-white border border-white/20 rounded-[8px]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-[8px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-white text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AMST-Systemtechnik GmbH. All rights reserved.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:space-x-6 sm:gap-0">
              <Link href="/terms" className="text-white hover:text-blue-500 transition-colors">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-white hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-white hover:text-blue-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
