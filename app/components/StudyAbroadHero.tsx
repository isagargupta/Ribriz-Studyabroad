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
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUniversityIndex((prevIndex) => 
        (prevIndex + 1) % universities.length
      )
    }, 4000) // Change university every 4 seconds

    return () => clearInterval(interval)
  }, [universities.length])

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
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gray-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              {/* Minimal Trust Badge */}
              <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">4.9/5 Trustpilot</span>
                  </div>
                  <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700">25,000+ Success Stories</span>
                  </div>
                </div>
              </div>
              
              {/* Elegant Headline */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-gray-900">
                <span className="elegant-text">Your Global Future</span>
                <br />
                <span className="text-blue-900">
                  Starts Here
                </span>
              </h1>
              
              {/* Minimal Subtitle */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Join 25,000+ successful aspirants who achieved their dream admits this year. Expert guidance for study abroad and international career placements.
              </p>
            </div>

            {/* Minimal CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-blue-900 text-white px-10 py-5 rounded-lg hover:bg-blue-800 subtle-hover font-medium text-lg flex items-center justify-center elegant-shadow"
              >
                <span>Start Your Study Abroad Journey</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group minimal-border text-gray-700 px-10 py-5 rounded-lg hover:bg-gray-50 subtle-hover font-medium text-lg inline-flex items-center justify-center refined-shadow"
              >
                Get Job Placement Support
              </button>
            </div>

            {/* Minimal Quick Actions */}
            <div className="grid grid-cols-4 gap-8 py-8">
              <div className="text-center group cursor-pointer subtle-hover" onClick={() => window.location.href = '/study-abroad-application'}>
                <div className="w-16 h-16 minimal-card rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 refined-shadow">
                  <GraduationCap className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-700">Get university shortlist</div>
                <div className="text-xs text-gray-500 mt-1">⏱ 5 mins</div>
              </div>
              <div className="text-center group cursor-pointer subtle-hover">
                <div className="w-16 h-16 minimal-card rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 refined-shadow">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-700">Secure your finances</div>
                <div className="text-xs text-gray-500 mt-1">Scholarship & Loans</div>
              </div>
              <div className="text-center group cursor-pointer subtle-hover">
                <div className="w-16 h-16 minimal-card rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 refined-shadow">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-700">Start your test prep</div>
                <div className="text-xs text-gray-500 mt-1">IELTS, PTE, DET & SAT</div>
              </div>
              <div className="text-center group cursor-pointer subtle-hover">
                <div className="w-16 h-16 minimal-card rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 refined-shadow">
                  <TrendingUp className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-700">Maximise admit chances</div>
                <div className="text-xs text-gray-500 mt-1">SOPs, LORs, Visa prep</div>
              </div>
            </div>
          </div>

          {/* Minimal Right Side Card */}
          <div className="relative">
            {/* Clean Hero Card */}
            <div className="relative minimal-card rounded-2xl p-8 subtle-hover elegant-shadow">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {/* Hero Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Diverse group of college students collaborating and studying together in a modern university setting"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">Join 25K+ Success Stories</div>
                  <div className="text-xs opacity-90">Global Education Excellence</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight elegant-text">University Shortlist</h3>
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
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
                        className="w-full flex-shrink-0 minimal-card rounded-xl p-6 subtle-hover cursor-pointer"
                        onClick={() => window.location.href = '/study-abroad-application'}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center refined-shadow">
                            <GraduationCap className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-lg">{university.name}</div>
                            <div className="text-sm text-gray-600 font-medium">{university.location}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Admission Chances</span>
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                                <div 
                                  className="h-2 bg-gray-600 rounded-full transition-all duration-700"
                                  style={{ width: `${university.match}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-semibold text-gray-700">{university.match}%</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-600">College rank</div>
                              <div className="font-semibold text-gray-900">{university.rank}</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Annual tuition fee</div>
                              <div className="font-semibold text-gray-900">{university.tuition}</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Application fees</div>
                              <div className="font-semibold text-gray-700">₹0, fees waived</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Duration</div>
                              <div className="font-semibold text-gray-900">{university.duration}</div>
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
              className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 subtle-hover font-medium flex items-center justify-center group elegant-shadow"
            >
              <span>Get Your University Shortlist</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Minimal Service Highlights Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
              <Sparkles className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">Service Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="elegant-text">Expert guidance,</span>
              <span className="text-gray-600 block">
                every step of the way
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              From university selection to visa approval, our team is with you throughout your entire journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group minimal-card rounded-xl p-8 subtle-hover cursor-pointer refined-shadow" onClick={() => window.location.href = '/study-abroad-application'}>
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 refined-shadow">
                <GraduationCap className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get university shortlist</h3>
              <p className="text-gray-600 text-sm mb-4">Personalized university recommendations based on your profile</p>
              <div className="text-gray-600 font-medium text-sm">⏱ 5 mins</div>
            </div>

            <div className="group minimal-card rounded-xl p-8 subtle-hover cursor-pointer refined-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 refined-shadow">
                <Award className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure your finances</h3>
              <p className="text-gray-600 text-sm mb-4">Scholarship opportunities and education loan assistance</p>
              <div className="text-gray-600 font-medium text-sm">Scholarship & Loans</div>
            </div>

            <div className="group minimal-card rounded-xl p-8 subtle-hover cursor-pointer refined-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 refined-shadow">
                <BookOpen className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start your test prep</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive preparation for all English proficiency tests</p>
              <div className="text-gray-600 font-medium text-sm">IELTS, PTE, DET & SAT</div>
            </div>

            <div className="group minimal-card rounded-xl p-8 subtle-hover cursor-pointer refined-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 refined-shadow">
                <TrendingUp className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maximise admit chances</h3>
              <p className="text-gray-600 text-sm mb-4">Expert assistance with applications and visa preparation</p>
              <div className="text-gray-600 font-medium text-sm">SOPs, LORs, Visa prep</div>
            </div>
          </div>
        </div>
      </div>

      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default StudyAbroadHero