'use client'

import { useEffect, useState } from 'react'

const SalesChart = () => {
  const [chartData, setChartData] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading chart data
    setTimeout(() => {
      // Mock sales data for the last 7 days
      setChartData([2400, 1800, 3200, 2800, 3600, 4200, 3800])
      setIsLoading(false)
    }, 1000)
  }, [])

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const maxValue = Math.max(...chartData)

  if (isLoading) {
    return (
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-600 rounded w-1/3 mb-6"></div>
          <div className="space-y-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-end space-x-2">
                <div className="h-3 bg-gray-600 rounded w-8"></div>
                <div className={`bg-gray-600 rounded w-full h-${Math.floor(Math.random() * 20) + 4}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Sales This Week</h3>
        <p className="text-sm text-gray-400">Daily revenue overview</p>
      </div>

      <div className="space-y-4">
        {chartData.map((value, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-8 text-xs text-gray-400 font-medium">
              {days[index]}
            </div>
            <div className="flex-1 bg-gray-700 rounded-full h-4 relative overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
                style={{ width: `${(value / maxValue) * 100}%` }}
              ></div>
            </div>
            <div className="w-16 text-right text-sm font-medium text-white">
              ${value.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Total this week:</span>
          <span className="font-semibold text-white">
            ${chartData.reduce((sum, val) => sum + val, 0).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SalesChart