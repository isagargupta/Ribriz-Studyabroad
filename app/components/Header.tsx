'use client'

import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SelectionModal from './SelectionModal'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-3xl border-b border-gray-200/60 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-fluid-sm">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Ribriz Overseas Logo"
                width={160}
                height={50}
                className="h-5 sm:h-6 md:h-8 lg:h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300 ease-out"
                priority
              />
              <div className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 relative group py-2 px-3"
            >
              <span className="relative">About</span>
              <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 relative group py-2 px-3"
            >
              <span className="relative">Blog</span>
              <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </Link>
            
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300 ease-out" />
            </button>
          </nav>

          <button
            className="nav-toggle md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobileMenu"
          >
            {isOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
            )}
          </button>
        </div>

        {isOpen && (
          <div 
            id="mobileMenu"
            className="nav-links md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-lg z-50"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col p-3 sm:p-4 space-y-1">
              <Link 
                href="/about" 
                className="text-left text-gray-600 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-left text-gray-600 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <div className="pt-3 border-t border-gray-100">
                <button 
                  onClick={() => {
                    setIsModalOpen(true)
                    setIsOpen(false)
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-4 rounded-xl font-semibold w-full transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[48px] text-base shadow-lg hover:shadow-xl"
                  aria-label="Start your journey"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="ml-3 h-4 w-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

export default Header