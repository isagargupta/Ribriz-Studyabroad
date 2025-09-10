'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Globe, Users, Briefcase, TrendingUp } from 'lucide-react';
import SelectionModal from './SelectionModal';

const CountriesWeServe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const countries = [
    {
      name: 'Poland',
      flag: '🇵🇱',
      capital: 'Warsaw',
      opportunities: '450+',
      avgSalary: '€45,000',
      topSectors: ['Technology', 'Finance', 'Manufacturing'],
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50/50 to-pink-50/50',
      description: 'Thriving tech hub with excellent work-life balance and growing startup ecosystem.'
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      capital: 'Berlin',
      opportunities: '380+',
      avgSalary: '€55,000',
      topSectors: ['Engineering', 'Automotive', 'IT'],
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50/50 to-orange-50/50',
      description: 'Europe\'s economic powerhouse offering world-class career opportunities.'
    },
    {
      name: 'Lithuania',
      flag: '🇱🇹',
      capital: 'Vilnius',
      opportunities: '220+',
      avgSalary: '€35,000',
      topSectors: ['Fintech', 'Logistics', 'Services'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50/50 to-emerald-50/50',
      description: 'Rapidly growing fintech sector with excellent quality of life.'
    },
    {
      name: 'Czechia',
      flag: '🇨🇿',
      capital: 'Prague',
      opportunities: '190+',
      avgSalary: '€40,000',
      topSectors: ['IT', 'Tourism', 'Manufacturing'],
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50/50 to-indigo-50/50',
      description: 'Beautiful historic cities with modern business opportunities.'
    },
    {
      name: 'UAE',
      flag: '🇦🇪',
      capital: 'Dubai',
      opportunities: '320+',
      avgSalary: 'AED 120,000',
      topSectors: ['Business', 'Tourism', 'Finance'],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50/50 to-violet-50/50',
      description: 'Global business hub with tax-free income and luxury lifestyle.'
    }
  ];

  const stats = [
    { icon: Globe, value: '5+', label: 'Countries', color: 'text-blue-600' },
    { icon: Briefcase, value: '1500+', label: 'Active Jobs', color: 'text-emerald-600' },
    { icon: Users, value: '50+', label: 'Partner Companies', color: 'text-purple-600' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'text-orange-600' }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Global Presence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Countries We
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover premium opportunities across our carefully selected international markets, each offering unique advantages for your career growth.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg shadow-gray-900/5 border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-12 h-12 ${stat.color} bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600 tracking-wide">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {countries.map((country, index) => (
            <div key={index} className={`group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-700 p-8 overflow-hidden hover:-translate-y-2 relative`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${country.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl">{country.flag}</div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${country.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{country.name}</h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">{country.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Capital</span>
                    <span className="font-semibold text-gray-900">{country.capital}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Opportunities</span>
                    <span className="font-semibold text-emerald-600">{country.opportunities}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Avg. Salary</span>
                    <span className="font-semibold text-blue-600">{country.avgSalary}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Top Sectors</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.topSectors.map((sector, sectorIndex) => (
                      <span key={sectorIndex} className={`text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r ${country.gradient} text-white shadow-sm`}>
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full bg-gradient-to-r ${country.gradient} text-white py-4 px-6 rounded-2xl transition-all duration-500 font-semibold tracking-wide flex items-center justify-center group-hover:shadow-xl transform group-hover:-translate-y-1`}
                >
                  Explore Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative text-center">
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Ready to Go Global?</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Choose your destination and let us help you build an extraordinary international career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 font-semibold text-lg tracking-wide flex items-center justify-center transform hover:-translate-y-1"
              >
                Explore All Countries
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group border-2 border-white/20 text-white px-10 py-4 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CountriesWeServe;