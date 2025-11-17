'use client'

import { useEffect, useState } from 'react'

interface CustomerInsight {
  totalCustomers: number
  newCustomers: number
  returningCustomers: number
  averageLifetimeValue: number
  topRegions: { region: string; customers: number; revenue: number }[]
  customerSegments: { segment: string; count: number; avgSpend: number }[]
}

const CustomerAnalytics = () => {
  const [insights, setInsights] = useState<CustomerInsight | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadCustomerInsights()
  }, [])

  const loadCustomerInsights = async () => {
    setIsLoading(true)
    try {
      // Mock data - replace with actual API calls
      setTimeout(() => {
        const mockInsights: CustomerInsight = {
          totalCustomers: 892,
          newCustomers: 156,
          returningCustomers: 189,
          averageLifetimeValue: 347.50,
          topRegions: [
            { region: 'California', customers: 145, revenue: 28900 },
            { region: 'New York', customers: 98, revenue: 19600 },
            { region: 'Texas', customers: 87, revenue: 17400 },
            { region: 'Florida', customers: 76, revenue: 15200 },
            { region: 'Washington', customers: 65, revenue: 13000 }
          ],
          customerSegments: [
            { segment: 'High Value', count: 67, avgSpend: 850 },
            { segment: 'Regular', count: 234, avgSpend: 275 },
            { segment: 'Occasional', count: 345, avgSpend: 125 },
            { segment: 'One-time', count: 246, avgSpend: 89 }
          ]
        }
        setInsights(mockInsights)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error loading customer insights:', error)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg animate-pulse">
              <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-600 rounded w-3/4"></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg animate-pulse">
            <div className="h-64 bg-gray-600 rounded"></div>
          </div>
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg animate-pulse">
            <div className="h-64 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!insights) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Failed to load customer insights</p>
      </div>
    )
  }

  const customerRetentionRate = insights.totalCustomers > 0 
    ? (insights.returningCustomers / insights.totalCustomers) * 100 
    : 0

  return (
    <div className="space-y-6">
      {/* Key Customer Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Customers</p>
              <p className="text-2xl font-semibold text-white">{insights.totalCustomers.toLocaleString()}</p>
            </div>
            <div className="text-blue-600">👥</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">New Customers</p>
              <p className="text-2xl font-semibold text-white">{insights.newCustomers}</p>
              <p className="text-xs text-green-400">This month</p>
            </div>
            <div className="text-green-600">🆕</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Retention Rate</p>
              <p className="text-2xl font-semibold text-white">{customerRetentionRate.toFixed(1)}%</p>
              <p className="text-xs text-blue-400">Returning customers</p>
            </div>
            <div className="text-purple-600">🔄</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Avg Lifetime Value</p>
              <p className="text-2xl font-semibold text-white">${insights.averageLifetimeValue}</p>
            </div>
            <div className="text-orange-600">💎</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Regions */}
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <h4 className="text-lg font-medium text-white mb-4">Top Regions</h4>
          <div className="space-y-4">
            {insights.topRegions.map((region, index) => {
              const maxCustomers = Math.max(...insights.topRegions.map(r => r.customers))
              return (
                <div key={region.region} className="flex items-center space-x-4">
                  <div className="w-8 text-center">
                    <span className="text-sm font-medium text-gray-400">#{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-white">{region.region}</span>
                      <span className="text-sm text-gray-300">{region.customers} customers</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${(region.customers / maxCustomers) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      ${region.revenue.toLocaleString()} revenue
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Customer Segments */}
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <h4 className="text-lg font-medium text-white mb-4">Customer Segments</h4>
          <div className="space-y-4">
            {insights.customerSegments.map((segment) => {
              const percentage = (segment.count / insights.totalCustomers) * 100
              const getSegmentColor = (segment: string) => {
                switch (segment) {
                  case 'High Value': return 'bg-green-500'
                  case 'Regular': return 'bg-blue-500'
                  case 'Occasional': return 'bg-yellow-500'
                  case 'One-time': return 'bg-gray-500'
                  default: return 'bg-gray-500'
                }
              }
              
              return (
                <div key={segment.segment} className="border border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-white">{segment.segment}</h5>
                    <span className="text-sm text-gray-300">{percentage.toFixed(1)}%</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Count:</span>
                      <div className="font-medium text-white">{segment.count}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Avg Spend:</span>
                      <div className="font-medium text-white">${segment.avgSpend}</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 w-full bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getSegmentColor(segment.segment)} transition-all duration-700`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Customer Behavior Analysis */}
      <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
        <h4 className="text-lg font-medium text-white mb-4">Customer Behavior Insights</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-2">📱</div>
            <h5 className="font-medium text-white mb-1">Mobile Users</h5>
            <p className="text-2xl font-semibold text-white">68%</p>
            <p className="text-xs text-gray-400">Primary shopping device</p>
          </div>
          
          <div className="text-center border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-2">🛒</div>
            <h5 className="font-medium text-white mb-1">Avg Cart Size</h5>
            <p className="text-2xl font-semibold text-white">2.4</p>
            <p className="text-xs text-gray-400">Items per order</p>
          </div>
          
          <div className="text-center border border-gray-700 rounded-lg p-4">
            <div className="text-2xl mb-2">⏱️</div>
            <h5 className="font-medium text-white mb-1">Session Time</h5>
            <p className="text-2xl font-semibold text-white">8.5m</p>
            <p className="text-xs text-gray-400">Average visit duration</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerAnalytics