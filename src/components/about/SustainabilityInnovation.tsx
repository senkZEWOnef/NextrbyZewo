'use client'

const SustainabilityInnovation = () => {
  const sustainabilityMetrics = [
    {
      value: '100%',
      label: 'Recyclable Packaging',
      description: 'All packaging materials are fully recyclable or biodegradable'
    },
    {
      value: '75%',
      label: 'Sustainable Materials',
      description: 'Three-quarters of our products use eco-friendly materials'
    },
    {
      value: 'Carbon Neutral',
      label: 'Shipping',
      description: 'All shipments are carbon-neutral through certified offset programs'
    },
    {
      value: '5 Years',
      label: 'Product Warranty',
      description: 'Extended warranties reduce waste through longevity'
    }
  ]

  const innovations = [
    {
      title: 'Bio-Based Polymers',
      description: 'Revolutionary plant-based materials that match traditional plastics in durability while being fully biodegradable.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      status: 'In Production'
    },
    {
      title: 'Magnetic Alignment Technology',
      description: 'Precision magnetic systems that ensure perfect device alignment while maintaining wireless charging efficiency.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      status: 'Patent Pending'
    },
    {
      title: 'Self-Healing Materials',
      description: 'Advanced polymers that can repair minor scratches and wear automatically, extending product lifespan.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      status: 'Research Phase'
    },
    {
      title: 'Smart Temperature Control',
      description: 'Integrated thermal management systems that protect devices from overheating during charging and use.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      status: 'Coming 2025'
    }
  ]

  const certifications = [
    { name: 'ISO 14001', description: 'Environmental Management' },
    { name: 'B-Corp Certified', description: 'Social & Environmental Performance' },
    { name: 'GREENGUARD', description: 'Low Chemical Emissions' },
    { name: 'Carbon Trust', description: 'Carbon Footprint Verified' }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Sustainability Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-6 block">
              Sustainability
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Responsibility
              <br />
              <span className="italic font-extralight">by Design</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              We believe luxury and sustainability are not mutually exclusive. Every decision we make 
              considers environmental impact, from material selection to end-of-life product cycling.
            </p>
          </div>

          {/* Sustainability Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sustainabilityMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <div className="text-4xl font-light text-white mb-4 group-hover:text-gray-200 transition-colors">
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-light text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {metric.label}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Commitment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
                Environmental
                <br />
                <span className="italic font-extralight">Commitment</span>
              </h3>
              <div className="w-16 h-px bg-white mb-6"></div>
              <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                Our commitment to the environment goes beyond compliance. We actively seek innovative 
                ways to reduce our footprint while maintaining the premium quality our customers expect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Circular Economy</h4>
                    <p className="text-gray-400 text-sm font-light">Design for disassembly and material recovery at product end-of-life.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Renewable Energy</h4>
                    <p className="text-gray-400 text-sm font-light">100% renewable energy in our facilities and partner manufacturing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Supply Chain Transparency</h4>
                    <p className="text-gray-400 text-sm font-light">Full traceability and ethical sourcing of all materials and components.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg bg-gray-900 border border-gray-800 overflow-hidden">
                {/* Environmental Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Earth Representation */}
                    <div className="w-32 h-32 border-2 border-green-400 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-green-900 opacity-30"></div>
                      
                      {/* Continents */}
                      <div className="absolute top-4 left-4 w-8 h-6 bg-green-400 opacity-40 rounded"></div>
                      <div className="absolute bottom-6 right-4 w-6 h-8 bg-green-400 opacity-40 rounded"></div>
                      <div className="absolute top-8 right-6 w-4 h-4 bg-green-400 opacity-40 rounded"></div>
                    </div>

                    {/* Orbiting Elements */}
                    <div className="absolute inset-0 animate-spin-slow">
                      <div className="w-4 h-4 bg-white rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full absolute top-1/2 -right-2 transform -translate-y-1/2"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full absolute top-1/2 -left-2 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Sustainability Icons */}
                <div className="absolute top-4 left-4 text-green-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4 text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Certifications */}
              <div className="absolute -bottom-6 -left-6 bg-black border border-gray-700 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-green-400 text-sm font-medium">Certified</div>
                  <div className="text-gray-400 text-xs">B-Corporation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 bg-gray-900 rounded-lg border border-gray-800">
                <div className="text-white text-sm font-medium mb-1">{cert.name}</div>
                <div className="text-gray-500 text-xs">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-6 block">
              Innovation
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Future
              <br />
              <span className="italic font-extralight">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Our R&D team continuously explores breakthrough technologies that will define the next 
              generation of premium accessories, always with sustainability at the forefront.
            </p>
          </div>

          {/* Innovation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <div className="flex items-start mb-6">
                    <div className="text-white group-hover:text-gray-300 transition-colors mr-4 mt-1">
                      {innovation.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-light text-white group-hover:text-gray-200 transition-colors">
                          {innovation.title}
                        </h3>
                        <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                          {innovation.status}
                        </span>
                      </div>
                      <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                        {innovation.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Innovation CTA */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-12 border border-gray-800">
              <h3 className="text-2xl font-light text-white mb-4">Partnership Opportunities</h3>
              <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                We collaborate with research institutions, material scientists, and technology partners 
                to push the boundaries of what's possible in accessory design and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors">
                  Research Partnerships
                </button>
                <button className="border border-white text-white px-8 py-3 text-lg font-light hover:bg-white hover:text-black transition-colors">
                  Innovation Lab
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SustainabilityInnovation