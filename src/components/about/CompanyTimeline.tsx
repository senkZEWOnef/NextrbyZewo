'use client'

import { useState } from 'react'

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024)

  const milestones = [
    {
      year: 2019,
      title: 'The Beginning',
      subtitle: 'Foundation & Vision',
      description: 'Nextr was founded with a simple mission: to create accessories that elevate the relationship between people and their devices.',
      achievements: [
        'Company incorporated',
        'Initial team of 3 co-founders',
        'First prototype developed',
        'Seed funding secured'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      year: 2020,
      title: 'First Launch',
      subtitle: 'Market Entry',
      description: 'Despite global challenges, we launched our inaugural collection of premium phone cases, setting new standards for quality and design.',
      achievements: [
        'Signature Series launched',
        'First 1,000 customers',
        'Direct-to-consumer platform',
        'Design team expansion'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      year: 2021,
      title: 'Recognition',
      subtitle: 'Industry Awards',
      description: 'Our innovative approach to accessory design gained recognition from industry leaders and design communities worldwide.',
      achievements: [
        'Good Design Award winner',
        'Featured in major publications',
        'International shipping launched',
        'Wireless charging integration'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      year: 2022,
      title: 'Expansion',
      subtitle: 'Product Diversification',
      description: 'We expanded beyond phone cases to create a comprehensive ecosystem of premium accessories for modern lifestyles.',
      achievements: [
        'Wireless charger line launch',
        'Screen protector innovation',
        'Sustainable materials initiative',
        'Team grew to 25 members'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      year: 2023,
      title: 'Innovation',
      subtitle: 'Technology Leadership',
      description: 'Breakthrough innovations in materials science and manufacturing processes established Nextr as a technology leader.',
      achievements: [
        'Carbon fiber collection',
        'Magnetic technology patents',
        'Smart accessory ecosystem',
        'Global retail partnerships'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      year: 2024,
      title: 'Global Reach',
      subtitle: 'International Expansion',
      description: 'Today, Nextr serves customers in 15 countries with a complete range of premium accessories designed for the future.',
      achievements: [
        '50,000+ happy customers',
        '15 international markets',
        'Sustainability certification',
        'Next-gen product research'
      ],
      image: '/api/placeholder/400/300',
      isActive: true
    }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-6 block">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            Five Years of
            <br />
            <span className="italic font-extralight">Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            From a small team with big dreams to an international brand trusted by thousands, 
            our journey has been defined by continuous innovation and unwavering commitment to quality.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {milestones.map((milestone) => (
              <button
                key={milestone.year}
                onClick={() => setActiveYear(milestone.year)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                  activeYear === milestone.year
                    ? 'border-white bg-white text-black'
                    : 'border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300'
                }`}
              >
                <div className="text-lg font-light">{milestone.year}</div>
              </button>
            ))}
          </div>

          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-800"></div>
            <div className="flex justify-between items-center relative">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      activeYear === milestone.year
                        ? 'border-white bg-white'
                        : milestone.year <= activeYear
                        ? 'border-gray-400 bg-gray-400'
                        : 'border-gray-600 bg-black'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className={`transition-all duration-500 ${
                  activeYear === milestone.year
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-8 absolute'
                }`}
              >
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-light text-white mr-4">{milestone.year}</span>
                    {milestone.isActive && (
                      <span className="bg-green-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-2 block">
                    {milestone.subtitle}
                  </span>
                  <h3 className="text-3xl font-light text-white mb-4">
                    {milestone.title}
                  </h3>
                  <div className="w-16 h-px bg-white mb-6"></div>
                  <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                    {milestone.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-medium mb-4">Key Achievements</h4>
                  {milestone.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-400 font-light">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-gray-900 border border-gray-800 overflow-hidden">
              {/* Timeline Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-light text-white mb-4">
                    {activeYear}
                  </div>
                  <div className="text-gray-400 font-light">
                    {milestones.find(m => m.year === activeYear)?.title}
                  </div>
                  
                  {/* Progress Visualization */}
                  <div className="mt-8">
                    <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
                      <div 
                        className="h-full bg-white transition-all duration-1000"
                        style={{
                          width: `${((milestones.findIndex(m => m.year === activeYear) + 1) / milestones.length) * 100}%`
                        }}
                      ></div>
                    </div>
                    <div className="text-gray-500 text-sm mt-2">
                      {milestones.findIndex(m => m.year === activeYear) + 1} of {milestones.length} milestones
                    </div>
                  </div>
                </div>
              </div>

              {/* Year Markers */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between text-gray-500 text-xs">
                  <span>2019</span>
                  <span>Present</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-black border border-gray-700 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-light text-white">5</div>
                <div className="text-gray-400 text-xs">Years Strong</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-black border border-gray-700 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-light text-white">50K+</div>
                <div className="text-gray-400 text-xs">Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-12 border border-gray-800">
            <h3 className="text-2xl font-light text-white mb-4">Looking Ahead</h3>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
              As we look toward the future, we're excited about the possibilities that lie ahead. 
              Our roadmap includes breakthrough innovations in smart accessories, sustainable materials, 
              and seamless integration with emerging technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">2025</div>
                <div className="text-gray-400 font-light">Smart Ecosystem</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">2026</div>
                <div className="text-gray-400 font-light">Global Expansion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">2027</div>
                <div className="text-gray-400 font-light">Next-Gen Materials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyTimeline