'use client'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Geometric Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Dynamic Light Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-600/8 to-blue-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Brand Mark */}
        <div className="mb-12">
          {/* nexr Logo with Letter Spacing */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extralight text-white tracking-[0.2em] mb-4 select-none">
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 cursor-default">n</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-75 cursor-default">e</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-150 cursor-default">x</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-225 cursor-default">r</span>
            </h1>
            
            {/* Tagline */}
            <div className="relative mb-8">
              <div className="flex items-center justify-center space-x-4 text-lg sm:text-xl md:text-2xl font-light text-gray-400 tracking-[0.3em] uppercase">
                <span className="animate-fade-in opacity-0 animation-delay-500">Reliably.</span>
                <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                <span className="animate-fade-in opacity-0 animation-delay-1000">Redefined.</span>
              </div>
            </div>
          </div>
          
          {/* Separator Line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-60"></div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-4">
            Where innovation meets dependability. Premium accessories engineered for the modern era.
          </p>
          
          <p className="text-base sm:text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Every product designed with precision, crafted with care, and built to last.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-white text-black px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300 min-w-[240px] transform hover:scale-105 hover:shadow-2xl">
            <span className="flex items-center justify-center">
              Explore nexr
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="group border border-gray-600 text-white px-10 py-4 text-lg font-light hover:border-white hover:bg-white hover:text-black transition-all duration-300 min-w-[240px] transform hover:scale-105">
            <span className="flex items-center justify-center">
              Our Story
              <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 010 5H9m0-5H7.5a2.5 2.5 0 010 5H9m0-5v5" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-xs text-gray-500 uppercase tracking-widest font-light">Scroll</span>
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}

export default HeroSection