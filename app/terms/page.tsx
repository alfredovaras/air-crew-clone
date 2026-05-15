import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations"
import { ScrollAnimation } from "@/components/scroll-animations"
import Image from "next/image"
import { Breadcrumb } from "@/components/breadcrumb"

export default function TermsPage() {
  // Breadcrumb items
  const breadcrumbItems = [
    {
      label: "Terms of Use",
      href: "/terms",
      isCurrent: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[300px]">
          <Image
            src="https://etcaircrewtraining.com/images/training.jpg"
            alt="Terms of Use"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <ScrollAnimation type="fadeInUp">
                <h1 className="text-5xl font-bold mb-6">TERMS OF USE</h1>
                <p className="text-xl">
                  Please read these terms and conditions carefully before using our website and services.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <div className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="prose dark:prose-invert max-w-none prose-headings:text-navy-900 dark:prose-headings:text-white prose-a:text-red-500 dark:prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline">
                <ScrollAnimation type="fadeIn" delay={0.1}>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    Welcome to the AMST website. By accessing and using this website, you accept and agree to be bound
                    by the terms and provision of this agreement.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.2}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      By accessing and using this website, you accept and agree to be bound by the terms and provision
                      of this agreement. In addition, when using this website's particular services, you shall be
                      subject to any posted guidelines or rules applicable to such services.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.3}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">2. Description of Service</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      AMST provides users with access to a rich collection of resources, including various
                      communications tools, forums, and personalized content through its network of properties. The
                      service includes all aspects of the AMST website.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.4}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                      3. Modifications to this Agreement
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      AMST reserves the right to change the terms, conditions, and notices under which the AMST website
                      is offered. You are responsible for regularly reviewing these terms and conditions.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.5}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">4. Privacy Policy</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      Registration data and certain other information about you are subject to our Privacy Policy. For
                      more information, see our full{" "}
                      <a href="/privacy" className="text-red-500 dark:text-red-400 hover:underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.6}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                      5. User Account, Password, and Security
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      You are responsible for maintaining the confidentiality of the password and account, and are fully
                      responsible for all activities that occur under your password or account.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.7}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                      6. Limitation of Liability
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      In no event shall AMST be liable for any direct, indirect, incidental, special, or consequential
                      damages arising out of the use of or inability to use the service.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.8}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">7. Governing Law</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      This agreement shall be governed by and construed in accordance with the laws of Austria, without
                      giving effect to any principles of conflicts of law.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.9}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Last updated: January 1, 2023</p>
                  </div>
                </ScrollAnimation>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
