'use client'

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 border border-white border-opacity-10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 border border-white border-opacity-5 rounded-full animate-spin-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white border-opacity-20 rotate-45 animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-8">
              <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-6 block">
                Our Story
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
                Crafting
                <br />
                <span className="italic font-extralight">Excellence</span>
              </h1>
              <div className="w-20 h-px bg-white mb-8"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                Born from a passion for precision engineering and timeless design, 
                Nextr represents the perfect fusion of functionality and aesthetic excellence.
              </p>
              <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed">
                Since our founding, we've been committed to creating accessories that don't just protect 
                your devices—they elevate your entire digital experience through thoughtful design and 
                uncompromising quality.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-light text-white mb-2">2019</div>
                <div className="text-gray-400 text-sm font-light">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white mb-2">50K+</div>
                <div className="text-gray-400 text-sm font-light">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white mb-2">15</div>
                <div className="text-gray-400 text-sm font-light">Countries</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-900">
              {/* Abstract Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900"></div>
              
              {/* Geometric Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Central Logo Concept */}
                  <div className="w-32 h-32 border-2 border-white border-opacity-30 rounded-lg transform rotate-12 absolute"></div>
                  <div className="w-32 h-32 border-2 border-white border-opacity-20 rounded-lg transform -rotate-12"></div>
                  
                  {/* Nextr Brand Mark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-2xl font-light tracking-widest">NEXTR</div>
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white border-opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white border-opacity-20"></div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -bottom-8 -left-8 bg-black border border-gray-700 rounded-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">Design Awards</h5>
                  <p className="text-gray-400 text-xs">5+ International recognitions</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-black border border-gray-700 rounded-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">Quality Certified</h5>
                  <p className="text-gray-400 text-xs">ISO 9001:2015 Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default AboutHero