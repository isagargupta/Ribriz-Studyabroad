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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-100/50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Ribriz Overseas Logo"
                width={160}
                height={50}
                className="h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300 ease-out"
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
              className="group bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium text-sm flex items-center transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300 ease-out" />
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-lg">
            <nav className="flex flex-col p-4 space-y-1">
              <Link 
                href="/about" 
                className="text-left text-gray-600 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-left text-gray-600 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <div className="pt-3 border-t border-gray-100">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium w-full transition-colors duration-200"
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