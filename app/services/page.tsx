'use client'

import React from 'react'
import NavigationLayout from '../components/NavigationLayout'
import { Briefcase, Users, FileText, GraduationCap, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: 'International Job Placement',
      description: 'Connect with verified employers across Poland, Germany, Lithuania, Czechia, and UAE for permanent positions.',
      features: [
        'Blue & white-collar positions',
        'Direct employer connections',
        'Visa support guidance',
        'Salary negotiation assistance',
        'Post-placement support'
      ],
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-50/50 to-indigo-50/50',
      price: 'From €35,000 annually'
    },
    {
      icon: Users,
      title: 'Premium Internships',
      description: 'Gain valuable international experience through our curated internship programs with mentorship support.',
      features: [
        'Tech & management roles',
        'Remote and on-site options',
        'Mentorship programs',
        'Resume building support',
        'Career development guidance'
      ],
      gradient: 'from-emerald-600 to-emerald-700',
      bgGradient: 'from-emerald-50/50 to-teal-50/50',
      price: 'From €1,200/month'
    },
    {
      icon: GraduationCap,
      title: 'Study Abroad Consulting',
      description: 'Expert guidance for international education with university partnerships and scholarship opportunities.',
      features: [
        '700+ university partners',
        'Scholarship assistance',
        'Application support',
        'Visa guidance',
        'Pre-departure orientation'
      ],
      gradient: 'from-purple-600 to-purple-700',
      bgGradient: 'from-purple-50/50 to-indigo-50/50',
      price: 'Consultation packages available'
    },
    {
      icon: FileText,
      title: 'Application Support Services',
      description: 'Comprehensive support throughout your application process with expert guidance and documentation.',
      features: [
        'Profile optimization',
        'Document preparation',
        'Interview coaching',
        'Application tracking',
        'Success guarantee'
      ],
      gradient: 'from-orange-600 to-orange-700',
      bgGradient: 'from-orange-50/50 to-yellow-50/50',
      price: 'Included in packages'
    }
  ]

  const additionalServices = [
    {
      title: 'CV & Resume Writing',
      description: 'Professional CV writing services tailored for international markets'
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and coaching to boost your confidence'
    },
    {
      title: 'Visa Assistance',
      description: 'Complete guidance through visa application processes'
    },
    {
      title: 'Relocation Support',
      description: 'Help with accommodation, banking, and settling in'
    },
    {
      title: 'Language Training',
      description: 'Basic language courses for your destination country'
    },
    {
      title: 'Cultural Orientation',
      description: 'Prepare for cultural differences and workplace norms'
    }
  ]

  return (
    <NavigationLayout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Premium Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive international career and education solutions designed to accelerate your global journey with expert guidance and guaranteed results.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-700 p-8 overflow-hidden hover:-translate-y-2`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>
                      <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                        {service.price}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 font-medium">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-4 px-6 rounded-2xl transition-all duration-500 font-semibold tracking-wide flex items-center justify-center group-hover:shadow-xl transform group-hover:-translate-y-1`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Additional Support Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Comprehensive support services to ensure your success at every step of your international journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <h3 className="font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Process */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative text-center">
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Service Process</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
                A streamlined approach to ensure your success from consultation to placement.
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                  <h3 className="font-bold text-lg mb-2">Consultation</h3>
                  <p className="text-gray-300 text-sm">Initial assessment and goal setting</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                  <h3 className="font-bold text-lg mb-2">Preparation</h3>
                  <p className="text-gray-300 text-sm">Profile optimization and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                  <h3 className="font-bold text-lg mb-2">Application</h3>
                  <p className="text-gray-300 text-sm">Strategic applications and follow-up</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                  <h3 className="font-bold text-lg mb-2">Success</h3>
                  <p className="text-gray-300 text-sm">Placement and ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  )
}