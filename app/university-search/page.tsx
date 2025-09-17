import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { GraduationCap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'University Search: Find Your Perfect Study Abroad Program | Ribriz Overseas',
  description: 'Search and compare top universities worldwide. Find detailed information about programs, admission requirements, tuition fees, and scholarships for Indian students. Expert guidance for study abroad.',
  keywords: [
    'university search',
    'study abroad universities',
    'top universities for Indian students',
    'university comparison',
    'study abroad programs',
    'university rankings',
    'university admission requirements',
    'university tuition fees',
    'university scholarships',
    'international universities'
  ],
  openGraph: {
    title: 'University Search: Find Your Perfect Study Abroad Program | Ribriz Overseas',
    description: 'Search and compare top universities worldwide. Find detailed information about programs, admission requirements, tuition fees, and scholarships for Indian students.',
    images: ['https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function UniversitySearch() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Coming Soon Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
            <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Coming Soon</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            University Search
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Coming Soon
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            We're working on an amazing university search feature that will help you find the perfect institution for your study abroad journey. Stay tuned!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/study-abroad-application"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              <span>Start Your Application</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="/blog"
              className="group bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 flex items-center"
            >
              <span>Read Our Blog</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
