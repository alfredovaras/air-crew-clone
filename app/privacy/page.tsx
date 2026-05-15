import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations"
import { ScrollAnimation } from "@/components/scroll-animations"
import Image from "next/image"
import { Breadcrumb } from "@/components/breadcrumb"

export default function PrivacyPage() {
  // Breadcrumb items
  const breadcrumbItems = [
    {
      label: "Privacy Policy",
      href: "/privacy",
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
            alt="Privacy Policy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <ScrollAnimation type="fadeInUp">
                <h1 className="text-5xl font-bold mb-6">PRIVACY POLICY</h1>
                <p className="text-xl">
                  Learn how we collect, use, and protect your personal information when you visit our website.
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
                    At AMST, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.2}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                      1. Collection of Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We may collect information about you in a variety of ways. The information we may collect via the
                      Website includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>
                        <strong className="text-navy-900 dark:text-white">Personal Data:</strong> Personally
                        identifiable information, such as your name, email address, and telephone number, that you
                        voluntarily give to us when you register with the Website or when you choose to participate in
                        various activities related to the Website.
                      </li>
                      <li>
                        <strong className="text-navy-900 dark:text-white">Derivative Data:</strong> Information our
                        servers automatically collect when you access the Website, such as your IP address, browser
                        type, operating system, access times, and the pages you have viewed directly before and after
                        accessing the Website.
                      </li>
                      <li>
                        <strong className="text-navy-900 dark:text-white">Financial Data:</strong> Financial
                        information, such as data related to your payment method, that we may collect when you purchase,
                        order, return, exchange, or request information about our services from the Website.
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.3}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">2. Use of Information</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Having accurate information about you permits us to provide you with a smooth, efficient, and
                      customized experience. Specifically, we may use information collected about you via the Website
                      to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Create and manage your account.</li>
                      <li>Email you regarding your account or order.</li>
                      <li>
                        Fulfill and manage purchases, orders, payments, and other transactions related to the Website.
                      </li>
                      <li>Increase the efficiency and operation of the Website.</li>
                      <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
                      <li>Notify you of updates to the Website.</li>
                      <li>Resolve disputes and troubleshoot problems.</li>
                    </ul>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.4}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                      3. Disclosure of Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We may share information we have collected about you in certain situations. Your information may
                      be disclosed as follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>
                        <strong className="text-navy-900 dark:text-white">By Law or to Protect Rights:</strong> If we
                        believe the release of information about you is necessary to respond to legal process, to
                        investigate or remedy potential violations of our policies, or to protect the rights, property,
                        and safety of others, we may share your information as permitted or required by any applicable
                        law, rule, or regulation.
                      </li>
                      <li>
                        <strong className="text-navy-900 dark:text-white">Third-Party Service Providers:</strong> We may
                        share your information with third parties that perform services for us or on our behalf,
                        including payment processing, data analysis, email delivery, hosting services, customer service,
                        and marketing assistance.
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.5}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                      4. Security of Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      We use administrative, technical, and physical security measures to help protect your personal
                      information. While we have taken reasonable steps to secure the personal information you provide
                      to us, please be aware that despite our efforts, no security measures are perfect or impenetrable,
                      and no method of data transmission can be guaranteed against any interception or other type of
                      misuse.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.6}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">5. Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <div className="text-gray-700 dark:text-gray-300">
                      <p>
                        AMST-Systemtechnik GmbH
                        <br />
                        Lamprechtshausener Straße 63
                        <br />
                        5282 Ranshofen, Austria
                        <br />
                        Email: office@amst.co.at
                        <br />
                        Phone: +43 7722 892 0
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.7}>
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
