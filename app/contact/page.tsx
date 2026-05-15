"use client"

import Image from "next/image"
import { MapModal } from "@/components/map-modal"
import { MapPin, Building2, Phone, Mail, VoicemailIcon as Fax, Briefcase } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { useState } from "react"

export default function ContactPage() {
  const [emailError, setEmailError] = useState("")

  const blockedDomains = [
    "123.com",
    "qq.com",
    "10minutemail.com",
    "aol.com",
    "anonbox.net",
    "burnermail.io",
    "dispostable.com",
    "emailondeck.com",
    "fakeinbox.com",
    "getnada.com",
    "gmail.com",
    "guerrillamail.com",
    "hotmail.com",
    "icloud.com",
    "live.com",
    "mail.com",
    "maildrop.cc",
    "mailinator.com",
    "mintemail.com",
    "moakt.com",
    "msn.com",
    "mytemp.email",
    "outlook.com",
    "protonmail.com",
    "sharklasers.com",
    "temp-mail.org",
    "throwawaymail.com",
    "tmail.ws",
    "trashmail.com",
    "yahoo.com",
    "yandex.com",
    "yopmail.com",
    "zoho.com",
    "qq.com",
    "vip.qq.com",
    "163.com",
    "126.com",
    "yeah.net",
    "sina.com",
    "sina.cn",
    "aliyun.com",
    "foxmail.com",
  ]

  const validateEmail = (e) => {
    const email = e.target.value
    if (email) {
      const domain = email.split("@")[1]
      if (domain && blockedDomains.includes(domain.toLowerCase())) {
        setEmailError("This email domain is not allowed. Please use a different email address.")
        e.target.setCustomValidity("This email domain is not allowed.")
      } else {
        setEmailError("")
        e.target.setCustomValidity("")
      }
    } else {
      setEmailError("")
      e.target.setCustomValidity("")
    }
  }

  return (
    <div className="bg-gray-50 text-gray-900 mt-[124px] md:mt-[152px]">
      {/* Hero Section */}
      <PageHero
        subtitle="Contact Information"
        title="Get in Touch"
        description="Our team of experts is ready to provide you with information about our advanced aerospace solutions."
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 mb-4">
                  {/* Mudando de vermelho para azul */}
                  <div className="w-8 h-px bg-blue-600"></div>
                  <span className="text-gray-500 uppercase tracking-widest text-sm">Message</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 rounded-[8px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 rounded-[8px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 bg-gray-50  rounded-[8px] border ${emailError ? "border-red-500" : "border-gray-200"} text-gray-900 focus:outline-none focus:border-blue-600`}
                    onChange={validateEmail}
                    onBlur={validateEmail}
                  />
                  {emailError && <p className="mt-1 text-red-500 text-sm">{emailError}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 rounded-[8px]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 rounded-[8px]"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="privacy" name="privacy" required className="mt-1 mr-3" />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    I have read and agree to the{" "}
                    <a href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    *
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center rounded-[8px]"
                >
                  <span>Send Message</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>

            {/* Map/Info Section */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 mb-4">
                  {/* Mudando de vermelho para azul */}
                  <div className="w-8 h-px bg-blue-600"></div>
                  <span className="text-gray-500 uppercase tracking-widest text-sm">Location</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Headquarters</h2>
              </div>

              <div className="aspect-video bg-gray-100 mb-8 relative rounded-[16px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
                  alt="AMST Headquarters"
                  fill
                  className="object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapModal
                    address="AMST-Systemtechnik GmbH, Lamprechtshausener Strasse 63, 5282 Ranshofen, Austria"
                    label=""
                    buttonText="View Location"
                    className="inline-flex items-center px-4 py-2 bg-blue-700 text-white hover:bg-gray-300 hover:text-gray-700 transition-colors rounded-[8px]"
                    iconClassName="h-5 w-5 mr-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="justify-center sm:justify-start text-center sm:text-left">
                  <div className="flex items-center mb-2 justify-center sm:justify-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-sm uppercase tracking-wider text-gray-500">Address</h3>
                  </div>
                  <p className="text-gray-800">AMST-Systemtechnik GmbH</p>
                  <p className="text-gray-800">Lamprechtshausener Strasse 63</p>
                  <p className="text-gray-800">5282 Ranshofen - Austria</p>
                </div>

                <div className="justify-center sm:justify-start text-center sm:text-left">
                  <div className="flex items-center mb-2 justify-center sm:justify-start">
                    <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-sm uppercase tracking-wider text-gray-500">Contact</h3>
                  </div>
                  <div className="flex items-center mb-1 justify-center sm:justify-start">
                    <Phone className="w-5 h-5 text-blue-600 mr-2" />
                    <p className="text-gray-800">+43 7722 892 0</p>
                  </div>
                  <div className="flex items-center mb-1 justify-center sm:justify-start">
                    <Fax className="w-5 h-5 text-blue-600 mr-2" />
                    <p className="text-gray-800">+43 7722 892 399</p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    <a href="mailto:office@amst.co.at" className="text-gray-800 hover:underline">
                      office@amst.co.at
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Units - Seção de Departamentos Especializados */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-white/50"></div>
              <span className="text-blue-100 uppercase tracking-widest text-sm font-medium">
                SPECIALIZED DEPARTMENTS
              </span>
              <div className="w-12 h-px bg-white/50"></div>
            </div>
            <h2 className="text-4xl font-bold text-white">Our Business Units</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AEROSPACE MEDICINE AND VISUAL SYSTEMS - Ocupa 1/3 do espaço */}
            <div className="bg-white text-gray-800 relative overflow-hidden shadow-lg rounded-[16px]">
              <div className="p-8">
                <h2 className="text-xl font-bold mb-8 tracking-wider text-blue-600 text-center sm:text-start">
                  AEROSPACE MEDICINE AND VISUAL SYSTEMS
                </h2>

                <div className="space-y-8">
                  <div className="justify-center text-center sm:justify-start sm:text-left">
                    <div className="flex justify-center items-center mb-3 sm:justify-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-sm uppercase tracking-wider text-gray-500">ADDRESS</h3>
                    </div>
                    <p className="text-gray-800">AMST-Systemtechnik GmbH</p>
                    <p className="text-gray-800">Lamprechtshausener Strasse 63</p>
                    <p className="text-gray-800">5282 Ranshofen - Austria</p>
                    <div className="flex mt-4 justify-center sm:justify-start">
                      <MapModal
                        address="AMST-Systemtechnik GmbH, Lamprechtshausener Strasse 63, 5282 Ranshofen, Austria"
                        label=""
                        buttonText="View Location"
                        className="inline-flex justify-center items-center px-4 py-2 bg-blue-700 text-white hover:bg-gray-300 hover:text-gray-700 transition-colors rounded-[8px]"
                        iconClassName="h-5 w-5 mr-2"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-center items-center mb-3 sm:justify-start sm:text-left">
                      <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-sm uppercase tracking-wider text-gray-500">OFFICE</h3>
                    </div>
                    <div className="flex justify-center items-center mb-1 sm:justify-start sm:text-left">
                      <Phone className="w-5 h-5 text-blue-600 mr-2" />
                      <p className="text-gray-800">+43 7722 892 0</p>
                    </div>
                    <div className="flex justify-center items-center mb-1 sm:justify-start sm:text-left">
                      <Fax className="w-5 h-5 text-blue-600 mr-2" />
                      <p className="text-gray-800">+43 7722 892 399</p>
                    </div>
                    <div className="flex justify-center items-center sm:justify-start sm:text-left">
                      <Mail className="w-5 h-5 text-blue-600 mr-2" />
                      <a href="mailto:office@amst.co.at" className="text-gray-800 hover:underline">
                        office@amst.co.at
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-center items-center mb-3 sm:justify-start sm:text-left">
                      <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-sm uppercase tracking-wider text-gray-500">SALES DEPARTMENT</h3>
                    </div>
                    <div className="flex justify-center items-center mb-1 sm:justify-start sm:text-left">
                      <Phone className="w-5 h-5 text-blue-600 mr-2" />
                      <p className="text-gray-800">+43 7722 892 221</p>
                    </div>
                    <div className="flex justify-center items-center mb-1 sm:justify-start sm:text-left">
                      <Fax className="w-5 h-5 text-blue-600 mr-2" />
                      <p className="text-gray-800">+43 7722 892 498</p>
                    </div>
                    <div className="flex justify-center items-center sm:justify-start sm:text-left">
                      <Mail className="w-5 h-5 text-blue-600 mr-2" />
                      <a href="mailto:sales@amst.co.at" className="text-gray-800 hover:underline">
                        sales@amst.co.at
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CIVIL AVIATION - Ocupa 2/3 do espaço */}
            <div className="bg-white text-gray-800 relative overflow-hidden shadow-lg rounded-[16px] lg:col-span-2">
              <div className="p-8">
                <h2 className="text-xl font-bold mb-8 tracking-wider text-blue-600 text-center sm:text-start">CIVIL AVIATION</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Austria Office */}
                  <div className="space-y-8">
                    <div className="justify-center text-center sm:justify-start sm:text-left">
                      <div className="flex justify-center items-center mb-3 sm:justify-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="text-sm uppercase tracking-wider text-gray-500">ADDRESS</h3>
                      </div>
                      <p className="text-gray-800">AMST-Aviation GmbH</p>
                      <p className="text-gray-800">Lamprechtshausener Strasse 63</p>
                      <p className="text-gray-800">5282 Ranshofen - Austria</p>
                      <div className="flex mt-4 justify-center sm:justify-start">
                        <MapModal
                          address="AMST-Aviation GmbH, Lamprechtshausener Strasse 63, 5282 Ranshofen, Austria"
                          label=""
                          buttonText="View Location"
                          className="inline-flex items-center px-4 py-2 bg-blue-700 text-white hover:bg-gray-300 hover:text-gray-700 transition-colors rounded-[8px]"
                          iconClassName="h-5 w-5 mr-2"
                        />
                      </div>
                    </div>

                    <div className="justify-center text-center sm:justify-start sm:text-left">
                      <div className="flex items-center mb-3 justify-center sm:justify-start">
                        <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="text-sm uppercase tracking-wider text-gray-500">OFFICE</h3>
                      </div>
                      <div className="flex items-center mb-1 justify-center sm:justify-start">
                        <Phone className="w-5 h-5 text-blue-600 mr-2" />
                        <p className="text-gray-800">+43 7722 892 0</p>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start">
                        <Mail className="w-5 h-5 text-blue-600 mr-2" />
                        <a href="mailto:office@amst-aviation.com" className="text-gray-800 hover:underline">
                          office@amst-aviation.com
                        </a>
                      </div>
                    </div>

                    <div className="justify-center text-center sm:justify-start sm:text-left">
                      <div className="flex items-center mb-3 justify-center sm:justify-start">
                        <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="text-sm uppercase tracking-wider text-gray-500">SALES DEPARTMENT</h3>
                      </div>
                      <div className="flex items-center mb-1 justify-center sm:justify-start">
                        <Phone className="w-5 h-5 text-blue-600 mr-2" />
                        <p className="text-gray-800">+43 7722 892 0</p>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start">
                        <Mail className="w-5 h-5 text-blue-600 mr-2" />
                        <a href="mailto:sales@amst-aviation.com" className="text-gray-800 hover:underline">
                          sales@amst-aviation.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Netherlands Office */}
                  <div className="space-y-8">
                    <div className="justify-center text-center sm:justify-start sm:text-left">
                      <div className="flex justify-center items-center mb-3 sm:justify-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-sm uppercase tracking-wider text-gray-500">ADDRESS</h3>
                    </div>
                      <p className="text-gray-800">AMST-Aviation B.V.</p>
                      <p className="text-gray-800">Lireweg 15</p>
                      <p className="text-gray-800">2153 PH Nieuw-Vennep</p>
                      <p className="text-gray-800">The Netherlands</p>
                      <div className="flex mt-4 justify-center sm:justify-start">
                        <MapModal
                          address="AMST-Aviation B.V., Lireweg 15, 2153 PH Nieuw-Vennep, Netherlands"
                          label=""
                          buttonText="View Location"
                          className="inline-flex items-center px-4 py-2 bg-blue-700 text-white hover:bg-gray-300 hover:text-gray-700 transition-colors rounded-[8px]"
                          iconClassName="h-5 w-5 mr-2"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-3 justify-center sm:justify-start">
                        <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="text-sm uppercase tracking-wider text-gray-500">OFFICE</h3>
                      </div>
                      <div className="flex items-center mb-1 justify-center sm:justify-start">
                        <Phone className="w-5 h-5 text-blue-600 mr-2" />
                        <p className="text-gray-800">+31 85 0161 900</p>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start">
                        <Mail className="w-5 h-5 text-blue-600 mr-2" />
                        <a href="mailto:office@amst-aviation.com" className="text-gray-800 hover:underline">
                          office@amst-aviation.com
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-3 justify-center sm:justify-start">
                        <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="text-sm uppercase tracking-wider text-gray-500">SALES</h3>
                      </div>
                      <div className="flex items-center mb-1 justify-center sm:justify-start">
                        <Phone className="w-5 h-5 text-blue-600 mr-2" />
                        <p className="text-gray-800">+31 85 0161 900</p>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start">
                        <Mail className="w-5 h-5 text-blue-600 mr-2" />
                        <a href="mailto:sales@amst-aviation.com" className="text-gray-800 hover:underline">
                          sales@amst-aviation.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
