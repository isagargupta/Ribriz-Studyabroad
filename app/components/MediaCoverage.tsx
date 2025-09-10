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
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
            <Award className="h-4 w-4 mr-2 text-amber-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Featured In Media</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted by Leading
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
              Media Outlets
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our success story has been featured across major news platforms, highlighting our commitment to excellence in international education and career placement.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100/50 p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="h-6 w-6 text-amber-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">As Seen On</h3>
              <Sparkles className="h-6 w-6 text-amber-500 ml-3" />
            </div>

            {/* Marquee Animation */}
            <div className="marquee-container overflow-hidden">
              <div className="marquee-content flex items-center space-x-12 animate-marquee">
                {/* First set of logos */}
                {mediaOutlets.map((outlet) => (
                  <div key={`first-${outlet.id}`} className="flex-shrink-0">
                    <button
                      onClick={() => handleMediaClick(outlet)}
                      disabled={redirecting[outlet.id]}
                      className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 min-w-[280px] ${
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
                      
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${outlet.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white font-bold text-lg">
                            {outlet.name.split(' ').map(word => word[0]).join('')}
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{outlet.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{outlet.description}</p>
                          <div className="flex items-center text-blue-600 text-sm font-semibold">
                            <span>Read Article</span>
                            <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {mediaOutlets.map((outlet) => (
                  <div key={`second-${outlet.id}`} className="flex-shrink-0">
                    <button
                      onClick={() => handleMediaClick(outlet)}
                      disabled={redirecting[outlet.id]}
                      className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 min-w-[280px] ${
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
                      
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${outlet.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white font-bold text-lg">
                            {outlet.name.split(' ').map(word => word[0]).join('')}
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{outlet.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{outlet.description}</p>
                          <div className="flex items-center text-blue-600 text-sm font-semibold">
                            <span>Read Article</span>
                            <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">700+</div>
              <div className="text-sm font-medium text-gray-600">University Partners</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">4+</div>
              <div className="text-sm font-medium text-gray-600">Media Features</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">Global</div>
              <div className="text-sm font-medium text-gray-600">Recognition</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">Trusted</div>
              <div className="text-sm font-medium text-gray-600">Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
        }
        
        .marquee-content {
          width: calc(280px * 8 + 12rem * 7); /* 8 items + gaps */
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * 4 - 12rem * 3)); /* Move by half the content width */
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default MediaCoverage