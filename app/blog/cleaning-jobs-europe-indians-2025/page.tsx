import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cleaning Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
  description: 'Complete guide to cleaning jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'cleaning jobs Europe for Indians',
    'housekeeping jobs Europe for Indians',
    'janitor jobs Europe for Indians',
    'cleaning jobs Europe salary',
    'living in Europe for Indians',
    'Europe job opportunities',
    'work in Europe 2025',
    'Europe employment visa',
    'European cleaning industry',
    'cleaning worker Europe'
  ],
  openGraph: {
    title: 'Cleaning Jobs in Europe for Indians 2025: Complete Guide',
    description: 'Complete guide to cleaning jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
    images: ['https://images.pexels.com/photos/4099237/pexels-photo-4099237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function CleaningJobsEurope() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-900 via-teal-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Cleaning Jobs in Europe for Indians
                <span className="block text-cyan-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Discover rewarding cleaning opportunities, excellent work-life balance, and career growth in Europe. 
                Get expert guidance to make your European cleaning career dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/career-application"
                  className="bg-white text-cyan-900 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-all duration-300 shadow-lg"
                >
                  Apply Now - Free Consultation
                </Link>
                <Link 
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-900 transition-all duration-300"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/4099237/pexels-photo-4099237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="European Cleaning Industry"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog Button */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Why Europe for Cleaning */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Europe is Perfect for Indian Cleaning Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Europe offers exceptional opportunities for Indian cleaning professionals with its growing service industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🧹</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growing Service Industry</h3>
              <p className="text-gray-600">
                Europe's cleaning and maintenance industry is expanding rapidly with increasing demand for professional services.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Good Wages</h3>
              <p className="text-gray-600">
                Cleaning workers earn €1,800-€3,200 monthly with overtime pay, bonuses, and excellent benefits.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Worker Shortage</h3>
              <p className="text-gray-600">
                Europe faces a shortage of cleaning workers, creating excellent job opportunities for Indians.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation Provided</h3>
              <p className="text-gray-600">
                Many cleaning companies provide accommodation and meals, reducing living costs for workers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety Standards</h3>
              <p className="text-gray-600">
                High safety standards and modern equipment ensure a safe working environment for all cleaning workers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skill Development</h3>
              <p className="text-gray-600">
                Opportunities to learn new cleaning techniques, use modern equipment, and gain valuable international experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Cleaning Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top Cleaning Job Categories in Europe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-demand cleaning roles offering excellent career opportunities and competitive salaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏨
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Hotel Housekeeping</h3>
                  <p className="text-cyan-600 font-semibold">Very High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Clean hotel rooms, public areas, and maintain high standards of cleanliness in hospitality establishments.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€1,800 - €3,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">Basic English</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">No experience needed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏢
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Office Cleaning</h3>
                  <p className="text-blue-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Clean office buildings, corporate facilities, and maintain professional work environments.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€2,000 - €3,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">Basic English</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">1+ years preferred</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏥
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Hospital Cleaning</h3>
                  <p className="text-green-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Clean hospitals, medical facilities, and maintain sterile environments for patient care.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€2,200 - €3,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">Basic English</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Health clearance</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏠
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Residential Cleaning</h3>
                  <p className="text-purple-600 font-semibold">Growing Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Clean private homes, apartments, and residential properties for individual clients.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€1,800 - €3,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">Basic English</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">1+ years preferred</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏭
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Industrial Cleaning</h3>
                  <p className="text-yellow-600 font-semibold">Specialized Role</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Clean factories, warehouses, and industrial facilities with specialized equipment and techniques.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€2,500 - €4,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">Basic English</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Safety training</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🎯
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Cleaning Supervisor</h3>
                  <p className="text-red-600 font-semibold">Leadership Role</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Supervise cleaning teams, manage schedules, and ensure quality standards are maintained.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€2,800 - €4,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">3+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary & Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Salary & Benefits in European Cleaning Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive salaries and excellent benefits package for Indian cleaning professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Cleaning Salaries (Monthly)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">General Cleaner</span>
                  <span className="text-cyan-600 font-bold">€1,800 - €2,800</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Hotel Housekeeping</span>
                  <span className="text-cyan-600 font-bold">€1,800 - €3,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Office Cleaner</span>
                  <span className="text-cyan-600 font-bold">€2,000 - €3,200</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Hospital Cleaner</span>
                  <span className="text-cyan-600 font-bold">€2,200 - €3,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Cleaning Supervisor</span>
                  <span className="text-cyan-600 font-bold">€2,800 - €4,500</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Employee Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🏥</span>
                  <div>
                    <div className="font-semibold">Health Insurance</div>
                    <div className="text-sm text-gray-600">Comprehensive coverage for you and family</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🏠</span>
                  <div>
                    <div className="font-semibold">Accommodation</div>
                    <div className="text-sm text-gray-600">Company-provided housing or allowance</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🍽️</span>
                  <div>
                    <div className="font-semibold">Meals</div>
                    <div className="text-sm text-gray-600">Lunch provided or meal allowance</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🏖️</span>
                  <div>
                    <div className="font-semibold">Paid Vacation</div>
                    <div className="text-sm text-gray-600">20-25 days paid vacation per year</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🛡️</span>
                  <div>
                    <div className="font-semibold">Safety Equipment</div>
                    <div className="text-sm text-gray-600">All safety gear and cleaning supplies provided</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Visa Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              European Work Visa Process for Cleaning Workers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your European work permit for cleaning jobs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Job Offer</h3>
              <p className="text-gray-600 text-sm">
                Secure a job offer from a European cleaning company who will sponsor your work permit
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Work Permit Application</h3>
              <p className="text-gray-600 text-sm">
                Employer applies for work permit at the relevant European immigration authority
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Visa Application</h3>
              <p className="text-gray-600 text-sm">
                Apply for work visa at the European consulate in India with all required documents
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Arrival & Work</h3>
              <p className="text-gray-600 text-sm">
                Arrive in Europe and start working with your approved work permit
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Personal Documents</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Valid passport (6+ months validity)</li>
                  <li>• Passport-size photographs</li>
                  <li>• Birth certificate</li>
                  <li>• Marriage certificate (if applicable)</li>
                  <li>• Police clearance certificate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Professional Documents</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Work experience certificates</li>
                  <li>• Skill certificates (if any)</li>
                  <li>• CV/Resume</li>
                  <li>• Job offer letter</li>
                  <li>• Health insurance proof</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in Europe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Living in Europe - What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about life in Europe as an Indian cleaning professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation</h3>
              <p className="text-gray-600 mb-4">
                Many cleaning companies provide accommodation or housing allowance to reduce living costs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Company Housing:</span>
                  <span className="font-semibold">€200-€500/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Apartment:</span>
                  <span className="font-semibold">€600-€1,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Shared Room:</span>
                  <span className="font-semibold">€300-€800</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Food & Dining</h3>
              <p className="text-gray-600 mb-4">
                Many cleaning companies provide meals, and groceries are affordable in most European countries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Company Meals:</span>
                  <span className="font-semibold">Often provided</span>
                </div>
                <div className="flex justify-between">
                  <span>Groceries (Monthly):</span>
                  <span className="font-semibold">€200-€400</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant Meal:</span>
                  <span className="font-semibold">€10-€25</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <p className="text-gray-600 mb-4">
                Many cleaning companies provide transportation to and from work sites.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Work Transport:</span>
                  <span className="font-semibold">Often provided</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Pass:</span>
                  <span className="font-semibold">€40-€100</span>
                </div>
                <div className="flex justify-between">
                  <span>Single Ticket:</span>
                  <span className="font-semibold">€2-€5</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Excellent healthcare systems with mandatory health insurance for all workers.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Health Insurance:</span>
                  <span className="font-semibold">€100-€300/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Doctor Visit:</span>
                  <span className="font-semibold">€5-€20</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency:</span>
                  <span className="font-semibold">Covered by insurance</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Language Learning</h3>
              <p className="text-gray-600 mb-4">
                Many companies provide language classes to help workers integrate better.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Company Classes:</span>
                  <span className="font-semibold">Often free</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Classes:</span>
                  <span className="font-semibold">€200-€500</span>
                </div>
                <div className="flex justify-between">
                  <span>Online Courses:</span>
                  <span className="font-semibold">€50-€200</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Entertainment</h3>
              <p className="text-gray-600 mb-4">
                Rich cultural life with museums, theaters, festivals, and outdoor activities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cinema Ticket:</span>
                  <span className="font-semibold">€8-€15</span>
                </div>
                <div className="flex justify-between">
                  <span>Museum Entry:</span>
                  <span className="font-semibold">€5-€15</span>
                </div>
                <div className="flex justify-between">
                  <span>Sports Activities:</span>
                  <span className="font-semibold">€10-€30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-cyan-900 via-teal-800 to-green-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your European Cleaning Career Journey?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian cleaning professionals who achieved their European career dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">2800+</div>
              <div className="text-cyan-200">Cleaning Workers Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">97%</div>
              <div className="text-cyan-200">Visa Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-cyan-200">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/career-application"
              className="bg-white text-cyan-900 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-all duration-300 shadow-lg"
            >
              Apply Now - Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-900 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
