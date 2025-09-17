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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-50/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
            <Briefcase className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Career Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="elegant-text">Work in</span>
            <span className="text-blue-900 block">
              Europe
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover exciting career opportunities across Europe. From tech positions to skilled trades, 
            find your perfect job match with our comprehensive placement services.
          </p>
        </div>

        {/* Positions Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 elegant-text">Explore Career Positions</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of professional positions and internship opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {positions.map((position, index) => {
              const IconComponent = position.icon
              return (
                <div key={index} className="minimal-card rounded-2xl p-8 subtle-hover refined-shadow">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                      <IconComponent className="h-8 w-8 text-gray-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{position.category}</h4>
                    <p className="text-gray-600 text-sm">{position.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {position.jobs.map((job, jobIndex) => (
                      <div key={jobIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        <span className="text-sm">{job}</span>
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
              className="inline-flex items-center bg-blue-900 text-white px-10 py-4 rounded-lg hover:bg-blue-800 subtle-hover font-medium text-lg tracking-wide elegant-shadow group"
            >
              <Briefcase className="mr-3 h-6 w-6" />
              Start Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Skilled Jobs Section */}
        <div className="minimal-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 elegant-text">Skilled Trade Positions</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-demand skilled positions with excellent earning potential and job security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skilledJobs.map((job, index) => {
              const IconComponent = job.icon
              return (
                <div key={index} className="minimal-card rounded-xl p-6 subtle-hover refined-shadow">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                      <IconComponent className="h-6 w-6 text-gray-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-900">{job.salary}</div>
                      <div className="text-xs text-gray-500">Demand: {job.demand}</div>
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
              className="inline-flex items-center bg-blue-900 text-white px-10 py-4 rounded-lg hover:bg-blue-800 subtle-hover font-medium text-lg tracking-wide elegant-shadow group"
            >
              <Briefcase className="mr-3 h-6 w-6" />
              Apply Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Redirects to our main job portal at ribriz.pl
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-4 refined-shadow">
              <MapPin className="h-8 w-8 text-gray-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">50+ European Countries</h4>
            <p className="text-gray-600">Work opportunities across all major European nations</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-4 refined-shadow">
              <Star className="h-8 w-8 text-gray-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Verified Employers</h4>
            <p className="text-gray-600">All job opportunities are from verified and trusted employers</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-4 refined-shadow">
              <Users className="h-8 w-8 text-gray-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">10,000+ Placements</h4>
            <p className="text-gray-600">Successfully placed thousands of professionals in Europe</p>
          </div>
        </div>
      </div>
    </section>
  )
}
