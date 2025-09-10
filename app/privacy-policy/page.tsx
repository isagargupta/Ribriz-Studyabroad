'use client'

import React from 'react'
import NavigationLayout from '../components/NavigationLayout'
import { Shield, Eye, Lock, Users, FileText, Globe } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Professional information (CV, work experience, education)',
        'Preference data (job preferences, location preferences)',
        'Communication records (emails, chat logs, call recordings)',
        'Technical data (IP address, browser type, device information)',
        'Usage data (how you interact with our website and services)'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our recruitment and placement services',
        'To match you with suitable job opportunities',
        'To communicate with you about our services and opportunities',
        'To process applications and facilitate interviews',
        'To comply with legal and regulatory requirements',
        'To analyze and improve our website and service performance'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'With potential employers (with your explicit consent)',
        'With our trusted service providers and partners',
        'With legal authorities when required by law',
        'With your consent for specific purposes',
        'In anonymized form for research and analytics',
        'We never sell your personal information to third parties'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'Industry-standard encryption for data transmission',
        'Secure servers with regular security updates',
        'Access controls and authentication measures',
        'Regular security audits and assessments',
        'Employee training on data protection',
        'Incident response procedures for data breaches'
      ]
    },
    {
      icon: Globe,
      title: 'International Transfers',
      content: [
        'Data may be transferred to countries where we operate',
        'We ensure adequate protection through appropriate safeguards',
        'Transfers comply with applicable data protection laws',
        'We use standard contractual clauses where required',
        'Your data is protected regardless of location',
        'You can request information about specific transfers'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Right to access your personal data',
        'Right to correct inaccurate information',
        'Right to delete your data (subject to legal requirements)',
        'Right to restrict processing of your data',
        'Right to data portability',
        'Right to object to processing for marketing purposes'
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              At Ribriz Overseas, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and protect your data.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: January 2024
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12 border border-blue-200">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ribriz Overseas ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              or use our services, and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          {/* Policy Sections */}
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

          {/* Data Retention */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Data Retention</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Active Candidates</h3>
                <p className="text-gray-600 font-light">
                  We retain your data for as long as you are actively using our services or until you request deletion.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Inactive Accounts</h3>
                <p className="text-gray-600 font-light">
                  Data is automatically deleted after 3 years of inactivity, unless legally required to retain longer.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Questions About Privacy?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                If you have any questions about this privacy policy or our data practices, please contact us.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-300">privacy@ribriz.com</p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Data Protection Officer</h3>
                  <p className="text-gray-300">dpo@ribriz.com</p>
                </div>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>We will respond to all privacy-related inquiries within 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  )
}