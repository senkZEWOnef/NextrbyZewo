'use client'

import { useEffect, useState } from 'react'

interface ProductPerformance {
  id: string
  name: string
  category: string
  totalSold: number
  revenue: number
  averageRating: number
  stockLevel: number
  profitMargin: number
  trend: 'up' | 'down' | 'stable'
}

const ProductAnalytics = () => {
  const [products, setProducts] = useState<ProductPerformance[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState('revenue')

  useEffect(() => {
    loadProductData()
  }, [])

  const loadProductData = async () => {
    setIsLoading(true)
    try {
      // Mock data - replace with actual API calls
      setTimeout(() => {
        const mockProducts: ProductPerformance[] = [
          {
            id: '1',
            name: 'Premium iPhone 15 Case',
            category: 'phone-cases',
            totalSold: 156,
            revenue: 7800,
            averageRating: 4.8,
            stockLevel: 45,
            profitMargin: 42,
            trend: 'up'
          },
          {
            id: '2',
            name: 'Wireless Charging Pad Pro',
            category: 'wireless-chargers',
            totalSold: 98,
            revenue: 5880,
            averageRating: 4.6,
            stockLevel: 23,
            profitMargin: 38,
            trend: 'up'
          },
          {
            id: '3',
            name: 'Crystal Clear Screen Protector',
            category: 'screen-protectors',
            totalSold: 203,
            revenue: 4060,
            averageRating: 4.4,
            stockLevel: 78,
            profitMargin: 65,
            trend: 'stable'
          },
          {
            id: '4',
            name: 'USB-C to Lightning Cable',
            category: 'cables',
            totalSold: 145,
            revenue: 2900,
            averageRating: 4.2,
            stockLevel: 156,
            profitMargin: 58,
            trend: 'down'
          },
          {
            id: '5',
            name: 'Adjustable Phone Stand',
            category: 'stands',
            totalSold: 67,
            revenue: 2010,
            averageRating: 4.7,
            stockLevel: 34,
            profitMargin: 45,
            trend: 'up'
          }
        ]
        setProducts(mockProducts)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error loading product data:', error)
      setIsLoading(false)
    }
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'revenue':
        return b.revenue - a.revenue
      case 'sold':
        return b.totalSold - a.totalSold
      case 'rating':
        return b.averageRating - a.averageRating
      case 'profit':
        return b.profitMargin - a.profitMargin
      default:
        return 0
    }
  })

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '📈'
      case 'down':
        return '📉'
      case 'stable':
        return '➡️'
      default:
        return '➡️'
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-400'
      case 'down':
        return 'text-red-400'
      case 'stable':
        return 'text-gray-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStockColor = (stock: number) => {
    if (stock > 50) return 'text-green-400'
    if (stock > 20) return 'text-yellow-400'
    return 'text-red-400'
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg animate-pulse">
              <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-600 rounded w-3/4"></div>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg animate-pulse">
          <div className="p-4 h-96 bg-gray-600 rounded"></div>
        </div>
      </div>
    )
  }

  const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0)
  const totalSold = products.reduce((sum, p) => sum + p.totalSold, 0)
  const averageRating = products.reduce((sum, p) => sum + p.averageRating, 0) / products.length

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Product Revenue</p>
              <p className="text-2xl font-semibold text-white">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="text-green-600">💰</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Units Sold</p>
              <p className="text-2xl font-semibold text-white">{totalSold.toLocaleString()}</p>
            </div>
            <div className="text-blue-600">📦</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Avg Rating</p>
              <p className="text-2xl font-semibold text-white">{averageRating.toFixed(1)} ⭐</p>
            </div>
            <div className="text-yellow-600">⭐</div>
          </div>
        </div>
      </div>

      {/* Product Performance Table */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
        <div className="px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-white">Product Performance</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="revenue">Sort by Revenue</option>
              <option value="sold">Sort by Units Sold</option>
              <option value="rating">Sort by Rating</option>
              <option value="profit">Sort by Profit Margin</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Units Sold
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Profit Margin
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {sortedProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-white">
                        {product.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {product.category.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    {product.totalSold}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-white">
                    ${product.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    <div className="flex items-center">
                      <span>{product.averageRating}</span>
                      <span className="ml-1 text-yellow-400">⭐</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`font-medium ${getStockColor(product.stockLevel)}`}>
                      {product.stockLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-600 rounded-full h-2 mr-2">
                        <div
                          className={`h-full rounded-full ${
                            product.profitMargin > 50 ? 'bg-green-500' :
                            product.profitMargin > 35 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${(product.profitMargin / 70) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium">{product.profitMargin}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={getTrendColor(product.trend)}>
                      {getTrendIcon(product.trend)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
        <h4 className="text-lg font-medium text-white mb-4">Category Performance</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from(new Set(products.map(p => p.category))).map(category => {
            const categoryProducts = products.filter(p => p.category === category)
            const categoryRevenue = categoryProducts.reduce((sum, p) => sum + p.revenue, 0)
            const categoryUnits = categoryProducts.reduce((sum, p) => sum + p.totalSold, 0)
            
            return (
              <div key={category} className="border border-gray-700 rounded-lg p-4">
                <h5 className="font-medium text-white mb-2">
                  {category.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revenue:</span>
                    <span className="font-medium text-white">${categoryRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Units Sold:</span>
                    <span className="font-medium text-white">{categoryUnits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Products:</span>
                    <span className="font-medium text-white">{categoryProducts.length}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductAnalytics