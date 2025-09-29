'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SelectionModal from './SelectionModal'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2563eb] backdrop-blur-3xl border-b border-blue-500/30 transition-all duration-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-fluid-sm">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Ribriz Overseas Logo"
                width={180}
                height={60}
                className="h-6 sm:h-7 md:h-9 lg:h-11 w-auto object-contain group-hover:scale-105 transition-all duration-500 ease-out"
                priority
              />
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            <Link 
              href="/about" 
              className="text-white hover:text-blue-100 font-semibold transition-all duration-500 relative group py-3 px-4 rounded-lg hover:bg-white/10"
            >
              <span className="relative">About</span>
              <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-white/0 via-white to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            </Link>
            <Link 
              href="/blog" 
              className="text-white hover:text-blue-100 font-semibold transition-all duration-500 relative group py-3 px-4 rounded-lg hover:bg-white/10"
            >
              <span className="relative">Blog</span>
              <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-white/0 via-white to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            </Link>
            
            <div className="h-8 w-px bg-gradient-to-b from-white/30 to-white/50 mx-3"></div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-white text-[#2563eb] hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm flex items-center transition-all duration-500 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2563eb]"
            >
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
            </button>
          </nav>

          <button
            ref={menuButtonRef}
            className="nav-toggle md:hidden p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2563eb] min-h-[48px] min-w-[48px] flex items-center justify-center shadow-sm hover:shadow-md relative z-50"
            onClick={() => {
              console.log('Menu clicked, current state:', isOpen)
              setIsOpen(!isOpen)
            }}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobileMenu"
          >
            {isOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            )}
          </button>
        </div>

        {isOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobileMenu"
            className="nav-links md:hidden absolute top-full left-0 right-0 bg-[#2563eb] backdrop-blur-2xl border-b border-blue-500/30 shadow-2xl z-40"
            role="navigation"
            aria-label="Mobile navigation"
            style={{ 
              display: 'block',
              position: 'absolute',
              top: '100%',
              left: '0',
              right: '0',
              zIndex: 40
            }}
          >
            <nav className="flex flex-col p-4 sm:p-6 space-y-2">
              <Link 
                href="/about" 
                className="text-left text-white hover:text-blue-100 font-semibold py-4 px-5 rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2563eb] min-h-[48px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-left text-white hover:text-blue-100 font-semibold py-4 px-5 rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2563eb] min-h-[48px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <div className="pt-4 border-t border-white/30">
                <button 
                  onClick={() => {
                    setIsModalOpen(true)
                    setIsOpen(false)
                  }}
                  className="bg-white text-[#2563eb] hover:bg-blue-50 px-6 py-4 rounded-2xl font-semibold w-full transition-all duration-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2563eb] min-h-[52px] text-base shadow-xl hover:shadow-2xl"
                  aria-label="Start your journey"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="ml-3 h-5 w-5 relative z-10" />
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