'use client'

import { useState, useMemo } from 'react'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  brand: string
  features: string[]
  rating: number
  reviews: number
  isNew?: boolean
  isBestseller?: boolean
}

interface ProductGridProps {
  filters: {
    categories: string[]
    priceRange: number[]
    brands: string[]
    features: string[]
  }
}

const ProductGrid = ({ filters }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState('featured')

  const products: Product[] = [
    {
      id: '1',
      name: 'Elite MagSafe Case',
      price: 89,
      originalPrice: 109,
      image: '/api/placeholder/300/400',
      category: 'phone-cases',
      brand: 'nextr',
      features: ['wireless-charging', 'drop-protection', 'magnetic'],
      rating: 4.9,
      reviews: 234,
      isNew: true
    },
    {
      id: '2',
      name: 'Wireless Power Station',
      price: 149,
      image: '/api/placeholder/300/400',
      category: 'wireless-chargers',
      brand: 'nextr',
      features: ['fast-charging', 'wireless-charging'],
      rating: 4.8,
      reviews: 156,
      isBestseller: true
    },
    {
      id: '3',
      name: 'Crystal Shield Pro',
      price: 39,
      image: '/api/placeholder/300/400',
      category: 'screen-protectors',
      brand: 'premium-tech',
      features: ['drop-protection', 'water-resistant'],
      rating: 4.7,
      reviews: 89
    },
    {
      id: '4',
      name: 'Magnetic Car Mount',
      price: 69,
      image: '/api/placeholder/300/400',
      category: 'mounts-stands',
      brand: 'elite-accessories',
      features: ['magnetic'],
      rating: 4.6,
      reviews: 72
    },
    {
      id: '5',
      name: 'Ultra Fast Cable',
      price: 29,
      originalPrice: 39,
      image: '/api/placeholder/300/400',
      category: 'cables-adapters',
      brand: 'modern-mobile',
      features: ['fast-charging'],
      rating: 4.5,
      reviews: 145
    },
    {
      id: '6',
      name: 'Power Bank Pro',
      price: 119,
      image: '/api/placeholder/300/400',
      category: 'portable-batteries',
      brand: 'nextr',
      features: ['fast-charging', 'wireless-charging'],
      rating: 4.8,
      reviews: 203,
      isBestseller: true
    },
    {
      id: '7',
      name: 'Eco Leather Case',
      price: 79,
      image: '/api/placeholder/300/400',
      category: 'phone-cases',
      brand: 'premium-tech',
      features: ['eco-friendly', 'drop-protection'],
      rating: 4.7,
      reviews: 98,
      isNew: true
    },
    {
      id: '8',
      name: 'Desktop Stand Elite',
      price: 99,
      image: '/api/placeholder/300/400',
      category: 'mounts-stands',
      brand: 'nextr',
      features: ['magnetic', 'wireless-charging'],
      rating: 4.9,
      reviews: 167
    }
  ]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false
      }

      // Features filter
      if (filters.features.length > 0 && !filters.features.some(feature => product.features.includes(feature))) {
        return false
      }

      return true
    })
  }, [filters])

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating)
      case 'newest':
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      default:
        return sorted
    }
  }, [filteredProducts, sortBy])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div>
      {/* Sort and Results Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-gray-400 text-sm font-light">
            Showing {sortedProducts.length} of {products.length} products
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-sm font-light">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-white text-sm px-3 py-2 rounded-sm focus:border-gray-500 focus:outline-none font-light"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {sortedProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-light text-white mb-2">No products found</h3>
          <p className="text-gray-400 font-light">Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-900 rounded-sm aspect-[3/4] mb-4">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-white text-black text-xs px-2 py-1 rounded-sm font-medium">NEW</span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-sm font-medium">BESTSELLER</span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Product Image Placeholder */}
                <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>

                {/* Quick Add Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white text-black py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Brand */}
                <p className="text-gray-500 text-xs font-light uppercase tracking-wide">
                  {product.brand.replace('-', ' ')}
                </p>

                {/* Product Name */}
                <h3 className="text-white font-light text-lg group-hover:text-gray-300 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                  )}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-sm">
                      {feature.replace('-', ' ')}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="text-xs text-gray-500">+{product.features.length - 2}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGrid