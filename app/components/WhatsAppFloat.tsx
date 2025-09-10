'use client'

import React, { useState, useEffect } from 'react'
import { MessageCircle, X, Phone, Sparkles, Crown } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const whatsappNumbers = [
    { number: '+48663378038', country: 'Poland', flag: '🇵🇱', label: 'Europe Support' },
    { number: '+918076823071', country: 'India', flag: '🇮🇳', label: 'India Support' },
    { number: '+48793917254', country: 'Poland', flag: '🇵🇱', label: 'Premium Line' },
    { number: '+15557191438', country: 'USA', flag: '🇺🇸', label: 'Americas Support' }
  ];

  const openWhatsApp = (number: string) => {
    if (mounted && typeof window !== 'undefined') {
      const message = encodeURIComponent("Hi! I'm interested in learning more about premium international career opportunities with Ribriz Overseas.");
      window.open(`https://wa.me/${number.replace(/\+/g, '')}?text=${message}`, '_blank');
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="mb-6 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 p-8 w-96 relative overflow-hidden shadow-gray-900/10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50"></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg tracking-tight">Premium Support</h3>
                  <p className="text-sm text-gray-600 font-medium">Choose your preferred line</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3 mb-8">
              {whatsappNumbers.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(contact.number)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-gray-200/50 hover:bg-green-50 hover:border-green-300/50 transition-all duration-300 group bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-green-500/10"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{contact.flag}</span>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-sm">{contact.number}</div>
                      <div className="text-xs text-gray-600 font-medium">{contact.label}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {index === 2 && <Crown className="h-4 w-4 text-yellow-500" />}
                    <Phone className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                </button>
              ))}
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100/50">
              <div className="flex items-center text-sm text-green-700 mb-2">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="font-semibold">Premium Response Time</span>
              </div>
              <p className="text-xs text-green-600 font-medium">Quick response during business hours</p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 relative"
      >
        {isOpen ? (
          <X className="h-7 w-7 transition-transform duration-300" />
        ) : (
          <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
        )}
        
        {!isOpen && (
          <>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloat;