'use client'

import React from 'react'
import NavigationLayout from '../components/NavigationLayout'
import { User, FileText, Search, MessageCircle, CheckCircle, Plane, ArrowRight, Clock, Shield, Award } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      icon: User,
      title: 'Initial Consultation',
      description: 'Free consultation to understand your career goals and preferences',
      details: [
        'Career assessment and goal setting',
        'Country and role preferences',
        'Timeline and expectations discussion',
        'Package recommendation'
      ],
      duration: '30-45 minutes',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: FileText,
      title: 'Profile Preparation',
      description: 'Professional optimization of your profile and documentation',
      details: [
        'CV/Resume enhancement',
        'Cover letter writing',
        'LinkedIn profile optimization',
        'Document verification'
      ],
      duration: '3-5 days',
      gradient: 'from-emerald-600 to-emerald-700'
    },
    {
      icon: Search,
      title: 'Opportunity Matching',
      description: 'AI-powered matching with verified international opportunities',
      details: [
        'Skills and preference matching',
        'Employer verification',
        'Salary benchmarking',
        'Cultural fit assessment'
      ],
      duration: '1-2 weeks',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: MessageCircle,
      title: 'Application & Interview',
      description: 'Strategic application submission and interview preparation',
      details: [
        'Targeted applications',
        'Interview coaching',
        'Mock interview sessions',
        'Feedback and improvement'
      ],
      duration: '2-4 weeks',
      gradient: 'from-orange-600 to-orange-700'
    },
    {
      icon: CheckCircle,
      title: 'Offer & Negotiation',
      description: 'Offer evaluation and salary negotiation support',
      details: [
        'Offer analysis',
        'Salary negotiation',
        'Contract review',
        'Terms optimization'
      ],
      duration: '1-2 weeks',
      gradient: 'from-teal-600 to-teal-700'
    },
    {
      icon: Plane,
      title: 'Relocation Support',
      description: 'Complete assistance with visa, travel, and settling in',
      details: [
        'Visa application support',
        'Travel arrangements',
        'Accommodation assistance',
        'Banking and documentation'
      ],
      duration: '4-8 weeks',
      gradient: 'from-indigo-600 to-indigo-700'
    }
  ]

  const features = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Average placement time of 2-3 months'
    },
    {
      icon: Shield,
      title: 'Success Guarantee',
      description: '98% success rate with money-back guarantee'
    },
    {
      icon: Award,
      title: 'Premium Support',
      description: '24/7 support throughout your journey'
    }
  ]

  return (
    <NavigationLayout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Our proven 6-step process ensures your success in landing your dream international opportunity. 
              From initial consultation to successful placement, we guide you every step of the way.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12 mb-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`flex items-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-2xl relative`}>
                      <span className="text-3xl font-bold text-white">{index + 1}</span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{step.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              <Clock className="h-4 w-4 mr-1" />
                              {step.duration}
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-6 text-lg font-light leading-relaxed">{step.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                                {detail}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 mt-32">
                      <ArrowRight className="h-8 w-8 text-gray-300 transform rotate-90" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-600 font-light">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative text-center">
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Typical Timeline</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
                Most of our clients secure their international opportunities within 2-3 months of starting the process.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">Week 1-2</div>
                  <h3 className="font-bold text-lg mb-2">Preparation Phase</h3>
                  <p className="text-gray-300 text-sm">Consultation, profile optimization, and documentation</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent mb-4">Week 3-8</div>
                  <h3 className="font-bold text-lg mb-2">Application Phase</h3>
                  <p className="text-gray-300 text-sm">Job matching, applications, interviews, and offers</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-4">Week 9-12</div>
                  <h3 className="font-bold text-lg mb-2">Relocation Phase</h3>
                  <p className="text-gray-300 text-sm">Visa processing, travel arrangements, and settling in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  )
}