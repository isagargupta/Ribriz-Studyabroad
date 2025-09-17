'use client'

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, MessageCircle, Send, Globe, Award } from 'lucide-react';
import { trackContactConversion, trackContactConversionWithNavigation } from './GoogleAnalytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactNumbers = [
    { number: '+48 453283281', country: 'Poland', flag: '🇵🇱' },
    { number: '+91 8076823071', country: 'India', flag: '🇮🇳' },
    { number: '+48 793917254', country: 'Poland', flag: '🇵🇱' },
    { number: '+1 555 719 1438', country: 'USA', flag: '🇺🇸' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track contact conversion
      trackContactConversion({
        event_category: 'Contact Form',
        event_label: 'Contact Form Submission',
        value: 1,
        currency: 'INR'
      });

      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-50/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
            <MessageCircle className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="elegant-text">Ready to Start Your</span>
            <span className="text-blue-900 block">
              Premium Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Connect with our expert advisors for personalized guidance and premium support throughout your international career journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="minimal-card rounded-2xl p-8">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center refined-shadow">
                  <MapPin className="h-7 w-7 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-3 tracking-tight elegant-text">Main Office</h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                  UNIT 101, Oxford Tower, 139, <br /> 
                  HAL Old Airport Rd, Kodihalli, <br />
                  Bengaluru, Karnataka 560008, India
                  </p>
                </div>
              </div>
            </div>

            <div className="minimal-card rounded-2xl p-8">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center refined-shadow">
                  <Mail className="h-7 w-7 text-gray-600" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-gray-900 text-xl mb-4 tracking-tight elegant-text">Email Addresses</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-4 minimal-border rounded-xl">
                      <Globe className="h-5 w-5 text-gray-600 mr-4" />
                      <span className="text-gray-800 font-medium">hello@ribriz.com</span>
                    </div>
                    <div className="flex items-center p-4 minimal-border rounded-xl">
                      <Globe className="h-5 w-5 text-gray-600 mr-4" />
                      <span className="text-gray-800 font-medium">sguta@ribriz.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="minimal-card rounded-2xl p-8">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center refined-shadow">
                  <Phone className="h-7 w-7 text-gray-600" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-gray-900 text-xl mb-4 tracking-tight elegant-text">WhatsApp Support</h4>
                  <div className="grid gap-3">
                    {contactNumbers.map((contact, index) => (
                      <div key={index} className="flex items-center justify-between p-4 minimal-border rounded-xl hover:bg-gray-50 subtle-hover">
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl">{contact.flag}</span>
                          <span className="text-gray-800 font-semibold">{contact.number}</span>
                        </div>
                        <span className="text-sm text-gray-700 font-medium px-4 py-2 bg-gray-100 rounded-full">
                          {contact.country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="minimal-card rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center refined-shadow">
                  <Clock className="h-7 w-7 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-4 tracking-tight elegant-text">Business Hours</h4>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM (IST)</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM (IST)</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold text-gray-500">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="minimal-card rounded-2xl p-10">
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight elegant-text">Contact Form</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <div className="space-y-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          service: '',
                          message: ''
                        });
                      }}
                      className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 subtle-hover font-medium"
                    >
                      Send Another Message
                    </button>
                    
                    <button
                      onClick={() => {
                        trackContactConversionWithNavigation('/study-abroad', {
                          event_category: 'Contact Form',
                          event_label: 'Redirect to Study Abroad',
                          value: 1,
                          currency: 'INR'
                        });
                      }}
                      className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 subtle-hover font-medium"
                    >
                      Explore Study Abroad Options
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 tracking-wide">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all duration-300 bg-white subtle-hover"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 tracking-wide">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all duration-300 bg-white subtle-hover"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all duration-300 bg-white subtle-hover"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all duration-300 bg-white subtle-hover"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 tracking-wide">
                      Service Interest
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all duration-300 bg-white subtle-hover"
                    >
                      <option value="">Select a premium service</option>
                      <option value="International Jobs">International Jobs</option>
                      <option value="Premium Internships">Premium Internships</option>
                      <option value="Study Abroad">Study Abroad</option>
                      <option value="Executive Placement">Executive Placement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all duration-300 bg-white subtle-hover resize-none"
                      placeholder="Tell us about your international career goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg hover:bg-blue-800 subtle-hover font-medium text-lg tracking-wide elegant-shadow flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-3 h-5 w-5" />
                  </button>
                </form>
              )}

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-gray-600 mb-6 text-lg font-light">Prefer instant messaging?</p>
                  <button 
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.gtagSendEvent) {
                        window.gtagSendEvent('https://wa.me/918076823071');
                      } else {
                        window.open('https://wa.me/918076823071', '_blank');
                      }
                    }}
                    className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 subtle-hover font-medium elegant-shadow"
                  >
                    <MessageCircle className="h-5 w-5 mr-3" />
                    WhatsApp Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 minimal-card rounded-2xl p-12 text-center">
          <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
            <Award className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Credentials</span>
          </div>
          <h3 className="text-3xl font-bold mb-8 tracking-tight text-gray-900 elegant-text">Trusted & Certified Excellence</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 minimal-card rounded-xl">
              <div className="font-bold text-lg mb-2 text-gray-900">CIN Number</div>
              <div className="text-gray-600 text-sm font-mono">U85499KA2024PTC187740</div>
            </div>
            <div className="p-6 minimal-card rounded-xl">
              <div className="font-bold text-lg mb-2 text-gray-900">GST Number</div>
              <div className="text-gray-600 text-sm font-mono">29AANCR5772Q1Z6</div>
            </div>
            <div className="p-6 minimal-card rounded-xl">
              <div className="font-bold text-lg mb-2 text-gray-900">Certification</div>
              <div className="text-gray-700 text-sm font-semibold">Startup India Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;