'use client'

import React, { useState } from 'react'
import { ArrowRight, ChevronLeft, Star, Globe, GraduationCap, BookOpen, Award, Sparkles, TrendingUp, User, Mail, Phone, MapPin, CheckCircle, Calendar, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { trackEvent, trackConversion } from '../components/GoogleAnalytics'

export default function StudyAbroadForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    studyLevel: '',
    countries: [] as string[],
    intake: '',
    passport: '',
    currentEducation: '',
    englishExam: '',
    fullName: '',
    email: '',
    phone: '',
    location: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string | null}>({})

  const studyLevels = [
    { id: 'bachelor', label: "Bachelor's", description: 'Undergraduate programs' },
    { id: 'master', label: "Master's", description: 'Postgraduate programs' },
    { id: 'pg', label: 'PG Diploma', description: 'Postgraduate diplomas' },
    { id: 'phd', label: 'PhD', description: 'Doctoral programs' },
    { id: 'mba', label: 'MBA', description: 'Business administration' },
    { id: 'not-decided', label: 'Not decided', description: 'Need guidance' }
  ]

  const countries = [
    { id: 'usa', label: 'USA', flag: '🇺🇸' },
    { id: 'uk', label: 'UK', flag: '🇬🇧' },
    { id: 'germany', label: 'Germany', flag: '🇩🇪' },
    { id: 'australia', label: 'Australia', flag: '🇦🇺' },
    { id: 'newzealand', label: 'New Zealand', flag: '🇳🇿' },
    { id: 'eu', label: 'EU', flag: '🇪🇺' },
    { id: 'ireland', label: 'Ireland', flag: '🇮🇪' },
    { id: 'canada', label: 'Canada', flag: '🇨🇦' }
  ]

  const intakeOptions = [
    { id: 'jan2026', label: 'Jan 2026', recommended: true },
    { id: 'sep2026', label: 'Sep 2026' },
    { id: '2027', label: '2027 Intake' }
  ]

  const passportOptions = [
    { id: 'yes', label: 'Yes' },
    { id: 'applied', label: 'Applied' },
    { id: 'no', label: 'No' }
  ]

  const currentEducationOptions = [
    { id: '10th', label: '10th' },
    { id: '12th', label: '12th' },
    { id: 'bachelor', label: "Bachelor's" },
    { id: 'master', label: "Master's" },
    { id: 'mbbs', label: 'MBBS / MD' }
  ]

  const englishExamOptions = [
    { id: 'not-decided', label: 'Not decided' },
    { id: 'already-gave', label: 'Already gave exam' },
    { id: 'booked', label: 'Booked my exam' },
    { id: 'planning', label: 'Planning' }
  ]

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {}
    
    switch (step) {
      case 1:
        if (!formData.studyLevel) newErrors.studyLevel = 'Please select your study level'
        if (formData.countries.length === 0) newErrors.countries = 'Please select at least one country'
        if (!formData.intake) newErrors.intake = 'Please select your preferred intake'
        if (!formData.passport) newErrors.passport = 'Please select your passport status'
        break
      case 2:
        if (!formData.currentEducation) newErrors.currentEducation = 'Please select your education level'
        if (!formData.englishExam) newErrors.englishExam = 'Please select your English exam status'
        if (!formData.location) newErrors.location = 'Please select your current city'
        break
      case 3:
        if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name'
        if (!formData.email.trim()) newErrors.email = 'Please enter your email'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
        if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number'
        else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number'
        break
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCountrySelect = (countryId: string) => {
    setFormData(prev => ({
      ...prev,
      countries: prev.countries.includes(countryId)
        ? prev.countries.filter(id => id !== countryId)
        : [...prev.countries, countryId]
    }))
    // Clear country error when user makes selection
    if (errors.countries) {
      setErrors(prev => ({ ...prev, countries: null }))
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateStep(3)) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mnnbwdra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          countries: formData.countries.join(', '),
          formType: 'Study Abroad Application',
          submittedAt: new Date().toISOString()
        }),
      })

      if (response.ok) {
        // Track Google Analytics conversion
        trackConversion('AW-17410013108', 'STUDY_ABROAD_APPLICATION', 50000, 'INR')

        // Track Google Analytics event
        trackEvent('form_submit', {
          event_category: 'Study Abroad Application',
          event_label: 'Study Abroad Form',
          value: 50000,
          currency: 'INR'
        })

        setIsSubmitted(true)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Thank You Page Component
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-4">
                <Image
                  src="/logo.png"
                  alt="Ribriz Overseas Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              
              <Link 
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </header>

        {/* Thank You Content */}
        <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/25">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Thank You {formData.fullName.split(' ')[0]} for Submitting the Form!
            </h1>
            
            <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Our counsellor will connect with you within 24 hours to discuss your requirements.
            </p>
          </div>

          {/* Urgent Contact Options */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100/50 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Need an urgent reply? We recommend you to:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://calendly.com/ribriz-overseas"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 text-center"
              >
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 mb-2">Book a Meeting</h3>
                <p className="text-sm text-gray-600 mb-4">Schedule a consultation with our experts</p>
                <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                  Book Now →
                </div>
              </a>

              <a
                href="https://wa.me/918076823071?text=Hi! I just submitted the study abroad form and need urgent assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 text-center"
              >
                <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp Us</h3>
                <p className="text-sm text-gray-600 mb-4">Get instant support on WhatsApp</p>
                <div className="text-green-600 font-semibold text-sm group-hover:text-green-700">
                  +91 8076823071 →
                </div>
              </a>

              <a
                href="mailto:hello@ribriz.com?subject=Urgent: Study Abroad Inquiry&body=Hi, I just submitted the study abroad form and need urgent assistance. My name is [Your Name] and my phone number is [Your Phone]."
                className="group bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 text-center"
              >
                <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-sm text-gray-600 mb-4">Send us a detailed message</p>
                <div className="text-purple-600 font-semibold text-sm group-hover:text-purple-700">
                  hello@ribriz.com →
                </div>
              </a>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl font-bold mb-8 text-center">What will happen next:</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="font-bold text-xl mb-3">1. Understanding Requirements</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We will connect with you to understand your specific requirements, career goals, and preferences.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="font-bold text-xl mb-3">2. University Shortlisting</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We will shortlist suitable universities and programs based on your academic profile and preferences.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="font-bold text-xl mb-3">3. Complete Assistance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We will assist you with admissions, visa applications, IELTS preparation, and any other requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              In the meantime, feel free to explore our other services or connect with us on social media.
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-500 font-semibold text-lg tracking-wide transform hover:-translate-y-1"
            >
              Explore Our Services
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Ribriz Overseas Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <Link 
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Form Title and Progress */}
          <div className="lg:sticky lg:top-8">
            <div className="mb-8">
              <div className="flex space-x-2 mb-6">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      step <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Start your study<br />abroad journey
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 font-light">
                25K+ aspirants got their dream admit this year. Expert guidance for study abroad and international job placements.
              </p>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-800">4.7/5 Trustpilot</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-800">4.6/5 Google</span>
                </div>
              </div>
            </div>

            {/* Step indicators */}
            <div className="space-y-4">
              <div className={`flex items-center p-4 rounded-2xl transition-all duration-300 ${
                currentStep >= 1 ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 border-2 border-gray-200'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  1
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Study Preferences</div>
                  <div className="text-sm text-gray-600">Choose your destination and program</div>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-2xl transition-all duration-300 ${
                currentStep >= 2 ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 border-2 border-gray-200'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  2
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Education Background</div>
                  <div className="text-sm text-gray-600">Tell us about your academic journey</div>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-2xl transition-all duration-300 ${
                currentStep >= 3 ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 border-2 border-gray-200'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  3
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Personal Information</div>
                  <div className="text-sm text-gray-600">Contact details for follow-up</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Content */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 p-8 border border-gray-100/50">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Study Preferences */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose your dream country</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {countries.map((country) => (
                        <button
                          key={country.id}
                          type="button"
                          onClick={() => handleCountrySelect(country.id)}
                          className={`flex items-center p-4 rounded-2xl border-2 transition-all duration-200 ${
                            formData.countries.includes(country.id)
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <span className="text-2xl mr-3">{country.flag}</span>
                          <span className="font-medium text-gray-900">{country.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.countries && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.countries}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">What's your preferred intake?</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {intakeOptions.map((intake) => (
                        <button
                          key={intake.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, intake: intake.id }))}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 relative ${
                            formData.intake === intake.id
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <span className="font-medium text-gray-900">{intake.label}</span>
                          {intake.recommended && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              Recommended
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    {errors.intake && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.intake}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">What do you wish to pursue?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {studyLevels.map((level) => (
                        <button
                          key={level.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, studyLevel: level.id }))}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                            formData.studyLevel === level.id
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <div className="font-medium text-gray-900">{level.label}</div>
                          <div className="text-sm text-gray-600 mt-1">{level.description}</div>
                        </button>
                      ))}
                    </div>
                    {errors.studyLevel && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.studyLevel}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Do you have a valid Passport?</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {passportOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, passport: option.id }))}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                            formData.passport === option.id
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <span className="font-medium text-gray-900">{option.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.passport && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.passport}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Education Background */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">What's your highest level of education?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {currentEducationOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, currentEducation: option.id }))}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                            formData.currentEducation === option.id
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <span className="font-medium text-gray-900">{option.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.currentEducation && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.currentEducation}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">What is your English language exam status?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {englishExamOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, englishExam: option.id }))}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                            formData.englishExam === option.id
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <span className="font-medium text-gray-900">{option.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.englishExam && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.englishExam}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Select your current city</h3>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      className={`w-full p-4 border-2 rounded-2xl focus:outline-none transition-colors ${
                        errors.location 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                    >
                      <option value="">Eg. Delhi</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Pune">Pune</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Noida">Noida</option>
                      <option value="Surat">Surat</option>
                      <option value="Vadodara">Vadodara</option>
                      <option value="Vijayawada">Vijayawada</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Warangal">Warangal</option>
                      <option value="Zirakpur">Zirakpur</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Personal Information */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your full name</h3>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-colors ${
                          errors.fullName 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                        required
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your email</h3>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-colors ${
                          errors.email 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your phone number</h3>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-colors ${
                          errors.phone 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                        required
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-4 h-4 mr-1">⚠️</span>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-12 flex gap-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center px-6 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold"
                  >
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    Back
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center"
                  >
                    Next
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
