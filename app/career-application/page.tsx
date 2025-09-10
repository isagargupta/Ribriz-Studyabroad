'use client'

import React, { useState, useRef } from 'react'
import { ArrowRight, ChevronLeft, Upload, X, CheckCircle, Globe, Briefcase, User, Mail, Phone, FileText, Clock } from 'lucide-react'
import Link from 'next/link'

// Types
type UploadKind = 'cv' | 'coverLetter';
type FileKey = 'cvFile' | 'coverLetterFile';
type FormFieldKey = 'country' | 'jobCategory' | 'fullName' | 'email' | 'phone' | FileKey;
type FormErrors = Record<FormFieldKey, string | null>;
type UploadProgress = Record<UploadKind, number>;

const keyFromKind = (kind: UploadKind): FileKey =>
  kind === 'cv' ? 'cvFile' : 'coverLetterFile';

export default function CareerApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({
    cv: 0,
    coverLetter: 0,
  })
  const [formData, setFormData] = useState({
    country: '',
    jobCategory: '',
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    cvFile: null as File | null,
    coverLetterFile: null as File | null
  })
  const [errors, setErrors] = useState<FormErrors>({
    country: null,
    jobCategory: null,
    fullName: null,
    email: null,
    phone: null,
    cvFile: null,
    coverLetterFile: null,
  })
  const [fileErrors, setFileErrors] = useState({ cv: '', coverLetter: '' })

  const cvInputRef = useRef<HTMLInputElement>(null)
  const coverLetterInputRef = useRef<HTMLInputElement>(null)

  const countries = [
    { value: '', label: 'Select your preferred country' },
    { value: 'poland', label: '🇵🇱 Poland EU (Most Popular)', featured: true },
    { value: 'germany', label: '🇩🇪 Germany' },
    { value: 'netherlands', label: '🇳🇱 Netherlands' },
    { value: 'czech-republic', label: '🇨🇿 Czech Republic' },
    { value: 'lithuania', label: '🇱🇹 Lithuania' },
    { value: 'slovakia', label: '🇸🇰 Slovakia' },
    { value: 'hungary', label: '🇭🇺 Hungary' },
    { value: 'other-eu', label: '🇪🇺 Other EU Country' }
  ]

  const jobCategories = [
    { value: '', label: 'Select job category' },
    { value: 'developer-jobs', label: '💻 Developer Jobs', popular: true },
    { value: 'marketing', label: '📈 Marketing & Digital Marketing' },
    { value: 'sales', label: '💼 Sales & Business Development' },
    { value: 'engineering', label: '⚙️ Engineering & Technical' },
    { value: 'finance', label: '💰 Finance & Accounting' },
    { value: 'hr', label: '👥 Human Resources' },
    { value: 'customer-service', label: '🎧 Customer Service & Support' },
    { value: 'logistics', label: '🚚 Logistics & Supply Chain' },
    { value: 'healthcare', label: '🏥 Healthcare & Medical' },
    { value: 'education', label: '🎓 Education & Training' },
    { value: 'hospitality', label: '🏨 Hospitality & Tourism' },
    { value: 'other', label: '🔧 Other' }
  ]

  const countryCodes = [
    { code: '+91', country: '🇮🇳 India' },
    { code: '+1', country: '🇺🇸 USA' },
    { code: '+44', country: '🇬🇧 UK' },
    { code: '+49', country: '🇩🇪 Germany' },
    { code: '+48', country: '🇵🇱 Poland' },
    { code: '+31', country: '🇳🇱 Netherlands' }
  ]

  const validateStep = (step: number) => {
    const newErrors: any = {}
    
    switch (step) {
      case 1:
        if (!formData.country) newErrors.country = 'Please select your preferred country'
        if (!formData.jobCategory) newErrors.jobCategory = 'Please select a job category'
        break
      case 2:
        if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name'
        if (!formData.email.trim()) newErrors.email = 'Please enter your email address'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
        if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number'
        else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Please enter a valid phone number'
        if (!formData.cvFile) newErrors.cvFile = 'Please upload your CV/Resume'
        if (!formData.coverLetterFile) newErrors.coverLetterFile = 'Please upload your cover letter'
        break
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateFile = (file: File, type: UploadKind) => {
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

    if (file.size > maxSize) {
      setFileErrors(prev => ({ ...prev, [type]: 'File size must be less than 5MB' }))
      return false
    }

    if (!allowedTypes.includes(file.type)) {
      setFileErrors(prev => ({ ...prev, [type]: 'Please upload PDF, DOC, or DOCX files only' }))
      return false
    }

    setFileErrors(prev => ({ ...prev, [type]: '' }))
    return true
  }

  const handleFileUpload = (file: File, type: UploadKind) => {
    if (!validateFile(file, type)) return

    // Simulate upload progress
    setUploadProgress(prev => ({ ...prev, [type]: 0 }))
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev[type] + 10
        if (newProgress >= 100) {
          clearInterval(interval)
          const fileKey = keyFromKind(type)
          setFormData(prevData => ({ 
            ...prevData, 
            [fileKey]: file 
          }))
          // Clear file error when upload is successful
          if (errors[fileKey]) {
            setErrors(prev => ({ ...prev, [fileKey]: null }))
          }
          return { ...prev, [type]: 100 }
        }
        return { ...prev, [type]: newProgress }
      })
    }, 100)
  }

  const removeFile = (type: UploadKind) => {
    const fileKey = keyFromKind(type)
    setFormData(prev => ({ 
      ...prev, 
      [fileKey]: null 
    }))
    setUploadProgress(prev => ({ ...prev, [type]: 0 }))
    setFileErrors(prev => ({ ...prev, [type]: '' }))
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
    
    if (!validateStep(2)) return
    
    setIsSubmitting(true)
    
    try {
      // Create FormData for file uploads to Formspree
      const submitData = new FormData()
      
      // Add form fields
      submitData.append('_subject', 'New Career Application - Job Placement')
      submitData.append('country', formData.country)
      submitData.append('jobCategory', formData.jobCategory)
      submitData.append('fullName', formData.fullName)
      submitData.append('email', formData.email)
      submitData.append('phone', `${formData.countryCode} ${formData.phone}`)
      submitData.append('formType', 'Career Application - Job Placement')
      submitData.append('submittedAt', new Date().toISOString())
      
      // Add files with proper field names
      if (formData.cvFile) {
        submitData.append('cv', formData.cvFile, formData.cvFile.name)
      }
      if (formData.coverLetterFile) {
        submitData.append('coverLetter', formData.coverLetterFile, formData.coverLetterFile.name)
      }

      const response = await fetch('https://formspree.io/f/xldwzndg', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setCurrentStep(3)
        setIsSubmitted(true)
        
        // Start countdown
        const countdownInterval = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(countdownInterval)
              window.location.href = 'https://ribriz.pl'
              return 0
            }
            return prev - 1
          })
        }, 1000)
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error('Form submission failed:', errorData)
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your application. Please try again or contact us directly at hello@ribriz.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Job Preferences'
      case 2: return 'Personal Information'
      case 3: return 'Application Complete'
      default: return ''
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-sm"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Ribriz Overseas
                </h1>
                <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Global Excellence</p>
              </div>
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
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-gray-900">Career Application</h2>
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of 3 {currentStep === 3 && '- Complete'}
            </span>
          </div>
          
          <div className="flex space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                  step <= currentStep 
                    ? step === 3 && currentStep === 3
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">{getStepTitle()}</h3>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 p-8 border border-gray-100/50">
          {/* Step 1: Job Preferences */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your career goals</h3>
                <p className="text-gray-600">Help us find the perfect opportunity for you</p>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Where would you like to work? <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, country: e.target.value }))
                    if (errors.country) setErrors(prev => ({ ...prev, country: null }))
                  }}
                  className={`w-full p-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 text-lg ${
                    errors.country 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500 focus:scale-105'
                  }`}
                >
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
                {formData.country === 'poland' && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                    <div className="flex items-center text-blue-700">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Excellent choice! Poland offers great opportunities for international professionals.</span>
                    </div>
                  </div>
                )}
                {errors.country && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠️</span>
                    {errors.country}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  What type of job are you looking for? <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.jobCategory}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, jobCategory: e.target.value }))
                    if (errors.jobCategory) setErrors(prev => ({ ...prev, jobCategory: null }))
                  }}
                  className={`w-full p-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 text-lg ${
                    errors.jobCategory 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500 focus:scale-105'
                  }`}
                >
                  {jobCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {formData.jobCategory === 'developer-jobs' && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                    <div className="flex items-center text-emerald-700">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-semibold">High demand! Developer positions are very popular in EU markets.</span>
                    </div>
                  </div>
                )}
                {errors.jobCategory && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠️</span>
                    {errors.jobCategory}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-8">
                <User className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-600">We need these details to process your application</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, fullName: e.target.value }))
                        if (errors.fullName) setErrors(prev => ({ ...prev, fullName: null }))
                      }}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 text-lg ${
                        errors.fullName 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500 focus:scale-105'
                      }`}
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
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, email: e.target.value }))
                        if (errors.email) setErrors(prev => ({ ...prev, email: null }))
                      }}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 text-lg ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500 focus:scale-105'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-4 h-4 mr-1">⚠️</span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData(prev => ({ ...prev, countryCode: e.target.value }))}
                    className="p-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-lg"
                  >
                    {countryCodes.map((cc) => (
                      <option key={cc.code} value={cc.code}>
                        {cc.code} {cc.country}
                      </option>
                    ))}
                  </select>
                  <div className="relative flex-1">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, phone: e.target.value }))
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: null }))
                      }}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 text-lg ${
                        errors.phone 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500 focus:scale-105'
                      }`}
                    />
                  </div>
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-4 h-4 mr-1">⚠️</span>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* File Uploads */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* CV Upload */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    CV/Resume <span className="text-red-500">*</span>
                  </label>
                  <div className={`border-2 border-dashed rounded-2xl p-6 transition-all duration-300 ${
                    errors.cvFile ? 'border-red-300' : 'border-gray-300 hover:border-blue-400'
                  }`}>
                    {!formData.cvFile ? (
                      <div className="text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">Upload your CV/Resume</p>
                        <p className="text-sm text-gray-500 mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                        <input
                          ref={cvInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) handleFileUpload(file, 'cv')
                          }}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => cvInputRef.current?.click()}
                          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold"
                        >
                          Choose File
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-8 h-8 text-blue-600" />
                            <div>
                              <p className="font-semibold text-gray-900">{formData.cvFile.name}</p>
                              <p className="text-sm text-gray-500">{(formData.cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile('cv')}
                            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        {uploadProgress.cv < 100 && (
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress.cv}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {fileErrors.cv && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-4 h-4 mr-1">⚠️</span>
                      {fileErrors.cv}
                    </p>
                  )}
                  {errors.cvFile && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-4 h-4 mr-1">⚠️</span>
                      {errors.cvFile}
                    </p>
                  )}
                </div>

                {/* Cover Letter Upload */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Cover Letter <span className="text-red-500">*</span>
                  </label>
                  <div className={`border-2 border-dashed rounded-2xl p-6 transition-all duration-300 ${
                    errors.coverLetterFile ? 'border-red-300' : 'border-gray-300 hover:border-blue-400'
                  }`}>
                    {!formData.coverLetterFile ? (
                      <div className="text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">Upload your Cover Letter</p>
                        <p className="text-sm text-gray-500 mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                        <input
                          ref={coverLetterInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) handleFileUpload(file, 'coverLetter')
                          }}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => coverLetterInputRef.current?.click()}
                          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold"
                        >
                          Choose File
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-8 h-8 text-blue-600" />
                            <div>
                              <p className="font-semibold text-gray-900">{formData.coverLetterFile.name}</p>
                              <p className="text-sm text-gray-500">{(formData.coverLetterFile.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile('coverLetter')}
                            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        {uploadProgress.coverLetter < 100 && (
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress.coverLetter}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {fileErrors.coverLetter && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-4 h-4 mr-1">⚠️</span>
                      {fileErrors.coverLetter}
                    </p>
                  )}
                  {errors.coverLetterFile && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-4 h-4 mr-1">⚠️</span>
                      {errors.coverLetterFile}
                    </p>
                  )}
                </div>
              </div>
            </form>
          )}

          {/* Step 3: Thank You Page */}
          {currentStep === 3 && (
            <div className="text-center space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/25">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Thank you {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Our career counsellor will follow up with you shortly.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <span className="text-lg font-semibold text-blue-800">
                    Redirecting to ribriz.pl in {countdown} seconds...
                  </span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${((5 - countdown) / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="bg-white/50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What's Next?</h4>
                  <p>Our team will review your application and contact you within 24-48 hours.</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Application Status</h4>
                  <p>You'll receive email updates about your application progress.</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Questions?</h4>
                  <p>Contact us at hello@ribriz.com or +91 8076823071</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep < 3 && (
            <div className="mt-12 flex gap-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold text-lg hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
              )}
              
              {currentStep === 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center hover:scale-105 active:scale-95 group"
                >
                  Next Step
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e)}
                  disabled={isSubmitting}
                  className={`flex-1 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl hover:scale-105 active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 border-t-transparent"></div>
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}