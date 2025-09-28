'use client';

import dynamic from 'next/dynamic'
import Header from './components/Header'
import StudyAbroadHero from './components/StudyAbroadHero'
import MobileHero from './components/MobileHero'
// import HomepageSearch from './components/HomepageSearch'
import WorkInEurope from './components/WorkInEurope'
import VerifiedOpportunities from './components/VerifiedOpportunities'
import WhyChooseUs from './components/WhyChooseUs'
import PremiumPackages from './components/PremiumPackages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TrustIndicators from './components/TrustIndicators'
import TestimonialsMarquee from './components/TestimonialsMarquee'
import WhatsAppSupport from './components/WhatsAppSupport'
import CustomerJourney from './components/CustomerJourney'
import { useState } from 'react'

// Components that might cause hydration issues - render client-side only
const MediaCoverage = dynamic(() => import('./components/MediaCoverage'), { ssr: false })
const FeaturedBlogs = dynamic(() => import('./components/FeaturedBlogs'), { ssr: false })
const MarqueeBlogs = dynamic(() => import('./components/MarqueeBlogs'), { ssr: false })
// const UniversityAdmissions = dynamic(() => import('./components/UniversityAdmissions'), { ssr: false })
const WhatsAppFloat = dynamic(() => import('./components/WhatsAppFloat'), { ssr: false })
const SelectionModal = dynamic(() => import('./components/SelectionModal'), { ssr: false })

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" className="section px-4 sm:px-6 lg:px-8">
        {/* Desktop Hero - Hidden on Mobile and Tablet */}
        <div className="hidden lg:block">
          <StudyAbroadHero />
        </div>
        
        {/* Mobile Hero - Hidden on Desktop */}
        <div className="block lg:hidden">
          <MobileHero />
        </div>
        
      {/* <HomepageSearch /> */}
      <WorkInEurope />
      <MediaCoverage />
      <TrustIndicators />
      <TestimonialsMarquee />
      {/* <UniversityAdmissions /> */}
      <MarqueeBlogs />
      <VerifiedOpportunities />
      <WhyChooseUs />
      <PremiumPackages />
      
      {/* Premium Career Application CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-premium mb-8 animate-trust-badge">
            <svg className="h-5 w-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-bold tracking-wide">Premium Career Services</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full ml-3 animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight font-bold">
            Ready to Apply for Your
            <span className="block animate-text-shimmer">
              Dream Job?
            </span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto font-light leading-relaxed text-gray-300">
            Take the next step in your international career journey. Our comprehensive premium application process ensures you get matched with the perfect opportunity through our verified network.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center bg-white text-blue-700 px-12 py-6 rounded-3xl hover:bg-gray-50 hover:shadow-xl transition-all duration-500 font-bold text-xl tracking-wide transform hover:-translate-y-2 hover:scale-105 active:scale-95 relative overflow-hidden shadow-lg animate-premium-glow"
          >
            <div className="flex items-center relative z-10">
              <svg className="mr-4 h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Start Your Application
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm opacity-90">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free application process</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Expert career guidance</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Direct employer connections</span>
            </div>
          </div>
        </div>
      </section>
      
      <CustomerJourney />
      <WhatsAppSupport />
      <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}