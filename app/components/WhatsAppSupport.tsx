'use client'

import React from 'react'
import { MessageCircle, Phone, Globe, Clock } from 'lucide-react'

const WhatsAppSupport = () => {
  const supportNumbers = [
    {
      country: 'Poland',
      flag: '🇵🇱',
      number: '+48 453283281',
      whatsappLink: 'https://wa.me/48453283281',
      timezone: 'CET'
    },
    {
      country: 'India',
      flag: '🇮🇳',
      number: '+91 8076823071',
      whatsappLink: 'https://wa.me/918076823071',
      timezone: 'IST'
    },
    {
      country: 'Poland',
      flag: '🇵🇱',
      number: '+48 793917254',
      whatsappLink: 'https://wa.me/48793917254',
      timezone: 'CET'
    },
    {
      country: 'USA',
      flag: '🇺🇸',
      number: '+1 555 719 1438',
      whatsappLink: 'https://wa.me/15557191438',
      timezone: 'EST'
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-emerald-50/40 to-green-50/40 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-50/30 to-emerald-50/30 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2.5 bg-white/95 backdrop-blur-xl border border-green-200/60 rounded-full shadow-lg mb-6 sm:mb-8">
            <MessageCircle className="h-5 w-5 mr-3 text-green-600" />
            <span className="text-sm font-semibold text-gray-900 tracking-wide">WhatsApp Support</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="block text-gray-900">Get Instant</span>
            <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
              WhatsApp Support
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Connect with our expert counselors instantly via WhatsApp. Available 24/7 across multiple time zones for your convenience.
          </p>
        </div>

        {/* Support Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {supportNumbers.map((support, index) => (
            <a
              key={index}
              href={support.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group luxury-card rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-500 cursor-pointer text-center"
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                {/* Country Flag */}
                <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {support.flag}
                </div>
                
                {/* Country Name */}
                <div className="text-sm sm:text-base font-bold text-gray-900">
                  {support.country}
                </div>
                
                {/* Phone Number */}
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 font-medium">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  <span className="font-mono">{support.number}</span>
                </div>
                
                {/* Timezone */}
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{support.timezone}</span>
                </div>
                
                {/* WhatsApp Button */}
                <div className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center group-hover:from-green-600 group-hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Chat Now
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Global Coverage</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Support available across multiple countries and time zones for your convenience.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
              <Clock className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Availability</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Get instant responses to your queries anytime, anywhere with our round-the-clock support.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Response</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Quick and personalized assistance for all your study abroad and career queries.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/95 backdrop-blur-xl border border-green-200/60 rounded-full shadow-lg mb-6">
            <MessageCircle className="h-5 w-5 mr-3 text-green-600" />
            <span className="text-sm font-semibold text-gray-900">Ready to Get Started?</span>
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose your preferred country and start your journey with our expert guidance.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {supportNumbers.map((support, index) => (
              <a
                key={index}
                href={support.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="mr-2">{support.flag}</span>
                <span>{support.country}</span>
                <MessageCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppSupport
