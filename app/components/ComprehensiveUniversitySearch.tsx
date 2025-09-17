'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, Star, Filter, Globe, GraduationCap, Users, Award, Calendar, DollarSign, BookOpen, ArrowRight } from 'lucide-react'

interface University {
  id: number
  name: string
  country: string
  city: string
  ranking: number
  globalRanking: number
  type: 'Public' | 'Private'
  programs: string[]
  tuition: string
  tuitionLocal: string
  image: string
  description: string
  established: number
  students: string
  acceptanceRate: string
  language: string
  applicationDeadline: string
  intakes: string[]
  scholarships: string[]
  requirements: string[]
  campus: string
  website: string
  slug: string
}

export default function ComprehensiveUniversitySearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const universities: University[] = [
    // USA Universities
    {
      id: 1,
      name: 'Harvard University',
      country: 'USA',
      city: 'Cambridge, Massachusetts',
      ranking: 1,
      globalRanking: 3,
      type: 'Private',
      programs: ['Medicine', 'Law', 'Business', 'Arts', 'Engineering', 'Computer Science', 'Public Health', 'Education'],
      tuition: '$54,269 USD/year',
      tuitionLocal: '₹45,00,000/year',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'Harvard University is the oldest institution of higher education in the United States and among the most prestigious in the world.',
      established: 1636,
      students: '23,000+',
      acceptanceRate: '3.4%',
      language: 'English',
      applicationDeadline: 'January 1',
      intakes: ['Fall (September)', 'Spring (January)'],
      scholarships: ['Harvard Financial Aid', 'Merit Scholarships', 'Need-based Aid'],
      requirements: ['SAT/ACT', 'TOEFL/IELTS', 'High School Transcript', 'Letters of Recommendation', 'Personal Statement'],
      campus: 'Urban',
      website: 'https://www.harvard.edu',
      slug: 'harvard-university-usa'
    },
    {
      id: 2,
      name: 'Stanford University',
      country: 'USA',
      city: 'Stanford, California',
      ranking: 2,
      globalRanking: 2,
      type: 'Private',
      programs: ['Engineering', 'Business', 'Medicine', 'Computer Science', 'Law', 'Education', 'Humanities', 'Sciences'],
      tuition: '$56,169 USD/year',
      tuitionLocal: '₹46,50,000/year',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'Stanford University is a leading research university known for its academic strength, wealth, proximity to Silicon Valley, and ranking as one of the world\'s top universities.',
      established: 1885,
      students: '17,000+',
      acceptanceRate: '4.3%',
      language: 'English',
      applicationDeadline: 'January 2',
      intakes: ['Fall (September)'],
      scholarships: ['Stanford Financial Aid', 'Merit Scholarships', 'Athletic Scholarships'],
      requirements: ['SAT/ACT', 'TOEFL/IELTS', 'High School Transcript', 'Letters of Recommendation', 'Personal Statement'],
      campus: 'Suburban',
      website: 'https://www.stanford.edu',
      slug: 'stanford-university-usa'
    },
    {
      id: 3,
      name: 'Massachusetts Institute of Technology',
      country: 'USA',
      city: 'Cambridge, Massachusetts',
      ranking: 3,
      globalRanking: 1,
      type: 'Private',
      programs: ['Engineering', 'Computer Science', 'Business', 'Science', 'Architecture', 'Economics', 'Mathematics', 'Physics'],
      tuition: '$53,790 USD/year',
      tuitionLocal: '₹44,50,000/year',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'MIT is a world-renowned private research university known for its strong emphasis on science, technology, engineering, and mathematics.',
      established: 1861,
      students: '11,000+',
      acceptanceRate: '6.7%',
      language: 'English',
      applicationDeadline: 'January 1',
      intakes: ['Fall (September)'],
      scholarships: ['MIT Financial Aid', 'Merit Scholarships', 'Research Fellowships'],
      requirements: ['SAT/ACT', 'TOEFL/IELTS', 'High School Transcript', 'Letters of Recommendation', 'Personal Statement'],
      campus: 'Urban',
      website: 'https://www.mit.edu',
      slug: 'mit-university-usa'
    },
    {
      id: 4,
      name: 'University of California, Berkeley',
      country: 'USA',
      city: 'Berkeley, California',
      ranking: 4,
      globalRanking: 4,
      type: 'Public',
      programs: ['Engineering', 'Business', 'Arts', 'Science', 'Law', 'Public Policy', 'Environmental Science', 'Computer Science'],
      tuition: '$14,226 USD/year',
      tuitionLocal: '₹11,80,000/year',
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'UC Berkeley is a public land-grant research university and the flagship institution of the University of California system.',
      established: 1868,
      students: '45,000+',
      acceptanceRate: '14.5%',
      language: 'English',
      applicationDeadline: 'November 30',
      intakes: ['Fall (September)'],
      scholarships: ['UC Berkeley Financial Aid', 'Merit Scholarships', 'Departmental Awards'],
      requirements: ['SAT/ACT', 'TOEFL/IELTS', 'High School Transcript', 'Personal Statement'],
      campus: 'Urban',
      website: 'https://www.berkeley.edu',
      slug: 'uc-berkeley-usa'
    },

    // UK Universities
    {
      id: 5,
      name: 'University of Oxford',
      country: 'UK',
      city: 'Oxford, England',
      ranking: 1,
      globalRanking: 5,
      type: 'Public',
      programs: ['Medicine', 'Law', 'Business', 'Arts', 'Engineering', 'Computer Science', 'Philosophy', 'History'],
      tuition: '£9,250 GBP/year',
      tuitionLocal: '₹9,50,000/year',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'The University of Oxford is a collegiate research university in Oxford, England. It is the oldest university in the English-speaking world.',
      established: 1096,
      students: '24,000+',
      acceptanceRate: '17.5%',
      language: 'English',
      applicationDeadline: 'October 15',
      intakes: ['Fall (October)'],
      scholarships: ['Oxford Financial Aid', 'Rhodes Scholarships', 'Clarendon Scholarships'],
      requirements: ['A-levels/IB', 'IELTS/TOEFL', 'Personal Statement', 'Academic References', 'Admissions Test'],
      campus: 'Urban',
      website: 'https://www.ox.ac.uk',
      slug: 'university-of-oxford-uk'
    },
    {
      id: 6,
      name: 'University of Cambridge',
      country: 'UK',
      city: 'Cambridge, England',
      ranking: 2,
      globalRanking: 6,
      type: 'Public',
      programs: ['Medicine', 'Engineering', 'Business', 'Arts', 'Computer Science', 'Natural Sciences', 'Mathematics', 'Law'],
      tuition: '£9,250 GBP/year',
      tuitionLocal: '₹9,50,000/year',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'The University of Cambridge is a collegiate research university in Cambridge, England. It is the second-oldest university in the English-speaking world.',
      established: 1209,
      students: '23,000+',
      acceptanceRate: '21%',
      language: 'English',
      applicationDeadline: 'October 15',
      intakes: ['Fall (October)'],
      scholarships: ['Cambridge Financial Aid', 'Gates Cambridge Scholarships', 'Churchill Scholarships'],
      requirements: ['A-levels/IB', 'IELTS/TOEFL', 'Personal Statement', 'Academic References', 'Admissions Test'],
      campus: 'Urban',
      website: 'https://www.cam.ac.uk',
      slug: 'university-of-cambridge-uk'
    },
    {
      id: 7,
      name: 'Imperial College London',
      country: 'UK',
      city: 'London, England',
      ranking: 3,
      globalRanking: 7,
      type: 'Public',
      programs: ['Engineering', 'Medicine', 'Business', 'Science', 'Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
      tuition: '£9,250 GBP/year',
      tuitionLocal: '₹9,50,000/year',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'Imperial College London is a public research university in London, England, specializing in science, engineering, medicine, and business.',
      established: 1907,
      students: '19,000+',
      acceptanceRate: '14.3%',
      language: 'English',
      applicationDeadline: 'January 15',
      intakes: ['Fall (October)'],
      scholarships: ['Imperial Financial Aid', 'Merit Scholarships', 'Departmental Awards'],
      requirements: ['A-levels/IB', 'IELTS/TOEFL', 'Personal Statement', 'Academic References'],
      campus: 'Urban',
      website: 'https://www.imperial.ac.uk',
      slug: 'imperial-college-london-uk'
    },

    // Canada Universities
    {
      id: 8,
      name: 'University of Toronto',
      country: 'Canada',
      city: 'Toronto, Ontario',
      ranking: 1,
      globalRanking: 18,
      type: 'Public',
      programs: ['Engineering', 'Business', 'Medicine', 'Arts', 'Computer Science', 'Life Sciences', 'Social Sciences', 'Humanities'],
      tuition: '$6,100 CAD/year',
      tuitionLocal: '₹3,50,000/year',
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'The University of Toronto is a public research university in Toronto, Ontario, Canada. It is consistently ranked among the top universities in the world.',
      established: 1827,
      students: '97,000+',
      acceptanceRate: '43%',
      language: 'English',
      applicationDeadline: 'January 15',
      intakes: ['Fall (September)', 'Winter (January)', 'Summer (May)'],
      scholarships: ['U of T Financial Aid', 'Merit Scholarships', 'International Student Awards'],
      requirements: ['High School Transcript', 'IELTS/TOEFL', 'Personal Statement', 'Letters of Recommendation'],
      campus: 'Urban',
      website: 'https://www.utoronto.ca',
      slug: 'university-of-toronto-canada'
    },
    {
      id: 9,
      name: 'University of British Columbia',
      country: 'Canada',
      city: 'Vancouver, British Columbia',
      ranking: 2,
      globalRanking: 46,
      type: 'Public',
      programs: ['Engineering', 'Business', 'Science', 'Arts', 'Computer Science', 'Forestry', 'Medicine', 'Education'],
      tuition: '$5,646 CAD/year',
      tuitionLocal: '₹3,20,000/year',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'UBC is a global research and teaching institution that consistently ranks among the top 40 universities in the world.',
      established: 1908,
      students: '66,000+',
      acceptanceRate: '52.4%',
      language: 'English',
      applicationDeadline: 'January 15',
      intakes: ['Fall (September)', 'Winter (January)'],
      scholarships: ['UBC Financial Aid', 'Merit Scholarships', 'International Student Awards'],
      requirements: ['High School Transcript', 'IELTS/TOEFL', 'Personal Statement', 'Letters of Recommendation'],
      campus: 'Urban',
      website: 'https://www.ubc.ca',
      slug: 'university-of-british-columbia-canada'
    },

    // Australia Universities
    {
      id: 10,
      name: 'University of Melbourne',
      country: 'Australia',
      city: 'Melbourne, Victoria',
      ranking: 1,
      globalRanking: 33,
      type: 'Public',
      programs: ['Medicine', 'Law', 'Business', 'Arts', 'Engineering', 'Computer Science', 'Education', 'Veterinary Science'],
      tuition: '$45,000 AUD/year',
      tuitionLocal: '₹24,00,000/year',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'The University of Melbourne is Australia\'s leading research university, consistently ranked among the world\'s top universities.',
      established: 1853,
      students: '52,000+',
      acceptanceRate: '70%',
      language: 'English',
      applicationDeadline: 'October 31',
      intakes: ['Semester 1 (February)', 'Semester 2 (July)'],
      scholarships: ['Melbourne Financial Aid', 'Merit Scholarships', 'International Student Scholarships'],
      requirements: ['High School Transcript', 'IELTS/TOEFL', 'Personal Statement', 'Letters of Recommendation'],
      campus: 'Urban',
      website: 'https://www.unimelb.edu.au',
      slug: 'university-of-melbourne-australia'
    },
    {
      id: 11,
      name: 'University of Sydney',
      country: 'Australia',
      city: 'Sydney, New South Wales',
      ranking: 2,
      globalRanking: 41,
      type: 'Public',
      programs: ['Medicine', 'Engineering', 'Business', 'Arts', 'Computer Science', 'Law', 'Education', 'Veterinary Science'],
      tuition: '$45,000 AUD/year',
      tuitionLocal: '₹24,00,000/year',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'The University of Sydney is Australia\'s first university and is consistently ranked among the world\'s top universities.',
      established: 1850,
      students: '73,000+',
      acceptanceRate: '30%',
      language: 'English',
      applicationDeadline: 'January 31',
      intakes: ['Semester 1 (February)', 'Semester 2 (July)'],
      scholarships: ['Sydney Financial Aid', 'Merit Scholarships', 'International Student Scholarships'],
      requirements: ['High School Transcript', 'IELTS/TOEFL', 'Personal Statement', 'Letters of Recommendation'],
      campus: 'Urban',
      website: 'https://www.sydney.edu.au',
      slug: 'university-of-sydney-australia'
    },

    // Germany Universities
    {
      id: 12,
      name: 'Technical University of Munich',
      country: 'Germany',
      city: 'Munich, Bavaria',
      ranking: 1,
      globalRanking: 50,
      type: 'Public',
      programs: ['Engineering', 'Computer Science', 'Business', 'Science', 'Mathematics', 'Physics', 'Chemistry', 'Architecture'],
      tuition: 'Free',
      tuitionLocal: '₹0/year (Only semester fee)',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'TUM is Germany\'s leading technical university and one of Europe\'s most prestigious institutions for science and technology.',
      established: 1868,
      students: '42,000+',
      acceptanceRate: '8%',
      language: 'German/English',
      applicationDeadline: 'July 15',
      intakes: ['Winter Semester (October)', 'Summer Semester (April)'],
      scholarships: ['DAAD Scholarships', 'TUM Scholarships', 'Government Scholarships'],
      requirements: ['High School Transcript', 'German Language Certificate', 'English Language Certificate', 'Aptitude Test'],
      campus: 'Urban',
      website: 'https://www.tum.de',
      slug: 'technical-university-munich-germany'
    },
    {
      id: 13,
      name: 'Ludwig Maximilian University of Munich',
      country: 'Germany',
      city: 'Munich, Bavaria',
      ranking: 2,
      globalRanking: 63,
      type: 'Public',
      programs: ['Medicine', 'Law', 'Business', 'Arts', 'Psychology', 'Biology', 'Chemistry', 'Physics'],
      tuition: 'Free',
      tuitionLocal: '₹0/year (Only semester fee)',
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'LMU Munich is one of Europe\'s oldest universities and is consistently ranked among the top universities in Germany.',
      established: 1472,
      students: '52,000+',
      acceptanceRate: '10%',
      language: 'German/English',
      applicationDeadline: 'July 15',
      intakes: ['Winter Semester (October)', 'Summer Semester (April)'],
      scholarships: ['DAAD Scholarships', 'LMU Scholarships', 'Government Scholarships'],
      requirements: ['High School Transcript', 'German Language Certificate', 'English Language Certificate'],
      campus: 'Urban',
      website: 'https://www.lmu.de',
      slug: 'lmu-munich-germany'
    },

    // Netherlands Universities
    {
      id: 14,
      name: 'University of Amsterdam',
      country: 'Netherlands',
      city: 'Amsterdam',
      ranking: 1,
      globalRanking: 55,
      type: 'Public',
      programs: ['Business', 'Arts', 'Science', 'Social Sciences', 'Law', 'Medicine', 'Psychology', 'Communication'],
      tuition: '€2,168 EUR/year',
      tuitionLocal: '₹1,80,000/year',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'The University of Amsterdam is the Netherlands\' largest university and one of the most comprehensive research universities in Europe.',
      established: 1632,
      students: '34,000+',
      acceptanceRate: '4.3%',
      language: 'English/Dutch',
      applicationDeadline: 'January 15',
      intakes: ['Fall (September)', 'Spring (February)'],
      scholarships: ['UvA Scholarships', 'Holland Scholarships', 'Orange Tulip Scholarships'],
      requirements: ['High School Transcript', 'IELTS/TOEFL', 'Personal Statement', 'Letters of Recommendation'],
      campus: 'Urban',
      website: 'https://www.uva.nl',
      slug: 'university-of-amsterdam-netherlands'
    },

    // Ireland Universities
    {
      id: 15,
      name: 'Trinity College Dublin',
      country: 'Ireland',
      city: 'Dublin',
      ranking: 1,
      globalRanking: 101,
      type: 'Public',
      programs: ['Medicine', 'Law', 'Business', 'Arts', 'Engineering', 'Computer Science', 'Natural Sciences', 'Social Sciences'],
      tuition: '€3,000 EUR/year',
      tuitionLocal: '₹2,50,000/year',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'Trinity College Dublin is Ireland\'s oldest university and is consistently ranked among the top universities in the world.',
      established: 1592,
      students: '18,000+',
      acceptanceRate: '33.5%',
      language: 'English',
      applicationDeadline: 'February 1',
      intakes: ['Fall (September)'],
      scholarships: ['Trinity Financial Aid', 'Merit Scholarships', 'International Student Scholarships'],
      requirements: ['High School Transcript', 'IELTS/TOEFL', 'Personal Statement', 'Letters of Recommendation'],
      campus: 'Urban',
      website: 'https://www.tcd.ie',
      slug: 'trinity-college-dublin-ireland'
    },

    // New Zealand Universities
    {
      id: 16,
      name: 'University of Auckland',
      country: 'New Zealand',
      city: 'Auckland',
      ranking: 1,
      globalRanking: 85,
      type: 'Public',
      programs: ['Medicine', 'Engineering', 'Business', 'Arts', 'Computer Science', 'Law', 'Education', 'Architecture'],
      tuition: '$32,000 NZD/year',
      tuitionLocal: '₹16,00,000/year',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      description: 'The University of Auckland is New Zealand\'s leading university and is consistently ranked among the top 100 universities in the world.',
      established: 1883,
      students: '40,000+',
      acceptanceRate: '45%',
      language: 'English',
      applicationDeadline: 'December 1',
      intakes: ['Semester 1 (February)', 'Semester 2 (July)'],
      scholarships: ['Auckland Financial Aid', 'Merit Scholarships', 'International Student Scholarships'],
      requirements: ['High School Transcript', 'IELTS/TOEFL', 'Personal Statement', 'Letters of Recommendation'],
      campus: 'Urban',
      website: 'https://www.auckland.ac.nz',
      slug: 'university-of-auckland-new-zealand'
    }
  ]

  const countries = ['All Countries', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'Netherlands', 'Ireland', 'New Zealand', 'Switzerland', 'Sweden', 'Denmark', 'Finland', 'France', 'Italy', 'Spain', 'Poland', 'Czech Republic', 'Austria', 'Belgium', 'Norway']
  const programs = ['All Programs', 'Engineering', 'Business', 'Medicine', 'Law', 'Arts', 'Science', 'Computer Science', 'Health Sciences', 'Social Sciences', 'Education', 'Architecture', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Psychology', 'Economics', 'Philosophy', 'History']
  const types = ['All Types', 'Public', 'Private']

  const filteredUniversities = useMemo(() => {
    return universities.filter(university => {
      const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           university.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           university.country.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCountry = !selectedCountry || selectedCountry === 'All Countries' || university.country === selectedCountry
      const matchesProgram = !selectedProgram || selectedProgram === 'All Programs' || university.programs.includes(selectedProgram)
      const matchesType = !selectedType || selectedType === 'All Types' || university.type === selectedType

      return matchesSearch && matchesCountry && matchesProgram && matchesType
    })
  }, [searchTerm, selectedCountry, selectedProgram, selectedType])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCountry('')
    setSelectedProgram('')
    setSelectedType('')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
            <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Global Universities Database</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Find Your Perfect
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Study Abroad Program
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Explore comprehensive information about top universities worldwide. Search by country, program, or university name to find your ideal study destination with detailed admission requirements, costs, and scholarship opportunities.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100/50 p-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities, cities, or countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm shadow-lg"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Filter className="h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              {(searchTerm || selectedCountry || selectedProgram || selectedType) && (
                <button
                  onClick={clearFilters}
                  className="text-gray-600 hover:text-gray-700 font-medium"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program</label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  >
                    {programs.map(program => (
                      <option key={program} value={program}>{program}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredUniversities.length} Universities Found
            </h3>
            <div className="text-sm text-gray-600">
              Showing results for {searchTerm || selectedCountry || selectedProgram || selectedType ? 'your search' : 'all universities'}
            </div>
          </div>
        </div>

        {/* University Grid */}
        {filteredUniversities.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No universities found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university) => (
              <div key={university.id} className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      #{university.ranking} in {university.country}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      university.type === 'Public' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {university.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                      Global Rank #{university.globalRanking}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{university.city}, {university.country}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {university.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {university.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{university.students} students</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Est. {university.established}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span className="font-medium">{university.tuitionLocal}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 mr-2" />
                      <span>Acceptance Rate: {university.acceptanceRate}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {university.programs.slice(0, 3).map((program) => (
                      <span key={program} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {program}
                      </span>
                    ))}
                    {university.programs.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{university.programs.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link 
                    href={`/university/${university.slug}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center group-hover:scale-105 transform"
                  >
                    View Complete Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
