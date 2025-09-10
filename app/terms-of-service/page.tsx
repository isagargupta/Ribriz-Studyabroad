'use client'

import React from 'react'
import NavigationLayout from '../components/NavigationLayout'
import { FileText, Users, Shield, AlertTriangle, CheckCircle, Scale } from 'lucide-react'

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: 'Service Description',
      content: [
        'International job placement and recruitment services',
        'Study abroad consulting and university placement',
        'Career counseling and professional development',
        'Visa assistance and documentation support',
        'Interview preparation and skills training',
        'Post-placement support and follow-up services'
      ]
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and truthful information',
        'Maintain confidentiality of login credentials',
        'Respond promptly to communications and requests',
        'Attend scheduled interviews and meetings',
        'Comply with employer requirements and policies',
        'Notify us of any changes in circumstances'
      ]
    },
    {
      icon: Shield,
      title: 'Our Commitments',
      content: [
        'Provide professional and ethical services',
        'Maintain confidentiality of your information',
        'Use best efforts to secure suitable placements',
        'Provide transparent communication throughout',
        'Offer support during the placement process',
        'Comply with all applicable laws and regulations'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitations and Disclaimers',
      content: [
        'We cannot guarantee job placement or visa approval',
        'Success depends on market conditions and qualifications',
        'We are not responsible for employer decisions',
        'Visa processing times are beyond our control',
        'Market conditions may affect available opportunities',
        'Individual results may vary based on circumstances'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Payment Terms',
      content: [
        'Service fees are clearly outlined in your agreement',
        'Payment schedules are based on service milestones',
        'Refund policies are specified in individual contracts',
        'Additional services may incur separate charges',
        'All fees are exclusive of applicable taxes',
        'Payment methods and currencies are specified'
      ]
    },
    {
      icon: Scale,
      title: 'Dispute Resolution',
      content: [
        'Initial disputes should be raised with our support team',
        'We aim to resolve issues within 30 days',
        'Mediation may be used for complex disputes',
        'Applicable law is that of Karnataka, India',
        'Courts of Bangalore have exclusive jurisdiction',
        'Alternative dispute resolution is encouraged'
      ]
    }
  ]

  return (
    <NavigationLayout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              These terms and conditions govern your use of Ribriz Overseas services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: January 2024
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12 border border-blue-200">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Agreement Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Ribriz Overseas. These Terms of Service ("Terms") govern your use of our website and services. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Company Information:</strong> Ribriz Overseas Private Limited, incorporated under the Companies Act 2013, 
              CIN: U85499KA2024PTC187740, registered office at Floor No.: 139, Unit 101, Oxford Towers, 
              HAL Old Airport Road, Bengaluru, Karnataka - 560008.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div key={index} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Important Notices */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Important Notice</h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                Job placement success depends on various factors including market conditions, 
                individual qualifications, and employer requirements. While we use our best efforts, 
                we cannot guarantee specific outcomes.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-3xl p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Success Commitment</h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                We are committed to your success and provide comprehensive support throughout 
                your journey. Our high success rate reflects our dedication to quality service.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Termination</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">By You</h3>
                <p className="text-gray-600 font-light mb-4">
                  You may terminate your agreement with us at any time by providing written notice. 
                  Refund eligibility will be determined based on services already provided.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">By Us</h3>
                <p className="text-gray-600 font-light">
                  We may terminate services for breach of terms, non-payment, or other valid reasons 
                  with appropriate notice as specified in your service agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Questions About Terms?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                If you have any questions about these terms of service, please contact us.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-300">legal@ribriz.com</p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-300">+91 8076823071</p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-gray-300 text-sm">Oxford Towers, Bengaluru</p>
                </div>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>These terms are governed by the laws of India and subject to Bangalore jurisdiction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  )
}