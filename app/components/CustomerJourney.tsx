'use client'

import React from 'react'
import { GraduationCap, DollarSign, BookOpen, FileText, Clock, ArrowRight } from 'lucide-react'

const CustomerJourney = () => {
  const journeySteps = [
    {
      step: 1,
      title: "Get University List",
      description: "5 minutes",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      step: 2,
      title: "Secure Funding",
      description: "Scholarships & Loans",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      step: 3,
      title: "Test Preparation",
      description: "IELTS, PTE, DET & SAT",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      step: 4,
      title: "Application Support",
      description: "SOPs, LORs, Visa prep",
      icon: FileText,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-50/40 to-pink-50/40 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-50/30 to-blue-50/30 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2.5 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-full shadow-lg mb-6 sm:mb-8">
            <Clock className="h-5 w-5 mr-3 text-blue-600" />
            <span className="text-sm font-semibold text-gray-900 tracking-wide">Customer Journey Steps</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="block text-gray-900">Follow these steps</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
              to start your journey
            </span>
          </h2>
        </div>

        {/* Journey Steps - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {journeySteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="group">
                <div className="relative bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Mobile Layout - Icon Below Text */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 font-medium">
                      {step.description}
                    </p>
                    
                    {/* Icon Below Text for Mobile */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.bgColor} border ${step.borderColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                      <IconComponent className={`h-8 w-8 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                  
                  {/* Arrow for Desktop */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/95 backdrop-blur-xl border border-blue-200/60 rounded-full shadow-lg mb-6">
            <ArrowRight className="h-5 w-5 mr-3 text-blue-600" />
            <span className="text-sm font-semibold text-gray-900">Ready to Start?</span>
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow our proven 4-step process to achieve your study abroad dreams with expert guidance every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 font-semibold flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <span>Start Your Journey</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center transform hover:-translate-y-1">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerJourney
