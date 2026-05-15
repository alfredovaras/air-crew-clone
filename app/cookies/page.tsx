import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations"
import { ScrollAnimation } from "@/components/scroll-animations"
import Image from "next/image"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CookiesPage() {
  // Breadcrumb items
  const breadcrumbItems = [
    {
      label: "Cookie Policy",
      href: "/cookies",
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
            alt="Cookie Policy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <ScrollAnimation type="fadeInUp">
                <h1 className="text-5xl font-bold mb-6">COOKIE POLICY</h1>
                <p className="text-xl">
                  Learn how we use cookies and similar technologies to enhance your browsing experience.
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
                    This Cookie Policy explains how AMST uses cookies and similar technologies to recognize you when you
                    visit our website. It explains what these technologies are and why we use them, as well as your
                    rights to control our use of them.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.2}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">What are cookies?</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      Cookies are small data files that are placed on your computer or mobile device when you visit a
                      website. Cookies are widely used by website owners in order to make their websites work, or to
                      work more efficiently, as well as to provide reporting information.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.3}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Why do we use cookies?</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      We use first-party and third-party cookies for several reasons. Some cookies are required for
                      technical reasons in order for our Website to operate, and we refer to these as "essential" or
                      "strictly necessary" cookies. Other cookies also enable us to track and target the interests of
                      our users to enhance the experience on our Website. Third parties serve cookies through our
                      Website for advertising, analytics and other purposes.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.4}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Types of cookies we use</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The specific types of first and third-party cookies served through our Website include:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-gray-700 dark:text-gray-300">
                      <li>
                        <strong className="text-navy-900 dark:text-white">Essential website cookies:</strong> These
                        cookies are strictly necessary to provide you with services available through our Website and to
                        use some of its features, such as access to secure areas.
                      </li>
                      <li>
                        <strong className="text-navy-900 dark:text-white">
                          Performance and functionality cookies:
                        </strong>{" "}
                        These cookies are used to enhance the performance and functionality of our Website but are
                        non-essential to their use. However, without these cookies, certain functionality may become
                        unavailable.
                      </li>
                      <li>
                        <strong className="text-navy-900 dark:text-white">Analytics and customization cookies:</strong>{" "}
                        These cookies collect information that is used either in aggregate form to help us understand
                        how our Website is being used or how effective our marketing campaigns are, or to help us
                        customize our Website for you.
                      </li>
                      <li>
                        <strong className="text-navy-900 dark:text-white">Advertising cookies:</strong> These cookies
                        are used to make advertising messages more relevant to you. They perform functions like
                        preventing the same ad from continuously reappearing, ensuring that ads are properly displayed
                        for advertisers, and in some cases selecting advertisements that are based on your interests.
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.5}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                      How can you control cookies?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                      rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager
                      allows you to select which categories of cookies you wish to accept or reject. You can also
                      control cookies by setting your browser to refuse all or some browser cookies, or to alert you
                      when websites set or access cookies. If you disable or refuse cookies, please note that some parts
                      of this website may become inaccessible or not function properly.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.6}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                      How often will we update this Cookie Policy?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      We may update this Cookie Policy from time to time in order to reflect, for example, changes to
                      the cookies we use or for other operational, legal or regulatory reasons. Please therefore
                      re-visit this Cookie Policy regularly to stay informed about our use of cookies and related
                      technologies.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation type="fadeIn" delay={0.7}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Contact us</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      If you have any questions about our use of cookies or other technologies, please contact us at:
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

                <ScrollAnimation type="fadeIn" delay={0.8}>
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
