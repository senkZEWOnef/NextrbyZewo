'use client'

const ProductShowcase = () => {
  const collections = [
    {
      title: "Phone Cases",
      description: "Precision-engineered protection",
      image: "/api/placeholder/600/800",
      category: "iPhone & Android"
    },
    {
      title: "Wireless Chargers",
      description: "Effortless power, elegant design",
      image: "/api/placeholder/600/800",
      category: "Charging Solutions"
    },
    {
      title: "Screen Protection",
      description: "Crystal clear, military-grade",
      image: "/api/placeholder/600/800",
      category: "Display Guard"
    },
    {
      title: "Mounts & Stands",
      description: "Perfect angles, premium materials",
      image: "/api/placeholder/600/800",
      category: "Accessories"
    }
  ]

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Featured
            <br />
            <span className="italic font-extralight">Collections</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Discover our meticulously curated selection of premium accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-900 rounded-sm aspect-[3/4] mb-6">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-gray-300 text-sm font-light mb-2">{item.category}</p>
                  <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 font-light">{item.description}</p>
                </div>
                <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-light">Explore Collection</span>
                <svg className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-white text-black px-8 py-3 rounded-sm text-lg font-medium hover:bg-gray-100 transition-colors">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase