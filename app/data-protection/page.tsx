'use client'

import React from 'react'
import NavigationLayout from '../components/NavigationLayout'
import { Lock, Shield, Eye, Database, Users, Globe, AlertCircle, CheckCircle } from 'lucide-react'

export default function DataProtectionPage() {
  const protectionMeasures = [
    {
      icon: Lock,
      title: 'Encryption & Security',
      description: 'Advanced encryption protocols protect your data in transit and at rest',
      measures: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'End-to-end encryption for sensitive communications',
        'Regular security audits and penetration testing',
        'Multi-factor authentication for admin access'
      ]
    },
    {
      icon: Database,
      title: 'Data Storage & Backup',
      description: 'Secure, redundant storage systems with regular backups',
      measures: [
        'Geographically distributed data centers',
        'Automated daily backups with encryption',
        'Disaster recovery procedures',
        'Data integrity monitoring',
        'Secure data deletion protocols'
      ]
    },
    {
      icon: Users,
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access your data',
      measures: [
        'Role-based access control (RBAC)',
        'Principle of least privilege',
        'Regular access reviews and audits',
        'Employee background checks',
        'Confidentiality agreements for all staff'
      ]
    },
    {
      icon: Eye,
      title: 'Monitoring & Detection',
      description: 'Continuous monitoring systems detect and respond to security threats',
      measures: [
        '24/7 security monitoring',
        'Intrusion detection systems',
        'Anomaly detection algorithms',
        'Real-time threat intelligence',
        'Incident response procedures'
      ]
    }
  ]

  const complianceStandards = [
    {
      title: 'GDPR Compliance',
      description: 'Full compliance with European General Data Protection Regulation',
      icon: Globe
    },
    {
      title: 'ISO 27001',
      description: 'Information security management system certification',
      icon: Shield
    },
    {
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for security and availability',
      icon: CheckCircle
    },
    {
      title: 'Data Localization',
      description: 'Compliance with local data residency requirements',
      icon: Database
    }
  ]

  const dataTypes = [
    {
      category: 'Personal Information',
      examples: ['Name, email, phone number', 'Address and contact details', 'Date of birth and nationality'],
      protection: 'High'
    },
    {
      category: 'Professional Data',
      examples: ['CV and resume information', 'Work experience and skills', 'Education and certifications'],
      protection: 'High'
    },
    {
      category: 'Communication Records',
      examples: ['Email correspondence', 'Chat logs and messages', 'Call recordings (with consent)'],
      protection: 'Medium'
    },
    {
      category: 'Technical Data',
      examples: ['IP addresses and device info', 'Browser and usage data', 'Login and session information'],
      protection: 'Standard'
    }
  ]

  return (
    <NavigationLayout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Data Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              At Ribriz Overseas, we implement comprehensive data protection measures to safeguard your personal 
              and professional information. Your data security is our top priority.
            </p>
          </div>

          {/* Protection Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-16 border border-blue-200">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Our Data Protection Commitment</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              We employ industry-leading security measures, comply with international data protection regulations, 
              and maintain the highest standards of data privacy and security. Our multi-layered approach ensures 
              your information is protected at every stage of processing.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="bg-white/70 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Security Monitoring</div>
              </div>
              <div className="bg-white/70 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">Zero</div>
                <div className="text-sm text-gray-600">Data Breaches</div>
              </div>
            </div>
          </div>

          {/* Protection Measures */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {protectionMeasures.map((measure, index) => {
              const IconComponent = measure.icon
              return (
                <div key={index} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">{measure.title}</h3>
                      <p className="text-gray-600 text-sm font-light">{measure.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {measure.measures.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Data Categories */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Data Categories & Protection Levels</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Different types of data receive appropriate levels of protection based on sensitivity and regulatory requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{type.category}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      type.protection === 'High' ? 'bg-red-100 text-red-700' :
                      type.protection === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {type.protection} Protection
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-600 text-sm font-light">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Compliance & Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                We maintain compliance with international data protection standards and regulations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100/50 text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{standard.title}</h3>
                    <p className="text-gray-600 text-sm font-light">{standard.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Incident Response */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100/50 mb-12">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-8 w-8 text-orange-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Incident Response</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Detection</h3>
                <p className="text-gray-600 font-light text-sm">
                  Automated systems continuously monitor for security incidents and anomalies.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Response</h3>
                <p className="text-gray-600 font-light text-sm">
                  Immediate containment and investigation procedures are activated within minutes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Notification</h3>
                <p className="text-gray-600 font-light text-sm">
                  Affected users and authorities are notified within 72 hours as required by law.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-gray-900/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Data Protection Contact</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                For any data protection concerns or to exercise your rights, contact our Data Protection Officer.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Data Protection Officer</h3>
                  <p className="text-gray-300 mb-2">dpo@ribriz.com</p>
                  <p className="text-gray-400 text-sm">Response within 48 hours</p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Security Team</h3>
                  <p className="text-gray-300 mb-2">security@ribriz.com</p>
                  <p className="text-gray-400 text-sm">24/7 security incident reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  )
}