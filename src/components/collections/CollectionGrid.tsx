'use client'

import Link from 'next/link'

const CollectionGrid = () => {
  const allCollections = [
    {
      id: 'professional-series',
      title: 'Professional Series',
      subtitle: 'Business Ready',
      description: 'Sophisticated accessories for the modern professional.',
      image: '/api/placeholder/400/500',
      productCount: 15,
      startingPrice: 79,
      theme: 'dark'
    },
    {
      id: 'sport-edition',
      title: 'Sport Edition',
      subtitle: 'Active Lifestyle',
      description: 'Rugged protection designed for active individuals.',
      image: '/api/placeholder/400/500',
      productCount: 10,
      startingPrice: 69,
      theme: 'orange'
    },
    {
      id: 'luxury-leather',
      title: 'Luxury Leather',
      subtitle: 'Handcrafted Excellence',
      description: 'Premium leather accessories with timeless appeal.',
      image: '/api/placeholder/400/500',
      productCount: 8,
      startingPrice: 129,
      theme: 'brown'
    },
    {
      id: 'tech-forward',
      title: 'Tech Forward',
      subtitle: 'Innovation First',
      description: 'Cutting-edge technology meets elegant design.',
      image: '/api/placeholder/400/500',
      productCount: 12,
      startingPrice: 99,
      theme: 'blue'
    },
    {
      id: 'eco-conscious',
      title: 'Eco Conscious',
      subtitle: 'Sustainable Choice',
      description: 'Environment-friendly materials without compromise.',
      image: '/api/placeholder/400/500',
      productCount: 9,
      startingPrice: 89,
      theme: 'green'
    },
    {
      id: 'limited-edition',
      title: 'Artist Collaborations',
      subtitle: 'Limited Edition',
      description: 'Exclusive designs by renowned contemporary artists.',
      image: '/api/placeholder/400/500',
      productCount: 6,
      startingPrice: 199,
      theme: 'purple',
      isLimited: true
    }
  ]

  const getThemeColors = (theme: string) => {
    const themes = {
      dark: 'from-gray-900 to-black',
      orange: 'from-orange-900 to-red-800',
      brown: 'from-amber-900 to-orange-800',
      blue: 'from-blue-900 to-indigo-800',
      green: 'from-emerald-900 to-teal-800',
      purple: 'from-purple-900 to-pink-800'
    }
    return themes[theme as keyof typeof themes] || themes.dark
  }

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            All Collections
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Discover our complete range of meticulously crafted accessory collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCollections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-gray-900 rounded-lg aspect-[3/4] cursor-pointer">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getThemeColors(collection.theme)} opacity-30`}></div>
                
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500"></div>
                
                {/* Limited Badge */}
                {collection.isLimited && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                      LIMITED
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <p className="text-xs font-light uppercase tracking-widest mb-2 opacity-80">
                      {collection.subtitle}
                    </p>
                    <h3 className="text-2xl font-light mb-2 group-hover:text-gray-200 transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed mb-4 opacity-90">
                      {collection.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium">From ${collection.startingPrice}</span>
                      <span className="text-sm opacity-75">{collection.productCount} items</span>
                    </div>
                    
                    <div className="flex items-center text-white group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-sm font-light mr-2">View Collection</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-light text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 font-light mb-6">
              Be the first to know about new collections, limited releases, and exclusive collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light"
              />
              <button className="bg-white text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionGrid