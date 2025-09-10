import React from 'react';
import { Globe, Mail, Phone, MapPin, ExternalLink, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 relative">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Ribriz Overseas Logo"
                width={240}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 mb-10 max-w-md leading-relaxed text-lg font-light">
              Your premium partner for international career opportunities. We bridge the gap between 
              ambitious professionals and global job markets with verified opportunities and transparent processes.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <Award className="h-5 w-5 text-blue-400 mr-4" />
                <span className="text-gray-600"><strong className="text-gray-900">CIN:</strong> U85499KA2024PTC187740</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <Award className="h-5 w-5 text-blue-400 mr-4" />
                <span className="text-gray-600"><strong className="text-gray-900">GST:</strong> 29AANCR5772Q1Z6</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <Award className="h-5 w-5 text-emerald-400 mr-4" />
                <span className="text-emerald-600 font-bold">Startup India Certified Company</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight text-gray-900">Premium Services</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#opportunities" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                International Jobs
              </a></li>
              <li><a href="#opportunities" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                Premium Internships
              </a></li>
              <li><a href="#opportunities" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                Application Support
              </a></li>
              <li><a href="#opportunities" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                Study Abroad
              </a></li>
              <li><a href="#opportunities" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                Executive Placement
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                Contact
              </a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                Privacy Policy
              </a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                Terms of Service
              </a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-300 flex items-center group font-medium">
                <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                Careers
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-6 flex items-center tracking-tight text-gray-900">
                <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                Premium Office
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Floor No.: 139, Unit 101, Oxford Towers<br />
                HAL Old Airport Road, Landmark: Dhanalakshmi Aquarium<br />
                H.A.L II Stage, Bengaluru, Karnataka - 560008
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-6 tracking-tight text-gray-900">Contact Information</h4>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-blue-600" />
                  <span className="font-medium">hello@ribriz.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-emerald-600" />
                  <span className="font-medium">+91 8076823071 (India)</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-emerald-600" />
                  <span className="font-medium">+48 663378038 (Poland)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-light">
              © 2024 Ribriz Overseas. All rights reserved. Premium global career solutions.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="https://www.linkedin.com/company/ribriz" className="text-gray-500 hover:text-blue-600 transition-colors text-sm flex items-center group font-medium">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <a href="https://www.facebook.com/ribriz/" className="text-gray-500 hover:text-blue-600 transition-colors text-sm flex items-center group font-medium">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Facebook
              </a>
              <a href="https://www.instagram.com/ribrizz/" className="text-gray-500 hover:text-blue-600 transition-colors text-sm flex items-center group font-medium">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
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