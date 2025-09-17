import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Users, Calendar, DollarSign, Star, Globe, BookOpen, Award, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Harvard University USA: Complete Guide for Indian Students 2025',
  description: 'Complete guide to Harvard University USA for Indian students. Admission requirements, tuition fees, scholarships, programs, and application process. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'Harvard University USA for Indian students',
    'Harvard admission requirements',
    'Harvard tuition fees',
    'Harvard scholarships for Indians',
    'Harvard University programs',
    'study at Harvard University',
    'Harvard application process',
    'Harvard University ranking',
    'Harvard University courses',
    'Harvard University campus'
  ],
  openGraph: {
    title: 'Harvard University USA: Complete Guide for Indian Students 2025',
    description: 'Complete guide to Harvard University USA for Indian students. Admission requirements, tuition fees, scholarships, programs, and application process.',
    images: ['https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function HarvardUniversity() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Harvard University
                <span className="block text-red-300">USA Complete Guide</span>
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Discover the world's most prestigious university. Get comprehensive information about Harvard's programs, 
                admission requirements, scholarships, and how to make your Harvard dream a reality.
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
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Harvard University Campus"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Universities Button - Temporarily Hidden */}
      {/* <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            href="/university-search"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Universities
          </Link>
        </div>
      </section> */}

      {/* University Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Harvard University
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Harvard University is the oldest institution of higher education in the United States and among the most prestigious in the world. 
                Established in 1636, Harvard has been at the forefront of academic excellence, research, and innovation for nearly four centuries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in Cambridge, Massachusetts, Harvard offers unparalleled opportunities for intellectual growth, research collaboration, 
                and career advancement. The university's commitment to excellence and its global reputation make it a dream destination for students worldwide.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Harvard?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700">World's #3 University (QS Rankings)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Nobel Prize Winners: 161</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700">US Presidents: 8</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Endowment: $53.2 Billion</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">23,000+ Students</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Established: 1636</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Cambridge, Massachusetts</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Acceptance Rate: 3.4%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">University Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Cambridge, Massachusetts, USA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Total Students</div>
                      <div className="text-gray-600">23,000+</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Established</div>
                      <div className="text-gray-600">1636</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Tuition (International)</div>
                      <div className="text-gray-600">$54,269 USD/year</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Global Ranking</div>
                      <div className="text-gray-600">#3 (QS World Rankings)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Language</div>
                      <div className="text-gray-600">English</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Application Deadline</div>
                      <div className="text-gray-600">January 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Popular Programs at Harvard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harvard offers a wide range of undergraduate and graduate programs across various disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medicine</h3>
              <p className="text-gray-600 mb-4">
                Harvard Medical School is one of the world's leading medical institutions, offering cutting-edge research and clinical training.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (MD)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$65,875/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">MCAT, Bachelor's</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Law</h3>
              <p className="text-gray-600 mb-4">
                Harvard Law School is the oldest continuously operating law school in the United States and one of the most prestigious.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 years (JD)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$67,720/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">LSAT, Bachelor's</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business (MBA)</h3>
              <p className="text-gray-600 mb-4">
                Harvard Business School offers one of the world's most prestigious MBA programs with exceptional networking opportunities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">2 years (MBA)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$73,440/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">GMAT/GRE, Work Experience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Arts & Sciences</h3>
              <p className="text-gray-600 mb-4">
                Harvard's Faculty of Arts and Sciences offers comprehensive undergraduate and graduate programs in humanities and sciences.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BA/BS)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$54,269/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">SAT/ACT, High School</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Engineering</h3>
              <p className="text-gray-600 mb-4">
                Harvard John A. Paulson School of Engineering and Applied Sciences offers cutting-edge engineering programs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BS)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$54,269/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">SAT/ACT, High School</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Science</h3>
              <p className="text-gray-600 mb-4">
                Harvard's Computer Science program combines theoretical foundations with practical applications in technology.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BS)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$54,269/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">SAT/ACT, High School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Admission Requirements for Indian Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to Harvard's admission requirements and application process
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Requirements</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">High School Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Excellent academic record (Top 1-2% of class)</li>
                    <li>• Strong performance in core subjects</li>
                    <li>• Advanced coursework (AP, IB, or equivalent)</li>
                    <li>• Competitive standardized test scores</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Standardized Tests</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• SAT: 1500+ (recommended)</li>
                    <li>• ACT: 34+ (recommended)</li>
                    <li>• TOEFL: 100+ (iBT) or IELTS: 7.0+</li>
                    <li>• Subject Tests (if required)</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Application Components</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Common Application or Coalition Application</li>
                    <li>• Harvard-specific essays</li>
                    <li>• Letters of recommendation (2)</li>
                    <li>• High school transcript</li>
                    <li>• Standardized test scores</li>
                    <li>• Extracurricular activities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">August - December</h4>
                    <p className="text-gray-600">Complete application, write essays, gather recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">January 1</h4>
                    <p className="text-gray-600">Application deadline for Regular Decision</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">March</h4>
                    <p className="text-gray-600">Admission decisions released</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">May 1</h4>
                    <p className="text-gray-600">Decision deadline for admitted students</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Important Notes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Harvard is need-blind for international students</li>
                  <li>• Financial aid is available for all admitted students</li>
                  <li>• Early Action deadline: November 1</li>
                  <li>• Interviews may be required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tuition Fees & Financial Aid
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding Harvard's tuition structure and available financial assistance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition & Fees (2024-2025)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Tuition</span>
                  <span className="text-red-600 font-bold">$54,269</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Room & Board</span>
                  <span className="text-red-600 font-bold">$20,374</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Fees</span>
                  <span className="text-red-600 font-bold">$4,192</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Books & Supplies</span>
                  <span className="text-red-600 font-bold">$1,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-2 border-red-200">
                  <span className="font-bold text-lg">Total Cost</span>
                  <span className="text-red-600 font-bold text-lg">$79,835</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Costs are for the 2024-2025 academic year. International students may have additional expenses for travel and visa processing.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Aid & Scholarships</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Harvard Financial Aid</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Need-blind admission for international students</li>
                    <li>• 100% of demonstrated need met</li>
                    <li>• Average aid package: $60,000+</li>
                    <li>• No loans required</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Merit Scholarships</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Harvard College Scholarship</li>
                    <li>• International Student Scholarships</li>
                    <li>• Departmental Awards</li>
                    <li>• Research Fellowships</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">External Scholarships</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Fulbright Scholarships</li>
                    <li>• Rhodes Scholarships</li>
                    <li>• Marshall Scholarships</li>
                    <li>• Government Scholarships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Campus Life at Harvard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the vibrant campus life and rich traditions at Harvard University
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white font-bold" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residential Life</h3>
              <p className="text-gray-600 mb-4">
                All first-year students live in Harvard Yard, then move to one of 12 residential houses for upperclass years.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Houses:</span>
                  <span className="font-semibold">12 Residential Houses</span>
                </div>
                <div className="flex justify-between">
                  <span>Dining:</span>
                  <span className="font-semibold">Annenberg Hall</span>
                </div>
                <div className="flex justify-between">
                  <span>Support:</span>
                  <span className="font-semibold">24/7 Residential Staff</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Organizations</h3>
              <p className="text-gray-600 mb-4">
                Over 400 student organizations including clubs, societies, and special interest groups.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Clubs:</span>
                  <span className="font-semibold">400+ Organizations</span>
                </div>
                <div className="flex justify-between">
                  <span>Sports:</span>
                  <span className="font-semibold">42 Varsity Teams</span>
                </div>
                <div className="flex justify-between">
                  <span>Arts:</span>
                  <span className="font-semibold">Theater, Music, Dance</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Campus Facilities</h3>
              <p className="text-gray-600 mb-4">
                World-class facilities including libraries, research centers, and recreational facilities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Libraries:</span>
                  <span className="font-semibold">28 Libraries</span>
                </div>
                <div className="flex justify-between">
                  <span>Museums:</span>
                  <span className="font-semibold">12 Museums</span>
                </div>
                <div className="flex justify-between">
                  <span>Research:</span>
                  <span className="font-semibold">100+ Centers</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">International Community</h3>
              <p className="text-gray-600 mb-4">
                Diverse international student body with comprehensive support services and cultural programs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Countries:</span>
                  <span className="font-semibold">150+ Countries</span>
                </div>
                <div className="flex justify-between">
                  <span>Support:</span>
                  <span className="font-semibold">International Office</span>
                </div>
                <div className="flex justify-between">
                  <span>Events:</span>
                  <span className="font-semibold">Cultural Celebrations</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🏃</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Athletics & Recreation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive athletic programs and recreational facilities for all skill levels.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Varsity:</span>
                  <span className="font-semibold">42 Teams</span>
                </div>
                <div className="flex justify-between">
                  <span>Intramural:</span>
                  <span className="font-semibold">30+ Sports</span>
                </div>
                <div className="flex justify-between">
                  <span>Facilities:</span>
                  <span className="font-semibold">Modern Gyms</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Support</h3>
              <p className="text-gray-600 mb-4">
                Extensive academic support services including tutoring, writing centers, and career services.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tutoring:</span>
                  <span className="font-semibold">Free Services</span>
                </div>
                <div className="flex justify-between">
                  <span>Career:</span>
                  <span className="font-semibold">Office of Career Services</span>
                </div>
                <div className="flex justify-between">
                  <span>Research:</span>
                  <span className="font-semibold">Undergraduate Research</span>
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
            Ready to Apply to Harvard University?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who achieved their Harvard dream with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-red-200">Harvard Applications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-red-200">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-red-200">Years Experience</div>
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
