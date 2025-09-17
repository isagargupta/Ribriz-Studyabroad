'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Briefcase, Building2, Users, GraduationCap, MapPin, Clock, Euro, ArrowRight, Filter, Search } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

interface Position {
  id: number
  title: string
  company: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract'
  category: 'Tech' | 'Non-Tech' | 'Internship'
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  posted: string
  image: string
}

export default function PositionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const positions: Position[] = [
    // Tech Positions
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'TechCorp Europe',
      location: 'Berlin, Germany',
      type: 'Full-time',
      category: 'Tech',
      salary: '€65,000 - €85,000/year',
      description: 'Join our innovative team to develop cutting-edge software solutions for European markets.',
      requirements: ['5+ years experience', 'JavaScript, Python, React', 'English proficiency', 'EU work permit'],
      benefits: ['Health insurance', 'Flexible hours', 'Remote work', 'Professional development'],
      posted: '2 days ago',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'DataFlow Solutions',
      location: 'Amsterdam, Netherlands',
      type: 'Full-time',
      category: 'Tech',
      salary: '€45,000 - €60,000/year',
      description: 'Analyze complex datasets to drive business decisions and improve operational efficiency.',
      requirements: ['3+ years experience', 'SQL, Python, Tableau', 'Analytical mindset', 'English proficiency'],
      benefits: ['Competitive salary', 'Learning budget', 'Team events', 'Career growth'],
      posted: '1 week ago',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'IT Support Specialist',
      company: 'EuroTech Systems',
      location: 'Prague, Czech Republic',
      type: 'Full-time',
      category: 'Tech',
      salary: '€35,000 - €45,000/year',
      description: 'Provide technical support and maintain IT infrastructure for our growing team.',
      requirements: ['2+ years experience', 'Windows/Linux systems', 'Network troubleshooting', 'Customer service'],
      benefits: ['Health insurance', 'Training programs', 'Modern office', 'Team building'],
      posted: '3 days ago',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Web Designer',
      company: 'Creative Digital',
      location: 'Vienna, Austria',
      type: 'Full-time',
      category: 'Tech',
      salary: '€40,000 - €55,000/year',
      description: 'Create stunning web designs and user experiences for our diverse client portfolio.',
      requirements: ['3+ years experience', 'Adobe Creative Suite', 'HTML/CSS', 'Portfolio required'],
      benefits: ['Creative freedom', 'Latest tools', 'Flexible schedule', 'Design conferences'],
      posted: '5 days ago',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Cybersecurity Specialist',
      company: 'SecureTech Europe',
      location: 'Zurich, Switzerland',
      type: 'Full-time',
      category: 'Tech',
      salary: '€70,000 - €95,000/year',
      description: 'Protect our digital infrastructure and ensure data security across all systems.',
      requirements: ['4+ years experience', 'Security certifications', 'Network security', 'English proficiency'],
      benefits: ['Premium health insurance', 'Security training', 'Remote work', 'Performance bonus'],
      posted: '1 day ago',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },

    // Non-Tech Positions
    {
      id: 6,
      title: 'Marketing Manager',
      company: 'BrandBuilders EU',
      location: 'Brussels, Belgium',
      type: 'Full-time',
      category: 'Non-Tech',
      salary: '€50,000 - €70,000/year',
      description: 'Lead marketing campaigns and brand development across European markets.',
      requirements: ['4+ years experience', 'Digital marketing', 'Team leadership', 'English + French'],
      benefits: ['Performance bonus', 'Health insurance', 'Flexible hours', 'International travel'],
      posted: '1 week ago',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Sales Representative',
      company: 'EuroSales Pro',
      location: 'Warsaw, Poland',
      type: 'Full-time',
      category: 'Non-Tech',
      salary: '€35,000 - €50,000/year + Commission',
      description: 'Drive sales growth and build relationships with clients across Central Europe.',
      requirements: ['2+ years sales experience', 'Communication skills', 'Results-driven', 'English proficiency'],
      benefits: ['Unlimited commission', 'Company car', 'Health insurance', 'Sales training'],
      posted: '4 days ago',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'Customer Service Manager',
      company: 'ServiceFirst Europe',
      location: 'Dublin, Ireland',
      type: 'Full-time',
      category: 'Non-Tech',
      salary: '€40,000 - €55,000/year',
      description: 'Manage customer service operations and ensure exceptional customer experience.',
      requirements: ['3+ years experience', 'Team management', 'Customer service', 'English proficiency'],
      benefits: ['Health insurance', 'Pension plan', 'Career development', 'Team events'],
      posted: '6 days ago',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 9,
      title: 'HR Specialist',
      company: 'PeopleFirst Solutions',
      location: 'Stockholm, Sweden',
      type: 'Full-time',
      category: 'Non-Tech',
      salary: '€45,000 - €60,000/year',
      description: 'Support HR operations and employee development in our growing organization.',
      requirements: ['3+ years HR experience', 'Recruitment skills', 'HR systems', 'English proficiency'],
      benefits: ['Health insurance', 'Flexible work', 'Professional development', 'Modern office'],
      posted: '2 weeks ago',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 10,
      title: 'Project Manager',
      company: 'EuroProjects Ltd',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Non-Tech',
      salary: '€55,000 - €75,000/year',
      description: 'Lead cross-functional teams and manage complex projects across European markets.',
      requirements: ['5+ years experience', 'PMP certification', 'Team leadership', 'English proficiency'],
      benefits: ['Health insurance', 'Flexible hours', 'Professional development', 'Performance bonus'],
      posted: '3 days ago',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },

    // Internship Positions
    {
      id: 11,
      title: 'Business Development Intern',
      company: 'StartupHub Europe',
      location: 'Berlin, Germany',
      type: 'Internship',
      category: 'Internship',
      salary: '€800 - €1,200/month',
      description: 'Gain hands-on experience in business development and startup ecosystem.',
      requirements: ['Business/Management degree', 'English proficiency', 'Motivated learner', 'EU work permit'],
      benefits: ['Mentorship program', 'Networking events', 'Certificate', 'Potential full-time offer'],
      posted: '1 week ago',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 12,
      title: 'Marketing Intern',
      company: 'Digital Marketing Pro',
      location: 'Amsterdam, Netherlands',
      type: 'Internship',
      category: 'Internship',
      salary: '€700 - €1,000/month',
      description: 'Learn digital marketing strategies and work on real client projects.',
      requirements: ['Marketing/Communication degree', 'Social media knowledge', 'Creative thinking', 'English proficiency'],
      benefits: ['Portfolio building', 'Industry training', 'Networking', 'Flexible schedule'],
      posted: '3 days ago',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 13,
      title: 'IT Intern',
      company: 'TechInnovate',
      location: 'Prague, Czech Republic',
      type: 'Internship',
      category: 'Internship',
      salary: '€600 - €900/month',
      description: 'Work with our development team on exciting tech projects and learn industry best practices.',
      requirements: ['Computer Science degree', 'Programming basics', 'Problem-solving', 'English proficiency'],
      benefits: ['Technical training', 'Code reviews', 'Project experience', 'Career guidance'],
      posted: '5 days ago',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 14,
      title: 'Finance Intern',
      company: 'EuroFinance Group',
      location: 'Vienna, Austria',
      type: 'Internship',
      category: 'Internship',
      salary: '€750 - €1,100/month',
      description: 'Assist with financial analysis and learn about European financial markets.',
      requirements: ['Finance/Economics degree', 'Excel proficiency', 'Analytical skills', 'English proficiency'],
      benefits: ['Financial training', 'Market insights', 'Professional network', 'Mentorship'],
      posted: '1 week ago',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ]

  const filteredPositions = positions.filter(position => {
    const matchesCategory = selectedCategory === 'All' || position.category === selectedCategory
    const matchesType = selectedType === 'All' || position.type === selectedType
    const matchesSearch = searchTerm === '' || 
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.location.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesType && matchesSearch
  })

  const categories = ['All', 'Tech', 'Non-Tech', 'Internship']
  const types = ['All', 'Full-time', 'Part-time', 'Internship', 'Contract']

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg shadow-blue-900/20 mb-8">
            <Briefcase className="h-4 w-4 mr-2 text-blue-300" />
            <span className="text-sm font-semibold text-blue-100 tracking-wide">Premium Career Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              European Career
            </span>
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Positions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto font-light leading-relaxed text-blue-100">
            Discover premium career opportunities across Europe. From cutting-edge tech positions to executive roles, 
            find your perfect match and elevate your professional journey.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg shadow-blue-900/20 group-hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">500+</div>
                <div className="text-sm opacity-90 font-medium">Premium Positions</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg shadow-blue-900/20 group-hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">50+</div>
                <div className="text-sm opacity-90 font-medium">European Cities</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg shadow-blue-900/20 group-hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">100+</div>
                <div className="text-sm opacity-90 font-medium">Top Companies</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg shadow-blue-900/20 group-hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">10K+</div>
                <div className="text-sm opacity-90 font-medium">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Find Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dream Position</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our advanced filters to discover the perfect career opportunity that matches your skills and aspirations
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
            {/* Search */}
            <div className="flex-1">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search positions, companies, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-lg shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-56">
              <div className="relative group">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type Filter */}
            <div className="lg:w-56">
              <div className="relative group">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 appearance-none cursor-pointer"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gray-50/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-50/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {filteredPositions.length} Premium Positions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {selectedCategory !== 'All' || selectedType !== 'All' ? 
                `Showing ${selectedCategory} ${selectedType !== 'All' ? `• ${selectedType}` : ''} positions` :
                'Discover your next career opportunity with our curated selection of premium positions'
              }
            </p>
          </div>

          {filteredPositions.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 shadow-lg shadow-gray-900/5 max-w-md mx-auto">
                <div className="text-gray-400 mb-6">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No positions found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters to find more opportunities</p>
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                    setSelectedType('All')
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPositions.map((position) => (
                <div key={position.id} className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg shadow-gray-900/5 border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={position.image}
                      alt={position.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border ${
                        position.category === 'Tech' ? 'bg-blue-500/90 text-white border-blue-400/50' :
                        position.category === 'Non-Tech' ? 'bg-emerald-500/90 text-white border-emerald-400/50' :
                        'bg-purple-500/90 text-white border-purple-400/50'
                      }`}>
                        {position.category}
                      </span>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border ${
                        position.type === 'Full-time' ? 'bg-green-500/90 text-white border-green-400/50' :
                        position.type === 'Part-time' ? 'bg-yellow-500/90 text-white border-yellow-400/50' :
                        position.type === 'Internship' ? 'bg-purple-500/90 text-white border-purple-400/50' :
                        'bg-gray-500/90 text-white border-gray-400/50'
                      }`}>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Building2 className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="font-medium">{position.company}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {position.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-500" />
                      <span className="font-medium">{position.location}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                      <Euro className="h-4 w-4 mr-2 text-green-500" />
                      <span className="font-bold text-green-600">{position.salary}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                      {position.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Posted {position.posted}</span>
                      </div>
                    </div>
                    
                    <Link 
                      href="/career-application"
                      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white py-4 rounded-2xl transition-all duration-300 font-semibold flex items-center justify-center hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 hover:shadow-lg hover:shadow-blue-500/25 group-hover:scale-105 transform"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg shadow-blue-900/20 mb-8">
            <Briefcase className="h-4 w-4 mr-2 text-blue-300" />
            <span className="text-sm font-semibold text-blue-100 tracking-wide">Ready to Transform Your Career?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Start Your European
            </span>
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto font-light leading-relaxed text-blue-100">
            Join thousands of successful professionals who have built their dream careers in Europe. 
            Our expert team provides personalized guidance every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/career-application"
              className="group inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-blue-900 transition-all duration-500 font-bold text-lg tracking-wide transform hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-900/30"
            >
              <Briefcase className="mr-3 h-6 w-6 group-hover:text-blue-600" />
              Apply for Premium Positions
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/contact"
              className="group inline-flex items-center bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-bold text-lg tracking-wide transform hover:-translate-y-1 hover:scale-105 active:scale-95 backdrop-blur-xl"
            >
              Get Expert Career Advice
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">98%</div>
                <div className="text-sm opacity-90 font-medium">Success Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm opacity-90 font-medium">Expert Support</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">15+</div>
                <div className="text-sm opacity-90 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
