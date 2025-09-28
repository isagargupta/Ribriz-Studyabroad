import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react'

const MarqueeBlogs = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'top-10-countries-study-abroad-indian-students-2025',
      title: 'Top 10 Countries for Indian Students to Study Abroad in 2025',
      excerpt: 'Complete guide to the best study destinations for Indian students including costs, visa requirements, scholarships, and career opportunities.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Study Destinations',
      readTime: '12 min read',
      publishDate: 'January 15, 2025',
      trending: true
    },
    {
      id: 2,
      slug: 'poland-slovakia-study-abroad-guide-indian-students',
      title: 'Complete Guide to Poland & Slovakia Study Abroad',
      excerpt: 'Discover why Poland and Slovakia are becoming top choices for Indian students - low costs, quality education, and excellent career prospects.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Europe Study',
      readTime: '10 min read',
      publishDate: 'January 12, 2025',
      trending: false
    },
    {
      id: 3,
      slug: 'study-abroad-cost-breakdown-indian-students-2025',
      title: 'Cost of Studying Abroad for Indian Students in 2025',
      excerpt: 'Detailed cost analysis including tuition fees, living expenses, visa costs, and hidden expenses for popular study destinations.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Finance Guide',
      readTime: '15 min read',
      publishDate: 'January 10, 2025',
      trending: true
    },
    {
      id: 4,
      slug: 'student-visa-application-guide-indian-students',
      title: 'Step-by-Step Guide: How to Apply for Student Visa',
      excerpt: 'Complete visa application process with country-specific requirements, documents checklist, and expert tips for success.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Visa Guide',
      readTime: '8 min read',
      publishDate: 'January 8, 2025',
      trending: false
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
      trending: false
    },
    {
      id: 6,
      slug: 'part-time-jobs-international-students-abroad',
      title: 'Work While You Study: Part-Time Job Opportunities',
      excerpt: 'Everything about part-time work opportunities, earning potential, legal requirements, and job types in different countries.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Career Guide',
      readTime: '10 min read',
      publishDate: 'January 3, 2025',
      trending: true
    }
  ]

  // Duplicate the array to create seamless loop
  const duplicatedPosts = [...blogPosts, ...blogPosts]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-6 sm:mb-8">
            <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Latest Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Expert Study Abroad
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Blog Articles
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Stay updated with the latest trends, comprehensive guides, and expert insights for your international education journey.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-4 sm:space-x-6">
              {duplicatedPosts.map((post, index) => (
                <Link key={`${post.id}-${index}`} href={`/blog/${post.slug}`}>
                  <article className="group bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex-shrink-0 w-72 sm:w-80 relative">
                    {post.trending && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                        <div className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span className="hidden sm:inline">Trending</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={`${post.title} - Study abroad guide for Indian students`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 288px, 320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        <span className="truncate">{post.publishDate}</span>
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 ml-2 sm:ml-4 mr-1 sm:mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 font-light leading-relaxed text-xs sm:text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Expert Guide
                        </div>
                        
                        <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm">
                          <span className="mr-1 sm:mr-2">Read More</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight">Explore All Our Expert Guides</h3>
              <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto font-light text-sm sm:text-base px-4">
                Discover comprehensive guides, tips, and insights to make your study abroad journey successful.
              </p>
              <Link 
                href="/blog"
                className="inline-flex items-center bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 hover:shadow-xl transition-all duration-500 font-bold text-base sm:text-lg tracking-wide transform hover:-translate-y-1"
              >
                View All Articles
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default MarqueeBlogs
