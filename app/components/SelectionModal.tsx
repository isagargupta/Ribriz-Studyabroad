
'use client'

import React, { useState, useEffect } from 'react'
import { X, GraduationCap, Briefcase, Clock, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SelectionModalProps {
  isOpen: boolean
  onClose: () => void
  initialOption?: 'study' | 'job' | null
  autoStart?: boolean
}

const SelectionModal: React.FC<SelectionModalProps> = ({ isOpen, onClose, initialOption = null, autoStart = false }) => {
  const [showCountdown, setShowCountdown] = useState(false)
  const [selectedOption, setSelectedOption] = useState<'study' | 'job' | null>(null)
  const [countdown, setCountdown] = useState(0)
  const router = useRouter()

  // // Auto-select and start countdown when opened if requested
  // useEffect(() => {
  //   if (isOpen && autoStart && initialOption) {
  //     setSelectedOption(initialOption)
  //     setShowCountdown(true)
  //     setCountdown(5)
  //   }
  // }, [isOpen, autoStart, initialOption])



  

  //// Selected Option ends

  useEffect(() => {
    if (showCountdown && selectedOption) {
      setCountdown(5)
      const interval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(interval)
            handleRedirect()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      
      return () => {
        if (interval) clearInterval(interval)
      }
    }
  }, [showCountdown, selectedOption])

  const handleRedirect = () => {
    if (selectedOption === 'study') {
      router.push('/study-abroad-application')
    } else if (selectedOption === 'job') {
      router.push('/career-application')
    }
    onClose()
    resetModal()
  }

  const handleOptionSelect = (option: 'study' | 'job') => {
    setSelectedOption(option)
    setShowCountdown(true)
    setCountdown(5)
  }

  const resetModal = () => {
    setShowCountdown(false)
    setSelectedOption(null)
    setCountdown(0)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  const handleBack = () => {
    setShowCountdown(false)
    setSelectedOption(null)
    setCountdown(0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 p-8 max-w-2xl w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
        >
          <X className="h-6 w-6" />
        </button>

        {!showCountdown ? (
          /* Initial Selection Screen */
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-light">
              Which international opportunity interests you most?
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Study Abroad Option */}
              <button
                onClick={() => handleOptionSelect('study')}
                className="group bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Study Abroad</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Pursue your education at top international universities with expert guidance and support.
                  </p>
                  
                  <div className="flex items-center justify-center text-purple-600 font-semibold group-hover:text-purple-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </button>

              {/* Job Abroad Option */}
              <button
                onClick={() => handleOptionSelect('job')}
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Briefcase className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Job Abroad</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Launch your international career with verified job opportunities and premium placement support.
                  </p>
                  
                  <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* Countdown Screen */
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/25">
              {selectedOption === 'study' ? (
                <GraduationCap className="w-12 h-12 text-white" />
              ) : (
                <Briefcase className="w-12 h-12 text-white" />
              )}
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              {selectedOption === 'study' ? 'Study Abroad' : 'Job Abroad'} Selected
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 font-light">
              Redirecting you to the {selectedOption === 'study' ? 'study abroad' : 'career application'} form...
            </p>

            {/* Countdown Display */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 mb-8">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-3xl font-bold text-blue-800">
                  {countdown}
                </span>
                <span className="text-lg font-semibold text-blue-600 ml-2">
                  second{countdown !== 1 ? 's' : ''}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-blue-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${((5 - countdown) / 5) * 100}%` }}
                ></div>
              </div>
              
              <p className="text-sm text-blue-600 font-medium">
                Preparing your {selectedOption === 'study' ? 'study abroad' : 'career application'} form...
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRedirect}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
              >
                Go Now
              </button>
              
              <button
                onClick={handleBack}
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold text-lg"
              >
                Change Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectionModal