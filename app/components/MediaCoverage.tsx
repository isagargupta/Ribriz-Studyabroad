'use client'

import React, { useState, useEffect } from 'react'
import { ExternalLink, Award, Sparkles } from 'lucide-react'

const MediaCoverage = () => {
  const [countdown, setCountdown] = useState<{ [key: string]: number }>({})
  const [redirecting, setRedirecting] = useState<{ [key: string]: boolean }>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const mediaOutlets = [
    {
      id: 'dailyhunt',
      name: 'Daily Hunt',
      logo: '/media-logos/dailyhunt-logo.png',
      url: 'https://m.dailyhunt.in/news/india/english/republic+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/ribriz+overseas+venture+expands+global+reach+partners+with+over+700+universities+worldwide-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_9e21e450ee8f11efb7fcb93ad73f2fc5',
      color: 'from-blue-500 to-blue-600',
      description: 'Leading digital news platform covering Ribriz Overseas\' expansion to 700+ university partnerships worldwide.'
    },
    {
      id: 'republic',
      name: 'Republic News India',
      logo: '/media-logos/republic-business-logo.png',
      url: 'https://business.republicnewsindia.com/ribriz-overseas-venture-expands-global-reach-partners-with-over-700-universities-worldwide/',
      color: 'from-red-500 to-red-600',
      description: 'Republic Business featured our global expansion story highlighting international education opportunities for Indian students.'
    },
    {
      id: 'wow',
      name: 'Wow Entrepreneurs',
      logo: '/media-logos/wow-entrepreneurs-logo.png',
      url: 'https://wowentrepreneurs.com/ribriz-overseas-venture-expands-global-reach-partners-with-over-700-universities-worldwide/',
      color: 'from-purple-500 to-purple-600',
      description: 'Wow Entrepreneurs showcased our entrepreneurial journey and commitment to connecting Indian talent with global opportunities.'
    },
    {
      id: 'saga',
      name: 'Entrepreneur Saga',
      logo: '/media-logos/entrepreneur-saga-logo.png',
      url: 'https://entrepreneursaga.com/ribriz-overseas-venture-expands-global-reach-partners-with-over-700-universities-worldwide/',
      color: 'from-emerald-500 to-emerald-600',
      description: 'Entrepreneur Saga recognized our innovative approach to international education and career placement services.'
    }
  ]

  const handleMediaClick = (outlet: typeof mediaOutlets[0]) => {
    setRedirecting(prev => ({ ...prev, [outlet.id]: true }))
    setCountdown(prev => ({ ...prev, [outlet.id]: 5 }))

    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        const newCount = (prev[outlet.id] || 0) - 1
        if (newCount <= 0) {
          clearInterval(countdownInterval)
          try {
            // Try to open in new tab with proper attributes
            const newWindow = window.open(outlet.url, '_blank', 'noopener,noreferrer')
            if (!newWindow) {
              // If popup blocked, try direct navigation
              window.location.href = outlet.url
            }
          } catch (error) {
            console.error('Failed to open media link:', error)
            // Fallback: copy URL to clipboard
            if (navigator.clipboard) {
              navigator.clipboard.writeText(outlet.url).then(() => {
                alert(`Link copied to clipboard: ${outlet.url}`)
              }).catch(() => {
                alert(`Please visit: ${outlet.url}`)
              })
            } else {
              alert(`Please visit: ${outlet.url}`)
            }
          }
          setRedirecting(prevRed => ({ ...prevRed, [outlet.id]: false }))
          return { ...prev, [outlet.id]: 0 }
        }
        return { ...prev, [outlet.id]: newCount }
      })
    }, 1000)
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-50/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
            <Award className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Featured In Media</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="elegant-text">Trusted by Leading</span>
            <span className="text-blue-900 block">
              Media Outlets
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our success story has been featured across major news platforms, highlighting our commitment to excellence in international education and career placement.
          </p>
        </div>

        {/* Media Outlets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mediaOutlets.map((outlet) => (
            <div key={outlet.id} className="group">
              <button
                onClick={() => handleMediaClick(outlet)}
                disabled={redirecting[outlet.id]}
                className={`w-full minimal-card rounded-2xl p-6 subtle-hover refined-shadow relative ${
                  redirecting[outlet.id] ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {redirecting[outlet.id] && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-2">{countdown[outlet.id]}</div>
                      <div className="text-sm">Redirecting...</div>
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                    <div className="text-gray-600 font-bold text-lg">
                      {outlet.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{outlet.name}</h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{outlet.description}</p>
                  <div className="flex items-center justify-center text-gray-700 text-sm font-medium">
                    <span>Read Article</span>
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* As Seen On Section */}
        <div className="minimal-card rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-5 w-5 text-gray-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight elegant-text">As Seen On</h3>
            <Sparkles className="h-5 w-5 text-gray-600 ml-3" />
          </div>
          
          {/* Logo Display */}
          <div className="flex items-center justify-center space-x-12 mb-8">
            {mediaOutlets.map((outlet) => (
              <div key={outlet.id} className="group">
                <button
                  onClick={() => handleMediaClick(outlet)}
                  disabled={redirecting[outlet.id]}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 refined-shadow">
                    <div className="text-gray-600 font-bold text-sm">
                      {outlet.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 text-sm">
            Featured across leading media platforms for our commitment to excellence
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="minimal-card rounded-xl p-6 subtle-hover refined-shadow">
              <div className="text-3xl font-bold text-gray-900 mb-2">700+</div>
              <div className="text-sm font-medium text-gray-600">University Partners</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="minimal-card rounded-xl p-6 subtle-hover refined-shadow">
              <div className="text-3xl font-bold text-gray-900 mb-2">4+</div>
              <div className="text-sm font-medium text-gray-600">Media Features</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="minimal-card rounded-xl p-6 subtle-hover refined-shadow">
              <div className="text-3xl font-bold text-gray-900 mb-2">Global</div>
              <div className="text-sm font-medium text-gray-600">Recognition</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="minimal-card rounded-xl p-6 subtle-hover refined-shadow">
              <div className="text-3xl font-bold text-gray-900 mb-2">Trusted</div>
              <div className="text-sm font-medium text-gray-600">Excellence</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default MediaCoverage