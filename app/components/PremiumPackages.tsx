import React from 'react';
import { useState } from 'react';
import { Check, Star, Crown, Zap, Shield, ArrowRight, Sparkles } from 'lucide-react';
import SelectionModal from './SelectionModal';

const PremiumPackages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      name: 'Essential',
      price: '₹35,000',
      originalPrice: '₹50,000',
      description: 'Perfect for getting started with international opportunities',
      icon: Zap,
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-50/50 to-indigo-50/50',
      borderColor: 'border-blue-200/50',
      shadowColor: 'shadow-blue-500/10',
      features: [
        'Premium profile optimization & review',
        'Advanced job matching algorithm',
        'Application submission support',
        'Professional interview preparation',
        'Priority email support',
        'Access to premium job portal',
        '60-day support period'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹65,000',
      originalPrice: '₹95,000',
      description: 'Most popular choice for serious career advancement',
      icon: Star,
      gradient: 'from-emerald-600 to-emerald-700',
      bgGradient: 'from-emerald-50/50 to-teal-50/50',
      borderColor: 'border-emerald-200/50',
      shadowColor: 'shadow-emerald-500/10',
      features: [
        'Everything in Essential',
        'Priority job matching',
        'Professional resume & cover letter writing',
        'Advanced interview coaching',
        'Visa guidance & documentation',
        'WhatsApp priority support',
        'Employer direct connect',
        '120-day support period',
        'Success guarantee*'
      ],
      popular: true
    },
    {
      name: 'Premium Elite',
      price: '₹1,25,000',
      originalPrice: '₹1,75,000',
      description: 'White-glove service for executive-level placements',
      icon: Crown,
      gradient: 'from-purple-600 to-purple-700',
      bgGradient: 'from-purple-50/50 to-indigo-50/50',
      borderColor: 'border-purple-200/50',
      shadowColor: 'shadow-purple-500/10',
      features: [
        'Everything in Professional',
        'Dedicated career consultant',
        'Executive-level job targeting',
        'Salary negotiation support',
        'Relocation assistance',
        '24/7 premium support',
        'Family visa guidance',
        'Post-placement support (6 months)',
        'Money-back guarantee',
        'VIP employer introductions'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
            <Sparkles className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Premium Packages</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="elegant-text">Choose Your</span>
            <span className="text-gray-600 block">
              Success Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Tailored packages designed to accelerate your international career journey with premium support and guaranteed results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div key={index} className={`group relative minimal-card rounded-xl p-8 overflow-hidden subtle-hover refined-shadow ${pkg.popular ? 'ring-2 ring-gray-300 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-900 text-white text-sm font-medium px-6 py-2 rounded-full elegant-shadow">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 refined-shadow">
                      <IconComponent className="h-8 w-8 text-gray-600" />
                    </div>
                    {pkg.popular && (
                      <div className="flex items-center text-gray-600">
                        <Shield className="h-5 w-5 mr-1" />
                        <span className="text-sm font-medium">Guaranteed</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{pkg.name}</h3>
                    <p className="text-gray-600 mb-6 font-light leading-relaxed">{pkg.description}</p>
                    
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through ml-3">{pkg.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Save {Math.round(((parseInt(pkg.originalPrice.replace(/[₹,]/g, '')) - parseInt(pkg.price.replace(/[₹,]/g, ''))) / parseInt(pkg.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600 font-medium">
                        <Check className={`h-5 w-5 mr-3 mt-0.5 text-emerald-500 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full bg-gradient-to-r ${pkg.gradient} text-white py-4 px-6 rounded-2xl transition-all duration-500 font-bold tracking-wide flex items-center justify-center group-hover:shadow-xl transform group-hover:-translate-y-1 relative overflow-hidden ${pkg.popular ? 'shadow-lg' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </button>
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
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Not Sure Which Package is Right?</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule a free consultation with our career experts to find the perfect plan for your international career goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 font-semibold text-lg tracking-wide flex items-center justify-center transform hover:-translate-y-1"
              >
                Free Consultation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group border-2 border-white/20 text-white px-10 py-4 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
              >
                Compare All Plans
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>* Terms and conditions apply. Success guarantee available with Professional and Premium Elite packages.</p>
            </div>
          </div>
        </div>
      </div>
      
      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PremiumPackages;