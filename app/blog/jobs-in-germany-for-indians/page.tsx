import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jobs in Germany for Indians 2025: Complete Guide & Opportunities',
  description: 'Complete guide to jobs in Germany for Indians. Work permits, visa process, salary, living costs, and career opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'jobs in Germany for Indians',
    'work permit Germany for Indians',
    'Germany work visa for Indians',
    'jobs in Germany salary',
    'living in Germany for Indians',
    'Germany job opportunities',
    'work in Germany 2025',
    'Germany employment visa',
    'German language jobs',
    'IT jobs in Germany'
  ],
  openGraph: {
    title: 'Jobs in Germany for Indians 2025: Complete Guide',
    description: 'Complete guide to jobs in Germany for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
    images: ['https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function JobsGermany() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-900 via-yellow-800 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Jobs in Germany for Indians
                <span className="block text-yellow-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                Discover high-paying job opportunities, excellent work-life balance, and career growth in Germany. 
                Get expert guidance to make your German career dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/career-application"
                  className="bg-white text-yellow-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-300 shadow-lg"
                >
                  Apply Now - Free Consultation
                </Link>
                <Link 
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-yellow-900 transition-all duration-300"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Germany Office Building"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Are You Facing These Challenges?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many Indian professionals struggle with these common problems when planning to work in Germany
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">German Language Barrier</h3>
              <p className="text-gray-600">
                Most jobs require German language proficiency (B1-B2 level), making it difficult for English-only speakers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complex Work Visa Process</h3>
              <p className="text-gray-600">
                German work visa requires job offer, qualification recognition, and extensive documentation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Degree Recognition Issues</h3>
              <p className="text-gray-600">
                Indian degrees need recognition through Anabin database, which can be time-consuming and complex.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Living Costs</h3>
              <p className="text-gray-600">
                Major German cities have expensive accommodation and living costs, especially in Munich and Frankfurt.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Job Market Competition</h3>
              <p className="text-gray-600">
                High competition for jobs, especially in IT and engineering sectors with many qualified candidates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Integration</h3>
              <p className="text-gray-600">
                Adapting to German work culture, punctuality, and direct communication style can be challenging.
              </p>
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

      {/* Solution Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Complete Solution for Germany Job Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ribriz Overseas provides end-to-end support to make your Germany job journey smooth and successful
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Job Placement & Matching</h3>
              <p className="text-gray-600 mb-4">
                We connect you with verified German employers and help you find the right job match.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Verified employer partnerships</li>
                <li>• Job matching based on skills</li>
                <li>• Interview preparation</li>
                <li>• Salary negotiation support</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visa & Documentation</h3>
              <p className="text-gray-600 mb-4">
                Complete work visa application support with 95% success rate for German work visas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Work visa application</li>
                <li>• Document preparation</li>
                <li>• Embassy appointment booking</li>
                <li>• Follow-up support</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Degree Recognition</h3>
              <p className="text-gray-600 mb-4">
                Assistance with degree recognition through Anabin database and professional qualification assessment.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Anabin database check</li>
                <li>• Document translation</li>
                <li>• Professional assessment</li>
                <li>• Recognition application</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">German Language Training</h3>
              <p className="text-gray-600 mb-4">
                German language courses to help you reach the required proficiency level for your job.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• A1 to B2 level courses</li>
                <li>• Business German training</li>
                <li>• Online and offline classes</li>
                <li>• Certification support</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation & Settlement</h3>
              <p className="text-gray-600 mb-4">
                Pre-arranged accommodation and settlement support for a smooth transition to Germany.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Temporary accommodation</li>
                <li>• Long-term housing search</li>
                <li>• Bank account opening</li>
                <li>• Health insurance setup</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 support throughout your Germany job journey and beyond.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24/7 student support</li>
                <li>• Cultural adaptation help</li>
                <li>• Work permit renewal</li>
                <li>• Family reunion support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Job Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top Job Categories in Germany for Indians
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-demand sectors offering excellent career opportunities and competitive salaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  💻
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">IT & Software Development</h3>
                  <p className="text-blue-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Software developers, data scientists, and IT specialists are in high demand across Germany.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€45,000 - €80,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English OK</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">2+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🔧
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Engineering & Manufacturing</h3>
                  <p className="text-green-600 font-semibold">Very High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Mechanical, electrical, and automotive engineers are highly sought after in German industries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€50,000 - €90,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B1+</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">3+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏥
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Healthcare & Medicine</h3>
                  <p className="text-purple-600 font-semibold">Critical Need</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Doctors, nurses, and healthcare professionals are in critical shortage across Germany.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€60,000 - €120,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B2+</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">License required</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  💼
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Business & Finance</h3>
                  <p className="text-yellow-600 font-semibold">Growing Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Business analysts, financial advisors, and management consultants are needed in German companies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€40,000 - €70,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B1+</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">2+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🎓
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Education & Research</h3>
                  <p className="text-red-600 font-semibold">Academic Excellence</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                University professors, researchers, and academic staff are welcomed in German institutions.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€35,000 - €65,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B2+</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">PhD preferred</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏭
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Skilled Trades</h3>
                  <p className="text-teal-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Electricians, plumbers, welders, and skilled technicians are in high demand across Germany.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€35,000 - €55,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German A2+</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">Certification required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary & Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Salary & Benefits in Germany
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive salaries and excellent benefits package for Indian professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Salaries by Profession</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="font-semibold">Software Developer</span>
                  <span className="text-blue-600 font-bold">€45,000 - €80,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="font-semibold">Mechanical Engineer</span>
                  <span className="text-green-600 font-bold">€50,000 - €90,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold">Doctor</span>
                  <span className="text-purple-600 font-bold">€60,000 - €120,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                  <span className="font-semibold">Business Analyst</span>
                  <span className="text-yellow-600 font-bold">€40,000 - €70,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="font-semibold">Skilled Technician</span>
                  <span className="text-red-600 font-bold">€35,000 - €55,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Employee Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                  <span className="text-2xl mr-4">🏥</span>
                  <div>
                    <div className="font-semibold">Health Insurance</div>
                    <div className="text-sm text-gray-600">Comprehensive coverage for you and family</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-xl">
                  <span className="text-2xl mr-4">🏖️</span>
                  <div>
                    <div className="font-semibold">30 Days Annual Leave</div>
                    <div className="text-sm text-gray-600">Paid vacation days per year</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <span className="text-2xl mr-4">👶</span>
                  <div>
                    <div className="font-semibold">Parental Leave</div>
                    <div className="text-sm text-gray-600">Up to 14 months paid parental leave</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-yellow-50 rounded-xl">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <div className="font-semibold">Training & Development</div>
                    <div className="text-sm text-gray-600">Professional development opportunities</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-red-50 rounded-xl">
                  <span className="text-2xl mr-4">🚗</span>
                  <div>
                    <div className="font-semibold">Transportation</div>
                    <div className="text-sm text-gray-600">Public transport or car allowance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in Germany */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Living in Germany - What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about life in Germany as an Indian professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation</h3>
              <p className="text-gray-600 mb-4">
                High-quality housing with excellent infrastructure and public transport connectivity.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1-Bedroom Apartment:</span>
                  <span className="font-semibold">€800-€1,500</span>
                </div>
                <div className="flex justify-between">
                  <span>3-Bedroom Apartment:</span>
                  <span className="font-semibold">€1,200-€2,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Utilities:</span>
                  <span className="font-semibold">€200-€400</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Food & Dining</h3>
              <p className="text-gray-600 mb-4">
                Diverse culinary options including Indian restaurants and international cuisine.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Groceries (Monthly):</span>
                  <span className="font-semibold">€300-€500</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant Meal:</span>
                  <span className="font-semibold">€15-€30</span>
                </div>
                <div className="flex justify-between">
                  <span>Indian Restaurant:</span>
                  <span className="font-semibold">€20-€40</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <p className="text-gray-600 mb-4">
                Excellent public transport system with trains, buses, and trams connecting all cities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monthly Pass:</span>
                  <span className="font-semibold">€60-€100</span>
                </div>
                <div className="flex justify-between">
                  <span>Single Ticket:</span>
                  <span className="font-semibold">€2.50-€4</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxi (10km):</span>
                  <span className="font-semibold">€15-€25</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <p className="text-gray-600 mb-4">
                Free or low-cost education for children with excellent international schools available.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Public School:</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>International School:</span>
                  <span className="font-semibold">€15,000-€25,000</span>
                </div>
                <div className="flex justify-between">
                  <span>University:</span>
                  <span className="font-semibold">€300-€500/semester</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                World-class healthcare system with mandatory health insurance for all residents.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Health Insurance:</span>
                  <span className="font-semibold">€200-€400/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Doctor Visit:</span>
                  <span className="font-semibold">€10-€20</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency:</span>
                  <span className="font-semibold">Covered by insurance</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Entertainment</h3>
              <p className="text-gray-600 mb-4">
                Rich cultural life with museums, theaters, festivals, and outdoor activities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cinema Ticket:</span>
                  <span className="font-semibold">€10-€15</span>
                </div>
                <div className="flex justify-between">
                  <span>Museum Entry:</span>
                  <span className="font-semibold">€5-€15</span>
                </div>
                <div className="flex justify-between">
                  <span>Gym Membership:</span>
                  <span className="font-semibold">€30-€60/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-yellow-900 via-yellow-800 to-red-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Germany Career Journey?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian professionals who achieved their German career dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">2000+</div>
              <div className="text-yellow-200">Professionals Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-yellow-200">Visa Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-yellow-200">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/career-application"
              className="bg-white text-yellow-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-300 shadow-lg"
            >
              Apply Now - Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-yellow-900 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
