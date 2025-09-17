import React from 'react';
import { Globe, Mail, Phone, MapPin, ExternalLink, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-50/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Company Information Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Ribriz Overseas Logo"
                width={240}
                height={80}
                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed text-lg font-light">
              Your premium partner for international career opportunities. We bridge the gap between 
              ambitious professionals and global job markets with verified opportunities and transparent processes.
            </p>
            
            {/* Company Credentials */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="minimal-card rounded-xl p-4 flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 refined-shadow">
                  <Award className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">CIN</div>
                  <div className="text-sm text-gray-600">U85499KA2024PTC187740</div>
                </div>
              </div>
              <div className="minimal-card rounded-xl p-4 flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 refined-shadow">
                  <Award className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">GST</div>
                  <div className="text-sm text-gray-600">29AANCR5772Q1Z6</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="minimal-card rounded-xl p-4 flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 refined-shadow">
                  <Award className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Certification</div>
                  <div className="text-sm text-gray-600">Startup India Certified Company</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="minimal-card rounded-2xl p-8">
            <h4 className="text-xl font-bold mb-6 tracking-tight text-gray-900 elegant-text">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center p-4 minimal-border rounded-xl">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 refined-shadow">
                  <MapPin className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Main Office</div>
                  <div className="text-sm text-gray-600">UNIT 101, Oxford Tower, 139,<br />HAL Old Airport Rd, Kodihalli,<br />Bengaluru, Karnataka 560008, India</div>
                </div>
              </div>
              <div className="flex items-center p-4 minimal-border rounded-xl">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 refined-shadow">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">hello@ribriz.com</div>
                </div>
              </div>
              <div className="flex items-center p-4 minimal-border rounded-xl">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 refined-shadow">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Phone</div>
                  <div className="text-sm text-gray-600">+91 8076823071 (India)<br />+48 453283671 (Poland)</div>
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