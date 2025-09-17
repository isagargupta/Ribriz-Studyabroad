import React from 'react';
import { Shield, Clock, Users, Award, CheckCircle, MessageCircle, Sparkles, TrendingUp, Globe, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: '100% Verified Opportunities',
      description: 'Every position is thoroughly vetted through our premium verification process.',
      gradient: 'from-blue-600 to-blue-700',
      shadowColor: 'shadow-blue-500/10'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Excellence',
      description: 'No hidden costs. Clear, upfront communication about all investment requirements.',
      gradient: 'from-emerald-600 to-emerald-700',
      shadowColor: 'shadow-emerald-500/10'
    },
    {
      icon: Clock,
      title: 'Premium Speed',
      description: 'Fast-tracked applications with our streamlined premium processing system.',
      gradient: 'from-purple-600 to-purple-700',
      shadowColor: 'shadow-purple-500/10'
    },
    {
      icon: Award,
      title: 'Government Certified',
      description: 'Startup India certified with featured recognition in leading publications.',
      gradient: 'from-orange-600 to-orange-700',
      shadowColor: 'shadow-orange-500/10'
    },
    {
      icon: MessageCircle,
      title: 'White-Glove Support',
      description: 'Dedicated support team available 24/7 for immediate premium assistance.',
      gradient: 'from-green-600 to-green-700',
      shadowColor: 'shadow-green-500/10'
    },
    {
      icon: Users,
      title: 'Proven Excellence',
      description: 'Thousands of successful placements with verified premium testimonials.',
      gradient: 'from-teal-600 to-teal-700',
      shadowColor: 'shadow-teal-500/10'
    }
  ];

  const achievements = [
    { icon: Star, value: '99.2%', label: 'Success Rate', color: 'text-yellow-600' },
    { icon: Globe, value: '15+', label: 'Countries', color: 'text-blue-600' },
    { icon: Users, value: '25,000+', label: 'Success Stories', color: 'text-emerald-600' },
    { icon: Award, value: '24/7', label: 'Premium Support', color: 'text-purple-600' }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
            <Sparkles className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Why Choose Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="elegant-text">Your Success is Our</span>
            <span className="text-gray-600 block">
              Promise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the difference of working with a placement service that prioritizes your success above all else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="group minimal-card p-8 rounded-xl subtle-hover cursor-pointer refined-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                  <IconComponent className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="minimal-card rounded-xl p-8 subtle-hover refined-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 refined-shadow">
                    <IconComponent className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                  <div className="text-sm font-medium text-gray-600 tracking-wide">{achievement.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                  <TrendingUp className="h-4 w-4 mr-2 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-200 tracking-wide">Premium Excellence</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Join the Elite Circle
                </h3>
                <p className="text-gray-300 mb-8 text-xl leading-relaxed font-light">
                  Experience the difference of working with a premium placement service that has helped thousands achieve their international career dreams.
                </p>
                
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent animate-success-counter">25,000+</div>
                    <div className="text-blue-200 text-sm font-bold mt-2 tracking-wide">Success Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent animate-success-counter">15+</div>
                    <div className="text-emerald-200 text-sm font-bold mt-2 tracking-wide">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent animate-success-counter">99.2%</div>
                    <div className="text-purple-200 text-sm font-bold mt-2 tracking-wide">Success Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h4 className="font-bold text-2xl mb-8 flex items-center tracking-tight">
                  <Award className="h-6 w-6 mr-3 text-yellow-400" />
                  Premium Credentials
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Award className="h-5 w-5 mr-3 text-blue-400" />
                    <span className="text-gray-200 font-medium">Startup India Certified Company</span>
                  </div>
                  <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Award className="h-5 w-5 mr-3 text-emerald-400" />
                    <span className="text-gray-200 font-medium">Featured in Leading Publications</span>
                  </div>
                  <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Award className="h-5 w-5 mr-3 text-purple-400" />
                    <span className="text-gray-200 font-medium">Government Recognized Business</span>
                  </div>
                  <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Award className="h-5 w-5 mr-3 text-orange-400" />
                    <span className="text-gray-200 font-medium">Premium Media Coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;