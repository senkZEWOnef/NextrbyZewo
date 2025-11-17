'use client'

import Link from 'next/link'

const FeaturedCollections = () => {
  const featuredCollections = [
    {
      id: 'signature-series',
      title: 'Signature Series',
      subtitle: 'Premium Flagship Collection',
      description: 'Our most exclusive accessories crafted with premium materials and cutting-edge technology.',
      image: '/api/placeholder/800/600',
      productCount: 12,
      price: 'From $89',
      color: 'from-amber-900 to-yellow-600',
      textColor: 'text-yellow-100',
      isNew: true
    },
    {
      id: 'minimalist-pro',
      title: 'Minimalist Pro',
      subtitle: 'Clean Design Philosophy',
      description: 'Stripped-down elegance meets maximum functionality in this refined collection.',
      image: '/api/placeholder/800/600',
      productCount: 8,
      price: 'From $59',
      color: 'from-gray-800 to-gray-600',
      textColor: 'text-gray-100'
    },
    {
      id: 'carbon-elite',
      title: 'Carbon Elite',
      subtitle: 'Aerospace Innovation',
      description: 'Carbon fiber construction delivers unmatched strength and sophisticated aesthetics.',
      image: '/api/placeholder/800/600',
      productCount: 6,
      price: 'From $129',
      color: 'from-slate-900 to-slate-700',
      textColor: 'text-slate-100',
      isBestseller: true
    }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Featured
            <br />
            <span className="italic font-extralight">Collections</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Handpicked selections showcasing our finest craftsmanship and innovative design philosophy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCollections.map((collection, index) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900 h-[600px] cursor-pointer">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-20`}></div>
                
                {/* Badges */}
                <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                  {collection.isNew && (
                    <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                      NEW
                    </span>
                  )}
                  {collection.isBestseller && (
                    <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                      BESTSELLER
                    </span>
                  )}
                </div>

                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className={`${collection.textColor} mb-4`}>
                    <p className="text-sm font-light uppercase tracking-widest mb-2 opacity-90">
                      {collection.subtitle}
                    </p>
                    <h3 className="text-3xl font-light mb-3 group-hover:text-white transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed mb-4 opacity-90">
                      {collection.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-medium">{collection.price}</span>
                      <span className="text-sm opacity-75">{collection.productCount} pieces</span>
                    </div>
                    
                    <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-light mr-2">Explore Collection</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/shop"
            className="inline-flex items-center bg-white text-black px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-colors group"
          >
            View All Collections
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollections