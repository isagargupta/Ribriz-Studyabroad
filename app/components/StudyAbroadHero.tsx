'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Globe, Users, Award, Sparkles, TrendingUp, Shield, GraduationCap, BookOpen, MapPin, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SelectionModal from './SelectionModal'

const StudyAbroadHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentUniversityIndex, setCurrentUniversityIndex] = useState(0)

  const universities = [
    {
      name: "University of Virginia",
      location: "Charlottesville, USA",
      rank: "11 QS",
      tuition: "₹ 41,19,000",
      duration: "24 months",
      match: 85,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50/80 to-blue-50/80",
      borderColor: "border-purple-100/50"
    },
    {
      name: "University of Toronto",
      location: "Toronto, Canada",
      rank: "21 QS",
      tuition: "₹ 35,00,000",
      duration: "24 months",
      match: 92,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50/80 to-indigo-50/80",
      borderColor: "border-blue-100/50"
    },
    {
      name: "University of Melbourne",
      location: "Melbourne, Australia",
      rank: "33 QS",
      tuition: "₹ 28,50,000",
      duration: "24 months",
      match: 88,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50/80 to-emerald-50/80",
      borderColor: "border-green-100/50"
    },
    {
      name: "University of Oxford",
      location: "Oxford, UK",
      rank: "3 QS",
      tuition: "₹ 45,00,000",
      duration: "12 months",
      match: 75,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50/80 to-purple-50/80",
      borderColor: "border-indigo-100/50"
    },
    {
      name: "Technical University of Munich",
      location: "Munich, Germany",
      rank: "37 QS",
      tuition: "₹ 2,50,000",
      duration: "24 months",
      match: 90,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50/80 to-yellow-50/80",
      borderColor: "border-orange-100/50"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUniversityIndex((prevIndex) => 
        (prevIndex + 1) % universities.length
      )
    }, 4000) // Change university every 4 seconds

    return () => clearInterval(interval)
  }, [universities.length])

  return (
    <section className="hero relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden hidden lg:flex">
      {/* Enhanced Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-slate-50/40 to-gray-50/40 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50/30 to-indigo-50/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-50/30 to-pink-50/30 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-fluid-sm py-fluid-2xl">
        <div className="grid lg:grid-cols-2 gap-fluid-xl items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Enhanced Professional Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="inline-flex items-center px-5 py-3 luxury-card rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-bold text-gray-900">4.9/5 Trustpilot</span>
                  </div>
                </div>
                <div className="inline-flex items-center px-5 py-3 luxury-card rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-bold text-gray-900">25,000+ Success Stories</span>
                  </div>
                </div>
                <div className="inline-flex items-center px-5 py-3 luxury-card rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-bold text-gray-900">Verified & Trusted</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Professional Headline */}
              <h1 className="text-fluid-5xl sm:text-fluid-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold leading-fluid-tight tracking-tight animate-professional-fade-in">
                <span className="block heading-executive text-gray-900">Study Abroad & Work</span>
                <span className="block heading-luxury">
                  in Europe for Indians
                </span>
              </h1>
              
              {/* Enhanced Value Proposition */}
              <p className="text-fluid-base sm:text-fluid-lg lg:text-fluid-xl text-gray-600 leading-fluid-relaxed max-w-2xl font-medium animate-professional-slide-up">
                Get expert guidance for your study abroad journey and secure verified job opportunities in Europe. 
                <span className="font-bold text-gray-900"> Free consultation, no hidden fees.</span>
              </p>
            </div>

            {/* Enhanced Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-professional-scale-in">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group corporate-button text-white px-8 sm:px-10 lg:px-12 py-5 sm:py-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center shadow-2xl hover:shadow-3xl w-full sm:w-auto transform hover:-translate-y-2 min-h-[52px]"
              >
                <span className="text-center relative z-10">Get Free Consultation</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-500 relative z-10" />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group executive-card border-2 border-gray-300 text-gray-700 px-8 sm:px-10 lg:px-12 py-5 sm:py-6 rounded-2xl hover:bg-gray-50/80 hover:border-gray-400 hover:shadow-xl transition-all duration-500 font-bold text-sm sm:text-base inline-flex items-center justify-center w-full sm:w-auto transform hover:-translate-y-2 min-h-[52px]"
              >
                <span className="text-center">Find Jobs in Europe</span>
              </button>
            </div>
            
            {/* Customer Benefits */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                <span className="font-medium">Free consultation & guidance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                <span className="font-medium">Verified job opportunities</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                <span className="font-medium">Work permit assistance</span>
              </div>
            </div>

            {/* Customer Journey Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-10">
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300" onClick={() => window.location.href = '/study-abroad-application'}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-blue-600" />
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">Step 1: Get University List</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">⏱ Takes 5 minutes</div>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Award className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-green-600" />
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">Step 2: Secure Funding</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">Scholarships & Loans</div>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-purple-600" />
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">Step 3: Test Preparation</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">IELTS, PTE, DET & SAT</div>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/50 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-orange-600" />
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">Step 4: Application Support</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">SOPs, LORs, Visa prep</div>
              </div>
            </div>
          </div>

          {/* Professional Right Side Card */}
          <div className="relative mt-8 sm:mt-12 lg:mt-0">
            {/* Professional Hero Card */}
            <div className="relative bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 shadow-xl">
              <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              
              {/* Hero Image */}
              <div className="relative mb-4 sm:mb-6 rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Diverse group of college students collaborating and studying together in a modern university setting"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-fluid-xs sm:text-fluid-sm font-semibold">Join 25K+ Success Stories</div>
                  <div className="text-fluid-xs opacity-90">Global Education Excellence</div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight elegant-text">University Shortlist</h3>
                  <div className="flex items-center text-sm text-gray-600 font-semibold">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    {universities[currentUniversityIndex].match}% Match
                  </div>
                </div>
                
                {/* University Carousel */}
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentUniversityIndex * 100}%)` }}
                  >
                    {universities.map((university, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer shadow-sm"
                        onClick={() => window.location.href = '/study-abroad-application'}
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-100 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm">
                            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base truncate">{university.name}</div>
                            <div className="text-xs text-gray-600 font-medium truncate">{university.location}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs sm:text-sm text-gray-600">Admission Chances</span>
                            <div className="flex items-center">
                              <div className="w-16 sm:w-20 lg:w-24 h-1.5 sm:h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                                <div 
                                  className="h-1.5 sm:h-2 bg-gray-600 rounded-full transition-all duration-700"
                                  style={{ width: `${university.match}%` }}
                                ></div>
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-gray-700">{university.match}%</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                            <div>
                              <div className="text-gray-600 text-xs">College rank</div>
                              <div className="font-semibold text-gray-900 text-xs sm:text-sm">{university.rank}</div>
                            </div>
                            <div>
                              <div className="text-gray-600 text-xs">Annual tuition fee</div>
                              <div className="font-semibold text-gray-900 text-xs sm:text-sm">{university.tuition}</div>
                            </div>
                            <div>
                              <div className="text-gray-600 text-xs">Application fees</div>
                              <div className="font-semibold text-gray-700 text-xs sm:text-sm">₹0, fees waived</div>
                            </div>
                            <div>
                              <div className="text-gray-600 text-xs">Duration</div>
                              <div className="font-semibold text-gray-900 text-xs sm:text-sm">{university.duration}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel Indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {universities.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentUniversityIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentUniversityIndex 
                            ? 'bg-gray-900 w-6' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/study-abroad-application"
              className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-4 sm:py-5 rounded-2xl hover:from-blue-800 hover:via-blue-700 hover:to-indigo-800 subtle-hover font-semibold flex items-center justify-center group elegant-shadow text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>Get Your University Shortlist</span>
              <ArrowRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Professional Service Highlights Section */}
        <div className="mt-20 sm:mt-28 lg:mt-36">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-3 professional-card rounded-full mb-8 sm:mb-10">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-600" />
              <span className="text-sm sm:text-base font-semibold text-gray-900 tracking-wide">Service Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">
              <span className="elegant-text text-gray-900">Expert guidance,</span>
              <span className="text-gray-600 block">
                every step of the way
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-4 leading-relaxed">
              From university selection to visa approval, our team is with you throughout your entire journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            <div className="group professional-card p-6 sm:p-8 lg:p-10 subtle-hover cursor-pointer" onClick={() => window.location.href = '/study-abroad-application'}>
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-all duration-300 shadow-lg">
                <GraduationCap className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Get university shortlist</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Personalized university recommendations based on your profile</p>
              <div className="text-blue-600 font-semibold text-sm sm:text-base">⏱ 5 mins</div>
            </div>

            <div className="group professional-card p-6 sm:p-8 lg:p-10 subtle-hover cursor-pointer">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-all duration-300 shadow-lg">
                <Award className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Secure your finances</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Scholarship opportunities and education loan assistance</p>
              <div className="text-green-600 font-semibold text-sm sm:text-base">Scholarship & Loans</div>
            </div>

            <div className="group professional-card p-6 sm:p-8 lg:p-10 subtle-hover cursor-pointer">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-all duration-300 shadow-lg">
                <BookOpen className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Start your test prep</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Comprehensive preparation for all English proficiency tests</p>
              <div className="text-purple-600 font-semibold text-sm sm:text-base">IELTS, PTE, DET & SAT</div>
            </div>

            <div className="group professional-card p-6 sm:p-8 lg:p-10 subtle-hover cursor-pointer">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/50 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-all duration-300 shadow-lg">
                <TrendingUp className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Maximise admit chances</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Expert assistance with applications and visa preparation</p>
              <div className="text-orange-600 font-semibold text-sm sm:text-base">SOPs, LORs, Visa prep</div>
            </div>
          </div>
        </div>
      </div>

      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default StudyAbroadHero