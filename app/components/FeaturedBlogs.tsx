import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react'

const FeaturedBlogs = () => {
  const featuredPosts = [
    {
      id: 1,
      slug: 'top-10-countries-study-abroad-indian-students-2025',
      title: 'Top 10 Countries for Indian Students to Study Abroad in 2025',
      excerpt: 'Discover the best study destinations for Indian students with comprehensive analysis of costs, visa requirements, scholarships, and career opportunities in 2025.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Study Destinations',
      readTime: '12 min read',
      publishDate: 'January 15, 2025',
      featured: true,
      trending: true
    },
    {
      id: 2,
      slug: 'poland-slovakia-study-abroad-guide-indian-students',
      title: 'Complete Guide to Poland & Slovakia: Affordable Study Options',
      excerpt: 'Explore why Poland and Slovakia are becoming top choices for Indian students seeking quality European education at affordable costs with excellent career prospects.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Europe Study',
      readTime: '10 min read',
      publishDate: 'January 12, 2025',
      featured: true,
      trending: false
    },
    {
      id: 3,
      slug: 'study-abroad-cost-breakdown-indian-students-2025',
      title: 'Study Abroad Cost Breakdown: Complete Financial Guide 2025',
      excerpt: 'Detailed cost analysis including tuition fees, living expenses, visa costs, and hidden expenses for popular study destinations with budgeting tips.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      category: 'Finance Guide',
      readTime: '15 min read',
      publishDate: 'January 10, 2025',
      featured: true,
      trending: true
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
            <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Expert Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Latest Study Abroad
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Expert Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Stay updated with the latest trends, tips, and comprehensive guides for your international education journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className={`group bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                {post.trending && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </div>
                  </div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${post.title} - Study abroad guide for Indian students`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
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
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Expert Guide
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Explore All Our Expert Guides</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto font-light">
                Discover comprehensive guides, tips, and insights to make your study abroad journey successful.
              </p>
              <Link 
                href="/blog"
                className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-2xl hover:bg-gray-50 hover:shadow-xl transition-all duration-500 font-bold text-lg tracking-wide transform hover:-translate-y-1"
              >
                View All Articles
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlogs