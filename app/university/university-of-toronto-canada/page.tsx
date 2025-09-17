import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Users, Calendar, DollarSign, Star, Globe, BookOpen, Award, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'University of Toronto Canada: Complete Guide for Indian Students 2025',
  description: 'Complete guide to University of Toronto Canada for Indian students. Admission requirements, tuition fees, scholarships, programs, and application process. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'University of Toronto Canada for Indian students',
    'U of T admission requirements',
    'University of Toronto tuition fees',
    'University of Toronto scholarships for Indians',
    'University of Toronto programs',
    'study at University of Toronto',
    'University of Toronto application process',
    'University of Toronto ranking',
    'University of Toronto courses',
    'University of Toronto campus'
  ],
  openGraph: {
    title: 'University of Toronto Canada: Complete Guide for Indian Students 2025',
    description: 'Complete guide to University of Toronto Canada for Indian students. Admission requirements, tuition fees, scholarships, programs, and application process.',
    images: ['https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function UniversityOfToronto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                University of Toronto
                <span className="block text-blue-300">Canada Complete Guide</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover Canada's leading research university. Get comprehensive information about U of T's programs, 
                admission requirements, scholarships, and how to make your Canadian education dream a reality.
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
                src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="University of Toronto Campus"
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
                About University of Toronto
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The University of Toronto is a public research university in Toronto, Ontario, Canada. 
                Established in 1827, it is consistently ranked among the top universities in the world and is Canada's leading research institution.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Toronto, U of T offers unparalleled opportunities for academic excellence, research collaboration, 
                and career advancement. The university's commitment to innovation and its global reputation make it a top choice for international students.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose U of T?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">World's #18 University (QS Rankings)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Nobel Prize Winners: 10</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Prime Ministers: 5</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Research Funding: $1.2B+</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">97,000+ Students</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Established: 1827</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Toronto, Ontario, Canada</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Acceptance Rate: 43%</span>
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
                      <div className="text-gray-600">Toronto, Ontario, Canada</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Total Students</div>
                      <div className="text-gray-600">97,000+</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Established</div>
                      <div className="text-gray-600">1827</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Tuition (International)</div>
                      <div className="text-gray-600">$6,100 CAD/year</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Global Ranking</div>
                      <div className="text-gray-600">#18 (QS World Rankings)</div>
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
                      <div className="text-gray-600">January 15</div>
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
              Popular Programs at U of T
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              University of Toronto offers a wide range of undergraduate and graduate programs across various disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Engineering</h3>
              <p className="text-gray-600 mb-4">
                U of T Engineering is one of the top engineering schools in Canada, offering cutting-edge programs and research opportunities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BASc)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$6,100 CAD/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">High School, IELTS</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rotman Commerce</h3>
              <p className="text-gray-600 mb-4">
                Rotman Commerce offers world-class business education with strong industry connections and career support.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BCom)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$6,100 CAD/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">High School, IELTS</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Life Sciences</h3>
              <p className="text-gray-600 mb-4">
                U of T's Life Sciences program is renowned for its research excellence and comprehensive curriculum.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BSc)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$6,100 CAD/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">High School, IELTS</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Science</h3>
              <p className="text-gray-600 mb-4">
                U of T's Computer Science program is consistently ranked among the top programs globally.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BSc)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$6,100 CAD/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">High School, IELTS</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Arts & Humanities</h3>
              <p className="text-gray-600 mb-4">
                U of T offers comprehensive programs in arts and humanities with world-class faculty and resources.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BA)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$6,100 CAD/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">High School, IELTS</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Sciences</h3>
              <p className="text-gray-600 mb-4">
                U of T's Social Sciences programs provide comprehensive understanding of human society and behavior.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years (BA)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold">$6,100 CAD/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Requirements:</span>
                  <span className="font-semibold">High School, IELTS</span>
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
              Comprehensive guide to U of T's admission requirements and application process
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Requirements</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">High School Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Minimum 85% average in Grade 12</li>
                    <li>• Strong performance in core subjects</li>
                    <li>• Prerequisites vary by program</li>
                    <li>• English proficiency required</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">English Language Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IELTS: 6.5+ (6.0 in each band)</li>
                    <li>• TOEFL: 100+ (iBT)</li>
                    <li>• Duolingo: 120+</li>
                    <li>• Cambridge: 180+</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Application Components</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• OUAC Application</li>
                    <li>• High school transcript</li>
                    <li>• English proficiency test</li>
                    <li>• Personal statement (if required)</li>
                    <li>• Supplementary application (if required)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">September - December</h4>
                    <p className="text-gray-600">Research programs, prepare documents, take language tests</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">January 15</h4>
                    <p className="text-gray-600">Application deadline for most programs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">March - May</h4>
                    <p className="text-gray-600">Admission decisions released</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">June 1</h4>
                    <p className="text-gray-600">Decision deadline for admitted students</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Important Notes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• U of T is need-blind for international students</li>
                  <li>• Financial aid is available for international students</li>
                  <li>• Early application is recommended</li>
                  <li>• Some programs have additional requirements</li>
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
              Understanding U of T's tuition structure and available financial assistance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition & Fees (2024-2025)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Tuition (International)</span>
                  <span className="text-blue-600 font-bold">$6,100 CAD</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Incidental Fees</span>
                  <span className="text-blue-600 font-bold">$2,000 CAD</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Residence & Meal Plan</span>
                  <span className="text-blue-600 font-bold">$15,000 CAD</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Books & Supplies</span>
                  <span className="text-blue-600 font-bold">$1,500 CAD</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-2 border-blue-200">
                  <span className="font-bold text-lg">Total Cost</span>
                  <span className="text-blue-600 font-bold text-lg">$24,600 CAD</span>
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
                  <h4 className="text-lg font-bold text-gray-900 mb-3">U of T Financial Aid</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Need-based financial aid available</li>
                    <li>• Merit-based scholarships</li>
                    <li>• International student awards</li>
                    <li>• Work-study programs</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Merit Scholarships</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• President's Scholars of Excellence</li>
                    <li>• Lester B. Pearson International Scholarship</li>
                    <li>• International Scholar Award</li>
                    <li>• Departmental Awards</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">External Scholarships</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Government of Canada Scholarships</li>
                    <li>• Commonwealth Scholarships</li>
                    <li>• Rotary Foundation Scholarships</li>
                    <li>• Private Foundation Awards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Apply to University of Toronto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who achieved their U of T dream with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-200">U of T Applications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
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
