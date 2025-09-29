'use client'

import React, { useState } from 'react'
import { ArrowRight, GraduationCap, Award, BookOpen, TrendingUp, Clock, Star } from 'lucide-react'
import SelectionModal from './SelectionModal'

const MobileHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen bg-white overflow-hidden lg:hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Trust Indicators */}
          <div className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm">
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
            <h1 className="text-4xl font-bold leading-tight tracking-tight">
              <span className="block text-gray-900">Your global</span>
              <span className="block text-gray-900">future,</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
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
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-2xl font-bold text-base flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-h-[52px] transition-all duration-300"
            >
              <span className="text-center">Start Your Study Abroad Journey</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-2xl hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-bold text-base inline-flex items-center justify-center transform hover:-translate-y-1 min-h-[52px]"
            >
              <span className="text-center">Get Job Placement Support</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>

          {/* Quick Actions Section - 2x2 Grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Get university shortlist */}
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200" onClick={() => window.location.href = '/study-abroad-application'}>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Get university shortlist</div>
                <div className="flex items-center justify-center text-xs text-purple-600 font-medium">
                  <Clock className="h-3 w-3 mr-1" />
                  5 mins
                </div>
              </div>
              
              {/* Secure your finances */}
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Secure your finances</div>
                <div className="text-xs text-orange-600 font-medium">Scholarship & Loans</div>
              </div>
              
              {/* Start your test prep */}
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-4 border border-teal-200">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Start your test prep</div>
                <div className="text-xs text-teal-600 font-medium">IELTS, PTE, DET & SAT</div>
              </div>
              
              {/* Maximise admit chances */}
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Maximise admit chances</div>
                <div className="text-xs text-blue-600 font-medium">SOPs, LORs, Visa prep</div>
              </div>
            </div>
          </div>

          {/* University Shortlist Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">University Shortlist</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-green-600">85% Match</span>
              </div>
            </div>
            
            {/* University Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-4 shadow-lg">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">University of Virginia</div>
                  <div className="text-xs text-gray-600">Charlottesville, USA</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-600 mb-1">Admission Chances</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-xs font-semibold text-green-600">85%</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">College rank</div>
                  <div className="text-sm font-semibold text-gray-900">11 QS</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Application fees</div>
                  <div className="text-xs font-semibold text-green-600">₹0, fees waived</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Annual tuition fee</div>
                  <div className="text-sm font-semibold text-gray-900">₹ 41,19,000</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Duration</div>
                  <div className="text-sm font-semibold text-gray-900">24 months</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center group shadow-lg hover:shadow-xl transition-all duration-300">
                <span>Get Your University Shortlist</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Guidance Section */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-bold text-gray-900">Expert guidance,</span>
            </div>
            <div className="text-sm font-bold text-purple-600">every step of the way</div>
            <p className="text-xs text-gray-600 leading-relaxed">
              From university selection to visa approval, we're with you throughout your journey
            </p>
          </div>
        </div>
      </div>

      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default MobileHero