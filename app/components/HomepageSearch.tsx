'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, BookOpen, Calendar, ArrowRight } from 'lucide-react'

export default function HomepageSearch() {
  const router = useRouter()
  const [searchData, setSearchData] = useState({
    location: '',
    subject: '',
    timeframe: '',
    level: ''
  })

  const locations = [
    'Select Location',
    'Canada',
    'USA', 
    'UK',
    'Germany',
    'Australia',
    'New Zealand',
    'Ireland',
    'Singapore',
    'Netherlands',
    'Sweden',
    'Denmark',
    'Finland',
    'Switzerland',
    'France',
    'Italy',
    'Spain',
    'Poland',
    'Czech Republic',
    'Austria',
    'Belgium',
    'Norway'
  ]

  const subjects = [
    'Select Subject',
    'Business Administration',
    'Computer Science',
    'Engineering',
    'Medicine',
    'Law',
    'Arts & Humanities',
    'Social Sciences',
    'Natural Sciences',
    'Health Sciences',
    'Education',
    'Architecture',
    'Design',
    'Media & Communication',
    'Psychology',
    'Economics',
    'International Relations',
    'Environmental Science',
    'Data Science',
    'Cybersecurity',
    'Artificial Intelligence',
    'Digital Marketing',
    'Finance',
    'Accounting',
    'Management'
  ]

  const timeframes = [
    'Select Timeframe',
    'Fall 2025',
    'Spring 2026',
    'Fall 2026',
    'Spring 2027',
    'Summer 2025',
    'Summer 2026',
    'Academic Year 2025-26',
    'Academic Year 2026-27',
    'Semester Exchange',
    'Short-term Program (1-3 months)',
    'Language Course',
    'Foundation Year'
  ]

  const levels = [
    'Select Level',
    'Undergraduate (Bachelor)',
    'Postgraduate (Master)',
    'PhD/Doctorate',
    'Postgraduate Diploma',
    'Certificate Program',
    'Foundation Year',
    'Pre-Master Program',
    'MBA',
    'Executive MBA',
    'Professional Certificate',
    'Language Course',
    'Summer School',
    'Exchange Program'
  ]

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Build query string
    const params = new URLSearchParams()
    if (searchData.location && searchData.location !== 'Select Location') {
      params.append('location', searchData.location.toLowerCase())
    }
    if (searchData.subject && searchData.subject !== 'Select Subject') {
      params.append('subject', searchData.subject.toLowerCase().replace(/\s+/g, '-'))
    }
    if (searchData.timeframe && searchData.timeframe !== 'Select Timeframe') {
      params.append('timeframe', searchData.timeframe.toLowerCase().replace(/\s+/g, '-'))
    }
    if (searchData.level && searchData.level !== 'Select Level') {
      params.append('level', searchData.level.toLowerCase().replace(/\s+/g, '-'))
    }

    // Navigate to search results page
    const queryString = params.toString()
    router.push(`/search${queryString ? `?${queryString}` : ''}`)
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gray-50/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
            <Search className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Premium Search Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="elegant-text">Find Your Perfect</span>
            <span className="text-blue-900 block">
              Study Abroad Program
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Search thousands of study abroad programs worldwide. Find the perfect match for your academic goals and career aspirations with our premium matching algorithm.
          </p>
        </div>

        {/* Search Form */}
        <div className="minimal-card rounded-2xl p-10 md:p-16 relative overflow-hidden">
          
          <form onSubmit={handleSearch} className="relative space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Location */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center mr-3 refined-shadow">
                    <MapPin className="h-4 w-4 text-gray-600" />
                  </div>
                  Where do you want to study?
                </label>
                <select
                  value={searchData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full px-6 py-5 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-300 transition-all duration-300 text-lg bg-white subtle-hover"
                  required
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center mr-3 refined-shadow">
                    <BookOpen className="h-4 w-4 text-gray-600" />
                  </div>
                  What do you want to study?
                </label>
                <select
                  value={searchData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-6 py-5 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-300 transition-all duration-300 text-lg bg-white subtle-hover"
                  required
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeframe */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center mr-3 refined-shadow">
                    <Calendar className="h-4 w-4 text-gray-600" />
                  </div>
                  When do you want to start?
                </label>
                <select
                  value={searchData.timeframe}
                  onChange={(e) => handleInputChange('timeframe', e.target.value)}
                  className="w-full px-6 py-5 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-300 transition-all duration-300 text-lg bg-white subtle-hover"
                  required
                >
                  {timeframes.map((timeframe) => (
                    <option key={timeframe} value={timeframe}>
                      {timeframe}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level of Study */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center mr-3 refined-shadow">
                    <BookOpen className="h-4 w-4 text-gray-600" />
                  </div>
                  What level of study?
                </label>
                <select
                  value={searchData.level}
                  onChange={(e) => handleInputChange('level', e.target.value)}
                  className="w-full px-6 py-5 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-300 transition-all duration-300 text-lg bg-white subtle-hover"
                  required
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center pt-8">
              <button
                type="submit"
                className="group bg-blue-900 text-white px-16 py-6 rounded-xl font-medium text-xl tracking-wide subtle-hover elegant-shadow"
              >
                <div className="flex items-center justify-center">
                  <Search className="mr-4 h-6 w-6" />
                  Search Programs
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </form>

          {/* Premium Stats */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm font-semibold text-gray-600 tracking-wide">Universities</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm font-semibold text-gray-600 tracking-wide">Countries</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-sm font-semibold text-gray-600 tracking-wide">Programs</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-sm font-semibold text-gray-600 tracking-wide">Students Helped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// This portion will only be used