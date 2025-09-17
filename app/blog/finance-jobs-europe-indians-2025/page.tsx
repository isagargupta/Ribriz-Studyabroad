import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Finance Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
  description: 'Complete guide to finance jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'finance jobs Europe for Indians',
    'banking jobs Europe for Indians',
    'accounting jobs Europe for Indians',
    'finance jobs Europe salary',
    'living in Europe for Indians',
    'Europe job opportunities',
    'work in Europe 2025',
    'Europe employment visa',
    'European finance sector',
    'finance worker Europe'
  ],
  openGraph: {
    title: 'Finance Jobs in Europe for Indians 2025: Complete Guide',
    description: 'Complete guide to finance jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
    images: ['https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function FinanceJobsEurope() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Finance Jobs in Europe for Indians
                <span className="block text-green-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Discover lucrative finance careers, excellent work-life balance, and professional growth in Europe. 
                Get expert guidance to make your European finance career dream a reality.
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
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="European Finance Industry"
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

      {/* Why Europe for Finance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Europe is Perfect for Indian Finance Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Europe offers exceptional opportunities for Indian finance professionals with its world-class financial sector
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Salaries</h3>
              <p className="text-gray-600">
                Finance professionals earn €3,000-€8,000 monthly with excellent bonuses and benefits.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">World-Class Banks</h3>
              <p className="text-gray-600">
                Work with leading European banks and financial institutions with global reach.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finance Talent Shortage</h3>
              <p className="text-gray-600">
                Europe faces a shortage of qualified finance professionals, creating excellent opportunities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                Excellent work-life balance with reasonable working hours and generous vacation time.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Job Security</h3>
              <p className="text-gray-600">
                Strong job security with permanent contracts and excellent benefits in the finance sector.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Excellent opportunities for career advancement and professional development in finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Finance Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top Finance Job Categories in Europe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-demand finance roles offering excellent career opportunities and competitive salaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏦
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Banking Professional</h3>
                  <p className="text-green-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Work in retail banking, corporate banking, or investment banking with leading European banks.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€3,000 - €6,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Finance Degree</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  📊
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Financial Analyst</h3>
                  <p className="text-emerald-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Analyze financial data, prepare reports, and provide investment recommendations.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€3,500 - €7,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Finance/Accounting Degree</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  📋
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Accountant</h3>
                  <p className="text-teal-600 font-semibold">Growing Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Manage financial records, prepare tax returns, and ensure compliance with regulations.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€2,800 - €5,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Accounting Degree</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  💼
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Investment Advisor</h3>
                  <p className="text-cyan-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provide investment advice, manage portfolios, and help clients achieve financial goals.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€4,000 - €8,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">English + Local</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">Finance Degree + Certifications</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏢
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Corporate Finance Manager</h3>
                  <p className="text-blue-600 font-semibold">Management Role</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Manage corporate finances, oversee budgets, and make strategic financial decisions.
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
                  <span>Experience:</span>
                  <span className="font-semibold">5+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🎯
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Risk Manager</h3>
                  <p className="text-indigo-600 font-semibold">Critical Role</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Identify, assess, and manage financial risks for banks and financial institutions.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€4,500 - €9,000</span>
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
              Salary & Benefits in European Finance Sector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive salaries and excellent benefits package for Indian finance professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Finance Salaries (Monthly)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Accountant</span>
                  <span className="text-green-600 font-bold">€2,800 - €5,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Banking Professional</span>
                  <span className="text-green-600 font-bold">€3,000 - €6,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Financial Analyst</span>
                  <span className="text-green-600 font-bold">€3,500 - €7,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Investment Advisor</span>
                  <span className="text-green-600 font-bold">€4,000 - €8,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Corporate Finance Manager</span>
                  <span className="text-green-600 font-bold">€5,000 - €10,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg">
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
              European Work Visa Process for Finance Workers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your European work permit for finance jobs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Job Offer</h3>
              <p className="text-gray-600 text-sm">
                Secure a job offer from a European bank or financial institution who will sponsor your work permit
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Work Permit Application</h3>
              <p className="text-gray-600 text-sm">
                Employer applies for work permit at the relevant European immigration authority
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Visa Application</h3>
              <p className="text-gray-600 text-sm">
                Apply for work visa at the European consulate in India with all required documents
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <li>• Finance/Accounting degree and certificates</li>
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
              Everything you need to know about life in Europe as an Indian finance professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation</h3>
              <p className="text-gray-600 mb-4">
                Many finance companies provide accommodation or housing allowance to help with living costs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Company Housing:</span>
                  <span className="font-semibold">€500-€1,200/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Apartment:</span>
                  <span className="font-semibold">€800-€2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Shared Room:</span>
                  <span className="font-semibold">€400-€1,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Food & Dining</h3>
              <p className="text-gray-600 mb-4">
                Many finance companies provide meals, and groceries are affordable in most European countries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Company Meals:</span>
                  <span className="font-semibold">Often provided</span>
                </div>
                <div className="flex justify-between">
                  <span>Groceries (Monthly):</span>
                  <span className="font-semibold">€250-€500</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant Meal:</span>
                  <span className="font-semibold">€15-€40</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <p className="text-gray-600 mb-4">
                Many finance companies provide transportation or transportation allowance for work.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Company Transport:</span>
                  <span className="font-semibold">Often provided</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Pass:</span>
                  <span className="font-semibold">€50-€120</span>
                </div>
                <div className="flex justify-between">
                  <span>Single Ticket:</span>
                  <span className="font-semibold">€2-€5</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Excellent healthcare systems with mandatory health insurance for all workers.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Health Insurance:</span>
                  <span className="font-semibold">€150-€400/month</span>
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
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Language Learning</h3>
              <p className="text-gray-600 mb-4">
                Many finance companies provide language classes to help workers integrate better.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Company Classes:</span>
                  <span className="font-semibold">Often free</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Classes:</span>
                  <span className="font-semibold">€300-€600</span>
                </div>
                <div className="flex justify-between">
                  <span>Online Courses:</span>
                  <span className="font-semibold">€100-€300</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Entertainment</h3>
              <p className="text-gray-600 mb-4">
                Rich cultural life with museums, theaters, festivals, and outdoor activities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cinema Ticket:</span>
                  <span className="font-semibold">€10-€20</span>
                </div>
                <div className="flex justify-between">
                  <span>Museum Entry:</span>
                  <span className="font-semibold">€8-€20</span>
                </div>
                <div className="flex justify-between">
                  <span>Sports Activities:</span>
                  <span className="font-semibold">€15-€40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your European Finance Career Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian finance professionals who achieved their European career dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">1600+</div>
              <div className="text-green-200">Finance Workers Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-green-200">Visa Success Rate</div>
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
