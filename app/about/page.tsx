'use client'

import React from 'react'
import NavigationLayout from '../components/NavigationLayout'
import { Users, Star, Building, Clock, Award, Globe, Shield, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '1000+', label: 'Successful Placements' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' },
    { icon: Building, value: '50+', label: 'Partner Companies' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our dealings.'
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery and client satisfaction.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'We connect talent with opportunities across borders, fostering international growth.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We ensure quality placements that benefit both candidates and employers.'
    }
  ]

  return (
    <NavigationLayout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              About Ribriz Overseas
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Ribriz Overseas is a leading international recruitment agency specializing in connecting skilled 
              Indian workforce with opportunities in Poland. With years of experience and a commitment to 
              excellence, we bridge the gap between talent and opportunity across borders.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600 tracking-wide">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-gray-100/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                To create meaningful employment opportunities by connecting skilled Indian 
                professionals with Polish employers, fostering economic growth and cultural exchange while 
                maintaining the highest standards of service and integrity.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-gray-100/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                To become the most trusted and preferred international recruitment partner, known for 
                our commitment to excellence, transparency, and the success of both our clients and 
                candidates.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                These values guide everything we do and shape our commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-8 tracking-tight text-center">Company Information</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="font-bold text-lg mb-2 text-white">CIN Number</div>
                  <div className="text-gray-300 text-sm font-mono">U85499KA2024PTC187740</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="font-bold text-lg mb-2 text-white">GST Number</div>
                  <div className="text-gray-300 text-sm font-mono">29AANCR5772Q1Z6</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="font-bold text-lg mb-2 text-white">Certification</div>
                  <div className="text-yellow-300 text-sm font-semibold">Startup India Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  )
}