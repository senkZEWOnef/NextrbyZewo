'use client'

const CollectionHero = () => {
  return (
    <section className="relative min-h-[80vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-6 tracking-tight leading-tight">
            Collections
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Curated ensembles of premium accessories designed to elevate your digital lifestyle. 
            Each collection tells a story of innovation, style, and uncompromising quality.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-white text-black px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-colors min-w-[220px] group">
            <span className="flex items-center justify-center">
              Explore All Collections
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="border border-white text-white px-10 py-4 text-lg font-light hover:bg-white hover:text-black transition-colors min-w-[220px]">
            Watch the Story
          </button>
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
    </section>
  )
}

export default CollectionHero