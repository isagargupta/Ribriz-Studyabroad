'use client'

import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Globe, Users, Award, Sparkles, TrendingUp, Shield, GraduationCap, BookOpen, MapPin, Star, Briefcase, Euro, Building2, Heart, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SelectionModal from './SelectionModal'

const MobileHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const universities = [
    {
      name: "University of Europe",
      location: "Germany",
      match: 95,
      logo: "U",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "University of Virginia",
      location: "USA",
      match: 85,
      logo: "U",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "University of Toronto",
      location: "Canada",
      match: 92,
      logo: "U",
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <section className="hero relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden lg:hidden">
      {/* Enhanced Mobile Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-64 h-64 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-4 w-48 h-48 bg-gradient-to-r from-slate-50/40 to-gray-50/40 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-50/30 to-pink-50/30 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Trust Indicators */}
          <div className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2.5 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-full shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-semibold text-gray-900">4.7/5</span>
                  <span className="text-sm font-semibold text-gray-900">Trustpilot</span>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-900">4.6/5</span>
                  <span className="text-sm font-semibold text-gray-900">Google</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Headline */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              <span className="block text-gray-900">Your global</span>
              <span className="block text-gray-900">future,</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                starts here
              </span>
            </h1>
            
            <p className="text-base text-gray-600 leading-relaxed font-medium px-4">
              25K+ aspirants got their dream admit this year. Expert guidance for study abroad and international job placements.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-6 py-4 rounded-2xl font-bold text-base flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[52px]"
            >
              <span className="text-center">Get Free Consultation</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-2xl hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-bold text-base inline-flex items-center justify-center transform hover:-translate-y-1 min-h-[52px]"
            >
              <span className="text-center">Explore Opportunities</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>

          {/* Quick Actions Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 text-center">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300" onClick={() => window.location.href = '/study-abroad-application'}>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <GraduationCap className="h-7 w-7 text-purple-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Get university shortlist</div>
                <div className="flex items-center justify-center text-xs text-purple-600 font-medium">
                  <Clock className="h-3 w-3 mr-1" />
                  5 mins
                </div>
              </div>
              
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Award className="h-7 w-7 text-orange-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Secure your finances</div>
                <div className="text-xs text-orange-600 font-medium">Scholarship & Loans</div>
              </div>
              
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200/50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <BookOpen className="h-7 w-7 text-teal-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Start your test prep</div>
                <div className="text-xs text-teal-600 font-medium">IELTS, PTE, DET & SAT</div>
              </div>
              
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Maximise admit chances</div>
                <div className="text-xs text-blue-600 font-medium">SOPs, LORs, Visa prep</div>
              </div>
            </div>
          </div>

          {/* University Shortlist Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">University Shortlist</h3>
            
            {/* Horizontal Scrollable University Cards */}
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {universities.map((university, index) => (
                <div key={index} className="flex-shrink-0 w-72 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-4 shadow-lg">
                  <div className="relative">
                    {/* Match Badge */}
                    <div className="absolute -top-2 -left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {university.match}% Match
                    </div>
                    
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${university.color} rounded-xl flex items-center justify-center shadow-sm`}>
                        <span className="text-white font-bold text-lg">{university.logo}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">{university.name}</div>
                        <div className="text-xs text-gray-600">{university.location}</div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 px-4 rounded-xl font-semibold text-sm flex items-center justify-center group shadow-lg hover:shadow-xl transition-all duration-300">
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default MobileHero