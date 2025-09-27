'use client'

import React from 'react'
import Link from 'next/link'
import { Briefcase, Users, MapPin, Star, ArrowRight, Building2, GraduationCap, Wrench, Truck, Zap, Package, Hammer } from 'lucide-react'

export default function WorkInEurope() {
  const positions = [
    {
      category: 'Tech Positions',
      icon: Building2,
      jobs: ['Software Developer', 'Data Analyst', 'IT Support', 'Web Designer', 'Cybersecurity Specialist'],
      description: 'High-demand tech roles with competitive salaries'
    },
    {
      category: 'Non-Tech Positions',
      icon: Users,
      jobs: ['Marketing Manager', 'Sales Representative', 'Customer Service', 'HR Specialist', 'Project Manager'],
      description: 'Diverse career opportunities across industries'
    },
    {
      category: 'Internships',
      icon: GraduationCap,
      jobs: ['Business Intern', 'Marketing Intern', 'IT Intern', 'Finance Intern', 'Research Intern'],
      description: 'Gain valuable experience in European companies'
    }
  ]

  const skilledJobs = [
    {
      title: 'Truck Drivers',
      icon: Truck,
      description: 'Long-haul and local driving positions',
      salary: '€2,500-4,000/month',
      demand: 'High'
    },
    {
      title: 'Electricians',
      icon: Zap,
      description: 'Commercial and residential electrical work',
      salary: '€2,800-4,500/month',
      demand: 'Very High'
    },
    {
      title: 'Warehouse Workers',
      icon: Package,
      description: 'Logistics and distribution center roles',
      salary: '€2,200-3,500/month',
      demand: 'High'
    },
    {
      title: 'Welders',
      icon: Hammer,
      description: 'Industrial and construction welding',
      salary: '€2,600-4,200/month',
      demand: 'High'
    }
  ]

  return (
    <section className="py-fluid-lg bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-50/40 to-indigo-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-slate-50/30 to-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/20 to-indigo-50/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-fluid-sm">
        {/* Professional Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2.5 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-full shadow-lg mb-8 sm:mb-10">
            <Briefcase className="h-5 w-5 mr-3 text-blue-600" />
            <span className="text-sm font-semibold text-gray-900 tracking-wide">Verified Career Opportunities</span>
          </div>
          <h2 className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl font-bold mb-6 sm:mb-8 tracking-tight">
            <span className="block text-gray-900">Work in</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Europe
            </span>
          </h2>
          <p className="text-fluid-lg sm:text-fluid-xl text-gray-600 max-w-4xl mx-auto leading-fluid-relaxed font-medium px-4">
            Discover verified career opportunities across Europe. From tech positions to skilled trades, 
            find your perfect job match with our comprehensive placement services and work permit assistance.
          </p>
        </div>

        {/* Positions Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-fluid-2xl sm:text-fluid-3xl font-bold text-gray-900 mb-4 sm:mb-6 elegant-text">Explore Career Positions</h3>
            <p className="text-fluid-base sm:text-fluid-lg text-gray-600 max-w-3xl mx-auto px-4 font-medium">
              Choose from a wide range of verified professional positions and internship opportunities across Europe
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {positions.map((position, index) => {
              const IconComponent = position.icon
              return (
                <div key={index} className="professional-card p-6 sm:p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-blue-600" />
                    </div>
                    <h4 className="text-fluid-xl sm:text-fluid-2xl font-bold text-gray-900 mb-3">{position.category}</h4>
                    <p className="text-gray-600 text-fluid-sm sm:text-fluid-base font-medium">{position.description}</p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {position.jobs.map((job, jobIndex) => (
                      <div key={jobIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-fluid-sm sm:text-fluid-base font-medium">{job}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link 
              href="/positions"
              className="inline-flex items-center bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:from-blue-800 hover:via-blue-700 hover:to-indigo-800 subtle-hover font-semibold text-fluid-base sm:text-fluid-lg tracking-wide shadow-xl hover:shadow-2xl group min-h-[48px] transition-all duration-300"
            >
              <Briefcase className="mr-3 h-6 w-6" />
              Explore All Positions
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Professional Skilled Jobs Section */}
        <div className="professional-card rounded-3xl p-8 sm:p-10 md:p-12">
          <div className="text-center mb-16">
            <h3 className="text-fluid-3xl font-bold text-gray-900 mb-6 elegant-text">High-Demand Skilled Positions</h3>
            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto font-medium">
              High-demand skilled positions with excellent earning potential, job security, and work permit assistance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {skilledJobs.map((job, index) => {
              const IconComponent = job.icon
              return (
                <div key={index} className="professional-card rounded-2xl p-6 sm:p-8 subtle-hover cursor-pointer group">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 rounded-2xl mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-gray-600" />
                    </div>
                    <h4 className="text-fluid-lg sm:text-fluid-xl font-bold text-gray-900 mb-3">{job.title}</h4>
                    <p className="text-fluid-sm text-gray-600 mb-4 font-medium">{job.description}</p>
                    <div className="space-y-3">
                      <div className="text-fluid-sm font-semibold text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{job.salary}</div>
                      <div className="text-fluid-xs text-gray-500 font-medium">Demand: <span className="text-green-600 font-semibold">{job.demand}</span></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <a 
              href="https://ribriz.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:from-blue-800 hover:via-blue-700 hover:to-indigo-800 subtle-hover font-semibold text-fluid-base sm:text-fluid-lg tracking-wide shadow-xl hover:shadow-2xl group min-h-[48px] transition-all duration-300"
            >
              <Briefcase className="mr-3 h-6 w-6" />
              Apply for Jobs Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <p className="text-fluid-sm text-gray-500 mt-6 font-medium">
              Redirects to our verified job portal at ribriz.pl
            </p>
          </div>
        </div>

        {/* Professional Benefits Section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-18 h-18 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <MapPin className="h-9 w-9 sm:h-10 sm:w-10 text-blue-600" />
            </div>
            <h4 className="text-fluid-xl sm:text-fluid-2xl font-bold text-gray-900 mb-3">50+ European Countries</h4>
            <p className="text-gray-600 text-fluid-sm sm:text-fluid-base font-medium">Work opportunities across all major European nations with work permit assistance</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-18 h-18 sm:w-20 sm:h-20 bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <Star className="h-9 w-9 sm:h-10 sm:w-10 text-green-600" />
            </div>
            <h4 className="text-fluid-xl sm:text-fluid-2xl font-bold text-gray-900 mb-3">Verified Employers</h4>
            <p className="text-gray-600 text-fluid-sm sm:text-fluid-base font-medium">All job opportunities are from verified and trusted employers with transparent processes</p>
          </div>
          <div className="text-center sm:col-span-2 lg:col-span-1 group">
            <div className="inline-flex items-center justify-center w-18 h-18 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <Users className="h-9 w-9 sm:h-10 sm:w-10 text-purple-600" />
            </div>
            <h4 className="text-fluid-xl sm:text-fluid-2xl font-bold text-gray-900 mb-3">10,000+ Placements</h4>
            <p className="text-gray-600 text-fluid-sm sm:text-fluid-base font-medium">Successfully placed thousands of professionals in Europe with ongoing support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
