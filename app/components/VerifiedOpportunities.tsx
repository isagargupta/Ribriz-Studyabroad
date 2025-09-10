import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Users, FileText, GraduationCap, DollarSign, ArrowRight, Sparkles, Globe, Shield, Clock } from 'lucide-react';
import SelectionModal from './SelectionModal';

const VerifiedOpportunities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const opportunities = [
    {
      icon: Briefcase,
      title: 'International Jobs',
      description: 'Verified positions in Poland, Germany, Lithuania, Czechia, and UAE with direct employer connections.',
      features: ['Blue & white-collar roles', 'Skill-based positions', 'Direct employer access', 'Visa support guidance'],
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-50/50 to-indigo-50/50',
      borderColor: 'border-blue-100/50',
      shadowColor: 'shadow-blue-500/10',
      price: 'From €35,000',
      badge: 'Most Popular'
    },
    {
      icon: Users,
      title: 'Premium Internships',
      description: 'Remote and in-person internships in tech, management, logistics, and marketing with mentorship.',
      features: ['Tech & management roles', 'Resume building support', 'Mentorship programs', 'Placement assistance'],
      gradient: 'from-emerald-600 to-emerald-700',
      bgGradient: 'from-emerald-50/50 to-teal-50/50',
      borderColor: 'border-emerald-100/50',
      shadowColor: 'shadow-emerald-500/10',
      price: 'From €1,200/mo',
      badge: 'High Demand'
    },
    {
      icon: FileText,
      title: 'Application Support',
      description: 'Streamlined intake system with profile evaluation and application screening for optimal results.',
      features: ['Profile optimization', 'Application screening', 'Process transparency', 'Success tracking'],
      gradient: 'from-purple-600 to-purple-700',
      bgGradient: 'from-purple-50/50 to-indigo-50/50',
      borderColor: 'border-purple-100/50',
      shadowColor: 'shadow-purple-500/10',
      price: 'Included',
      badge: 'Premium Service'
    }
  ];

  const stats = [
    { icon: Shield, value: '100%', label: 'Verified Opportunities', color: 'text-blue-600' },
    { icon: Clock, value: '72hrs', label: 'Average Response Time', color: 'text-emerald-600' },
    { icon: Globe, value: '5+', label: 'Countries Available', color: 'text-purple-600' },
    { icon: Users, value: '1000+', label: 'Successful Placements', color: 'text-orange-600' }
  ];

  return (
    <section id="opportunities" className="py-32 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
            <Sparkles className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Verified Opportunities</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Premium Global
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Career Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Curated opportunities from verified employers worldwide, designed for ambitious professionals seeking international excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div key={index} className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl ${opportunity.shadowColor} border ${opportunity.borderColor} hover:shadow-2xl transition-all duration-700 p-8 overflow-hidden hover:-translate-y-2`}>
                {opportunity.badge && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {opportunity.badge}
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${opportunity.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${opportunity.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{opportunity.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-light">{opportunity.description}</p>
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                      {opportunity.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {opportunity.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 font-medium">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${opportunity.gradient} mr-3 shadow-sm`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={opportunity.title === 'Application Support' ? '#' : '/career-application'}
                    onClick={(e) => {
                      if (opportunity.title === 'Application Support') {
                        e.preventDefault()
                        setIsModalOpen(true)
                      }
                    }}
                    className={`w-full bg-gradient-to-r ${opportunity.gradient} text-white py-4 px-6 rounded-2xl transition-all duration-500 font-semibold tracking-wide flex items-center justify-center group-hover:shadow-xl transform group-hover:-translate-y-1 cursor-pointer`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
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
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600 tracking-wide">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative text-center">
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Ready to Transform Your Career?</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Join thousands of professionals who've elevated their careers through our premium placement services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 font-semibold text-lg tracking-wide flex items-center justify-center transform hover:-translate-y-1"
              >
                Start Your Journey
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

export default VerifiedOpportunities;