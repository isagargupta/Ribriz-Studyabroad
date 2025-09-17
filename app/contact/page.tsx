import { Metadata } from 'next'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Contact Us - Get Expert Guidance | Ribriz Overseas',
  description: 'Contact Ribriz Overseas for expert study abroad and career guidance. Get personalized support from our certified advisors. Multiple contact options available.',
  keywords: [
    'contact ribriz overseas',
    'study abroad consultation',
    'career guidance contact',
    'international education advisor',
    'study abroad expert',
    'career consultation',
    'education consultant',
    'study abroad support'
  ],
  openGraph: {
    title: 'Contact Us - Get Expert Guidance | Ribriz Overseas',
    description: 'Contact Ribriz Overseas for expert study abroad and career guidance. Get personalized support from our certified advisors.',
    images: ['https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}


