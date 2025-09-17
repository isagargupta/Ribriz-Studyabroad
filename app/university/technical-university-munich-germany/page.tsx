import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Users, Calendar, DollarSign, Star, Globe, BookOpen, Award, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technical University of Munich Germany: Complete Guide for Indian Students 2025',
  description: 'Complete guide to Technical University of Munich Germany for Indian students. Free tuition, admission requirements, programs, and application process. Get expert guidance from Ribriz Overseas.',
  keywords: [
    'Technical University of Munich Germany for Indian students',
    'TUM Munich admission requirements',
    'TUM Munich free tuition',
    'TUM Munich scholarships for Indians',
    'TUM Munich programs',
    'study at TUM Munich',
    'TUM Munich application process',
    'TUM Munich ranking',
    'TUM Munich courses',
    'TUM Munich campus'
  ],
  openGraph: {
    title: 'Technical University of Munich Germany: Complete Guide for Indian Students 2025',
    description: 'Complete guide to Technical University of Munich Germany for Indian students. Free tuition, admission requirements, programs, and application process.',
    images: ['https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function TechnicalUniversityMunich() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Technical University of Munich
                <span className="block text-blue-300">Germany Complete Guide</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover Germany's leading technical university with FREE tuition for international students. 
                Get comprehensive information about TUM's programs, admission requirements, and how to make your German education dream a reality.
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
                src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Technical University of Munich Campus"
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
                About Technical University of Munich
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Technical University of Munich (TUM) is Germany's leading technical university and one of Europe's most prestigious institutions for science and technology. 
                Established in 1868, TUM has been at the forefront of innovation and research excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in Munich, Bavaria, TUM offers world-class education with FREE tuition for all students, including international students. 
                The university's commitment to excellence and its strong industry connections make it a top choice for students worldwide.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose TUM?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">World's #50 University (QS Rankings)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Nobel Prize Winners: 17</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">FREE Tuition for All Students</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Strong Industry Connections</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">42,000+ Students</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Established: 1868</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Munich, Bavaria, Germany</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Acceptance Rate: 8%</span>
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
                      <div className="text-gray-600">Munich, Bavaria, Germany</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Total Students</div>
                      <div className="text-gray-600">42,000+</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Established</div>
                      <div className="text-gray-600">1868</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Tuition</div>
                      <div className="text-green-600 font-bold">FREE</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Global Ranking</div>
                      <div className="text-gray-600">#50 (QS World Rankings)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Language</div>
                      <div className="text-gray-600">German/English</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Application Deadline</div>
                      <div className="text-gray-600">July 15</div>
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
              Popular Programs at TUM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TUM offers a wide range of undergraduate and graduate programs in engineering, technology, and natural sciences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Science</h3>
              <p className="text-gray-600 mb-4">
                TUM's Computer Science program is consistently ranked among the top programs globally with strong industry connections.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 years (Bachelor)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German/English</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mechanical Engineering</h3>
              <p className="text-gray-600 mb-4">
                TUM's Mechanical Engineering program is renowned for its research excellence and practical applications.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 years (Bachelor)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German/English</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Electrical Engineering</h3>
              <p className="text-gray-600 mb-4">
                TUM's Electrical Engineering program offers cutting-edge research opportunities and industry partnerships.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 years (Bachelor)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German/English</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mathematics</h3>
              <p className="text-gray-600 mb-4">
                TUM's Mathematics program provides strong theoretical foundations with practical applications.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 years (Bachelor)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German/English</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Physics</h3>
              <p className="text-gray-600 mb-4">
                TUM's Physics program offers world-class research opportunities and state-of-the-art facilities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 years (Bachelor)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German/English</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chemistry</h3>
              <p className="text-gray-600 mb-4">
                TUM's Chemistry program provides comprehensive education in chemical sciences with research opportunities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 years (Bachelor)</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="font-semibold">German/English</span>
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
              Comprehensive guide to TUM's admission requirements and application process
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Requirements</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">High School Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Minimum 80% average in Grade 12</li>
                    <li>• Strong performance in Mathematics and Science</li>
                    <li>• Prerequisites vary by program</li>
                    <li>• German language proficiency (if required)</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Language Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• German: DSH-2 or TestDaF 4x4</li>
                    <li>• English: IELTS 6.5+ or TOEFL 88+</li>
                    <li>• Some programs are taught in English</li>
                    <li>• Language certificates must be recent</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Application Components</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• TUMonline Application</li>
                    <li>• High school transcript (certified)</li>
                    <li>• Language proficiency certificates</li>
                    <li>• CV/Resume</li>
                    <li>• Motivation letter (if required)</li>
                    <li>• Aptitude test (if required)</li>
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
                    <h4 className="font-bold text-gray-900">October - June</h4>
                    <p className="text-gray-600">Prepare documents, take language tests, research programs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">July 15</h4>
                    <p className="text-gray-600">Application deadline for Winter Semester</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">August - September</h4>
                    <p className="text-gray-600">Admission decisions released</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">October</h4>
                    <p className="text-gray-600">Winter Semester begins</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Important Notes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• TUM offers FREE tuition for all students</li>
                  <li>• Only semester fee of €150-300 required</li>
                  <li>• Strong German language skills recommended</li>
                  <li>• Some programs require aptitude tests</li>
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
              Understanding TUM's tuition structure and available financial assistance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition & Fees (2024-2025)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="font-semibold">Tuition</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Semester Fee</span>
                  <span className="text-blue-600 font-bold">€150-300</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Student Union Fee</span>
                  <span className="text-blue-600 font-bold">€85</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Public Transport</span>
                  <span className="text-blue-600 font-bold">€200</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold">Books & Supplies</span>
                  <span className="text-blue-600 font-bold">€500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-2 border-green-200">
                  <span className="font-bold text-lg">Total Cost per Semester</span>
                  <span className="text-green-600 font-bold text-lg">€935-1,085</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> TUM offers FREE tuition for all students, including international students. Only semester fees and living expenses apply.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Aid & Scholarships</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">TUM Scholarships</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• TUM Scholarship Program</li>
                    <li>• Deutschlandstipendium</li>
                    <li>• International Student Awards</li>
                    <li>• Research Fellowships</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Government Scholarships</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• DAAD Scholarships</li>
                    <li>• Erasmus+ Program</li>
                    <li>• German Academic Exchange Service</li>
                    <li>• State Scholarships</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Living Expenses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Accommodation: €400-800/month</li>
                    <li>• Food: €200-300/month</li>
                    <li>• Health Insurance: €110/month</li>
                    <li>• Other expenses: €200-300/month</li>
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
            Ready to Apply to TUM Munich?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who achieved their TUM dream with Ribriz Overseas. 
            Get free consultation and expert guidance today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">800+</div>
              <div className="text-blue-200">TUM Applications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">92%</div>
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
