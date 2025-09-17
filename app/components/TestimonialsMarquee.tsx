'use client'

import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsMarquee = () => {
  const testimonials = [
    // USA Testimonials
    {
      name: "Priya Sharma",
      location: "USA",
      university: "Stanford University",
      avatar: "PS",
      rating: 5,
      text: "Ribriz transformed my career trajectory completely. From a fresher in India to a senior developer in Silicon Valley - the journey has been incredible. Their premium support made all the difference."
    },
    {
      name: "Rahul Kumar",
      location: "USA",
      university: "MIT",
      avatar: "RK",
      rating: 5,
      text: "The level of professionalism and attention to detail at Ribriz is unmatched. They didn't just find me a job - they found me a career that I'm passionate about in Boston."
    },
    {
      name: "Sneha Patel",
      location: "USA",
      university: "Harvard University",
      avatar: "SP",
      rating: 5,
      text: "I was skeptical about international placements, but Ribriz's transparent process and genuine care for their clients won me over. Now I'm leading a data science team in New York!"
    },
    {
      name: "Amit Singh",
      location: "USA",
      university: "UC Berkeley",
      avatar: "AS",
      rating: 5,
      text: "From intern to consultant in just 18 months - Ribriz's mentorship program and career guidance helped me accelerate my professional growth beyond my wildest dreams in San Francisco."
    },
    {
      name: "Kavya Reddy",
      location: "USA",
      university: "University of Chicago",
      avatar: "KR",
      rating: 5,
      text: "The premium service at Ribriz is worth every penny. Their network, expertise, and dedication to client success is what sets them apart from other placement agencies."
    },
    {
      name: "Vikram Joshi",
      location: "USA",
      university: "Yale University",
      avatar: "VJ",
      rating: 5,
      text: "Ribriz made my American dream come true. The support throughout the entire process was exceptional, and now I'm working at a top tech company in Connecticut."
    },
    {
      name: "Ananya Gupta",
      location: "USA",
      university: "Princeton University",
      avatar: "AG",
      rating: 5,
      text: "The team at Ribriz is incredibly professional and supportive. They helped me navigate the complex visa process and find the perfect role in New Jersey."
    },
    {
      name: "Rohit Verma",
      location: "USA",
      university: "Columbia University",
      avatar: "RV",
      rating: 5,
      text: "I can't thank Ribriz enough for their guidance. They made the entire process seamless and helped me secure a position at a leading company in New York."
    },
    {
      name: "Shreya Iyer",
      location: "USA",
      university: "University of Pennsylvania",
      avatar: "SI",
      rating: 5,
      text: "Ribriz's expertise in American job markets is unmatched. They helped me find a role that perfectly matched my skills and career aspirations in Philadelphia."
    },
    {
      name: "Arjun Nair",
      location: "USA",
      university: "Duke University",
      avatar: "AN",
      rating: 5,
      text: "The personalized approach at Ribriz is what makes them special. They took the time to understand my goals and found me the perfect opportunity in North Carolina."
    },
    {
      name: "Meera Desai",
      location: "USA",
      university: "Northwestern University",
      avatar: "MD",
      rating: 5,
      text: "Ribriz helped me transition from India to the USA seamlessly. Their knowledge of the local job market and visa requirements was invaluable."
    },
    {
      name: "Karthik Rao",
      location: "USA",
      university: "University of Michigan",
      avatar: "KR",
      rating: 5,
      text: "The support I received from Ribriz was outstanding. They helped me with everything from job search to relocation, making my move to Michigan stress-free."
    },
    {
      name: "Pooja Shah",
      location: "USA",
      university: "Cornell University",
      avatar: "PS",
      rating: 5,
      text: "Ribriz's network of employers in the USA is impressive. They connected me with opportunities I never would have found on my own in New York."
    },
    {
      name: "Suresh Kumar",
      location: "USA",
      university: "University of Texas",
      avatar: "SK",
      rating: 5,
      text: "The team at Ribriz is incredibly knowledgeable about American job markets. They helped me find a role that perfectly matched my experience and goals in Texas."
    },
    {
      name: "Deepika Menon",
      location: "USA",
      university: "University of Washington",
      avatar: "DM",
      rating: 5,
      text: "Ribriz made my dream of working in the USA a reality. Their guidance and support throughout the process was exceptional in Seattle."
    },

    // UK Testimonials
    {
      name: "Rajesh Patel",
      location: "UK",
      university: "University of Oxford",
      avatar: "RP",
      rating: 5,
      text: "I'm grateful to Ribriz for helping me secure a position in the UK. Their expertise in international placements is truly remarkable in Oxford."
    },
    {
      name: "Nisha Agarwal",
      location: "UK",
      university: "University of Cambridge",
      avatar: "NA",
      rating: 5,
      text: "Ribriz's personalized approach helped me find the perfect role in the UK. Their support made the entire process smooth and stress-free in Cambridge."
    },
    {
      name: "Manoj Tiwari",
      location: "UK",
      university: "Imperial College London",
      avatar: "MT",
      rating: 5,
      text: "The team at Ribriz is incredibly professional and supportive. They helped me navigate the UK job market and secure an excellent position in London."
    },
    {
      name: "Sunita Reddy",
      location: "UK",
      university: "London School of Economics",
      avatar: "SR",
      rating: 5,
      text: "Ribriz's expertise in UK job markets helped me find a fantastic opportunity in London. I couldn't be happier with the outcome."
    },
    {
      name: "Gaurav Sharma",
      location: "UK",
      university: "University College London",
      avatar: "GS",
      rating: 5,
      text: "Ribriz helped me transition to the UK seamlessly. Their knowledge of the local market and visa requirements was invaluable."
    },
    {
      name: "Priyanka Singh",
      location: "UK",
      university: "King's College London",
      avatar: "PS",
      rating: 5,
      text: "The support I received from Ribriz was outstanding. They helped me with everything from job search to relocation, making my move to London stress-free."
    },
    {
      name: "Vishal Gupta",
      location: "UK",
      university: "University of Edinburgh",
      avatar: "VG",
      rating: 5,
      text: "Ribriz's network of employers in the UK is impressive. They connected me with opportunities I never would have found on my own in Scotland."
    },
    {
      name: "Ritu Jain",
      location: "UK",
      university: "University of Manchester",
      avatar: "RJ",
      rating: 5,
      text: "The team at Ribriz is incredibly knowledgeable about UK job markets. They helped me find a role that perfectly matched my experience and goals in Manchester."
    },

    // Germany Testimonials
    {
      name: "Sandeep Kumar",
      location: "Germany",
      university: "Technical University of Munich",
      avatar: "SK",
      rating: 5,
      text: "Ribriz made my dream of working in Germany a reality. Their guidance and support throughout the process was exceptional in Munich."
    },
    {
      name: "Anjali Mehta",
      location: "Germany",
      university: "Ludwig Maximilian University",
      avatar: "AM",
      rating: 5,
      text: "I'm grateful to Ribriz for helping me secure a position in Germany. Their expertise in international placements is truly remarkable in Munich."
    },
    {
      name: "Ravi Nair",
      location: "Germany",
      university: "University of Berlin",
      avatar: "RN",
      rating: 5,
      text: "Ribriz's personalized approach helped me find the perfect role in Germany. Their support made the entire process smooth and stress-free in Berlin."
    },
    {
      name: "Kiran Desai",
      location: "Germany",
      university: "University of Hamburg",
      avatar: "KD",
      rating: 5,
      text: "The team at Ribriz is incredibly professional and supportive. They helped me navigate the German job market and secure an excellent position in Hamburg."
    },
    {
      name: "Harsh Shah",
      location: "Germany",
      university: "University of Cologne",
      avatar: "HS",
      rating: 5,
      text: "Ribriz's expertise in German job markets helped me find a fantastic opportunity in Cologne. I couldn't be happier with the outcome."
    },
    {
      name: "Neha Agarwal",
      location: "Germany",
      university: "University of Frankfurt",
      avatar: "NA",
      rating: 5,
      text: "Ribriz helped me transition to Germany seamlessly. Their knowledge of the local market and visa requirements was invaluable in Frankfurt."
    },
    {
      name: "Abhishek Verma",
      location: "Germany",
      university: "University of Stuttgart",
      avatar: "AV",
      rating: 5,
      text: "The support I received from Ribriz was outstanding. They helped me with everything from job search to relocation, making my move to Stuttgart stress-free."
    },
    {
      name: "Swati Iyer",
      location: "Germany",
      university: "University of Düsseldorf",
      avatar: "SI",
      rating: 5,
      text: "Ribriz's network of employers in Germany is impressive. They connected me with opportunities I never would have found on my own in Düsseldorf."
    },

    // Australia Testimonials
    {
      name: "Prateek Joshi",
      location: "Australia",
      university: "University of Melbourne",
      avatar: "PJ",
      rating: 5,
      text: "The team at Ribriz is incredibly knowledgeable about Australian job markets. They helped me find a role that perfectly matched my experience and goals in Melbourne."
    },
    {
      name: "Divya Rao",
      location: "Australia",
      university: "University of Sydney",
      avatar: "DR",
      rating: 5,
      text: "Ribriz made my dream of working in Australia a reality. Their guidance and support throughout the process was exceptional in Sydney."
    },
    {
      name: "Rohit Menon",
      location: "Australia",
      university: "Australian National University",
      avatar: "RM",
      rating: 5,
      text: "I'm grateful to Ribriz for helping me secure a position in Australia. Their expertise in international placements is truly remarkable in Canberra."
    },
    {
      name: "Kavya Nair",
      location: "Australia",
      university: "University of Queensland",
      avatar: "KN",
      rating: 5,
      text: "Ribriz's personalized approach helped me find the perfect role in Australia. Their support made the entire process smooth and stress-free in Brisbane."
    },
    {
      name: "Arjun Patel",
      location: "Australia",
      university: "University of Western Australia",
      avatar: "AP",
      rating: 5,
      text: "The team at Ribriz is incredibly professional and supportive. They helped me navigate the Australian job market and secure an excellent position in Perth."
    },
    {
      name: "Sneha Kumar",
      location: "Australia",
      university: "Monash University",
      avatar: "SK",
      rating: 5,
      text: "Ribriz's expertise in Australian job markets helped me find a fantastic opportunity in Melbourne. I couldn't be happier with the outcome."
    },
    {
      name: "Vikram Reddy",
      location: "Australia",
      university: "University of Adelaide",
      avatar: "VR",
      rating: 5,
      text: "Ribriz helped me transition to Australia seamlessly. Their knowledge of the local market and visa requirements was invaluable in Adelaide."
    },
    {
      name: "Ananya Gupta",
      location: "Australia",
      university: "University of New South Wales",
      avatar: "AG",
      rating: 5,
      text: "The support I received from Ribriz was outstanding. They helped me with everything from job search to relocation, making my move to Sydney stress-free."
    },

    // France Testimonials
    {
      name: "Rohit Sharma",
      location: "France",
      university: "Sorbonne University",
      avatar: "RS",
      rating: 5,
      text: "Ribriz's network of employers in France is impressive. They connected me with opportunities I never would have found on my own in Paris."
    },
    {
      name: "Priya Joshi",
      location: "France",
      university: "École Polytechnique",
      avatar: "PJ",
      rating: 5,
      text: "The team at Ribriz is incredibly knowledgeable about French job markets. They helped me find a role that perfectly matched my experience and goals in Paris."
    },
    {
      name: "Amit Kumar",
      location: "France",
      university: "Sciences Po",
      avatar: "AK",
      rating: 5,
      text: "Ribriz made my dream of working in France a reality. Their guidance and support throughout the process was exceptional in Paris."
    },
    {
      name: "Kavya Patel",
      location: "France",
      university: "HEC Paris",
      avatar: "KP",
      rating: 5,
      text: "I'm grateful to Ribriz for helping me secure a position in France. Their expertise in international placements is truly remarkable in Paris."
    },
    {
      name: "Rahul Nair",
      location: "France",
      university: "ESSEC Business School",
      avatar: "RN",
      rating: 5,
      text: "Ribriz's personalized approach helped me find the perfect role in France. Their support made the entire process smooth and stress-free in Paris."
    },
    {
      name: "Sneha Reddy",
      location: "France",
      university: "University of Lyon",
      avatar: "SR",
      rating: 5,
      text: "The team at Ribriz is incredibly professional and supportive. They helped me navigate the French job market and secure an excellent position in Lyon."
    },
    {
      name: "Vikram Agarwal",
      location: "France",
      university: "University of Toulouse",
      avatar: "VA",
      rating: 5,
      text: "Ribriz's expertise in French job markets helped me find a fantastic opportunity in Toulouse. I couldn't be happier with the outcome."
    },
    {
      name: "Anjali Kumar",
      location: "France",
      university: "University of Nice",
      avatar: "AK",
      rating: 5,
      text: "Ribriz helped me transition to France seamlessly. Their knowledge of the local market and visa requirements was invaluable in Nice."
    }
  ];

  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-50/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 minimal-card rounded-full mb-8">
            <Star className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="elegant-text">What Our Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Real testimonials from students who achieved their international dreams with our guidance
          </p>
        </div>

        {/* First Row - Left to Right */}
        <div className="mb-8">
          <div className="flex animate-marquee-left">
            {[...firstRow, ...firstRow].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 mx-4">
                <div className="minimal-card rounded-2xl p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-lg mr-4 refined-shadow">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                      <div className="text-xs text-gray-500">{testimonial.university}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="mb-8">
          <div className="flex animate-marquee-right">
            {[...secondRow, ...secondRow].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 mx-4">
                <div className="minimal-card rounded-2xl p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-lg mr-4 refined-shadow">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                      <div className="text-xs text-gray-500">{testimonial.university}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;