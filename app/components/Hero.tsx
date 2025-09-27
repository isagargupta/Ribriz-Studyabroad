import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Globe, Users, Award, Sparkles, TrendingUp, Shield } from 'lucide-react'
import SelectionModal from './SelectionModal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/8 to-blue-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50/20 to-indigo-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-fluid-sm py-fluid-2xl">
        <div className="grid lg:grid-cols-2 gap-fluid-2xl items-center">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5">
                <Award className="h-4 w-4 mr-2 text-amber-600" />
                <span className="text-fluid-sm font-semibold text-gray-800">Startup India Certified</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full ml-3 animate-pulse"></div>
              </div>
              
              <h1 className="text-fluid-6xl sm:text-fluid-7xl lg:text-fluid-8xl font-bold leading-fluid-tight tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Study Abroad & Jobs
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  in Europe for Indians
                </span>
              </h1>
              
              <p className="text-fluid-lg sm:text-fluid-xl text-gray-600 leading-fluid-relaxed max-w-2xl font-light">
                Expert guidance for Indian students studying abroad in UK, USA, Australia, Canada, Germany, Poland. 
                Verified job opportunities in Europe with work permit assistance.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-fluid-sm py-8">
              <div className="text-center group">
                <div className="text-fluid-3xl sm:text-fluid-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">700+</div>
                <div className="text-fluid-xs font-medium text-gray-500 mt-2 tracking-wide">Universities</div>
              </div>
              <div className="text-center group">
                <div className="text-fluid-3xl sm:text-fluid-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">15+</div>
                <div className="text-fluid-xs font-medium text-gray-500 mt-2 tracking-wide">Countries</div>
              </div>
              <div className="text-center group">
                <div className="text-fluid-3xl sm:text-fluid-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">5000+</div>
                <div className="text-fluid-xs font-medium text-gray-500 mt-2 tracking-wide">Students</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-fluid-md">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-6 sm:px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 font-semibold text-fluid-base sm:text-fluid-lg tracking-wide flex items-center justify-center transform hover:-translate-y-1 min-h-[44px]"
              >
                Apply for Study Abroad
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group border-2 border-gray-200 text-gray-700 px-6 sm:px-8 py-4 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold text-fluid-base sm:text-fluid-lg backdrop-blur-sm bg-white/50 min-h-[44px]"
              >
                Find Jobs in Europe
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-fluid-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                <span className="font-medium">Scholarships Available</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                <span className="font-medium">Work Permit Assistance</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-gray-900/10 p-8 border border-gray-100/50">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Live Opportunities</h3>
                  <div className="flex items-center text-sm text-emerald-600 font-semibold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                    Active Now
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="group p-5 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-2xl border border-blue-100/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-lg">Software Developer</div>
                        <div className="text-sm text-gray-600 font-medium">Poland • €45,000 - €65,000</div>
                      </div>
                      <div className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-semibold tracking-wide">
                        NEW
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-5 bg-gradient-to-r from-emerald-50/80 to-teal-50/80 rounded-2xl border border-emerald-100/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-lg">Marketing Specialist</div>
                        <div className="text-sm text-gray-600 font-medium">Germany • €1,200/month</div>
                      </div>
                      <div className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full font-semibold tracking-wide">
                        INTERN
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-5 bg-gradient-to-r from-purple-50/80 to-indigo-50/80 rounded-2xl border border-purple-100/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-lg">Data Analyst</div>
                        <div className="text-sm text-gray-600 font-medium">Lithuania • €35,000 - €50,000</div>
                      </div>
                      <div className="text-xs bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full font-semibold tracking-wide">
                        HOT
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 rounded-2xl hover:shadow-xl hover:shadow-gray-900/25 transition-all duration-500 font-semibold tracking-wide transform hover:-translate-y-0.5">
                  View All Opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Hero