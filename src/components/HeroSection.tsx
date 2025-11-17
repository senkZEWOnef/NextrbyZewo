'use client'

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight leading-tight">
            Premium
            <br />
            <span className="italic font-extralight">Protection</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Elevate your devices with meticulously crafted accessories that blend form and function seamlessly.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-black px-8 py-3 rounded-sm text-lg font-medium hover:bg-gray-100 transition-colors min-w-[200px]">
            Explore Collection
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-sm text-lg font-light hover:bg-white hover:text-black transition-colors min-w-[200px]">
            Watch Film
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection