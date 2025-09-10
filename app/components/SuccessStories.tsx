'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Award, TrendingUp } from 'lucide-react';
import SelectionModal from './SelectionModal';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Senior Software Developer",
      company: "Tech Solutions Poland",
      country: "Poland",
      flag: "🇵🇱",
      salary: "€65,000",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Ribriz transformed my career trajectory completely. From a fresher in India to a senior developer in Europe - the journey has been incredible. Their premium support made all the difference.",
      rating: 5,
      timeframe: "3 months"
    },
    {
      name: "Rahul Kumar",
      position: "Marketing Director",
      company: "Global Marketing Berlin",
      country: "Germany",
      flag: "🇩🇪",
      salary: "€75,000",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "The level of professionalism and attention to detail at Ribriz is unmatched. They didn't just find me a job - they found me a career that I'm passionate about in one of Europe's most dynamic cities.",
      rating: 5,
      timeframe: "2 months"
    },
    {
      name: "Sneha Patel",
      position: "Data Science Lead",
      company: "Analytics Hub Lithuania",
      country: "Lithuania",
      flag: "🇱🇹",
      salary: "€55,000",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "I was skeptical about international placements, but Ribriz's transparent process and genuine care for their clients won me over. Now I'm leading a data science team in Vilnius!",
      rating: 5,
      timeframe: "4 months"
    },
    {
      name: "Amit Singh",
      position: "IT Consultant",
      company: "Prague Tech Solutions",
      country: "Czechia",
      flag: "🇨🇿",
      salary: "€50,000",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "From intern to consultant in just 18 months - Ribriz's mentorship program and career guidance helped me accelerate my professional growth beyond my wildest dreams.",
      rating: 5,
      timeframe: "6 months"
    },
    {
      name: "Kavya Reddy",
      position: "Business Strategy Manager",
      company: "Emirates Business Group",
      country: "UAE",
      flag: "🇦🇪",
      salary: "AED 180,000",
      image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "The premium service at Ribriz is worth every penny. Their network, expertise, and dedication to client success is what sets them apart from other placement agencies.",
      rating: 5,
      timeframe: "3 months"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success-stories" className="py-32 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Premium Success
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Real transformations from ambitious professionals who chose excellence and achieved their international career dreams.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-gray-900/10 p-12 border border-gray-100/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-12">
                <Quote className="h-20 w-20 text-blue-200" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2 space-y-10">
                  <blockquote className="text-3xl md:text-4xl text-gray-800 leading-relaxed font-light tracking-tight">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-8">
                    <div className="relative">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-3xl object-cover shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 text-3xl">
                        {testimonials[currentIndex].flag}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-2xl tracking-tight">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-blue-600 font-semibold text-lg">
                        {testimonials[currentIndex].position}
                      </div>
                      <div className="text-gray-500 font-medium">
                        {testimonials[currentIndex].company}
                      </div>
                      <div className="flex items-center text-gray-500 mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">Working in {testimonials[currentIndex].country}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 text-center border border-blue-100/50 shadow-lg">
                    <div className="text-5xl mb-4">{testimonials[currentIndex].flag}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {testimonials[currentIndex].country}
                    </div>
                    <div className="text-gray-600 text-sm font-medium mb-4">
                      Success Story
                    </div>
                    <div className="bg-white/80 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {testimonials[currentIndex].salary}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Annual Package</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-3xl p-6 text-center border border-emerald-100/50 shadow-lg">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="h-6 w-6 text-emerald-600 mr-2" />
                      <span className="font-bold text-emerald-700">Placement Time</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {testimonials[currentIndex].timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 backdrop-blur-xl rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 group border border-gray-100/50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/90 backdrop-blur-xl rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 group border border-gray-100/50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </button>

          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-12 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-24">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Ready to Write Your Success Story?</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of ambitious professionals who have successfully launched their international careers through our premium services.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-12 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 font-semibold text-lg tracking-wide transform hover:-translate-y-1"
          >
            Start Your Premium Journey
          </button>
        </div>
      </div>
      
      <SelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default SuccessStories;