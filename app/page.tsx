'use client';

import dynamic from 'next/dynamic'
import Header from './components/Header'
import VerifiedOpportunities from './components/VerifiedOpportunities'
import WhyChooseUs from './components/WhyChooseUs'
import CountriesWeServe from './components/CountriesWeServe'
import PremiumPackages from './components/PremiumPackages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'

// Components that might cause hydration issues - render client-side only
const StudyAbroadHero = dynamic(() => import('./components/StudyAbroadHero'), { ssr: false })
const MediaCoverage = dynamic(() => import('./components/MediaCoverage'), { ssr: false })
const FeaturedBlogs = dynamic(() => import('./components/FeaturedBlogs'), { ssr: false })
const WhatsAppFloat = dynamic(() => import('./components/WhatsAppFloat'), { ssr: false })
const SelectionModal = dynamic(() => import('./components/SelectionModal'), { ssr: false })

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StudyAbroadHero />
      <MediaCoverage />
      <FeaturedBlogs />
      <VerifiedOpportunities />
      <WhyChooseUs />
      <CountriesWeServe />
      <PremiumPackages />
      
      {/* Career Application CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Apply for Your Dream Job?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Take the next step in your international career journey. Our comprehensive application process ensures you get matched with the perfect opportunity.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center bg-white text-blue-700 px-10 py-4 rounded-2xl hover:bg-gray-50 hover:shadow-2xl transition-all duration-500 font-bold text-lg tracking-wide transform hover:-translate-y-1 hover:scale-105 active:scale-95 group"
          >
            Start Your Application
            <svg className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <div className="mt-8 text-sm opacity-75">
            ✓ Free application process ✓ Expert career guidance ✓ Direct employer connections
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}