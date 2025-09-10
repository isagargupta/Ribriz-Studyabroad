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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Ribriz Overseas Logo"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('opportunities')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2"
            >
              Opportunities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-6 py-3 rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-500 font-semibold text-sm tracking-wide flex items-center transform hover:-translate-y-0.5"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col p-6 space-y-4">
              <button 
                onClick={() => scrollToSection('opportunities')} 
                className="text-left text-gray-700 hover:text-gray-900 font-medium py-3 transition-colors duration-200"
              >
                Opportunities
              </button>
              <Link 
                href="/about" 
                className="text-left text-gray-700 hover:text-gray-900 font-medium py-3 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-left text-gray-700 hover:text-gray-900 font-medium py-3 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-gray-700 hover:text-gray-900 font-medium py-3 transition-colors duration-200"
              >
                Contact
              </button>
              <Link 
                href="/blog" 
                className="text-left text-gray-700 hover:text-gray-900 font-medium py-3 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold w-fit"
                >
                  Start Your Journey
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