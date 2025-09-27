'use client'

import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Globe, Users, Award, Sparkles, TrendingUp, Shield, GraduationCap, BookOpen, MapPin, Star, Briefcase, Euro, Building2, Heart } from 'lucide-react'
import Link from 'next/link'
import SelectionModal from './SelectionModal'

const MobileHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="hero relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden lg:hidden">
      {/* Mobile-Optimized Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-64 h-64 bg-gradient-to-r from-blue-50/40 to-indigo-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-4 w-48 h-48 bg-gradient-to-r from-slate-50/30 to-gray-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Mobile Trust Indicators */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center px-3 py-2 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-full shadow-lg mx-auto">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-semibold text-gray-900">4.9/5 Trustpilot</span>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-2 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-full shadow-lg mx-auto">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-500" />
                <span className="text-sm font-semibold text-gray-900">25,000+ Success Stories</span>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-2 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-full shadow-lg mx-auto">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-semibold text-gray-900">Verified & Trusted</span>
              </div>
            </div>
          </div>
          
          {/* Mobile Headline */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              <span className="block text-gray-900">Study Abroad & Work</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                in Europe for Indians
              </span>
            </h1>
            
            <p className="text-base text-gray-600 leading-relaxed font-medium px-4">
              Get expert guidance for your study abroad journey and secure verified job opportunities in Europe. 
              <span className="font-semibold text-gray-900"> Free consultation, no hidden fees.</span>
            </p>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="space-y-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-6 py-4 rounded-2xl hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 transition-all duration-300 font-semibold text-base flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[48px]"
            >
              <span className="text-center">Get Free Consultation</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-2xl hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold text-base inline-flex items-center justify-center transform hover:-translate-y-1 min-h-[48px]"
            >
              <span className="text-center">Find Jobs in Europe</span>
            </button>
          </div>
          
          {/* Mobile Benefits */}
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
              <span className="font-medium text-sm text-gray-600">Free consultation & guidance</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
              <span className="font-medium text-sm text-gray-600">Verified job opportunities</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
              <span className="font-medium text-sm text-gray-600">Work permit assistance</span>
            </div>
          </div>

          {/* Mobile Customer Journey Steps */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Journey Steps</h3>
              <p className="text-sm text-gray-600">Follow these steps to start your journey</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300" onClick={() => window.location.href = '/study-abroad-application'}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight">Step 1: Get University List</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">⏱ Takes 5 minutes</div>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight">Step 2: Secure Funding</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">Scholarships & Loans</div>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight">Step 3: Test Preparation</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">IELTS, PTE, DET & SAT</div>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight">Step 4: Application Support</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">SOPs, LORs, Visa prep</div>
              </div>
            </div>
          </div>

          {/* Mobile Service Highlights */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2.5 professional-card rounded-full mb-6">
                <Sparkles className="h-5 w-5 mr-3 text-blue-600" />
                <span className="text-sm font-semibold text-gray-900 tracking-wide">Service Highlights</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                We provide comprehensive support for your international education and career journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="professional-card p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Opportunities</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Access to universities and job opportunities across Europe with our extensive network</p>
                  </div>
                </div>
              </div>
              
              <div className="professional-card p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Verified & Trusted</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">All opportunities are verified and trusted by thousands of successful students</p>
                  </div>
                </div>
              </div>
              
              <div className="professional-card p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Get personalized guidance from our experienced education and career counselors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile CTA Link */}
          <Link 
            href="/study-abroad-application"
            className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-4 rounded-2xl hover:from-blue-800 hover:via-blue-700 hover:to-indigo-800 subtle-hover font-semibold flex items-center justify-center group elegant-shadow text-base shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default MobileHero