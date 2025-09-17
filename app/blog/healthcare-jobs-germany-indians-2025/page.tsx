import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare Jobs in Germany for Indians 2025: Complete Guide & Opportunities',
  description: 'Complete guide to healthcare jobs in Germany for Indians. Work permits, visa process, salary, living costs, and career opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'healthcare jobs Germany for Indians',
    'doctor jobs Germany for Indians',
    'nurse jobs Germany for Indians',
    'medical jobs Germany salary',
    'living in Germany for Indians',
    'Germany healthcare opportunities',
    'work in Germany 2025',
    'Germany medical visa',
    'German healthcare system',
    'medical license Germany'
  ],
  openGraph: {
    title: 'Healthcare Jobs in Germany for Indians 2025: Complete Guide',
    description: 'Complete guide to healthcare jobs in Germany for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
    images: ['https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function HealthcareJobsGermany() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 via-blue-800 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Healthcare Jobs in Germany for Indians
                <span className="block text-green-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Discover high-paying healthcare opportunities, excellent work-life balance, and career growth in Germany. 
                Get expert guidance to make your German healthcare career dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/career-application"
                  className="bg-white text-green-900 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg"
                >
                  Apply Now - Free Consultation
                </Link>
                <Link 
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="German Healthcare System"
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

      {/* Why Germany for Healthcare */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Germany is Perfect for Indian Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Germany offers exceptional opportunities for Indian healthcare professionals with its world-class medical system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">World-Class Healthcare</h3>
              <p className="text-gray-600">
                Germany has one of the world's best healthcare systems with cutting-edge medical technology and facilities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Salaries</h3>
              <p className="text-gray-600">
                Healthcare professionals earn €60,000-€150,000 annually with excellent benefits and job security.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Staff Shortage</h3>
              <p className="text-gray-600">
                Germany faces a critical shortage of healthcare professionals, creating excellent job opportunities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Development</h3>
              <p className="text-gray-600">
                Continuous learning opportunities, conferences, and advanced training programs for career growth.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                Excellent work-life balance with reasonable working hours and generous vacation time.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">EU Recognition</h3>
              <p className="text-gray-600">
                German medical qualifications are recognized across the EU, opening doors to other countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Healthcare Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top Healthcare Job Categories in Germany
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-demand healthcare roles offering excellent career opportunities and competitive salaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  👨‍⚕️
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Doctor/Physician</h3>
                  <p className="text-green-600 font-semibold">Critical Need</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                General practitioners, specialists, and surgeons are in high demand across German hospitals and clinics.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€80,000 - €150,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B2+</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Medical License</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  👩‍⚕️
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Nurse</h3>
                  <p className="text-blue-600 font-semibold">Very High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Registered nurses, specialized nurses, and nursing assistants are critically needed in German healthcare.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€35,000 - €55,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B1+</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Nursing License</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🦷
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Dentist</h3>
                  <p className="text-purple-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                General dentists, orthodontists, and oral surgeons are needed in private practices and hospitals.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€70,000 - €120,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B2+</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Dental License</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🧠
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Psychologist</h3>
                  <p className="text-yellow-600 font-semibold">Growing Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Clinical psychologists, therapists, and mental health counselors are increasingly needed.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€45,000 - €80,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B2+</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Psychology License</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🔬
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Medical Technician</h3>
                  <p className="text-red-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Lab technicians, radiologists, and medical equipment specialists are in high demand.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€40,000 - €65,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B1+</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Technical Certification</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  💊
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Pharmacist</h3>
                  <p className="text-teal-600 font-semibold">Steady Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Community pharmacists, hospital pharmacists, and pharmaceutical researchers are needed.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€50,000 - €85,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German B2+</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Pharmacy License</span>
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
              Salary & Benefits in Germany Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive salaries and excellent benefits package for Indian healthcare professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Healthcare Salaries</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">General Practitioner</span>
                  <span className="text-green-600 font-bold">€80,000 - €120,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Specialist Doctor</span>
                  <span className="text-green-600 font-bold">€100,000 - €150,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Registered Nurse</span>
                  <span className="text-green-600 font-bold">€35,000 - €55,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Dentist</span>
                  <span className="text-green-600 font-bold">€70,000 - €120,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Medical Technician</span>
                  <span className="text-green-600 font-bold">€40,000 - €65,000</span>
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
                  <span className="text-2xl mr-4">🏖️</span>
                  <div>
                    <div className="font-semibold">30 Days Annual Leave</div>
                    <div className="text-sm text-gray-600">Paid vacation days per year</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">👶</span>
                  <div>
                    <div className="font-semibold">Parental Leave</div>
                    <div className="text-sm text-gray-600">Up to 14 months paid parental leave</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <div className="font-semibold">Continuing Education</div>
                    <div className="text-sm text-gray-600">Professional development opportunities</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
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

      {/* Medical License Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Medical License Recognition Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to getting your Indian medical qualifications recognized in Germany
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Document Preparation</h3>
              <p className="text-gray-600 text-sm">
                Gather all medical certificates, transcripts, and professional documents with certified translations
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Language Certification</h3>
              <p className="text-gray-600 text-sm">
                Obtain German language certification (B2 level) from recognized institutions like Goethe Institut
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Application Submission</h3>
              <p className="text-gray-600 text-sm">
                Submit application to the relevant German medical authority (Landesärztekammer) in your state
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">License Approval</h3>
              <p className="text-gray-600 text-sm">
                Complete any required examinations or assessments and receive your German medical license
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents for Medical License</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Educational Documents</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• MBBS degree certificate</li>
                  <li>• Medical school transcripts</li>
                  <li>• Internship completion certificate</li>
                  <li>• Post-graduation certificates (if any)</li>
                  <li>• Medical Council registration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Professional Documents</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Work experience certificates</li>
                  <li>• Professional references</li>
                  <li>• Good standing certificate</li>
                  <li>• German language certificate (B2)</li>
                  <li>• Passport and visa documents</li>
                </ul>
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
              Everything you need to know about life in Germany as an Indian healthcare professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
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
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
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
      <section id="contact" className="py-16 bg-gradient-to-r from-green-900 via-blue-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Germany Healthcare Career Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian healthcare professionals who achieved their German career dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">800+</div>
              <div className="text-green-200">Healthcare Professionals Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">92%</div>
              <div className="text-green-200">License Recognition Success</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-green-200">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/career-application"
              className="bg-white text-green-900 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg"
            >
              Apply Now - Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
