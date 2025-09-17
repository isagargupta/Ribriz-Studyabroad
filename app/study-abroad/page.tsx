'use client';

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import StudyAbroadHero from '../components/StudyAbroadHero';
import VerifiedOpportunities from '../components/VerifiedOpportunities';
import WhyChooseUs from '../components/WhyChooseUs';
import SuccessStories from '../components/SuccessStories';
import PremiumPackages from '../components/PremiumPackages';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function StudyAbroad() {
  const studyAbroadSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ribriz Overseas Study Abroad Services",
    "description": "Expert study abroad consulting for Indian students in UK, USA, Australia, Canada, Germany, Poland and other countries",
    "url": "https://ribriz.com/study-abroad",
    "provider": {
      "@type": "Organization",
      "name": "Ribriz Overseas"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Study Abroad Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Study Abroad in UK for Indian Students",
            "description": "Complete guidance for studying in UK universities with scholarship opportunities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Study Abroad in USA for Indian Students",
            "description": "Expert assistance for US university applications and visa process"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Study Abroad in Germany for Indian Students",
            "description": "Affordable education in Germany with English-taught programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Study Abroad in Poland for Indian Students",
            "description": "Low-cost quality education in Poland with excellent career prospects"
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best countries for Indian students to study abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best countries for Indian students to study abroad include UK, USA, Australia, Canada, Germany, Poland, Netherlands, and Czech Republic. Each offers unique advantages like quality education, scholarship opportunities, and post-study work options."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to study abroad for Indian students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Study abroad costs vary by country. Germany and Poland offer the most affordable options (€5,000-15,000/year), while UK and USA are more expensive (₹20-50 lakhs/year). We help you find scholarships and funding options."
        }
      },
      {
        "@type": "Question",
        "name": "What scholarships are available for Indian students studying abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indian students can access various scholarships including government scholarships (ICCR), university-specific scholarships, country-specific programs (DAAD for Germany, Chevening for UK), and merit-based awards. We help identify and apply for relevant scholarships."
        }
      },
      {
        "@type": "Question",
        "name": "Can Indian students work while studying abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most countries allow international students to work part-time (10-20 hours/week) during studies and full-time during breaks. Some countries like Germany and Canada offer excellent post-study work opportunities."
        }
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Study Abroad for Indian Students | UK, USA, Australia, Canada, Germany, Poland | Ribriz Overseas</title>
        <meta name="description" content="Expert study abroad guidance for Indian students. Top universities in UK, USA, Australia, Canada, Germany, Poland. Scholarships, visa assistance, and affordable options." />
        <meta name="keywords" content="study abroad for Indian students, study abroad in UK for Indians, study abroad in USA for Indians, study abroad in Australia for Indians, study abroad in Canada for Indians, study abroad in Germany for Indians, study abroad in Poland for Indians, scholarships for Indian students, affordable study abroad for Indians, English taught programs abroad" />
        <link rel="canonical" href="https://ribriz.com/study-abroad" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(studyAbroadSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header />
        <StudyAbroadHero />
        <VerifiedOpportunities />
        <WhyChooseUs />
        <SuccessStories />
        <PremiumPackages />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}