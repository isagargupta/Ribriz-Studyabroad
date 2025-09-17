import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Study Abroad in UK for Indian Students 2025: Complete Guide & Opportunities',
  description: 'Complete guide to study abroad in UK for Indian students. Top universities, costs, scholarships, visa process, and career opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'study abroad in UK for Indian students',
    'UK universities for Indian students',
    'study in UK cost for Indians',
    'UK student visa for Indians',
    'scholarships for Indian students in UK',
    'top UK universities for Indians',
    'study abroad UK 2025',
    'UK education for Indians',
    'Chevening scholarship India',
    'UK work permit after study'
  ],
  openGraph: {
    title: 'Study Abroad in UK for Indian Students 2025: Complete Guide',
    description: 'Complete guide to study abroad in UK for Indian students. Top universities, costs, scholarships, visa process, and career opportunities.',
    images: ['https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function StudyAbroadUK() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Study Abroad in UK for Indian Students
                <span className="block text-blue-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover world-class education, career opportunities, and life-changing experiences in the UK. 
                Get expert guidance to make your UK study dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/study-abroad-application"
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  Apply Now - Free Consultation
                </Link>
                <Link 
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="UK University Campus"
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
              Many Indian students struggle with these common problems when planning to study in the UK
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Tuition Costs</h3>
              <p className="text-gray-600">
                UK universities can cost £15,000-£40,000 per year, making it difficult for middle-class Indian families to afford quality education.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complex Visa Process</h3>
              <p className="text-gray-600">
                UK student visa requirements are strict with financial proof, English proficiency, and documentation challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">University Selection</h3>
              <p className="text-gray-600">
                Choosing the right university and course from 160+ UK universities can be overwhelming without proper guidance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation Issues</h3>
              <p className="text-gray-600">
                Finding affordable accommodation in expensive cities like London, Oxford, and Cambridge is a major challenge.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Job Opportunities</h3>
              <p className="text-gray-600">
                Understanding post-study work options and career prospects in the UK job market can be confusing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Adaptation</h3>
              <p className="text-gray-600">
                Adjusting to British culture, weather, and academic system can be challenging for Indian students.
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
              Our Complete Solution for UK Study Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ribriz Overseas provides end-to-end support to make your UK study journey smooth and successful
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">University Selection & Application</h3>
              <p className="text-gray-600 mb-4">
                We help you choose the best UK universities based on your profile, budget, and career goals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Top 50 UK universities partnerships</li>
                <li>• Course selection guidance</li>
                <li>• Application assistance</li>
                <li>• Personal statement writing</li>
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
                <li>• Chevening Scholarship guidance</li>
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
                Complete visa application support with 98% success rate for UK student visas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Visa application assistance</li>
                <li>• Document preparation</li>
                <li>• Interview preparation</li>
                <li>• Financial proof guidance</li>
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
                <li>• University accommodation booking</li>
                <li>• Private housing options</li>
                <li>• Airport pickup service</li>
                <li>• Bank account opening</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career & Job Support</h3>
              <p className="text-gray-600 mb-4">
                Post-study work opportunities and career guidance for long-term success.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Graduate Route visa guidance</li>
                <li>• Job placement assistance</li>
                <li>• CV and interview preparation</li>
                <li>• Industry networking</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 support throughout your UK study journey and beyond.
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

      {/* Top UK Universities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top UK Universities for Indian Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner universities offering world-class education and excellent career prospects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  UCL
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">University College London</h3>
                  <p className="text-blue-600 font-semibold">QS Rank: #8</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Leading research university in London with excellent programs in Engineering, Business, and Medicine.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">£25,000-£35,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.5-7.0</span>
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
                  IC
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Imperial College London</h3>
                  <p className="text-green-600 font-semibold">QS Rank: #6</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                World-renowned for Science, Engineering, Medicine, and Business with strong industry connections.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">£30,000-£40,000</span>
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
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  LSE
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">London School of Economics</h3>
                  <p className="text-purple-600 font-semibold">QS Rank: #45</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Premier institution for Social Sciences, Economics, and Politics with global recognition.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">£22,000-£30,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">7.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Economics, Finance</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  KCL
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">King's College London</h3>
                  <p className="text-red-600 font-semibold">QS Rank: #37</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Historic university with excellent programs in Medicine, Law, and Humanities in central London.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">£20,000-£35,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.5-7.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Medicine, Law</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  UoM
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">University of Manchester</h3>
                  <p className="text-yellow-600 font-semibold">QS Rank: #32</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Research-intensive university with strong programs in Engineering, Business, and Social Sciences.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">£18,000-£28,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.0-6.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Engineering, Business</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  UoE
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">University of Edinburgh</h3>
                  <p className="text-teal-600 font-semibold">QS Rank: #22</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Historic Scottish university with excellent programs in Medicine, Engineering, and Arts.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span className="font-semibold">£20,000-£30,000</span>
                </div>
                <div className="flex justify-between">
                  <span>IELTS Required:</span>
                  <span className="font-semibold">6.5-7.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Popular Courses:</span>
                  <span className="font-semibold">Medicine, Engineering</span>
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
              Complete Cost Breakdown for UK Study
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent cost analysis to help you plan your UK education budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition Fees (Annual)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="font-semibold">Undergraduate Programs</span>
                  <span className="text-blue-600 font-bold">£15,000 - £35,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="font-semibold">Postgraduate Programs</span>
                  <span className="text-green-600 font-bold">£18,000 - £40,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold">MBA Programs</span>
                  <span className="text-purple-600 font-bold">£25,000 - £60,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                  <span className="font-semibold">PhD Programs</span>
                  <span className="text-yellow-600 font-bold">£20,000 - £35,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Living Expenses (Monthly)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="font-semibold">Accommodation</span>
                  <span className="text-blue-600 font-bold">£500 - £1,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="font-semibold">Food & Groceries</span>
                  <span className="text-green-600 font-bold">£200 - £400</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold">Transportation</span>
                  <span className="text-purple-600 font-bold">£50 - £150</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                  <span className="font-semibold">Other Expenses</span>
                  <span className="text-yellow-600 font-bold">£100 - £300</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Total Annual Cost Estimate</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">£25,000 - £35,000</div>
                <div className="text-blue-200">Outside London</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">£35,000 - £50,000</div>
                <div className="text-blue-200">London (Moderate)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">£50,000 - £70,000</div>
                <div className="text-blue-200">London (Premium)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Scholarships & Funding Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce your education costs with these exclusive scholarship opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">£</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chevening Scholarship</h3>
              <p className="text-gray-600 mb-4">
                Fully funded scholarship by UK government for outstanding students from developing countries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Coverage:</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">£50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Eligibility:</span>
                  <span className="font-semibold">2+ years work exp</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commonwealth Scholarship</h3>
              <p className="text-gray-600 mb-4">
                Funded by UK government for students from Commonwealth countries pursuing master's or PhD.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Coverage:</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">£40,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Eligibility:</span>
                  <span className="font-semibold">First class degree</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">University Scholarships</h3>
              <p className="text-gray-600 mb-4">
                Merit-based scholarships offered by individual UK universities for international students.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Coverage:</span>
                  <span className="font-semibold text-green-600">25-50%</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">£5,000-£15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Eligibility:</span>
                  <span className="font-semibold">Academic merit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your UK Study Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian students who achieved their UK education dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">5000+</div>
              <div className="text-blue-200">Students Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200">Visa Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/study-abroad-application"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Apply Now - Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
