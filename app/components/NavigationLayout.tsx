'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft, User, Briefcase, Settings, Shield, FileText, Lock } from 'lucide-react'

interface NavigationLayoutProps {
  children: React.ReactNode
}

const NavigationLayout: React.FC<NavigationLayoutProps> = ({ children }) => {
  const pathname = usePathname()

  const navigationItems = [
    { href: '/about', label: 'About Us', icon: User },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/how-it-works', label: 'How It Works', icon: Settings },
    { href: '/privacy-policy', label: 'Privacy Policy', icon: Shield },
    { href: '/terms-of-service', label: 'Terms of Service', icon: FileText },
    { href: '/data-protection', label: 'Data Protection', icon: Lock }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 shadow-lg min-h-screen">
          <div className="p-6">
            <Link 
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 mb-8"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Navigation</h2>
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 mr-3" />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}

export default NavigationLayout