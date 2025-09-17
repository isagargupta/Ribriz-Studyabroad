'use client'

import React, { useState } from 'react'
import NavigationLayout from '../components/NavigationLayout'
import { Briefcase, Users, FileText, GraduationCap, Globe, ArrowRight, CheckCircle, Star, Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    // Scroll to contact section or open modal
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
      <div className="p-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
              <Briefcase className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">Premium Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="elegant-text">Our Premium</span>
              <span className="text-blue-900 block">
                Services
              </span>
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
                <div key={index} className="group minimal-card rounded-2xl p-8 subtle-hover refined-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                    <IconComponent className="h-8 w-8 text-gray-600" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>
                    <div className="text-xl font-bold text-gray-900 mb-6">
                      {service.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 font-medium">
                        <CheckCircle className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleServiceClick(service.title)}
                    className="w-full bg-blue-900 text-white py-4 px-6 rounded-xl hover:bg-blue-800 subtle-hover font-medium tracking-wide flex items-center justify-center elegant-shadow"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              )
            })}
          </div>

          {/* Additional Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight elegant-text">Additional Support Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Comprehensive support services to ensure your success at every step of your international journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="minimal-card rounded-xl p-6 subtle-hover refined-shadow">
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-gray-600 mr-2" />
                    <h3 className="font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Process */}
          <div className="minimal-card rounded-2xl p-12 mb-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight elegant-text">Our Service Process</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
                A streamlined approach to ensure your success from consultation to placement.
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-900 refined-shadow">1</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Consultation</h3>
                  <p className="text-gray-600 text-sm">Initial assessment and goal setting</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-900 refined-shadow">2</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Preparation</h3>
                  <p className="text-gray-600 text-sm">Profile optimization and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-900 refined-shadow">3</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Application</h3>
                  <p className="text-gray-600 text-sm">Strategic applications and follow-up</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-900 refined-shadow">4</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Success</h3>
                  <p className="text-gray-600 text-sm">Placement and ongoing support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact-section" className="minimal-card rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight elegant-text">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                {selectedService ? `Let's discuss your ${selectedService} needs` : 'Contact our experts to discuss your requirements and get personalized guidance.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link 
                href="tel:+919876543210"
                className="group minimal-card rounded-xl p-6 text-center subtle-hover refined-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                  <Phone className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">Speak directly with our experts</p>
                <p className="text-blue-900 font-medium">+91 98765 43210</p>
              </Link>

              <Link 
                href="mailto:info@ribriz.com"
                className="group minimal-card rounded-xl p-6 text-center subtle-hover refined-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                  <Mail className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">Send us your detailed requirements</p>
                <p className="text-blue-900 font-medium">info@ribriz.com</p>
              </Link>

              <Link 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group minimal-card rounded-xl p-6 text-center subtle-hover refined-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                  <MessageCircle className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">Quick chat and instant support</p>
                <p className="text-blue-900 font-medium">Chat Now</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  )
}