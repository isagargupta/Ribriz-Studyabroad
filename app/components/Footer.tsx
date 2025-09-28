import React from 'react';
import { Globe, Mail, Phone, MapPin, ExternalLink, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-gray-50/60 border-t border-gray-200/80 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-slate-50/40 to-gray-50/40 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/30 to-indigo-50/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-50/30 to-pink-50/30 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Company Information Section */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <Image
                src="/logo.png"
                alt="Ribriz Overseas Logo"
                width={240}
                height={80}
                className="h-12 sm:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl leading-relaxed text-base sm:text-lg font-medium">
              Your trusted partner for international career opportunities. We bridge the gap between 
              ambitious professionals and global job markets with verified opportunities, transparent processes, and expert guidance.
            </p>
            
            {/* Enhanced Professional Company Credentials */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="luxury-card rounded-2xl p-5 sm:p-6 flex items-center group hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-xl flex items-center justify-center mr-4 shadow-xl">
                  <Award className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">CIN</div>
                  <div className="text-sm text-gray-600 font-semibold">U85499KA2024PTC187740</div>
                </div>
              </div>
              <div className="luxury-card rounded-2xl p-5 sm:p-6 flex items-center group hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-xl flex items-center justify-center mr-4 shadow-xl">
                  <Award className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">GST</div>
                  <div className="text-sm text-gray-600 font-semibold">29AANCR5772Q1Z6</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="luxury-card rounded-2xl p-5 sm:p-6 flex items-center group hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-xl flex items-center justify-center mr-4 shadow-xl">
                  <Award className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Certification</div>
                  <div className="text-sm text-gray-600 font-semibold">Startup India Certified Company</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Professional Contact Information */}
          <div className="luxury-card rounded-3xl p-8 sm:p-10">
            <h4 className="text-xl sm:text-2xl font-bold mb-8 tracking-tight text-gray-900 heading-executive">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start p-5 professional-border rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Main Office</div>
                  <div className="text-sm text-gray-600 font-medium leading-relaxed">UNIT 101, Oxford Tower, 139,<br />HAL Old Airport Rd, Kodihalli,<br />Bengaluru, Karnataka 560008, India</div>
                </div>
              </div>
              <div className="flex items-start p-5 professional-border rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Email</div>
                  <div className="text-sm text-gray-600 font-medium">hello@ribriz.com</div>
                </div>
              </div>
              <div className="flex items-start p-5 professional-border rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Phone</div>
                  <div className="text-sm text-gray-600 font-medium leading-relaxed">+91 8076823071 (India)<br />+48 453283671 (Poland)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h4 className="text-xl font-bold mb-6 tracking-tight text-gray-900 elegant-text">Premium Services</h4>
            <ul className="space-y-3">
              <li><a href="#opportunities" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                International Jobs
              </a></li>
              <li><a href="#opportunities" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                Premium Internships
              </a></li>
              <li><a href="#opportunities" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                Application Support
              </a></li>
              <li><a href="#opportunities" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                Study Abroad
              </a></li>
              <li><a href="#opportunities" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                Executive Placement
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 tracking-tight text-gray-900 elegant-text">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#contact" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                Contact
              </a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                Privacy Policy
              </a></li>
              <li><a href="/terms-of-service" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                Terms of Service
              </a></li>
              <li><a href="/data-protection" className="hover:text-gray-900 transition-all duration-300 flex items-center group font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 subtle-hover">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 group-hover:translate-x-1" />
                Data Protection
              </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-sm font-light mb-2">
                © 2024 Ribriz Overseas. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Premium global college and career solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <a href="https://www.linkedin.com/company/ribriz" className="text-gray-500 hover:text-gray-900 transition-all duration-300 text-sm flex items-center group font-medium py-2 px-4 rounded-lg hover:bg-gray-50 subtle-hover">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                LinkedIn
              </a>
              <a href="https://www.facebook.com/ribriz/" className="text-gray-500 hover:text-gray-900 transition-all duration-300 text-sm flex items-center group font-medium py-2 px-4 rounded-lg hover:bg-gray-50 subtle-hover">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Facebook
              </a>
              <a href="https://www.instagram.com/ribrizz/" className="text-gray-500 hover:text-gray-900 transition-all duration-300 text-sm flex items-center group font-medium py-2 px-4 rounded-lg hover:bg-gray-50 subtle-hover">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;