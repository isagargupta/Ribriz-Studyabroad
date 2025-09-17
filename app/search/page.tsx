'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Search, MapPin, Star, Filter, Globe, Users, Calendar, BookOpen, Home, Languages, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

interface Program {
  id: number
  name: string
  university: string
  country: string
  city: string
  subject: string
  degree: string
  timeframe: string
  language: string
  housing: string
  rating: number
  reviews: number
  image: string
  description: string
  included: string[]
  tuition: string
  duration: string
}

export default function SearchResults() {
  const searchParams = useSearchParams()
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    country: '',
    rating: '',
    subject: '',
    timeframe: '',
    degree: '',
    housing: '',
    language: '',
    included: [] as string[]
  })
  const [expandedFilters, setExpandedFilters] = useState({
    country: false,
    rating: false,
    subject: false,
    timeframe: false,
    degree: false,
    housing: false,
    language: false,
    included: false
  })

  // Sample programs data (in real app, this would come from API)
  const allPrograms: Program[] = [
    {
      id: 1,
      name: 'Business Administration',
      university: 'University of Toronto',
      country: 'Canada',
      city: 'Toronto',
      subject: 'Business Administration',
      degree: 'Bachelor',
      timeframe: 'Fall 2025',
      language: 'English',
      housing: 'On-campus',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      description: 'Comprehensive business program with international focus and internship opportunities.',
      included: ['Internship', 'Excursions', 'Insurance', 'Airport Pickup'],
      tuition: '$45,000 CAD/year',
      duration: '4 years'
    },
    {
      id: 2,
      name: 'Computer Science',
      university: 'Stanford University',
      country: 'USA',
      city: 'Stanford',
      subject: 'Computer Science',
      degree: 'Master',
      timeframe: 'Fall 2025',
      language: 'English',
      housing: 'Off-campus',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      description: 'Advanced computer science program with cutting-edge research opportunities.',
      included: ['Research Project', 'Career Services', 'Insurance'],
      tuition: '$56,000 USD/year',
      duration: '2 years'
    },
    {
      id: 3,
      name: 'Engineering',
      university: 'Technical University of Munich',
      country: 'Germany',
      city: 'Munich',
      subject: 'Engineering',
      degree: 'Master',
      timeframe: 'Fall 2025',
      language: 'English',
      housing: 'On-campus',
      rating: 4.7,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      description: 'World-class engineering program with industry partnerships and practical experience.',
      included: ['Industry Internship', 'Excursions', 'Insurance', 'Language Course'],
      tuition: 'Free',
      duration: '2 years'
    },
    {
      id: 4,
      name: 'Medicine',
      university: 'University of Oxford',
      country: 'UK',
      city: 'Oxford',
      subject: 'Medicine',
      degree: 'Bachelor',
      timeframe: 'Fall 2025',
      language: 'English',
      housing: 'On-campus',
      rating: 4.9,
      reviews: 145,
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg',
      description: 'Prestigious medical program with clinical rotations and research opportunities.',
      included: ['Clinical Rotations', 'Research Project', 'Insurance', 'Mentorship'],
      tuition: '£9,250 GBP/year',
      duration: '6 years'
    },
    {
      id: 5,
      name: 'Arts & Humanities',
      university: 'University of Melbourne',
      country: 'Australia',
      city: 'Melbourne',
      subject: 'Arts & Humanities',
      degree: 'Bachelor',
      timeframe: 'Fall 2025',
      language: 'English',
      housing: 'Off-campus',
      rating: 4.6,
      reviews: 98,
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg',
      description: 'Diverse arts and humanities program with cultural exchange opportunities.',
      included: ['Cultural Activities', 'Excursions', 'Insurance'],
      tuition: '$42,000 AUD/year',
      duration: '3 years'
    },
    {
      id: 6,
      name: 'Data Science',
      university: 'National University of Singapore',
      country: 'Singapore',
      city: 'Singapore',
      subject: 'Data Science',
      degree: 'Master',
      timeframe: 'Fall 2025',
      language: 'English',
      housing: 'On-campus',
      rating: 4.8,
      reviews: 167,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      description: 'Advanced data science program with industry partnerships and real-world projects.',
      included: ['Industry Project', 'Career Services', 'Insurance', 'Networking Events'],
      tuition: '$38,000 SGD/year',
      duration: '1.5 years'
    }
  ]

  const filterOptions = {
    countries: ['All Countries', 'Canada', 'USA', 'UK', 'Germany', 'Australia', 'Singapore', 'Netherlands', 'Sweden', 'Denmark'],
    ratings: ['All Ratings', '4.5+ Stars', '4.0+ Stars', '3.5+ Stars'],
    subjects: ['All Subjects', 'Business Administration', 'Computer Science', 'Engineering', 'Medicine', 'Arts & Humanities', 'Data Science', 'Law', 'Social Sciences'],
    timeframes: ['All Timeframes', 'Fall 2025', 'Spring 2026', 'Fall 2026', 'Summer 2025', 'Academic Year 2025-26'],
    degrees: ['All Degrees', 'Bachelor', 'Master', 'PhD', 'Certificate', 'Diploma'],
    housing: ['All Housing', 'On-campus', 'Off-campus', 'Homestay', 'Private Apartment'],
    languages: ['All Languages', 'English', 'German', 'French', 'Spanish', 'Italian', 'Dutch'],
    included: ['Internship', 'Excursions', 'Insurance', 'Airport Pickup', 'Career Services', 'Research Project', 'Cultural Activities', 'Language Course', 'Mentorship', 'Networking Events']
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPrograms(allPrograms)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesCountry = !filters.country || filters.country === 'All Countries' || program.country === filters.country
      const matchesRating = !filters.rating || filters.rating === 'All Ratings' || 
        (filters.rating === '4.5+ Stars' && program.rating >= 4.5) ||
        (filters.rating === '4.0+ Stars' && program.rating >= 4.0) ||
        (filters.rating === '3.5+ Stars' && program.rating >= 3.5)
      const matchesSubject = !filters.subject || filters.subject === 'All Subjects' || program.subject === filters.subject
      const matchesTimeframe = !filters.timeframe || filters.timeframe === 'All Timeframes' || program.timeframe === filters.timeframe
      const matchesDegree = !filters.degree || filters.degree === 'All Degrees' || program.degree === filters.degree
      const matchesHousing = !filters.housing || filters.housing === 'All Housing' || program.housing === filters.housing
      const matchesLanguage = !filters.language || filters.language === 'All Languages' || program.language === filters.language
      const matchesIncluded = filters.included.length === 0 || filters.included.every(item => program.included.includes(item))

      return matchesCountry && matchesRating && matchesSubject && matchesTimeframe && matchesDegree && matchesHousing && matchesLanguage && matchesIncluded
    })
  }, [programs, filters])

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleIncludedChange = (item: string) => {
    setFilters(prev => ({
      ...prev,
      included: prev.included.includes(item)
        ? prev.included.filter(i => i !== item)
        : [...prev.included, item]
    }))
  }

  const toggleFilter = (filterType: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      country: '',
      rating: '',
      subject: '',
      timeframe: '',
      degree: '',
      housing: '',
      language: '',
      included: []
    })
  }

  const activeFiltersCount = Object.values(filters).filter(value => 
    Array.isArray(value) ? value.length > 0 : value !== ''
  ).length

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Abroad Programs</h1>
              <p className="text-gray-600">Find your perfect study abroad program</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Displaying {filteredPrograms.length} search results
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sort By</option>
                <option>Rating (High to Low)</option>
                <option>Reviews (Most)</option>
                <option>Tuition (Low to High)</option>
                <option>University Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Country Filter */}
                <div>
                  <button
                    onClick={() => toggleFilter('country')}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                  >
                    <span>Countries</span>
                    {expandedFilters.country ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedFilters.country && (
                    <div className="space-y-2">
                      {filterOptions.countries.map(country => (
                        <label key={country} className="flex items-center">
                          <input
                            type="radio"
                            name="country"
                            value={country}
                            checked={filters.country === country}
                            onChange={(e) => handleFilterChange('country', e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-sm text-gray-700">{country}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Rating Filter */}
                <div>
                  <button
                    onClick={() => toggleFilter('rating')}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                  >
                    <span>Rating</span>
                    {expandedFilters.rating ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedFilters.rating && (
                    <div className="space-y-2">
                      {filterOptions.ratings.map(rating => (
                        <label key={rating} className="flex items-center">
                          <input
                            type="radio"
                            name="rating"
                            value={rating}
                            checked={filters.rating === rating}
                            onChange={(e) => handleFilterChange('rating', e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-sm text-gray-700">{rating}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Subject Filter */}
                <div>
                  <button
                    onClick={() => toggleFilter('subject')}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                  >
                    <span>Subjects</span>
                    {expandedFilters.subject ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedFilters.subject && (
                    <div className="space-y-2">
                      {filterOptions.subjects.map(subject => (
                        <label key={subject} className="flex items-center">
                          <input
                            type="radio"
                            name="subject"
                            value={subject}
                            checked={filters.subject === subject}
                            onChange={(e) => handleFilterChange('subject', e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-sm text-gray-700">{subject}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Timeframe Filter */}
                <div>
                  <button
                    onClick={() => toggleFilter('timeframe')}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                  >
                    <span>Timeframe</span>
                    {expandedFilters.timeframe ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedFilters.timeframe && (
                    <div className="space-y-2">
                      {filterOptions.timeframes.map(timeframe => (
                        <label key={timeframe} className="flex items-center">
                          <input
                            type="radio"
                            name="timeframe"
                            value={timeframe}
                            checked={filters.timeframe === timeframe}
                            onChange={(e) => handleFilterChange('timeframe', e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-sm text-gray-700">{timeframe}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Degree Filter */}
                <div>
                  <button
                    onClick={() => toggleFilter('degree')}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                  >
                    <span>Degree</span>
                    {expandedFilters.degree ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedFilters.degree && (
                    <div className="space-y-2">
                      {filterOptions.degrees.map(degree => (
                        <label key={degree} className="flex items-center">
                          <input
                            type="radio"
                            name="degree"
                            value={degree}
                            checked={filters.degree === degree}
                            onChange={(e) => handleFilterChange('degree', e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-sm text-gray-700">{degree}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Housing Filter */}
                <div>
                  <button
                    onClick={() => toggleFilter('housing')}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                  >
                    <span>Housing</span>
                    {expandedFilters.housing ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedFilters.housing && (
                    <div className="space-y-2">
                      {filterOptions.housing.map(housing => (
                        <label key={housing} className="flex items-center">
                          <input
                            type="radio"
                            name="housing"
                            value={housing}
                            checked={filters.housing === housing}
                            onChange={(e) => handleFilterChange('housing', e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-sm text-gray-700">{housing}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Language Filter */}
                <div>
                  <button
                    onClick={() => toggleFilter('language')}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                  >
                    <span>Language</span>
                    {expandedFilters.language ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedFilters.language && (
                    <div className="space-y-2">
                      {filterOptions.languages.map(language => (
                        <label key={language} className="flex items-center">
                          <input
                            type="radio"
                            name="language"
                            value={language}
                            checked={filters.language === language}
                            onChange={(e) => handleFilterChange('language', e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-sm text-gray-700">{language}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* What's Included Filter */}
                <div>
                  <button
                    onClick={() => toggleFilter('included')}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
                  >
                    <span>What's Included</span>
                    {expandedFilters.included ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedFilters.included && (
                    <div className="space-y-2">
                      {filterOptions.included.map(item => (
                        <label key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.included.includes(item)}
                            onChange={() => handleIncludedChange(item)}
                            className="mr-3"
                          />
                          <span className="text-sm text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded mb-4 w-1/2"></div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPrograms.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters</p>
                <button
                  onClick={clearAllFilters}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPrograms.map((program) => (
                  <div key={program.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {program.reviews} reviews
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{program.university}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{program.country}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        <span>{program.rating} Rating • {program.reviews} reviews</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.included.slice(0, 3).map((item) => (
                          <span key={item} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                        {program.included.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{program.included.length - 3} more
                          </span>
                        )}
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-colors font-semibold flex items-center justify-center">
                        View Program
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
