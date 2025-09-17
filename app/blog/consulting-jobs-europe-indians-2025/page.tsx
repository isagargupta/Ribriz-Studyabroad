import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consulting Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
  description: 'Complete guide to consulting jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'consulting jobs Europe for Indians',
    'management consulting Europe for Indians',
    'business consulting Europe for Indians',
    'consulting jobs Europe salary',
    'living in Europe for Indians',
    'Europe job opportunities',
    'work in Europe 2025',
    'Europe employment visa',
    'European consulting sector',
    'consulting worker Europe'
  ],
  openGraph: {
    title: 'Consulting Jobs in Europe for Indians 2025: Complete Guide',
    description: 'Complete guide to consulting jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
    images: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function ConsultingJobsEurope() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-900 via-orange-800 to-yellow-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Consulting Jobs in Europe for Indians
                <span className="block text-amber-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                Discover prestigious consulting careers, excellent work-life balance, and professional growth in Europe. 
                Get expert guidance to make your European consulting career dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/career-application"
                  className="bg-white text-amber-900 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 shadow-lg"
                >
                  Apply Now - Free Consultation
                </Link>
                <Link 
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="European Consulting Industry"
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

      {/* Why Europe for Consulting */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Europe is Perfect for Indian Consulting Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Europe offers exceptional opportunities for Indian consulting professionals with its world-class business environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Salaries</h3>
              <p className="text-gray-600">
                Consulting professionals earn €4,000-€12,000 monthly with excellent bonuses and benefits.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Top Consulting Firms</h3>
              <p className="text-gray-600">
                Work with leading European consulting firms and multinational corporations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consulting Talent Shortage</h3>
              <p className="text-gray-600">
                Europe faces a shortage of qualified consulting professionals, creating excellent opportunities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                Excellent work-life balance with reasonable working hours and generous vacation time.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Job Security</h3>
              <p className="text-gray-600">
                Strong job security with permanent contracts and excellent benefits in the consulting sector.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Excellent opportunities for career advancement and professional development in consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Consulting Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top Consulting Job Categories in Europe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-demand consulting roles offering excellent career opportunities and competitive salaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  💼
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Management Consultant</h3>
                  <p className="text-amber-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provide strategic advice to European companies on business operations, strategy, and growth.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€4,500 - €9,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">MBA + Experience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  📊
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Business Analyst</h3>
                  <p className="text-orange-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Analyze business processes, identify opportunities, and recommend improvements for European companies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€3,500 - €7,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Business Degree</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🎯
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Strategy Consultant</h3>
                  <p className="text-yellow-600 font-semibold">Growing Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Develop strategic plans and help European companies achieve their long-term business goals.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€5,000 - €10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">MBA + Experience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  💻
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">IT Consultant</h3>
                  <p className="text-amber-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provide IT consulting services, digital transformation, and technology solutions to European companies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€4,000 - €8,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">IT Degree + Experience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏢
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Senior Consultant</h3>
                  <p className="text-orange-600 font-semibold">Management Role</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Lead consulting projects, manage teams, and provide high-level strategic advice to European companies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€6,500 - €12,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">5+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🎓
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">HR Consultant</h3>
                  <p className="text-yellow-600 font-semibold">Growing Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provide human resources consulting, talent management, and organizational development services.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€3,200 - €6,800</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">HR Degree + Experience</span>
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
              Salary & Benefits in European Consulting Sector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive salaries and excellent benefits package for Indian consulting professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Consulting Salaries (Monthly)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Business Analyst</span>
                  <span className="text-amber-600 font-bold">€3,500 - €7,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">IT Consultant</span>
                  <span className="text-amber-600 font-bold">€4,000 - €8,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Management Consultant</span>
                  <span className="text-amber-600 font-bold">€4,500 - €9,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Strategy Consultant</span>
                  <span className="text-amber-600 font-bold">€5,000 - €10,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Senior Consultant</span>
                  <span className="text-amber-600 font-bold">€6,500 - €12,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
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
                    <div className="font-semibold">Paid Vacation</div>
                    <div className="text-sm text-gray-600">25-30 days paid vacation per year</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">📚</span>
                  <div>
                    <div className="font-semibold">Professional Development</div>
                    <div className="text-sm text-gray-600">Training and certification opportunities</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">💼</span>
                  <div>
                    <div className="font-semibold">Job Security</div>
                    <div className="text-sm text-gray-600">Permanent contracts and tenure</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <div className="font-semibold">Pension Plan</div>
                    <div className="text-sm text-gray-600">Excellent retirement benefits</div>
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
              European Work Visa Process for Consulting Workers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your European work permit for consulting jobs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Job Offer</h3>
              <p className="text-gray-600 text-sm">
                Secure a job offer from a European consulting firm who will sponsor your work permit
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Work Permit Application</h3>
              <p className="text-gray-600 text-sm">
                Employer applies for work permit at the relevant European immigration authority
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Visa Application</h3>
              <p className="text-gray-600 text-sm">
                Apply for work visa at the European consulate in India with all required documents
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <li>• Business/Management degree and certificates</li>
                  <li>• Work experience certificates</li>
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
              Everything you need to know about life in Europe as an Indian consulting professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation</h3>
              <p className="text-gray-600 mb-4">
                Many consulting firms provide accommodation or housing allowance to help with living costs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Firm Housing:</span>
                  <span className="font-semibold">€1,000-€2,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Apartment:</span>
                  <span className="font-semibold">€1,200-€3,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Shared Room:</span>
                  <span className="font-semibold">€600-€1,500</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Food & Dining</h3>
              <p className="text-gray-600 mb-4">
                Many consulting firms provide meals, and groceries are affordable in most European countries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Firm Meals:</span>
                  <span className="font-semibold">Often provided</span>
                </div>
                <div className="flex justify-between">
                  <span>Groceries (Monthly):</span>
                  <span className="font-semibold">€300-€600</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant Meal:</span>
                  <span className="font-semibold">€20-€60</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <p className="text-gray-600 mb-4">
                Many consulting firms provide transportation or transportation allowance for work.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Firm Transport:</span>
                  <span className="font-semibold">Often provided</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Pass:</span>
                  <span className="font-semibold">€60-€150</span>
                </div>
                <div className="flex justify-between">
                  <span>Single Ticket:</span>
                  <span className="font-semibold">€3-€8</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Excellent healthcare systems with mandatory health insurance for all workers.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Health Insurance:</span>
                  <span className="font-semibold">€200-€500/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Doctor Visit:</span>
                  <span className="font-semibold">€10-€30</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency:</span>
                  <span className="font-semibold">Covered by insurance</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Language Learning</h3>
              <p className="text-gray-600 mb-4">
                Many consulting firms provide language classes to help consultants integrate better.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Firm Classes:</span>
                  <span className="font-semibold">Often free</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Classes:</span>
                  <span className="font-semibold">€400-€800</span>
                </div>
                <div className="flex justify-between">
                  <span>Online Courses:</span>
                  <span className="font-semibold">€150-€400</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Entertainment</h3>
              <p className="text-gray-600 mb-4">
                Rich cultural life with museums, theaters, festivals, and outdoor activities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cinema Ticket:</span>
                  <span className="font-semibold">€12-€25</span>
                </div>
                <div className="flex justify-between">
                  <span>Museum Entry:</span>
                  <span className="font-semibold">€10-€25</span>
                </div>
                <div className="flex justify-between">
                  <span>Sports Activities:</span>
                  <span className="font-semibold">€20-€50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-amber-900 via-orange-800 to-yellow-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your European Consulting Career Journey?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian consulting professionals who achieved their European career dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">1400+</div>
              <div className="text-amber-200">Consulting Workers Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-amber-200">Visa Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-amber-200">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/career-application"
              className="bg-white text-amber-900 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 shadow-lg"
            >
              Apply Now - Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
