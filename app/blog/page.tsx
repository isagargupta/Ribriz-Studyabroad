'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Search, Tag, TrendingUp, Globe, Users, BookOpen } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 7
  const featuredPosts = [
    {
      id: 1,
      slug: 'top-10-countries-study-abroad-indian-students-2025',
      title: 'Top 10 Countries for Indian Students to Study Abroad in 2025',
      excerpt: 'Complete guide to the best study destinations for Indian students including costs, visa requirements, scholarships, and career opportunities.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Study Destinations',
      readTime: '12 min read',
      publishDate: 'January 15, 2025',
      featured: true,
      tags: ['Study Abroad', 'Indian Students', '2025 Guide', 'Universities']
    },
    {
      id: 2,
      slug: 'poland-slovakia-study-abroad-guide-indian-students',
      title: 'Complete Guide to Poland & Slovakia Study Abroad: Affordable Options for Indian Students',
      excerpt: 'Discover why Poland and Slovakia are becoming top choices for Indian students - low costs, quality education, and excellent career prospects.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Europe Study',
      readTime: '10 min read',
      publishDate: 'January 12, 2025',
      featured: true,
      tags: ['Poland', 'Slovakia', 'Affordable Study', 'Central Europe']
    },
    {
      id: 3,
      slug: 'study-abroad-cost-breakdown-indian-students-2025',
      title: 'Cost of Studying Abroad for Indian Students in 2025: Country-Wise Breakdown',
      excerpt: 'Detailed cost analysis including tuition fees, living expenses, visa costs, and hidden expenses for popular study destinations.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Finance Guide',
      readTime: '15 min read',
      publishDate: 'January 10, 2025',
      featured: false,
      tags: ['Study Costs', 'Budget Planning', 'Financial Guide']
    }
  ]

  const allPosts = [
    ...featuredPosts,
    {
      id: 4,
      slug: 'study-abroad-in-uk-for-indian-students',
      title: 'Study Abroad in UK for Indian Students 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to study abroad in UK for Indian students. Top universities, costs, scholarships, visa process, and career opportunities.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Study Destinations',
      readTime: '15 min read',
      publishDate: 'January 20, 2025',
      featured: false,
      tags: ['Study Abroad', 'UK', 'Universities', 'Scholarships']
    },
    {
      id: 5,
      slug: 'study-abroad-in-canada-for-indian-students',
      title: 'Study Abroad in Canada for Indian Students 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to study abroad in Canada for Indian students. Top universities, costs, scholarships, visa process, and PR opportunities.',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Study Destinations',
      readTime: '15 min read',
      publishDate: 'January 18, 2025',
      featured: false,
      tags: ['Study Abroad', 'Canada', 'PR Opportunities', 'Universities']
    },
    {
      id: 6,
      slug: 'jobs-in-germany-for-indians',
      title: 'Jobs in Germany for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to jobs in Germany for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 16, 2025',
      featured: false,
      tags: ['Jobs', 'Germany', 'Work Permit', 'Career']
    },
    {
      id: 7,
      slug: 'it-jobs-netherlands-indians-2025',
      title: 'IT Jobs in Netherlands for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to IT jobs in Netherlands for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 15, 2025',
      featured: false,
      tags: ['IT Jobs', 'Netherlands', 'Work Permit', 'Tech Career']
    },
    {
      id: 8,
      slug: 'healthcare-jobs-germany-indians-2025',
      title: 'Healthcare Jobs in Germany for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to healthcare jobs in Germany for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 14, 2025',
      featured: false,
      tags: ['Healthcare Jobs', 'Germany', 'Work Permit', 'Medical Career']
    },
    {
      id: 9,
      slug: 'engineering-jobs-poland-indians-2025',
      title: 'Engineering Jobs in Poland for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to engineering jobs in Poland for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 13, 2025',
      featured: false,
      tags: ['Engineering Jobs', 'Poland', 'Work Permit', 'Technical Career']
    },
    {
      id: 10,
      slug: 'construction-jobs-germany-indians-2025',
      title: 'Construction Jobs in Germany for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to construction jobs in Germany for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 12, 2025',
      featured: false,
      tags: ['Construction Jobs', 'Germany', 'Work Permit', 'Skilled Work']
    },
    {
      id: 11,
      slug: 'hospitality-jobs-europe-indians-2025',
      title: 'Hospitality Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to hospitality jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 11, 2025',
      featured: false,
      tags: ['Hospitality Jobs', 'Europe', 'Work Permit', 'Service Industry']
    },
    {
      id: 12,
      slug: 'agriculture-jobs-europe-indians-2025',
      title: 'Agriculture Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to agriculture jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 10, 2025',
      featured: false,
      tags: ['Agriculture Jobs', 'Europe', 'Work Permit', 'Farming']
    },
    {
      id: 13,
      slug: 'warehouse-logistics-jobs-europe-indians-2025',
      title: 'Warehouse & Logistics Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to warehouse and logistics jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 9, 2025',
      featured: false,
      tags: ['Warehouse Jobs', 'Logistics', 'Europe', 'Work Permit']
    },
    {
      id: 14,
      slug: 'automotive-jobs-germany-indians-2025',
      title: 'Automotive Jobs in Germany for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to automotive jobs in Germany for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 8, 2025',
      featured: false,
      tags: ['Automotive Jobs', 'Germany', 'Work Permit', 'Manufacturing']
    },
    {
      id: 15,
      slug: 'retail-jobs-europe-indians-2025',
      title: 'Retail Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to retail jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 7, 2025',
      featured: false,
      tags: ['Retail Jobs', 'Europe', 'Work Permit', 'Sales']
    },
    {
      id: 16,
      slug: 'cleaning-jobs-europe-indians-2025',
      title: 'Cleaning Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to cleaning jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/4099237/pexels-photo-4099237.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 6, 2025',
      featured: false,
      tags: ['Cleaning Jobs', 'Europe', 'Work Permit', 'Service Work']
    },
    {
      id: 17,
      slug: 'security-jobs-europe-indians-2025',
      title: 'Security Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to security jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 5, 2025',
      featured: false,
      tags: ['Security Jobs', 'Europe', 'Work Permit', 'Protection Services']
    },
    {
      id: 18,
      slug: 'transportation-jobs-europe-indians-2025',
      title: 'Transportation Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to transportation jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 4, 2025',
      featured: false,
      tags: ['Transportation Jobs', 'Europe', 'Work Permit', 'Logistics']
    },
    {
      id: 19,
      slug: 'education-jobs-europe-indians-2025',
      title: 'Education Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to education jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 3, 2025',
      featured: false,
      tags: ['Education Jobs', 'Europe', 'Work Permit', 'Teaching']
    },
    {
      id: 20,
      slug: 'finance-jobs-europe-indians-2025',
      title: 'Finance Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to finance jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 2, 2025',
      featured: false,
      tags: ['Finance Jobs', 'Europe', 'Work Permit', 'Banking']
    },
    {
      id: 21,
      slug: 'legal-jobs-europe-indians-2025',
      title: 'Legal Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to legal jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'January 1, 2025',
      featured: false,
      tags: ['Legal Jobs', 'Europe', 'Work Permit', 'Law']
    },
    {
      id: 22,
      slug: 'consulting-jobs-europe-indians-2025',
      title: 'Consulting Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to consulting jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 31, 2024',
      featured: false,
      tags: ['Consulting Jobs', 'Europe', 'Work Permit', 'Business']
    },
    {
      id: 23,
      slug: 'real-estate-jobs-europe-indians-2025',
      title: 'Real Estate Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to real estate jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 30, 2024',
      featured: false,
      tags: ['Real Estate Jobs', 'Europe', 'Work Permit', 'Property']
    },
    {
      id: 24,
      slug: 'telecommunications-jobs-europe-indians-2025',
      title: 'Telecommunications Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to telecommunications jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 29, 2024',
      featured: false,
      tags: ['Telecommunications Jobs', 'Europe', 'Work Permit', 'Tech']
    },
    {
      id: 25,
      slug: 'energy-jobs-europe-indians-2025',
      title: 'Energy Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to energy jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 28, 2024',
      featured: false,
      tags: ['Energy Jobs', 'Europe', 'Work Permit', 'Power']
    },
    {
      id: 26,
      slug: 'aviation-jobs-europe-indians-2025',
      title: 'Aviation Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to aviation jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 27, 2024',
      featured: false,
      tags: ['Aviation Jobs', 'Europe', 'Work Permit', 'Airlines']
    },
    {
      id: 27,
      slug: 'maritime-jobs-europe-indians-2025',
      title: 'Maritime Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to maritime jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 26, 2024',
      featured: false,
      tags: ['Maritime Jobs', 'Europe', 'Work Permit', 'Shipping']
    },
    {
      id: 28,
      slug: 'space-aerospace-jobs-europe-indians-2025',
      title: 'Space & Aerospace Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to space and aerospace jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 25, 2024',
      featured: false,
      tags: ['Space Jobs', 'Aerospace Jobs', 'Europe', 'Work Permit']
    },
    {
      id: 29,
      slug: 'defense-military-jobs-europe-indians-2025',
      title: 'Defense & Military Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to defense and military jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 24, 2024',
      featured: false,
      tags: ['Defense Jobs', 'Military Jobs', 'Europe', 'Work Permit']
    },
    {
      id: 30,
      slug: 'entertainment-media-jobs-europe-indians-2025',
      title: 'Entertainment & Media Jobs in Europe for Indians 2025: Complete Guide & Opportunities',
      excerpt: 'Complete guide to entertainment and media jobs in Europe for Indians. Work permits, visa process, salary, living costs, and career opportunities.',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '12 min read',
      publishDate: 'December 23, 2024',
      featured: false,
      tags: ['Entertainment Jobs', 'Media Jobs', 'Europe', 'Work Permit']
    }
  ]

  const categories = [
    { name: 'Study Destinations', count: 3, icon: Globe },
    { name: 'Visa Guide', count: 1, icon: BookOpen },
    { name: 'Finance Guide', count: 1, icon: TrendingUp },
    { name: 'Career Guide', count: 25, icon: Users },
    { name: 'Scholarships', count: 1, icon: Tag }
  ]

  const popularTags = [
    'Study Abroad', 'Indian Students', 'Poland', 'Germany', 'Netherlands', 'Canada', 
    'Student Visa', 'Scholarships', 'IT Jobs', 'Healthcare Jobs', 'Engineering Jobs',
    'Construction Jobs', 'Hospitality Jobs', 'Agriculture Jobs', 'Work Permit', 'Europe'
  ]

  // Filter posts based on search, category, and tag
  const filteredPosts = useMemo(() => {
    let filtered = allPosts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag))
    }

    return filtered
  }, [searchTerm, selectedCategory, selectedTag, allPosts])

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedTag])

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedTag('')
    setCurrentPage(1)
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Study Abroad Expert Blog",
    "description": "Expert insights, guides, and tips for Indian students studying abroad. Latest updates on universities, scholarships, visas, and career opportunities.",
    "url": "https://ribriz.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Ribriz Overseas",
      "url": "https://ribriz.com"
    },
    "blogPost": featuredPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://ribriz.com/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "author": {
        "@type": "Organization",
        "name": "Ribriz Overseas"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ribriz Overseas"
      },
      "image": post.image,
      "keywords": post.tags.join(", ")
    }))
  }

  // SEO optimization
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'Study Abroad Expert Blog for Indian Students | Universities, Scholarships, Visa Guide | Ribriz Overseas'
      
      // Add structured data
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(blogSchema)
      document.head.appendChild(script)
    }
  }, [])

  return (
    <>
      <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gray-50/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-50/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
              <BookOpen className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">Expert Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="elegant-text">Study Abroad</span>
              <span className="text-blue-900 block">
                Expert Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Get expert insights, practical guides, and latest updates on studying abroad. 
              Your trusted resource for international education success.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, guides, and tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-300 transition-all duration-300 text-lg bg-white subtle-hover"
              />
              </div>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* All Posts */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight elegant-text">
                    {searchTerm || selectedCategory || selectedTag ? 'Search Results' : 'Latest Articles'}
                  </h2>
                  {(searchTerm || selectedCategory || selectedTag) && (
                    <button
                      onClick={clearFilters}
                      className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
                
                {/* Active Filters */}
                {(searchTerm || selectedCategory || selectedTag) && (
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {searchTerm && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          Search: "{searchTerm}"
                        </span>
                      )}
                      {selectedCategory && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          Category: {selectedCategory}
                        </span>
                      )}
                      {selectedTag && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          Tag: {selectedTag}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <Search className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                    <button
                      onClick={clearFilters}
                      className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
                    >
                      Clear all filters
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-6">
                      {currentPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <article className="group minimal-card rounded-2xl overflow-hidden subtle-hover refined-shadow">
                        <div className="md:flex">
                          <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mr-4">
                                {post.category}
                              </span>
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{post.publishDate}</span>
                              <Clock className="h-4 w-4 ml-4 mr-2" />
                              <span>{post.readTime}</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-6 font-light leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 3).map((tag) => (
                                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center text-gray-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                                <span className="mr-2">Read Article</span>
                                <ArrowRight className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                      ))}
                    </div>
                    
                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="mt-12 flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                          {/* Previous Button */}
                          <button
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                              currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            Previous
                          </button>
                          
                          {/* Page Numbers */}
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            // Show first page, last page, current page, and pages around current page
                            const shouldShow = 
                              page === 1 || 
                              page === totalPages || 
                              (page >= currentPage - 1 && page <= currentPage + 1)
                            
                            if (!shouldShow) {
                              // Show ellipsis for gaps
                              if (page === currentPage - 2 || page === currentPage + 2) {
                                return (
                                  <span key={page} className="px-2 text-gray-400">
                                    ...
                                  </span>
                                )
                              }
                              return null
                            }
                            
                            return (
                              <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                  currentPage === page
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                {page}
                              </button>
                            )
                          })}
                          
                          {/* Next Button */}
                          <button
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                              currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            Next
                          </button>
                        </div>
                        
                        {/* Page Info */}
                        <div className="ml-8 text-sm text-gray-600">
                          Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Contact CTA */}
                <div className="minimal-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 elegant-text">Need Expert Guidance?</h3>
                  <p className="text-gray-600 mb-6 font-light">
                    Get personalized advice from our study abroad experts.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 subtle-hover font-medium elegant-shadow"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Categories */}
                <div className="minimal-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 elegant-text">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => {
                      const IconComponent = category.icon
                      const isSelected = selectedCategory === category.name
                      return (
                        <div 
                          key={category.name} 
                          onClick={() => setSelectedCategory(isSelected ? '' : category.name)}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
                        >
                          <div className="flex items-center">
                            <IconComponent className={`h-5 w-5 mr-3 ${isSelected ? 'text-gray-600' : 'text-gray-400'}`} />
                            <span className={`font-medium group-hover:text-gray-900 ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                              {category.name}
                            </span>
                          </div>
                          <span className={`text-sm px-2 py-1 rounded-full ${isSelected ? 'text-gray-700 bg-gray-100' : 'text-gray-500 bg-gray-100'}`}>
                            {category.count}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="minimal-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 elegant-text">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => {
                      const isSelected = selectedTag === tag
                      return (
                        <span 
                          key={tag} 
                          onClick={() => setSelectedTag(isSelected ? '' : tag)}
                          className={`text-sm px-3 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                            isSelected 
                              ? 'bg-gray-100 text-gray-700' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                          }`}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="minimal-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 elegant-text">Stay Updated</h3>
                  <p className="text-gray-600 mb-6 font-light">
                    Get the latest study abroad tips and opportunities delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-300 transition-all duration-300 bg-white subtle-hover"
                    />
                    <button className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 subtle-hover font-medium elegant-shadow">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gray-50/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-50/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
              <TrendingUp className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">Featured Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="elegant-text">Must-Read</span>
              <span className="text-blue-900 block">
                Featured Articles
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Discover our most popular and comprehensive guides for studying abroad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.filter(post => post.featured).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group minimal-card rounded-2xl overflow-hidden subtle-hover refined-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.publishDate}</span>
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-gray-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2">Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
    </>
  )
}