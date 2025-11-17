'use client'

import { useState } from 'react'

interface FilterSidebarProps {
  activeFilters: {
    categories: string[]
    priceRange: number[]
    brands: string[]
    features: string[]
  }
  onFilterChange: (filterType: string, value: any) => void
}

const FilterSidebar = ({ activeFilters, onFilterChange }: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    brands: true,
    features: true
  })

  const categories = [
    { id: 'phone-cases', name: 'Phone Cases', count: 45 },
    { id: 'wireless-chargers', name: 'Wireless Chargers', count: 23 },
    { id: 'screen-protectors', name: 'Screen Protectors', count: 34 },
    { id: 'mounts-stands', name: 'Mounts & Stands', count: 18 },
    { id: 'cables-adapters', name: 'Cables & Adapters', count: 29 },
    { id: 'portable-batteries', name: 'Portable Batteries', count: 16 }
  ]

  const brands = [
    { id: 'nextr', name: 'Nextr', count: 67 },
    { id: 'premium-tech', name: 'PremiumTech', count: 34 },
    { id: 'elite-accessories', name: 'Elite Accessories', count: 28 },
    { id: 'modern-mobile', name: 'Modern Mobile', count: 19 }
  ]

  const features = [
    { id: 'wireless-charging', name: 'Wireless Charging Compatible' },
    { id: 'drop-protection', name: 'Drop Protection' },
    { id: 'water-resistant', name: 'Water Resistant' },
    { id: 'fast-charging', name: 'Fast Charging' },
    { id: 'magnetic', name: 'Magnetic Mount' },
    { id: 'eco-friendly', name: 'Eco-Friendly Materials' }
  ]

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCategoryChange = (categoryId: string) => {
    const newCategories = activeFilters.categories.includes(categoryId)
      ? activeFilters.categories.filter(id => id !== categoryId)
      : [...activeFilters.categories, categoryId]
    onFilterChange('categories', newCategories)
  }

  const handleBrandChange = (brandId: string) => {
    const newBrands = activeFilters.brands.includes(brandId)
      ? activeFilters.brands.filter(id => id !== brandId)
      : [...activeFilters.brands, brandId]
    onFilterChange('brands', newBrands)
  }

  const handleFeatureChange = (featureId: string) => {
    const newFeatures = activeFilters.features.includes(featureId)
      ? activeFilters.features.filter(id => id !== featureId)
      : [...activeFilters.features, featureId]
    onFilterChange('features', newFeatures)
  }

  const clearAllFilters = () => {
    onFilterChange('categories', [])
    onFilterChange('brands', [])
    onFilterChange('features', [])
    onFilterChange('priceRange', [0, 1000])
  }

  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-light text-white">Filters</h2>
        <button 
          onClick={clearAllFilters}
          className="text-sm text-gray-400 hover:text-white transition-colors font-light"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-800 pb-6">
        <button
          onClick={() => toggleSection('categories')}
          className="flex justify-between items-center w-full text-left"
        >
          <h3 className="text-white font-light">Categories</h3>
          <svg 
            className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedSections.categories ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.categories && (
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={activeFilters.categories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 border border-gray-600 rounded-sm mr-3 flex items-center justify-center transition-colors ${
                  activeFilters.categories.includes(category.id) ? 'bg-white border-white' : 'group-hover:border-gray-500'
                }`}>
                  {activeFilters.categories.includes(category.id) && (
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-300 text-sm font-light group-hover:text-white transition-colors flex-1">
                  {category.name}
                </span>
                <span className="text-gray-500 text-xs">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b border-gray-800 pb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex justify-between items-center w-full text-left"
        >
          <h3 className="text-white font-light">Price Range</h3>
          <svg 
            className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.price && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={activeFilters.priceRange[0]}
                onChange={(e) => onFilterChange('priceRange', [Number(e.target.value), activeFilters.priceRange[1]])}
                className="w-full bg-gray-900 border border-gray-700 text-white text-sm p-2 rounded-sm focus:border-gray-500 focus:outline-none"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                value={activeFilters.priceRange[1]}
                onChange={(e) => onFilterChange('priceRange', [activeFilters.priceRange[0], Number(e.target.value)])}
                className="w-full bg-gray-900 border border-gray-700 text-white text-sm p-2 rounded-sm focus:border-gray-500 focus:outline-none"
              />
            </div>
            <div className="text-xs text-gray-500">
              ${activeFilters.priceRange[0]} - ${activeFilters.priceRange[1]}
            </div>
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="border-b border-gray-800 pb-6">
        <button
          onClick={() => toggleSection('brands')}
          className="flex justify-between items-center w-full text-left"
        >
          <h3 className="text-white font-light">Brands</h3>
          <svg 
            className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedSections.brands ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.brands && (
          <div className="mt-4 space-y-3">
            {brands.map((brand) => (
              <label key={brand.id} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={activeFilters.brands.includes(brand.id)}
                  onChange={() => handleBrandChange(brand.id)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 border border-gray-600 rounded-sm mr-3 flex items-center justify-center transition-colors ${
                  activeFilters.brands.includes(brand.id) ? 'bg-white border-white' : 'group-hover:border-gray-500'
                }`}>
                  {activeFilters.brands.includes(brand.id) && (
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-300 text-sm font-light group-hover:text-white transition-colors flex-1">
                  {brand.name}
                </span>
                <span className="text-gray-500 text-xs">({brand.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Features */}
      <div>
        <button
          onClick={() => toggleSection('features')}
          className="flex justify-between items-center w-full text-left"
        >
          <h3 className="text-white font-light">Features</h3>
          <svg 
            className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedSections.features ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSections.features && (
          <div className="mt-4 space-y-3">
            {features.map((feature) => (
              <label key={feature.id} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={activeFilters.features.includes(feature.id)}
                  onChange={() => handleFeatureChange(feature.id)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 border border-gray-600 rounded-sm mr-3 flex items-center justify-center transition-colors ${
                  activeFilters.features.includes(feature.id) ? 'bg-white border-white' : 'group-hover:border-gray-500'
                }`}>
                  {activeFilters.features.includes(feature.id) && (
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-300 text-sm font-light group-hover:text-white transition-colors">
                  {feature.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterSidebar