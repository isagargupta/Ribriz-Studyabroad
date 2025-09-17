import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Jobs in Netherlands for Indians 2025: Complete Guide & Opportunities',
  description: 'Complete guide to IT jobs in Netherlands for Indians. Work permits, visa process, salary, living costs, and career opportunities. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'IT jobs Netherlands for Indians',
    'work permit Netherlands for Indians',
    'Netherlands work visa for Indians',
    'IT jobs Netherlands salary',
    'living in Netherlands for Indians',
    'Netherlands job opportunities',
    'work in Netherlands 2025',
    'Netherlands employment visa',
    'Dutch IT companies',
    'software developer Netherlands'
  ],
  openGraph: {
    title: 'IT Jobs in Netherlands for Indians 2025: Complete Guide',
    description: 'Complete guide to IT jobs in Netherlands for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
    images: ['https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function ITJobsNetherlands() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-900 via-red-800 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                IT Jobs in Netherlands for Indians
                <span className="block text-orange-300">2025 Complete Guide</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Discover high-paying IT opportunities, excellent work-life balance, and career growth in Netherlands. 
                Get expert guidance to make your Dutch IT career dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/career-application"
                  className="bg-white text-orange-900 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg"
                >
                  Apply Now - Free Consultation
                </Link>
                <Link 
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-900 transition-all duration-300"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Netherlands IT Office"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Netherlands for IT Jobs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Netherlands is Perfect for Indian IT Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Netherlands offers exceptional opportunities for Indian IT professionals with its thriving tech ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Thriving Tech Hub</h3>
              <p className="text-gray-600">
                Amsterdam is Europe's leading tech hub with 2,000+ tech companies including Google, Uber, and Booking.com.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🗣️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">English-Friendly Environment</h3>
              <p className="text-gray-600">
                95% of Dutch people speak English fluently, making it easy for Indian professionals to work and live.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Salaries</h3>
              <p className="text-gray-600">
                IT professionals earn €50,000-€120,000 annually with excellent benefits and 30% tax ruling for expats.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                Dutch companies prioritize work-life balance with flexible hours, remote work options, and 25+ vacation days.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation & Startups</h3>
              <p className="text-gray-600">
                Netherlands is home to 3,000+ startups and offers excellent opportunities for innovation and entrepreneurship.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">EU Gateway</h3>
              <p className="text-gray-600">
                Netherlands serves as a gateway to the entire EU market with easy travel and business opportunities.
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

      {/* Top IT Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top IT Job Categories in Netherlands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-demand IT roles offering excellent career opportunities and competitive salaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  💻
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Software Developer</h3>
                  <p className="text-blue-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Full-stack developers, frontend/backend specialists, and mobile app developers are in high demand.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€45,000 - €85,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">React, Node.js, Python</span>
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
                  📊
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Data Scientist</h3>
                  <p className="text-green-600 font-semibold">Very High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Data scientists, ML engineers, and AI specialists are highly sought after in Dutch companies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€55,000 - €95,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">Python, R, TensorFlow</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">3+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🔒
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Cybersecurity</h3>
                  <p className="text-purple-600 font-semibold">Critical Need</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Cybersecurity experts, penetration testers, and security architects are in critical shortage.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€50,000 - €90,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">CISSP, CEH, Security+</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">3+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  ☁️
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Cloud Engineer</h3>
                  <p className="text-yellow-600 font-semibold">Growing Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                AWS, Azure, and GCP specialists are needed as companies migrate to cloud infrastructure.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€50,000 - €85,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">AWS, Docker, Kubernetes</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">2+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🎯
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Product Manager</h3>
                  <p className="text-red-600 font-semibold">Leadership Role</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Product managers with technical background are highly valued in Dutch tech companies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€60,000 - €100,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">Agile, Scrum, Analytics</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">4+ years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  🔧
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">DevOps Engineer</h3>
                  <p className="text-teal-600 font-semibold">High Demand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                DevOps engineers with CI/CD expertise are essential for modern software development.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">€55,000 - €90,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">Jenkins, GitLab, Terraform</span>
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
              Salary & Benefits in Netherlands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive salaries and excellent benefits package for Indian IT professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average IT Salaries</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Junior Developer</span>
                  <span className="text-blue-600 font-bold">€35,000 - €50,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Senior Developer</span>
                  <span className="text-blue-600 font-bold">€55,000 - €80,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Tech Lead</span>
                  <span className="text-blue-600 font-bold">€70,000 - €100,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Data Scientist</span>
                  <span className="text-blue-600 font-bold">€55,000 - €95,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-semibold">Product Manager</span>
                  <span className="text-blue-600 font-bold">€60,000 - €100,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
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
                    <div className="font-semibold">25+ Vacation Days</div>
                    <div className="text-sm text-gray-600">Paid vacation days per year</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">💰</span>
                  <div>
                    <div className="font-semibold">30% Tax Ruling</div>
                    <div className="text-sm text-gray-600">Tax benefit for expat employees</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🏠</span>
                  <div>
                    <div className="font-semibold">Relocation Support</div>
                    <div className="text-sm text-gray-600">Moving and settling assistance</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <div className="font-semibold">Learning Budget</div>
                    <div className="text-sm text-gray-600">€2,000+ for professional development</div>
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
              Netherlands Work Visa Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your Netherlands work permit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Job Offer</h3>
              <p className="text-gray-600 text-sm">
                Secure a job offer from a Dutch employer who will sponsor your work permit
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Employer Application</h3>
              <p className="text-gray-600 text-sm">
                Employer applies for work permit and residence permit on your behalf
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm">
                Submit required documents including passport, qualifications, and health insurance
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Visa Approval</h3>
              <p className="text-gray-600 text-sm">
                Receive work permit and MVV visa to enter Netherlands and start working
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
                  <li>• Educational certificates</li>
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

      {/* Living in Netherlands */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Living in Netherlands - What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about life in Netherlands as an Indian IT professional
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
                  <span className="font-semibold">€1,200-€2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>3-Bedroom Apartment:</span>
                  <span className="font-semibold">€1,800-€3,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Utilities:</span>
                  <span className="font-semibold">€150-€300</span>
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
                  <span className="font-semibold">€20-€40</span>
                </div>
                <div className="flex justify-between">
                  <span>Indian Restaurant:</span>
                  <span className="font-semibold">€25-€50</span>
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
                  <span className="font-semibold">€100-€150</span>
                </div>
                <div className="flex justify-between">
                  <span>Single Ticket:</span>
                  <span className="font-semibold">€3-€5</span>
                </div>
                <div className="flex justify-between">
                  <span>Bicycle:</span>
                  <span className="font-semibold">€15-€25/day</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
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
                  <span className="font-semibold">€15,000-€25,000</span>
                </div>
                <div className="flex justify-between">
                  <span>University:</span>
                  <span className="font-semibold">€2,000-€15,000</span>
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
                  <span className="font-semibold">€120-€200/month</span>
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
                  <span className="font-semibold">€12-€18</span>
                </div>
                <div className="flex justify-between">
                  <span>Museum Entry:</span>
                  <span className="font-semibold">€10-€20</span>
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
      <section id="contact" className="py-16 bg-gradient-to-r from-orange-900 via-red-800 to-blue-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Netherlands IT Career Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful Indian IT professionals who achieved their Dutch career dreams with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">1500+</div>
              <div className="text-orange-200">IT Professionals Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-orange-200">Visa Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-orange-200">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/career-application"
              className="bg-white text-orange-900 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg"
            >
              Apply Now - Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-900 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
