'use client'

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, MapPin, Clock, Euro, Users, CheckCircle, Star, TrendingUp } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppFloat from '../../components/WhatsAppFloat'

export default function JobsInPolandForIndians() {
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Jobs in Poland for Indians - Software Developer, Marketing, Sales Positions",
    "description": "Apply for verified job opportunities in Poland for Indian professionals. Software development, marketing, sales, engineering jobs with work permit assistance.",
    "datePosted": new Date().toISOString(),
    "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    "employmentType": ["FULL_TIME", "PART_TIME"],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Ribriz Overseas",
      "sameAs": "https://ribriz.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PL",
        "addressLocality": "Poland"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 35000,
        "maxValue": 80000,
        "unitText": "YEAR"
      }
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of jobs are available in Poland for Indians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Poland offers diverse job opportunities for Indians including software development, marketing, sales, engineering, finance, HR, customer service, logistics, healthcare, education, and hospitality roles. Both skilled and unskilled positions are available."
        }
      },
      {
        "@type": "Question",
        "name": "What is the salary range for jobs in Poland for Indians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Salary ranges in Poland for Indians typically range from €35,000-65,000 annually for skilled positions. Software developers can earn €45,000-80,000, while marketing and sales roles offer €35,000-55,000."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a work permit to work in Poland as an Indian?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Indian citizens need work permits to work in Poland. We assist with the work permit application process and connect you with employers who sponsor work permits for qualified candidates."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the job application process take for Poland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The application process typically takes 2-4 weeks for initial screening, followed by 4-8 weeks for work permit processing. Total timeline is usually 2-3 months from application to job start."
        }
      }
    ]
  }

  const jobCategories = [
    {
      title: "Software Developer Jobs in Poland",
      salary: "€45,000 - €80,000",
      description: "High-demand positions for Indian developers in Poland's growing tech sector",
      skills: ["JavaScript", "Python", "Java", "React", "Node.js"],
      companies: 150
    },
    {
      title: "Marketing Jobs in Poland",
      salary: "€35,000 - €55,000",
      description: "Digital marketing and brand management opportunities for Indian professionals",
      skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
      companies: 80
    },
    {
      title: "Sales Jobs in Poland",
      salary: "€40,000 - €65,000",
      description: "Business development and sales roles in Poland's expanding market",
      skills: ["B2B Sales", "CRM", "Negotiation", "Communication"],
      companies: 120
    },
    {
      title: "Engineering Jobs in Poland",
      salary: "€42,000 - €70,000",
      description: "Technical engineering positions across various industries",
      skills: ["Mechanical", "Electrical", "Civil", "Software"],
      companies: 90
    }
  ]

  return (
    <>
      <Head>
        <title>Jobs in Poland for Indians 2025 | Software Developer, Marketing, Sales | Work Permit | Ribriz Overseas</title>
        <meta name="description" content="Apply for verified jobs in Poland for Indians. Software developer, marketing, sales, engineering positions with €35,000-80,000 salary. Work permit assistance included." />
        <meta name="keywords" content="jobs in Poland for Indians, software developer jobs Poland, marketing jobs Poland, sales jobs Poland, work permit Poland, jobs in Europe for Indians, Poland work visa for Indians" />
        <link rel="canonical" href="https://ribriz.com/blog/jobs-in-poland-for-indians" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Poland Job Market
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Jobs in Poland for Indians 2025
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete guide to finding and applying for jobs in Poland as an Indian professional. 
                Discover high-paying opportunities in tech, marketing, sales, and engineering sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Poland for Your Career?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Poland has emerged as one of the most attractive destinations for Indian professionals seeking international career opportunities. 
                  With its growing economy, English-friendly work environment, and competitive salaries, Poland offers excellent prospects for career growth.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">€35K-80K</div>
                    <div className="text-sm text-gray-600">Average Salary Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2-3 Months</div>
                    <div className="text-sm text-gray-600">Work Permit Process</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                    <div className="text-sm text-gray-600">English Speaking</div>
                  </div>
                </div>
              </div>

              {/* Job Categories */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Job Categories in Poland for Indians</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {jobCategories.map((job, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <div className="flex items-center text-green-600">
                          <Euro className="h-4 w-4 mr-1" />
                          <span className="font-semibold">{job.salary}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{job.companies}+ companies hiring</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply for Jobs in Poland</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                    <h3 className="font-bold text-lg mb-2">Profile Assessment</h3>
                    <p className="text-gray-600 text-sm">We evaluate your skills and match you with suitable opportunities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                    <h3 className="font-bold text-lg mb-2">Application Submission</h3>
                    <p className="text-gray-600 text-sm">Submit your CV and cover letter through our platform</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                    <h3 className="font-bold text-lg mb-2">Interview Process</h3>
                    <p className="text-gray-600 text-sm">Participate in interviews with potential employers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                    <h3 className="font-bold text-lg mb-2">Work Permit & Visa</h3>
                    <p className="text-gray-600 text-sm">We assist with work permit and visa processing</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career in Poland?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of Indian professionals who have successfully built their careers in Poland
                </p>
                <Link 
                  href="/career-application"
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg"
                >
                  Apply Now
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
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
