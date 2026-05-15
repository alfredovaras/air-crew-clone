import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Calendar, MapPin, Briefcase, FileText, Download } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { PageHero } from "@/components/page-hero"

const jobOpenings = [
  {
    title: "Quality Technician (m/f/d)",
    location: "Ranshofen, Austria",
    type: "Full-time",
    description:
      "Support in supplier selection, auditing and factory acceptance. Assessment and continuous optimization of quality processes together with suppliers. Supplier development and relationship management. Planning and monitoring of initial sample deliveries. Test equipment management and consulting.",
    date: "Posted on May 10, 2023",
    salary: "€48,346.48+ gross per year based on qualifications and experience",
    requirements:
      "Completed relevant technical education, preferably in mechanical engineering (HTL, technical school, master craftsman). Knowledge of welding technology, NDT technologies and confident handling of technical drawings an advantage. Relevant professional experience. Very good German and English skills. Communication and teamwork skills. Independent and precise way of working. Willingness to travel.",
    benefits:
      "Exceptional and innovative high-tech products. Highly varied activities. Collegial atmosphere in a modern family business. Flat hierarchy with short decision-making paths. Flexible working hours and home office options. International working environment. Flying in the flight simulator. Various social benefits. Discounted meals in the canteen.",
    contact: "Michaela Gamperer, Human Resources, +43 7722 892 0, careers@amst.at",
    pdfUrl: "/pdfs/quality-technician-job-description.pdf",
    pdfName: "Quality_Technician_Job_Description.pdf",
  },
  {
    title: "International Sales Representative (m/f/d)",
    location: "Ranshofen, Austria",
    type: "Full-time",
    description:
      "Advising and supporting existing customers as well as proactively acquiring new international customers. Successful negotiation and international sales contract design. Commercial project support (calculations, invoices, bank guarantees, etc.). Representation at customer visits, congresses and trade fairs. Internal and external correspondence. Close cooperation with specialist departments.",
    date: "Posted on May 15, 2023",
    salary: "€54,727.68+ gross per year based on qualifications and experience",
    requirements:
      "Completed commercial or technical education. Several years of professional experience in sales, ideally in special machine or plant engineering. Fluent German and English. High international willingness to travel approx. 25-30%. Strong communication skills, empathy. Customer-oriented motivated personality.",
    benefits:
      "Exceptional and innovative high-tech products. Highly varied activities. Collegial atmosphere in a modern family business. Flat hierarchy with short decision-making paths. Flexible working hours and home office options. International working environment. Flying in the flight simulator. Various social benefits. Discounted meals in the canteen.",
    contact: "Michaela Gamperer, Human Resources, +43 7722 892 0, careers@amst.at",
    pdfUrl: "/pdfs/international-sales-representative-job-description.pdf",
    pdfName: "International_Sales_Representative_Job_Description.pdf",
  },
]

export default function CareersPage() {
  return (
    <>
      <div className="bg-gray-50 text-gray-900 min-h-screen mt-[124px] md:mt-[152px]">
        {/* Hero Section */}
        <PageHero
          subtitle="Join Our Team"
          title="Carrers At AMST"
          description="Join our team of experts and contribute to the development of cutting-edge simulation technology for aviation, space, and medicine."
          imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
        />

        {/* Why Join Us Section */}
        <section className="py-16 px-4 bg-white w-full">
          <div className="container mx-auto">
            <ScrollAnimation type="fadeIn">
              <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">WHY JOIN AMST?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 shadow-lg rounded-[16px]">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Innovation</h3>
                  <p className="text-gray-700">
                    At AMST, you'll be at the forefront of technological innovation, working on projects that push the
                    boundaries of simulation technology and contribute to safer training environments.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 shadow-lg rounded-[16px]">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Global Impact</h3>
                  <p className="text-gray-700">
                    Our solutions are used by leading organizations worldwide. Your work will have a direct impact on
                    the training and safety of pilots, astronauts, and medical professionals around the globe.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 shadow-lg rounded-[16px]">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Professional Growth</h3>
                  <p className="text-gray-700">
                    We invest in our team members' development through continuous learning opportunities, international
                    collaboration, and exposure to diverse projects and technologies.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-16 px-4 bg-gray-100 w-full">
          <div className="container mx-auto">
            <ScrollAnimation type="fadeInUp">
              <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">CURRENT OPENINGS</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {jobOpenings.map((job, index) => (
                  <article key={index} className="bg-white p-8 shadow-lg rounded-[16px]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">{job.title}</h3>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{job.type}</span>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-2">Description:</h4>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-2">Requirements:</h4>
                      <p className="text-gray-700 mb-4">{job.requirements}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-2">We Offer:</h4>
                      <p className="text-gray-700 mb-4">{job.benefits}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-2">Salary:</h4>
                      <p className="text-gray-700 mb-4">{job.salary}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-2">Contact:</h4>
                      <p className="text-gray-700 mb-4">{job.contact}</p>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{job.date}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link
                        href={`/careers/${job.title.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`}
                        className="inline-flex items-center bg-blue-600 text-white p-3 font-medium hover:bg-blue-700 transition-colors rounded-[8px] justify-between"
                      >
                        Apply Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                      <a
                        href={job.pdfUrl}
                        download={job.pdfName}
                        className="inline-flex items-center bg-gray-200 text-navy-900 p-3 font-medium hover:bg-gray-300 transition-colors rounded-[8px] justify-between"
                      >
                        Download PDF
                        <Download className="h-5 w-5 mr-2" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Section - Agora com o mesmo estilo das páginas /about e /contact */}
        <section className="py-20 px-4 bg-blue-700 text-white w-full">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="mb-6 inline-block">
                <div className="bg-blue-500/30 backdrop-blur-sm px-4 py-1 border border-blue-400/30 rounded-[8px]">
                  <span className="text-sm font-medium text-blue-100">Open Application</span>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Don't see a position that fits?</h2>
              <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how
                you can contribute to AMST.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-700 px-8 py-3 font-medium hover:bg-gray-100 transition-colors rounded-[8px]"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
