import React from 'react';
import { Shield, Award, Users, Globe, CheckCircle, Star, TrendingUp, Lock } from 'lucide-react';

const TrustIndicators = () => {
  const trustMetrics = [
    {
      icon: Users,
      value: '25,000+',
      label: 'Success Stories',
      description: 'Students placed globally',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Globe,
      value: '15+',
      label: 'Countries',
      description: 'Global presence',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: Award,
      value: '99.2%',
      label: 'Success Rate',
      description: 'Placement success',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Verified',
      description: 'Opportunities verified',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ];

  const certifications = [
    {
      name: 'Startup India Certified',
      icon: Award,
      description: 'Government recognized startup',
      color: 'text-blue-600'
    },
    {
      name: 'ISO 9001:2015',
      icon: Shield,
      description: 'Quality management certified',
      color: 'text-emerald-600'
    },
    {
      name: 'GDPR Compliant',
      icon: Lock,
      description: 'Data protection compliant',
      color: 'text-purple-600'
    },
    {
      name: '24/7 Support',
      icon: TrendingUp,
      description: 'Round-the-clock assistance',
      color: 'text-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Toronto, Canada',
      university: 'University of Toronto',
      rating: 5,
      text: 'Ribriz made my dream of studying in Canada a reality. Their guidance was exceptional throughout the entire process.',
      avatar: 'PS'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Berlin, Germany',
      university: 'Technical University of Munich',
      rating: 5,
      text: 'Professional service and excellent support. I got my dream job in Germany within 3 months of applying.',
      avatar: 'RK'
    },
    {
      name: 'Anita Patel',
      location: 'Melbourne, Australia',
      university: 'University of Melbourne',
      rating: 5,
      text: 'The team at Ribriz is amazing. They helped me secure a scholarship and made the entire process seamless.',
      avatar: 'AP'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-xl shadow-gray-900/10 mb-8 animate-trust-badge">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            <span className="text-sm font-bold text-gray-800 tracking-wide">Trusted Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Why 25,000+ Students
            <span className="animate-text-shimmer block">
              Trust Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our track record speaks for itself. Join thousands of successful students who have achieved their international dreams with our premium guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {trustMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-premium-glow">
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2 animate-success-counter`}>
                    {metric.value}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-600 font-medium">{metric.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Premium Certifications</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Recognized by leading institutions and compliant with international standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="group bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className={`w-12 h-12 ${cert.color} bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 font-medium">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustIndicators;
