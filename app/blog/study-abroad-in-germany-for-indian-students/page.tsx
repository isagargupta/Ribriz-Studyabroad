'use client'

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, GraduationCap, Euro, Clock, Users, CheckCircle, Star, TrendingUp, BookOpen } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppFloat from '../../components/WhatsAppFloat'

export default function StudyAbroadInGermanyForIndianStudents() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Study Abroad in Germany for Indian Students",
    "description": "Complete guide to studying in Germany for Indian students including universities, costs, scholarships, and application process",
    "provider": {
      "@type": "Organization",
      "name": "Ribriz Overseas",
      "sameAs": "https://ribriz.com"
    },
    "courseMode": "OnSite",
    "educationalLevel": "Bachelor, Master, PhD",
    "inLanguage": "English, German",
    "availableLanguage": ["English", "German"],
    "coursePrerequisites": "12th grade completion, English proficiency, valid passport",
    "syllabusSections": [
      {
        "@type": "Syllabus",
        "name": "University Selection",
        "description": "Choosing the right German university for your field of study"
      },
      {
        "@type": "Syllabus", 
        "name": "Application Process",
        "description": "Step-by-step application process for German universities"
      },
      {
        "@type": "Syllabus",
        "name": "Visa Application",
        "description": "Student visa application process for Indian students"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Germany good for Indian students to study abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Germany is excellent for Indian students. It offers world-class education, low tuition fees (many universities are free), English-taught programs, and excellent career opportunities after graduation."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to study in Germany for Indian students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Study costs in Germany are very affordable. Most public universities charge no tuition fees, only semester fees of €150-300. Living expenses are €800-1,200/month, making it one of the most cost-effective study destinations."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best universities in Germany for Indian students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top German universities for Indian students include Technical University of Munich, Ludwig Maximilian University Munich, Heidelberg University, RWTH Aachen University, and University of Stuttgart. All offer excellent programs in engineering, business, and sciences."
        }
      },
      {
        "@type": "Question",
        "name": "Can Indian students work while studying in Germany?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Indian students can work 120 full days or 240 half days per year while studying. After graduation, they get 18 months to find a job and can apply for a work permit or EU Blue Card."
        }
      }
    ]
  }

  const universities = [
    {
      name: "Technical University of Munich",
      ranking: "QS World #37",
      programs: ["Engineering", "Computer Science", "Business"],
      tuition: "Free",
      location: "Munich",
      acceptance: "15%"
    },
    {
      name: "Ludwig Maximilian University Munich",
      ranking: "QS World #59",
      programs: ["Medicine", "Law", "Natural Sciences"],
      tuition: "€150/semester",
      location: "Munich",
      acceptance: "20%"
    },
    {
      name: "Heidelberg University",
      ranking: "QS World #65",
      programs: ["Medicine", "Physics", "Chemistry"],
      tuition: "€150/semester",
      location: "Heidelberg",
      acceptance: "18%"
    },
    {
      name: "RWTH Aachen University",
      ranking: "QS World #165",
      programs: ["Engineering", "Computer Science", "Architecture"],
      tuition: "€300/semester",
      location: "Aachen",
      acceptance: "25%"
    }
  ]

  const scholarships = [
    {
      name: "DAAD Scholarship",
      amount: "€850-1,200/month",
      description: "German Academic Exchange Service scholarship for international students",
      eligibility: "Academic excellence, research potential"
    },
    {
      name: "Deutschlandstipendium",
      amount: "€300/month",
      description: "Merit-based scholarship for outstanding students",
      eligibility: "Academic achievement, social engagement"
    },
    {
      name: "Erasmus+ Scholarship",
      amount: "€1,000-1,500/month",
      description: "EU scholarship for international mobility",
      eligibility: "EU program participation"
    },
    {
      name: "University-specific Scholarships",
      amount: "€500-2,000/month",
      description: "Various scholarships offered by individual universities",
      eligibility: "Varies by university and program"
    }
  ]

  return (
    <>
      <Head>
        <title>Study Abroad in Germany for Indian Students 2025 | Free Universities, Scholarships | Ribriz Overseas</title>
        <meta name="description" content="Complete guide to studying in Germany for Indian students. Free universities, English-taught programs, scholarships, visa process. Low cost study abroad option." />
        <meta name="keywords" content="study abroad in Germany for Indian students, free universities in Germany, German universities for Indians, study in Germany cost, Germany student visa for Indians, English taught programs Germany, scholarships in Germany for Indians" />
        <link rel="canonical" href="https://ribriz.com/blog/study-abroad-in-germany-for-indian-students" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(courseSchema)
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
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                <GraduationCap className="h-4 w-4 mr-2" />
                Germany Study Guide
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Study Abroad in Germany for Indian Students 2025
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover why Germany is the top choice for Indian students seeking quality education abroad. 
                Free universities, English-taught programs, and excellent career prospects await you.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Why Germany */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Germany for Your Studies?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Germany has become the most popular destination for Indian students seeking international education. 
                  With world-class universities, minimal tuition fees, and excellent post-study work opportunities, 
                  Germany offers unmatched value for your educational investment.
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">€0</div>
                    <div className="text-sm text-gray-600">Tuition Fees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">€800</div>
                    <div className="text-sm text-gray-600">Monthly Living Cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">18 Months</div>
                    <div className="text-sm text-gray-600">Post-Study Work</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                    <div className="text-sm text-gray-600">English Programs</div>
                  </div>
                </div>
              </div>

              {/* Top Universities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Top German Universities for Indian Students</h2>
                <div className="grid gap-6">
                  {universities.map((university, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <Star className="h-4 w-4 mr-1 text-yellow-500" />
                            <span className="mr-4">{university.ranking}</span>
                            <span className="mr-4">📍 {university.location}</span>
                            <span>📊 {university.acceptance} acceptance rate</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600 mb-1">{university.tuition}</div>
                          <div className="text-sm text-gray-600">per semester</div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Popular Programs:</div>
                        <div className="flex flex-wrap gap-2">
                          {university.programs.map((program, programIndex) => (
                            <span key={programIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarships */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Scholarships for Indian Students in Germany</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">{scholarship.name}</h3>
                        <div className="text-green-600 font-semibold">{scholarship.amount}</div>
                      </div>
                      <p className="text-gray-600 mb-4">{scholarship.description}</p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-700 mb-1">Eligibility:</div>
                        <div className="text-gray-600">{scholarship.eligibility}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost of Studying in Germany for Indian Students</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">One-Time Costs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Student Visa</span>
                        <span className="font-semibold">€75</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Health Insurance</span>
                        <span className="font-semibold">€80-120/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Blocked Account</span>
                        <span className="font-semibold">€11,208</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Flight Tickets</span>
                        <span className="font-semibold">₹50,000-80,000</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Living Costs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Accommodation</span>
                        <span className="font-semibold">€300-600</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Food & Groceries</span>
                        <span className="font-semibold">€200-300</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transportation</span>
                        <span className="font-semibold">€50-100</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Miscellaneous</span>
                        <span className="font-semibold">€100-200</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 font-bold">
                        <span>Total Monthly</span>
                        <span className="text-green-600">€650-1,200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply for German Universities</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                    <h3 className="font-bold text-lg mb-2">Choose University & Program</h3>
                    <p className="text-gray-600 text-sm">Select your preferred university and study program</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                    <h3 className="font-bold text-lg mb-2">Prepare Documents</h3>
                    <p className="text-gray-600 text-sm">Gather academic transcripts, language certificates, and other required documents</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                    <h3 className="font-bold text-lg mb-2">Submit Application</h3>
                    <p className="text-gray-600 text-sm">Apply through uni-assist or directly to the university</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                    <h3 className="font-bold text-lg mb-2">Apply for Visa</h3>
                    <p className="text-gray-600 text-sm">Once accepted, apply for student visa at German embassy</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Study in Germany?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of Indian students who have successfully pursued their education in Germany
                </p>
                <Link 
                  href="/study-abroad-application"
                  className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg"
                >
                  Apply Now
                  <BookOpen className="ml-2 h-5 w-5" />
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
