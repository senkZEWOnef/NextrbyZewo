'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductGrid from '@/components/shop/ProductGrid'

const Shop = () => {
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRange: [0, 1000],
    brands: [],
    features: []
  })

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const handleFilterChange = (filterType: string, value: any) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
                Premium
                <br />
                <span className="italic font-extralight">Accessories</span>
              </h1>
              <p className="text-gray-400 font-light">Discover our curated collection</p>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="md:hidden bg-gray-800 text-white px-4 py-2 rounded-sm font-light hover:bg-gray-700 transition-colors"
            >
              Filters
            </button>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar Filters */}
            <div className="hidden lg:block lg:col-span-1">
              <FilterSidebar 
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-4">
              <ProductGrid filters={activeFilters} />
            </div>
          </div>

          {/* Mobile Filter Overlay */}
          {isMobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileFiltersOpen(false)}></div>
              <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-black border-l border-gray-800 overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-light text-white">Filters</h2>
                    <button
                      onClick={() => setIsMobileFiltersOpen(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <FilterSidebar 
                    activeFilters={activeFilters}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shop