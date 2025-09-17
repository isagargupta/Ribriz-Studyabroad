import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Study Abroad in Canada for Indian Students 2025: Complete Guide & Opportunities',
  description: 'Complete guide to study abroad in Canada for Indian students. Top universities, costs, scholarships, visa process, and PR opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'study abroad in Canada for Indian students',
    'Canada universities for Indian students',
    'study in Canada cost for Indians',
    'Canada student visa for Indians',
    'scholarships for Indian students in Canada',
    'top Canada universities for Indians',
    'study abroad Canada 2025',
    'Canada education for Indians',
    'Canada PR after study',
    'work permit Canada after study'
  ],
  openGraph: {
    title: 'Study Abroad in Canada for Indian Students 2025: Complete Guide',
    description: 'Complete guide to study abroad in Canada for Indian students. Top universities, costs, scholarships, visa process, and PR opportunities.',
    images: ['https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function StudyAbroadCanada() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Study Abroad in Canada for Indian Students
                <span className="block text-red-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Discover world-class education, PR opportunities, and multicultural experiences in Canada. 
                Get expert guidance to make your Canadian study dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/study-abroad-application"
                  className="bg-white text-red-900 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg"
                >
                  Apply Now - Free Consultation
                </Link>
                <Link 
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-900 transition-all duration-300"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Canada University Campus"
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
              Many Indian students struggle with these common problems when planning to study in Canada
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Harsh Weather Conditions</h3>
              <p className="text-gray-600">
                Canadian winters can be extremely cold (-30°C), making it difficult for Indian students to adapt to the climate.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Living Costs</h3>
              <p className="text-gray-600">
                Major cities like Toronto and Vancouver have expensive accommodation and living costs, making budgeting challenging.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complex Visa Process</h3>
              <p className="text-gray-600">
                Canada student visa requires strong financial proof, medical exams, and biometrics with strict documentation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation Shortage</h3>
              <p className="text-gray-600">
                Finding affordable housing in major Canadian cities is extremely competitive, especially for international students.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Job Market Competition</h3>
              <p className="text-gray-600">
                High competition for part-time jobs and post-graduation employment opportunities in competitive Canadian job market.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Integration</h3>
              <p className="text-gray-600">
                Adapting to Canadian culture, social norms, and building new relationships can be challenging for Indian students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Complete Solution for Canada Study Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ribriz Overseas provides end-to-end support to make your Canada study journey smooth and successful
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">University Selection & Application</h3>
              <p className="text-gray-600 mb-4">
                We help you choose the best Canadian universities based on your profile, budget, and career goals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Top 50 Canadian universities partnerships</li>
                <li>• Program selection guidance</li>
                <li>• Application assistance</li>
                <li>• Statement of Purpose writing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scholarship & Funding Support</h3>
              <p className="text-gray-600 mb-4">
                Access to exclusive scholarships and funding options to reduce your education costs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Vanier Canada Graduate Scholarship</li>
                <li>• University-specific scholarships</li>
                <li>• Education loan assistance</li>
                <li>• Part-time job opportunities</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visa & Documentation</h3>
              <p className="text-gray-600 mb-4">
                Complete visa application support with 95% success rate for Canada student visas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Study permit application</li>
                <li>• Document preparation</li>
                <li>• Medical exam guidance</li>
                <li>• Financial proof assistance</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation & Settlement</h3>
              <p className="text-gray-600 mb-4">
                Pre-arranged accommodation and settlement support for a smooth transition.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• University residence booking</li>
                <li>• Off-campus housing options</li>
                <li>• Airport pickup service</li>
                <li>• Bank account opening</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career & PR Support</h3>
              <p className="text-gray-600 mb-4">
                Post-study work opportunities and PR guidance for long-term success in Canada.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Post-Graduation Work Permit</li>
                <li>• Job placement assistance</li>
                <li>• Express Entry guidance</li>
                <li>• PR application support</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 support throughout your Canada study journey and beyond.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24/7 student support</li>
                <li>• Academic guidance</li>
                <li>• Cultural adaptation help</li>
                <li>• Alumni network access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Canadian Universities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top Canadian Universities for Indian Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner universities offering world-class education and excellent career prospects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  UofT
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">University of Toronto</h3>
                  <p className="text-red-600 font-semibold">QS Rank: #21</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Canada's top research university with excellent programs in Engineering, Medicine, and Business.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">CAD $45,000-55,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.5-7.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Engineering, Medicine</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  UBC
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">University of British Columbia</h3>
                  <p className="text-blue-600 font-semibold">QS Rank: #34</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Beautiful campus in Vancouver with strong programs in Forestry, Engineering, and Arts.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">CAD $40,000-50,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Engineering, Business</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  McGill
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">McGill University</h3>
                  <p className="text-green-600 font-semibold">QS Rank: #30</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Historic university in Montreal with excellent programs in Medicine, Law, and Engineering.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">CAD $35,000-45,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Medicine, Law</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  UofA
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">University of Alberta</h3>
                  <p className="text-purple-600 font-semibold">QS Rank: #111</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Research-intensive university with strong programs in Engineering, Medicine, and Agriculture.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">CAD $25,000-35,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Engineering, Medicine</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  UofW
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">University of Waterloo</h3>
                  <p className="text-yellow-600 font-semibold">QS Rank: #112</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Leading in co-operative education with excellent programs in Engineering, Computer Science, and Math.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">CAD $30,000-40,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Engineering, CS</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  UofM
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">University of Montreal</h3>
                  <p className="text-teal-600 font-semibold">QS Rank: #116</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                French-language university with excellent programs in Medicine, Law, and Social Sciences.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">CAD $20,000-30,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">French/English</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Medicine, Law</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Cost Breakdown for Canada Study
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent cost analysis to help you plan your Canadian education budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition Fees (Annual)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="font-semibold">Undergraduate Programs</span>
                  <span className="text-red-600 font-bold">CAD $25,000 - $45,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="font-semibold">Postgraduate Programs</span>
                  <span className="text-green-600 font-bold">CAD $30,000 - $50,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold">MBA Programs</span>
                  <span className="text-purple-600 font-bold">CAD $40,000 - $80,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                  <span className="font-semibold">PhD Programs</span>
                  <span className="text-yellow-600 font-bold">CAD $15,000 - $25,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Living Expenses (Monthly)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="font-semibold">Accommodation</span>
                  <span className="text-red-600 font-bold">CAD $800 - $2,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="font-semibold">Food & Groceries</span>
                  <span className="text-green-600 font-bold">CAD $300 - $600</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold">Transportation</span>
                  <span className="text-purple-600 font-bold">CAD $100 - $200</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                  <span className="font-semibold">Other Expenses</span>
                  <span className="text-yellow-600 font-bold">CAD $200 - $400</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Total Annual Cost Estimate</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">CAD $35,000 - $50,000</div>
                <div className="text-red-200">Smaller Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">CAD $45,000 - $65,000</div>
                <div className="text-red-200">Major Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">CAD $55,000 - $80,000</div>
                <div className="text-red-200">Toronto/Vancouver</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Canada PR Opportunities After Study
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Study in Canada and get a direct pathway to Permanent Residency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Post-Graduation Work Permit</h3>
              <p className="text-gray-600 mb-4">
                Get up to 3 years of work permit after graduation to gain Canadian work experience.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold text-green-600">1-3 years</span>
                </div>
                <div className="flex justify-between">
                  <span>Eligibility:</span>
                  <span className="font-semibold">Graduate from DLI</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span className="font-semibold">2-3 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Express Entry System</h3>
              <p className="text-gray-600 mb-4">
                Fast-track PR through Express Entry with Canadian education and work experience.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span className="font-semibold text-blue-600">6-8 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Points:</span>
                  <span className="font-semibold">+15 for education</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">IELTS 6.0+</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Provincial Nominee Program</h3>
              <p className="text-gray-600 mb-4">
                Get nominated by a province for faster PR processing based on local needs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span className="font-semibold text-purple-600">12-18 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Job offer</span>
                </div>
                <div className="flex justify-between">
                  <span>Provinces:</span>
                  <span className="font-semibold">All provinces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-red-900 via-red-800 to-red-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Canada Study Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian students who achieved their Canadian education and PR dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">3000+</div>
              <div className="text-red-200">Students Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-red-200">Visa Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">80%</div>
              <div className="text-red-200">PR Success Rate</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/study-abroad-application"
              className="bg-white text-red-900 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg"
            >
              Apply Now - Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-900 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
