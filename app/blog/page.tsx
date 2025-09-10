'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Search, Tag, TrendingUp, Globe, Users, BookOpen } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function BlogPage() {
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
      slug: 'student-visa-application-guide-indian-students',
      title: 'Step-by-Step Guide: How to Apply for Student Visa from India',
      excerpt: 'Complete visa application process with country-specific requirements, documents checklist, and expert tips for success.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Visa Guide',
      readTime: '8 min read',
      publishDate: 'January 8, 2025',
      featured: false,
      tags: ['Student Visa', 'Application Process', 'Documentation']
    },
    {
      id: 5,
      slug: 'best-scholarships-abroad-indian-students-2025',
      title: 'Best Scholarships Abroad for Indian Students in 2025',
      excerpt: 'Comprehensive list of scholarships, grants, and financial aid opportunities for Indian students studying abroad.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Scholarships',
      readTime: '12 min read',
      publishDate: 'January 5, 2025',
      featured: false,
      tags: ['Scholarships', 'Financial Aid', 'Funding']
    },
    {
      id: 6,
      slug: 'part-time-jobs-international-students-abroad',
      title: 'Work While You Study: Part-Time Job Opportunities Abroad for Indian Students',
      excerpt: 'Everything about part-time work opportunities, earning potential, legal requirements, and job types in different countries.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '10 min read',
      publishDate: 'January 3, 2025',
      featured: false,
      tags: ['Part-time Jobs', 'Student Work', 'Income']
    }
  ]

  const categories = [
    { name: 'Study Destinations', count: 15, icon: Globe },
    { name: 'Visa Guide', count: 12, icon: BookOpen },
    { name: 'Finance Guide', count: 8, icon: TrendingUp },
    { name: 'Career Guide', count: 10, icon: Users },
    { name: 'Scholarships', count: 6, icon: Tag }
  ]

  const popularTags = [
    'Study Abroad', 'Indian Students', 'Poland', 'Germany', 'Canada', 
    'Student Visa', 'Scholarships', 'Part-time Jobs', 'Cost Guide', 'Universities'
  ]

  // SEO optimization
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'Study Abroad Expert Blog | Ribriz Overseas'
    }
  }, [])

  return (
    <>
      <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
              <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Expert Insights</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Study Abroad
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Expert Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Get expert insights, practical guides, and latest updates on studying abroad. 
              Your trusted resource for international education success.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, guides, and tips..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm shadow-lg"
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
              {/* Featured Posts */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Articles</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.filter(post => post.featured).map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <article className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{post.publishDate}</span>
                            <Clock className="h-4 w-4 ml-4 mr-2" />
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
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
                            
                            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
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

              {/* All Posts */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Latest Articles</h2>
                
                <div className="space-y-8">
                  {allPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <article className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="md:flex">
                          <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          
                          <div className="md:w-2/3 p-8">
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mr-4">
                                {post.category}
                              </span>
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{post.publishDate}</span>
                              <Clock className="h-4 w-4 ml-4 mr-2" />
                              <span>{post.readTime}</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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
                              
                              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
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
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Contact CTA */}
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-4">Need Expert Guidance?</h3>
                    <p className="text-blue-100 mb-6 font-light">
                      Get personalized advice from our study abroad experts.
                    </p>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center bg-white text-blue-700 px-6 py-3 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => {
                      const IconComponent = category.icon
                      return (
                        <Link key={category.name} href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                          <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-blue-50 transition-colors duration-200 group">
                            <div className="flex items-center">
                              <IconComponent className="h-5 w-5 text-blue-600 mr-3" />
                              <span className="font-medium text-gray-700 group-hover:text-blue-600">
                                {category.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}>
                        <span className="text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-3 py-2 rounded-full transition-colors duration-200 cursor-pointer">
                          {tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-gray-600 mb-6 font-light">
                    Get the latest study abroad tips and opportunities delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
    </>
  )
}