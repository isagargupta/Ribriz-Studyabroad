'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, Star, Filter, Globe, GraduationCap, Users, Award, ArrowRight } from 'lucide-react'

interface University {
  id: number
  name: string
  country: string
  city: string
  ranking: number
  type: 'Public' | 'Private'
  programs: string[]
  tuition: string
  image: string
  description: string
  established: number
  students: string
}

export default function UniversitySearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const universities: University[] = [
    // Canada
    { id: 1, name: 'University of Toronto', country: 'Canada', city: 'Toronto', ranking: 1, type: 'Public', programs: ['Engineering', 'Business', 'Medicine', 'Arts'], tuition: '$6,100 CAD/year', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', description: 'Canada\'s leading research university', established: 1827, students: '97,000+' },
    { id: 2, name: 'University of British Columbia', country: 'Canada', city: 'Vancouver', ranking: 2, type: 'Public', programs: ['Engineering', 'Business', 'Science', 'Arts'], tuition: '$5,646 CAD/year', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', description: 'Global research and teaching excellence', established: 1908, students: '66,000+' },
    { id: 3, name: 'McGill University', country: 'Canada', city: 'Montreal', ranking: 3, type: 'Public', programs: ['Medicine', 'Engineering', 'Business', 'Arts'], tuition: '$2,391 CAD/year', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', description: 'One of Canada\'s best-known institutions', established: 1821, students: '40,000+' },
    { id: 4, name: 'University of Alberta', country: 'Canada', city: 'Edmonton', ranking: 4, type: 'Public', programs: ['Engineering', 'Medicine', 'Business', 'Science'], tuition: '$5,321 CAD/year', image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg', description: 'Leading research university in Western Canada', established: 1908, students: '40,000+' },
    { id: 5, name: 'McMaster University', country: 'Canada', city: 'Hamilton', ranking: 5, type: 'Public', programs: ['Medicine', 'Engineering', 'Business', 'Health Sciences'], tuition: '$5,421 CAD/year', image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg', description: 'Innovation and discovery-focused institution', established: 1887, students: '33,000+' },

    // USA
    { id: 6, name: 'Harvard University', country: 'USA', city: 'Cambridge', ranking: 1, type: 'Private', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: '$54,269 USD/year', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', description: 'World\'s most prestigious university', established: 1636, students: '23,000+' },
    { id: 7, name: 'Stanford University', country: 'USA', city: 'Stanford', ranking: 2, type: 'Private', programs: ['Engineering', 'Business', 'Medicine', 'Computer Science'], tuition: '$56,169 USD/year', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', description: 'Leading in innovation and entrepreneurship', established: 1885, students: '17,000+' },
    { id: 8, name: 'Massachusetts Institute of Technology', country: 'USA', city: 'Cambridge', ranking: 3, type: 'Private', programs: ['Engineering', 'Computer Science', 'Business', 'Science'], tuition: '$53,790 USD/year', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', description: 'Global leader in science and technology', established: 1861, students: '11,000+' },
    { id: 9, name: 'University of California, Berkeley', country: 'USA', city: 'Berkeley', ranking: 4, type: 'Public', programs: ['Engineering', 'Business', 'Arts', 'Science'], tuition: '$14,226 USD/year', image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg', description: 'Premier public research university', established: 1868, students: '45,000+' },
    { id: 10, name: 'University of Michigan', country: 'USA', city: 'Ann Arbor', ranking: 5, type: 'Public', programs: ['Engineering', 'Business', 'Medicine', 'Arts'], tuition: '$15,558 USD/year', image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg', description: 'Excellence in research and education', established: 1817, students: '46,000+' },

    // UK
    { id: 11, name: 'University of Oxford', country: 'UK', city: 'Oxford', ranking: 1, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: '£9,250 GBP/year', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', description: 'World\'s oldest English-speaking university', established: 1096, students: '24,000+' },
    { id: 12, name: 'University of Cambridge', country: 'UK', city: 'Cambridge', ranking: 2, type: 'Public', programs: ['Medicine', 'Engineering', 'Business', 'Arts'], tuition: '£9,250 GBP/year', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', description: 'Excellence in teaching and research', established: 1209, students: '23,000+' },
    { id: 13, name: 'Imperial College London', country: 'UK', city: 'London', ranking: 3, type: 'Public', programs: ['Engineering', 'Medicine', 'Business', 'Science'], tuition: '£9,250 GBP/year', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', description: 'Leading in science, engineering, and medicine', established: 1907, students: '19,000+' },
    { id: 14, name: 'London School of Economics', country: 'UK', city: 'London', ranking: 4, type: 'Public', programs: ['Economics', 'Business', 'Law', 'Social Sciences'], tuition: '£9,250 GBP/year', image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg', description: 'World\'s leading social science university', established: 1895, students: '12,000+' },
    { id: 15, name: 'University College London', country: 'UK', city: 'London', ranking: 5, type: 'Public', programs: ['Medicine', 'Engineering', 'Arts', 'Science'], tuition: '£9,250 GBP/year', image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg', description: 'London\'s leading multidisciplinary university', established: 1826, students: '41,000+' },

    // Germany
    { id: 16, name: 'Technical University of Munich', country: 'Germany', city: 'Munich', ranking: 1, type: 'Public', programs: ['Engineering', 'Computer Science', 'Business', 'Science'], tuition: 'Free', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', description: 'Germany\'s leading technical university', established: 1868, students: '42,000+' },
    { id: 17, name: 'Ludwig Maximilian University', country: 'Germany', city: 'Munich', ranking: 2, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: 'Free', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', description: 'One of Europe\'s oldest universities', established: 1472, students: '52,000+' },
    { id: 18, name: 'Heidelberg University', country: 'Germany', city: 'Heidelberg', ranking: 3, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: 'Free', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', description: 'Germany\'s oldest university', established: 1386, students: '30,000+' },
    { id: 19, name: 'RWTH Aachen University', country: 'Germany', city: 'Aachen', ranking: 4, type: 'Public', programs: ['Engineering', 'Computer Science', 'Business', 'Science'], tuition: 'Free', image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg', description: 'Leading technical university in Europe', established: 1870, students: '47,000+' },
    { id: 20, name: 'Free University of Berlin', country: 'Germany', city: 'Berlin', ranking: 5, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: 'Free', image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg', description: 'Research excellence in Berlin', established: 1948, students: '36,000+' },

    // Australia
    { id: 21, name: 'University of Melbourne', country: 'Australia', city: 'Melbourne', ranking: 1, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: '$45,000 AUD/year', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', description: 'Australia\'s leading research university', established: 1853, students: '52,000+' },
    { id: 22, name: 'University of Sydney', country: 'Australia', city: 'Sydney', ranking: 2, type: 'Public', programs: ['Medicine', 'Engineering', 'Business', 'Arts'], tuition: '$45,000 AUD/year', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', description: 'Australia\'s first university', established: 1850, students: '73,000+' },
    { id: 23, name: 'Australian National University', country: 'Australia', city: 'Canberra', ranking: 3, type: 'Public', programs: ['Science', 'Engineering', 'Business', 'Arts'], tuition: '$45,000 AUD/year', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', description: 'National research university', established: 1946, students: '20,000+' },
    { id: 24, name: 'University of Queensland', country: 'Australia', city: 'Brisbane', ranking: 4, type: 'Public', programs: ['Medicine', 'Engineering', 'Business', 'Science'], tuition: '$45,000 AUD/year', image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg', description: 'Research-intensive university', established: 1909, students: '55,000+' },
    { id: 25, name: 'Monash University', country: 'Australia', city: 'Melbourne', ranking: 5, type: 'Public', programs: ['Engineering', 'Business', 'Medicine', 'Arts'], tuition: '$45,000 AUD/year', image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg', description: 'Australia\'s largest university', established: 1958, students: '86,000+' },

    // New Zealand
    { id: 26, name: 'University of Auckland', country: 'New Zealand', city: 'Auckland', ranking: 1, type: 'Public', programs: ['Medicine', 'Engineering', 'Business', 'Arts'], tuition: '$32,000 NZD/year', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', description: 'New Zealand\'s leading university', established: 1883, students: '40,000+' },
    { id: 27, name: 'University of Otago', country: 'New Zealand', city: 'Dunedin', ranking: 2, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: '$32,000 NZD/year', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', description: 'New Zealand\'s oldest university', established: 1869, students: '21,000+' },
    { id: 28, name: 'Victoria University of Wellington', country: 'New Zealand', city: 'Wellington', ranking: 3, type: 'Public', programs: ['Law', 'Business', 'Arts', 'Science'], tuition: '$32,000 NZD/year', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', description: 'Capital city university', established: 1897, students: '22,000+' },

    // Ireland
    { id: 29, name: 'Trinity College Dublin', country: 'Ireland', city: 'Dublin', ranking: 1, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: '€3,000 EUR/year', image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg', description: 'Ireland\'s oldest university', established: 1592, students: '18,000+' },
    { id: 30, name: 'University College Dublin', country: 'Ireland', city: 'Dublin', ranking: 2, type: 'Public', programs: ['Medicine', 'Engineering', 'Business', 'Arts'], tuition: '€3,000 EUR/year', image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg', description: 'Ireland\'s largest university', established: 1854, students: '33,000+' },

    // Singapore
    { id: 31, name: 'National University of Singapore', country: 'Singapore', city: 'Singapore', ranking: 1, type: 'Public', programs: ['Engineering', 'Business', 'Medicine', 'Arts'], tuition: '$8,200 SGD/year', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', description: 'Asia\'s leading university', established: 1905, students: '40,000+' },
    { id: 32, name: 'Nanyang Technological University', country: 'Singapore', city: 'Singapore', ranking: 2, type: 'Public', programs: ['Engineering', 'Business', 'Science', 'Arts'], tuition: '$8,200 SGD/year', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', description: 'Young and research-intensive university', established: 1991, students: '33,000+' },

    // EU Countries
    { id: 33, name: 'ETH Zurich', country: 'Switzerland', city: 'Zurich', ranking: 1, type: 'Public', programs: ['Engineering', 'Computer Science', 'Business', 'Science'], tuition: 'CHF 730/year', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', description: 'Switzerland\'s leading technical university', established: 1855, students: '22,000+' },
    { id: 34, name: 'University of Amsterdam', country: 'Netherlands', city: 'Amsterdam', ranking: 1, type: 'Public', programs: ['Business', 'Arts', 'Science', 'Social Sciences'], tuition: '€2,168 EUR/year', image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg', description: 'Netherlands\' largest university', established: 1632, students: '34,000+' },
    { id: 35, name: 'Delft University of Technology', country: 'Netherlands', city: 'Delft', ranking: 2, type: 'Public', programs: ['Engineering', 'Computer Science', 'Business', 'Science'], tuition: '€2,168 EUR/year', image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg', description: 'Netherlands\' largest technical university', established: 1842, students: '25,000+' },
    { id: 36, name: 'Karolinska Institute', country: 'Sweden', city: 'Stockholm', ranking: 1, type: 'Public', programs: ['Medicine', 'Health Sciences', 'Biomedicine'], tuition: 'Free', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', description: 'World\'s leading medical university', established: 1810, students: '8,000+' },
    { id: 37, name: 'University of Copenhagen', country: 'Denmark', city: 'Copenhagen', ranking: 1, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: 'Free', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', description: 'Denmark\'s oldest university', established: 1479, students: '38,000+' },
    { id: 38, name: 'University of Helsinki', country: 'Finland', city: 'Helsinki', ranking: 1, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: 'Free', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', description: 'Finland\'s oldest and largest university', established: 1640, students: '31,000+' },
    { id: 39, name: 'Charles University', country: 'Czech Republic', city: 'Prague', ranking: 1, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: 'Free', image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg', description: 'Central Europe\'s oldest university', established: 1348, students: '51,000+' },
    { id: 40, name: 'Jagiellonian University', country: 'Poland', city: 'Krakow', ranking: 1, type: 'Public', programs: ['Medicine', 'Law', 'Business', 'Arts'], tuition: '€2,000 EUR/year', image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg', description: 'Poland\'s oldest university', established: 1364, students: '40,000+' }
  ]

  const countries = ['All Countries', 'Canada', 'USA', 'UK', 'Germany', 'Australia', 'New Zealand', 'Ireland', 'Singapore', 'Switzerland', 'Netherlands', 'Sweden', 'Denmark', 'Finland', 'Czech Republic', 'Poland']
  const programs = ['All Programs', 'Engineering', 'Business', 'Medicine', 'Law', 'Arts', 'Science', 'Computer Science', 'Health Sciences', 'Social Sciences']
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
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Global Universities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Find Your Perfect
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              University
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Explore top universities worldwide. Search by country, program, or university name to find your ideal study destination.
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
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{university.city}, {university.country}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {university.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {university.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{university.students} students</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2" />
                      <span>Est. {university.established}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium">Tuition: {university.tuition}</span>
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
                    href={`/university/${university.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-${university.country.toLowerCase()}`}
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
