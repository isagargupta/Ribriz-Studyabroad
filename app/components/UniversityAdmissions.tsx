import React from 'react'
import { GraduationCap, Award, Globe, Star, TrendingUp } from 'lucide-react'

const UniversityAdmissions = () => {
  const topUniversities = [
    {
      name: 'Massachusetts Institute of Technology (MIT)',
      country: 'USA',
      rank: '#1',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🎓',
      category: 'Top Tier'
    },
    {
      name: 'University of Oxford',
      country: 'UK',
      rank: '#4',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🏛️',
      category: 'Top Tier'
    },
    {
      name: 'Harvard University',
      country: 'USA',
      rank: '#3',
      rankingSource: 'THE World University Rankings',
      logo: '🎓',
      category: 'Top Tier'
    },
    {
      name: 'Stanford University',
      country: 'USA',
      rank: '#2',
      rankingSource: 'ARWU World University Rankings',
      logo: '🌲',
      category: 'Top Tier'
    },
    {
      name: 'University of Cambridge',
      country: 'UK',
      rank: '#5',
      rankingSource: 'THE World University Rankings',
      logo: '🏛️',
      category: 'Top Tier'
    },
    {
      name: 'Imperial College London',
      country: 'UK',
      rank: '#6',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🏛️',
      category: 'Elite'
    },
    {
      name: 'ETH Zurich',
      country: 'Switzerland',
      rank: '#7',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🏔️',
      category: 'Elite'
    },
    {
      name: 'National University of Singapore',
      country: 'Singapore',
      rank: '#8',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🌏',
      category: 'Elite'
    },
    {
      name: 'University College London',
      country: 'UK',
      rank: '#9',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🏛️',
      category: 'Elite'
    },
    {
      name: 'California Institute of Technology',
      country: 'USA',
      rank: '#10',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🔬',
      category: 'Elite'
    },
    {
      name: 'University of Hong Kong',
      country: 'Hong Kong',
      rank: '#11',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🌏',
      category: 'Elite'
    },
    {
      name: 'Nanyang Technological University',
      country: 'Singapore',
      rank: '#12',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🌏',
      category: 'Elite'
    },
    {
      name: 'University of Chicago',
      country: 'USA',
      rank: '#13',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🎓',
      category: 'Elite'
    },
    {
      name: 'Peking University',
      country: 'China',
      rank: '#14',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🏛️',
      category: 'Elite'
    },
    {
      name: 'University of Pennsylvania',
      country: 'USA',
      rank: '#15',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🎓',
      category: 'Elite'
    },
    {
      name: 'Cornell University',
      country: 'USA',
      rank: '#16',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🎓',
      category: 'Elite'
    },
    {
      name: 'Tsinghua University',
      country: 'China',
      rank: '#17',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🏛️',
      category: 'Elite'
    },
    {
      name: 'University of California, Berkeley',
      country: 'USA',
      rank: '#18',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🎓',
      category: 'Elite'
    },
    {
      name: 'University of Melbourne',
      country: 'Australia',
      rank: '#19',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🌏',
      category: 'Elite'
    },
    {
      name: 'University of New South Wales',
      country: 'Australia',
      rank: '#20',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🌏',
      category: 'Elite'
    },
    {
      name: 'Yale University',
      country: 'USA',
      rank: '#21',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🎓',
      category: 'Elite'
    },
    {
      name: 'École Polytechnique Fédérale de Lausanne',
      country: 'Switzerland',
      rank: '#22',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🏔️',
      category: 'Elite'
    },
    {
      name: 'Technical University of Munich',
      country: 'Germany',
      rank: '#23',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🏛️',
      category: 'Elite'
    },
    {
      name: 'Johns Hopkins University',
      country: 'USA',
      rank: '#24',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🎓',
      category: 'Elite'
    },
    {
      name: 'Princeton University',
      country: 'USA',
      rank: '#25',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🎓',
      category: 'Elite'
    },
    {
      name: 'University of Sydney',
      country: 'Australia',
      rank: '#26',
      rankingSource: 'QS World University Rankings 2026',
      logo: '🌏',
      category: 'Elite'
    }
  ]

  // Duplicate the array to create seamless loop
  const duplicatedUniversities = [...topUniversities, ...topUniversities]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-gray-900/5 mb-8">
            <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Student Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Students Got Admission Into
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Top Global Universities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Join thousands of successful students who have secured admissions to the world's most prestigious universities through our expert guidance.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm text-gray-600 font-medium">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">26</div>
            <div className="text-sm text-gray-600 font-medium">Top Universities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-sm text-gray-600 font-medium">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-sm text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-6">
              {duplicatedUniversities.map((university, index) => (
                <div key={`${university.name}-${index}`} className="group bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex-shrink-0 w-80 relative">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                      university.category === 'Top Tier' 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                    }`}>
                      <Award className="h-3 w-3 mr-1" />
                      {university.category}
                    </div>
                  </div>
                  
                  {/* University Logo/Icon */}
                  <div className="p-6 pb-4">
                    <div className="text-4xl mb-4 text-center">{university.logo}</div>
                    
                    {/* University Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight text-center">
                      {university.name}
                    </h3>
                    
                    {/* Country */}
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                      <Globe className="h-4 w-4 mr-2" />
                      <span className="font-medium">{university.country}</span>
                    </div>
                    
                    {/* Ranking */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Star className="h-5 w-5 text-yellow-500 mr-2" />
                        <span className="text-2xl font-bold text-blue-600">{university.rank}</span>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {university.rankingSource}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Ready to Join Our Success Stories?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto font-light">
                Let our expert counselors guide you to your dream university. Start your application journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-2xl hover:bg-gray-50 hover:shadow-xl transition-all duration-500 font-bold text-lg tracking-wide transform hover:-translate-y-1">
                  <GraduationCap className="mr-3 h-5 w-5" />
                  Start Your Application
                </button>
                <button className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-blue-700 transition-all duration-500 font-bold text-lg tracking-wide transform hover:-translate-y-1">
                  <TrendingUp className="mr-3 h-5 w-5" />
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniversityAdmissions
