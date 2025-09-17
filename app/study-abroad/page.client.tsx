'use client';

import React from 'react';
import Header from '../components/Header';
import StudyAbroadHero from '../components/StudyAbroadHero';
import VerifiedOpportunities from '../components/VerifiedOpportunities';
import WhyChooseUs from '../components/WhyChooseUs';
import SuccessStories from '../components/SuccessStories';
import PremiumPackages from '../components/PremiumPackages';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function StudyAbroadClient() {
  return (
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
  );
}