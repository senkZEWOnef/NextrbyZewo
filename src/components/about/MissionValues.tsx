'use client'

const MissionValues = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible through relentless research and development, creating tomorrow\'s solutions today.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Craftsmanship',
      description: 'Every product is meticulously designed and engineered with attention to detail that honors traditional artisanship.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Sustainability',
      description: 'Committed to environmental responsibility through sustainable materials and ethical manufacturing practices.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance',
      description: 'Engineering products that exceed expectations, delivering reliability and excellence in every interaction.'
    }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-6 block">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            To elevate the relationship between
            <br />
            <span className="italic font-extralight">people and technology</span>
          </h2>
          <div className="w-20 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            We believe that technology should seamlessly integrate into your life, enhancing rather than 
            complicating your daily experiences. Through thoughtful design and premium materials, we create 
            accessories that feel like natural extensions of both you and your devices.
          </p>
        </div>

        {/* Values Grid */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
              Our Values
            </h3>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <div className="text-white mb-6 group-hover:text-gray-200 transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-light text-white mb-4 group-hover:text-gray-200 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
              Design
              <br />
              <span className="italic font-extralight">Philosophy</span>
            </h3>
            <div className="w-16 h-px bg-white mb-6"></div>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
              We believe that true elegance lies in simplicity. Our design philosophy centers around the 
              principle of "invisible complexity"—sophisticated engineering that disappears into intuitive, 
              beautiful forms.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Each product undergoes hundreds of iterations, with every curve, material choice, and 
              detail carefully considered to create accessories that feel inevitable—as if they were 
              always meant to exist.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg bg-gray-900 border border-gray-800 overflow-hidden">
              {/* Abstract Design Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Golden Ratio Spiral Representation */}
                  <div className="absolute inset-0">
                    <div className="w-32 h-32 border border-white border-opacity-20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-20 h-20 border border-white border-opacity-30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-8 h-8 border border-white border-opacity-40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-px bg-white absolute top-1/2"></div>
                    <div className="h-full w-px bg-white absolute left-1/2"></div>
                    <div className="w-full h-px bg-white absolute top-1/3"></div>
                    <div className="w-full h-px bg-white absolute top-2/3"></div>
                    <div className="h-full w-px bg-white absolute left-1/3"></div>
                    <div className="h-full w-px bg-white absolute left-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Corner Details */}
              <div className="absolute top-4 left-4 text-white text-xs font-light opacity-40">φ 1.618</div>
              <div className="absolute bottom-4 right-4 text-white text-xs font-light opacity-40">PRECISION</div>
            </div>

            {/* Floating Quote */}
            <div className="absolute -bottom-6 -left-6 bg-black border border-gray-700 rounded-lg p-6 max-w-xs">
              <blockquote className="text-white text-sm font-light italic leading-relaxed">
                "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
              </blockquote>
              <cite className="text-gray-400 text-xs mt-2 block">— Antoine de Saint-Exupéry</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionValues