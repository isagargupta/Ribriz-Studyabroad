import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Engineering Jobs in Poland for Indians 2025: Complete Guide & Opportunities',
  description: 'Complete guide to engineering jobs in Poland for Indians. Work permits, visa process, salary, living costs, and career opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'engineering jobs Poland for Indians',
    'work permit Poland for Indians',
    'Poland work visa for Indians',
    'engineering jobs Poland salary',
    'living in Poland for Indians',
    'Poland job opportunities',
    'work in Poland 2025',
    'Poland employment visa',
    'Polish engineering companies',
    'mechanical engineer Poland'
  ],
  openGraph: {
    title: 'Engineering Jobs in Poland for Indians 2025: Complete Guide',
    description: 'Complete guide to engineering jobs in Poland for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
    images: ['https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function EngineeringJobsPoland() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-900 via-white to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Engineering Jobs in Poland for Indians
                <span className="block text-red-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Discover high-paying engineering opportunities, excellent work-life balance, and career growth in Poland. 
                Get expert guidance to make your Polish engineering career dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/career-application"
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
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Polish Engineering Industry"
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

      {/* Why Poland for Engineering */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Poland is Perfect for Indian Engineers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poland offers exceptional opportunities for Indian engineers with its growing industrial sector
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growing Industrial Sector</h3>
              <p className="text-gray-600">
                Poland has a rapidly growing manufacturing and industrial sector with major automotive, aerospace, and tech companies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Salaries</h3>
              <p className="text-gray-600">
                Engineers earn €25,000-€70,000 annually with excellent benefits and lower cost of living compared to Western Europe.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🗣️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">English-Friendly Environment</h3>
              <p className="text-gray-600">
                Many Polish companies operate in English, making it easier for Indian engineers to work and communicate.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">EU Gateway</h3>
              <p className="text-gray-600">
                Poland serves as a gateway to the entire EU market with easy travel and business opportunities across Europe.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Living</h3>
              <p className="text-gray-600">
                Lower cost of living compared to Western Europe while maintaining high quality of life and modern infrastructure.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Development</h3>
              <p className="text-gray-600">
                Excellent opportunities for career growth, training, and professional development in cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Engineering Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top Engineering Job Categories in Poland
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-demand engineering roles offering excellent career opportunities and competitive salaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🔧
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Mechanical Engineer</h3>
                  <p className="text-red-600 font-semibold">Very High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Mechanical engineers are in high demand in automotive, manufacturing, and aerospace industries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€30,000 - €60,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">CAD, SolidWorks, FEA</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">2+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  ⚡
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Electrical Engineer</h3>
                  <p className="text-blue-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Electrical engineers are needed in power systems, automation, and renewable energy sectors.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€28,000 - €55,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">PLC, SCADA, Power Systems</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">2+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  💻
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
                  <p className="text-green-600 font-semibold">Very High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Software engineers are in high demand in IT companies, fintech, and gaming industries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€35,000 - €70,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">Java, Python, React</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">2+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🏗️
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Civil Engineer</h3>
                  <p className="text-purple-600 font-semibold">Growing Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Civil engineers are needed for infrastructure projects, construction, and urban development.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€25,000 - €50,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">AutoCAD, Revit, Project Management</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">2+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🚗
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Automotive Engineer</h3>
                  <p className="text-yellow-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Automotive engineers are in high demand with major car manufacturers and suppliers in Poland.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€32,000 - €65,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">CATIA, Automotive Systems</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">3+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🔬
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Process Engineer</h3>
                  <p className="text-teal-600 font-semibold">Steady Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Process engineers are needed in chemical, pharmaceutical, and manufacturing industries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€28,000 - €55,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">Process Design, Optimization</span>
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
              Salary & Benefits in Poland
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive salaries and excellent benefits package for Indian engineers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Engineering Salaries</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Junior Engineer</span>
                  <span className="text-red-600 font-bold">€25,000 - €35,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Senior Engineer</span>
                  <span className="text-red-600 font-bold">€40,000 - €60,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Lead Engineer</span>
                  <span className="text-red-600 font-bold">€55,000 - €75,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Software Engineer</span>
                  <span className="text-red-600 font-bold">€35,000 - €70,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Project Manager</span>
                  <span className="text-red-600 font-bold">€45,000 - €80,000</span>
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
                    <div className="font-semibold">26 Days Annual Leave</div>
                    <div className="text-sm text-gray-600">Paid vacation days per year</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">👶</span>
                  <div>
                    <div className="font-semibold">Parental Leave</div>
                    <div className="text-sm text-gray-600">Up to 12 months paid parental leave</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <div className="font-semibold">Training & Development</div>
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

      {/* Work Visa Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Poland Work Visa Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your Poland work permit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Job Offer</h3>
              <p className="text-gray-600 text-sm">
                Secure a job offer from a Polish employer who will sponsor your work permit
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Work Permit Application</h3>
              <p className="text-gray-600 text-sm">
                Employer applies for work permit at the local Voivodeship Office
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Visa Application</h3>
              <p className="text-gray-600 text-sm">
                Apply for National D visa at the Polish consulate in India
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Residence Permit</h3>
              <p className="text-gray-600 text-sm">
                Apply for temporary residence permit after arriving in Poland
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
                  <li>• Engineering degree certificate</li>
                  <li>• Work experience letters</li>
                  <li>• CV/Resume</li>
                  <li>• Job offer letter</li>
                  <li>• Health insurance proof</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living in Poland */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Living in Poland - What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about life in Poland as an Indian engineer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation</h3>
              <p className="text-gray-600 mb-4">
                Affordable housing with modern amenities and excellent public transport connectivity.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1-Bedroom Apartment:</span>
                  <span className="font-semibold">€400-€800</span>
                </div>
                <div className="flex justify-between">
                  <span>3-Bedroom Apartment:</span>
                  <span className="font-semibold">€600-€1,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Utilities:</span>
                  <span className="font-semibold">€100-€200</span>
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
                  <span className="font-semibold">€200-€400</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant Meal:</span>
                  <span className="font-semibold">€8-€20</span>
                </div>
                <div className="flex justify-between">
                  <span>Indian Restaurant:</span>
                  <span className="font-semibold">€15-€30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
              <p className="text-gray-600 mb-4">
                Excellent public transport system with trains, buses, and trams connecting all cities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monthly Pass:</span>
                  <span className="font-semibold">€30-€60</span>
                </div>
                <div className="flex justify-between">
                  <span>Single Ticket:</span>
                  <span className="font-semibold">€1-€3</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxi (10km):</span>
                  <span className="font-semibold">€8-€15</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <p className="text-gray-600 mb-4">
                Excellent education system with many international schools and universities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Public School:</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>International School:</span>
                  <span className="font-semibold">€8,000-€15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>University:</span>
                  <span className="font-semibold">€2,000-€8,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Good healthcare system with mandatory health insurance for all residents.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Health Insurance:</span>
                  <span className="font-semibold">€50-€150/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Doctor Visit:</span>
                  <span className="font-semibold">€5-€15</span>
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
                  <span className="font-semibold">€6-€12</span>
                </div>
                <div className="flex justify-between">
                  <span>Museum Entry:</span>
                  <span className="font-semibold">€3-€10</span>
                </div>
                <div className="flex justify-between">
                  <span>Gym Membership:</span>
                  <span className="font-semibold">€20-€50/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-red-900 via-white to-red-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Poland Engineering Career Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian engineers who achieved their Polish career dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">1200+</div>
              <div className="text-red-200">Engineers Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">96%</div>
              <div className="text-red-200">Visa Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-red-200">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/career-application"
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
