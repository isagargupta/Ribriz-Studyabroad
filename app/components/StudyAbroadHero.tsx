'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Globe, Users, Award, Sparkles, TrendingUp, Shield, GraduationCap, BookOpen, MapPin, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SelectionModal from './SelectionModal'

const StudyAbroadHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/8 to-indigo-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-50/20 to-blue-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-800">4.7/5 ⭐ Trustpilot</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full ml-3"></div>
                <span className="text-sm font-semibold text-gray-800 ml-2">4.6/5 Google</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Your global future,
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  starts here
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                25K+ aspirants got their dream admit this year. Expert guidance for study abroad and international job placements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 font-semibold text-lg tracking-wide flex items-center justify-center transform hover:-translate-y-1"
              >
                Start Your Study Abroad Journey
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold text-lg backdrop-blur-sm bg-white/50 inline-flex items-center justify-center"
              >
                Get Job Placement Support
              </button>
            </div>

            <div className="grid grid-cols-4 gap-8 py-8">
              <div className="text-center group" onClick={() => window.location.href = '/study-abroad-application'}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-sm font-medium text-gray-600">Get university shortlist</div>
                <div className="text-xs text-purple-600 font-semibold mt-1">⏱ 5 mins</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-sm font-medium text-gray-600">Secure your finances</div>
                <div className="text-xs text-orange-600 font-semibold mt-1">Scholarship & Loans</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-green-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                  <BookOpen className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-sm font-medium text-gray-600">Start your test prep</div>
                <div className="text-xs text-teal-600 font-semibold mt-1">IELTS, PTE, DET & SAT</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-600">Maximise admit chances</div>
                <div className="text-xs text-blue-600 font-semibold mt-1">SOPs, LORs, Visa prep</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side with Pexels Images */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-gray-900/10 p-8 border border-gray-100/50 overflow-hidden hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              {/* Hero Image - Diverse students studying */}
              <div className="relative mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Diverse group of college students collaborating and studying together in a modern university setting"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">Join 25K+ Success Stories</div>
                  <div className="text-xs opacity-90">Global Education Excellence</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">University Shortlist</h3>
                  <div className="flex items-center text-sm text-emerald-600 font-semibold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                    85% Match
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50/80 to-blue-50/80 rounded-2xl p-6 border border-purple-100/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => window.location.href = '/study-abroad-application'}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">University of Virginia</div>
                      <div className="text-sm text-gray-600 font-medium">Charlottesville, USA</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Admission Chances</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                          <div className="w-20 h-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">85%</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">College rank</div>
                        <div className="font-semibold text-gray-900">11 QS</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Annual tuition fee</div>
                        <div className="font-semibold text-gray-900">₹ 41,19,000</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Application fees</div>
                        <div className="font-semibold text-emerald-600">₹0, fees waived</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Duration</div>
                        <div className="font-semibold text-gray-900">24 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/study-abroad-application"
              className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-4 rounded-2xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-500 font-semibold tracking-wide transform hover:-translate-y-1 flex items-center justify-center group"
            >
              Get Your University Shortlist
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Enhanced Service Highlights Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Expert guidance,
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
                every step of the way
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              From university selection to visa approval, we're with you throughout your journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden cursor-pointer" onClick={() => window.location.href = '/study-abroad-application'}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get university shortlist</h3>
                <p className="text-gray-600 text-sm mb-4">Personalized university recommendations based on your profile</p>
                <div className="text-purple-600 font-semibold text-sm">⏱ 5 mins</div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure your finances</h3>
                <p className="text-gray-600 text-sm mb-4">Scholarship opportunities and education loan assistance</p>
                <div className="text-orange-600 font-semibold text-sm">Scholarship & Loans</div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start your test prep</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive preparation for all English proficiency tests</p>
                <div className="text-teal-600 font-semibold text-sm">IELTS, PTE, DET & SAT</div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Maximise admit chances</h3>
                <p className="text-gray-600 text-sm mb-4">Expert assistance with applications and visa preparation</p>
                <div className="text-blue-600 font-semibold text-sm">SOPs, LORs, Visa prep</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default StudyAbroadHero