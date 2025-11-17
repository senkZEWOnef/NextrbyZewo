'use client'

import { useEffect, useState } from 'react'

interface SalesData {
  period: string
  revenue: number
  orders: number
  averageOrder: number
  profitMargin: number
}

const SalesAnalytics = () => {
  const [salesData, setSalesData] = useState<SalesData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('7days')

  useEffect(() => {
    loadSalesData()
  }, [timeRange])

  const loadSalesData = async () => {
    setIsLoading(true)
    try {
      // Mock data - replace with actual API calls
      setTimeout(() => {
        const mockData: SalesData[] = timeRange === '7days' ? [
          { period: 'Mon', revenue: 2400, orders: 12, averageOrder: 200, profitMargin: 35 },
          { period: 'Tue', revenue: 1800, orders: 9, averageOrder: 200, profitMargin: 38 },
          { period: 'Wed', revenue: 3200, orders: 16, averageOrder: 200, profitMargin: 32 },
          { period: 'Thu', revenue: 2800, orders: 14, averageOrder: 200, profitMargin: 36 },
          { period: 'Fri', revenue: 3600, orders: 18, averageOrder: 200, profitMargin: 34 },
          { period: 'Sat', revenue: 4200, orders: 21, averageOrder: 200, profitMargin: 33 },
          { period: 'Sun', revenue: 3800, orders: 19, averageOrder: 200, profitMargin: 35 }
        ] : [
          { period: 'Week 1', revenue: 15200, orders: 76, averageOrder: 200, profitMargin: 35 },
          { period: 'Week 2', revenue: 18400, orders: 92, averageOrder: 200, profitMargin: 36 },
          { period: 'Week 3', revenue: 21600, orders: 108, averageOrder: 200, profitMargin: 34 },
          { period: 'Week 4', revenue: 19800, orders: 99, averageOrder: 200, profitMargin: 37 }
        ]
        
        setSalesData(mockData)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error loading sales data:', error)
      setIsLoading(false)
    }
  }

  const totalRevenue = salesData.reduce((sum, data) => sum + data.revenue, 0)
  const totalOrders = salesData.reduce((sum, data) => sum + data.orders, 0)
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0
  const averageProfitMargin = salesData.length > 0 
    ? salesData.reduce((sum, data) => sum + data.profitMargin, 0) / salesData.length 
    : 0

  const maxRevenue = Math.max(...salesData.map(d => d.revenue))

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
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg animate-pulse">
          <div className="h-6 bg-gray-600 rounded w-1/4 mb-6"></div>
          <div className="h-64 bg-gray-600 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">Sales Performance</h3>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Revenue</p>
              <p className="text-2xl font-semibold text-white">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="text-green-600">💰</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Orders</p>
              <p className="text-2xl font-semibold text-white">{totalOrders}</p>
            </div>
            <div className="text-blue-600">📋</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Avg Order Value</p>
              <p className="text-2xl font-semibold text-white">${averageOrderValue.toFixed(0)}</p>
            </div>
            <div className="text-purple-600">💳</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Profit Margin</p>
              <p className="text-2xl font-semibold text-white">{averageProfitMargin.toFixed(1)}%</p>
            </div>
            <div className="text-orange-600">📈</div>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
        <h4 className="text-lg font-medium text-white mb-6">Revenue Trend</h4>
        
        <div className="space-y-4">
          {salesData.map((data, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-16 text-sm font-medium text-gray-300">
                {data.period}
              </div>
              <div className="flex-1 bg-gray-700 rounded-full h-6 relative overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                ></div>
              </div>
              <div className="w-24 text-right text-sm font-medium text-white">
                ${data.revenue.toLocaleString()}
              </div>
              <div className="w-20 text-right text-xs text-gray-400">
                {data.orders} orders
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profit Margin Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <h4 className="text-lg font-medium text-white mb-4">Daily Profit Margins</h4>
          <div className="space-y-3">
            {salesData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{data.period}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-600 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        data.profitMargin > 35 ? 'bg-green-500' :
                        data.profitMargin > 30 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${(data.profitMargin / 50) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-white w-12 text-right">
                    {data.profitMargin}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
          <h4 className="text-lg font-medium text-white mb-4">Revenue Breakdown</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-gray-300">Gross Revenue</span>
              <span className="font-medium text-white">${totalRevenue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-gray-300">Est. Cost of Goods</span>
              <span className="font-medium text-red-600">
                -${((totalRevenue * (100 - averageProfitMargin)) / 100).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 font-semibold text-lg">
              <span className="text-white">Net Profit</span>
              <span className="text-green-400">
                ${((totalRevenue * averageProfitMargin) / 100).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesAnalytics