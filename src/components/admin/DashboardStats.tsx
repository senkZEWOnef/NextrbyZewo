'use client'

import { useEffect, useState } from 'react'

interface Stats {
  totalRevenue: number
  totalOrders: number
  totalProducts: number
  totalUsers: number
  revenueChange: number
  ordersChange: number
  productsChange: number
  usersChange: number
}

const DashboardStats = () => {
  const [stats, setStats] = useState<Stats>({
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    revenueChange: 0,
    ordersChange: 0,
    productsChange: 0,
    usersChange: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading stats - in production, fetch from API
    const loadStats = async () => {
      // Mock data - replace with real API calls
      setTimeout(() => {
        setStats({
          totalRevenue: 45230.50,
          totalOrders: 156,
          totalProducts: 43,
          totalUsers: 89,
          revenueChange: 12.5,
          ordersChange: 8.3,
          productsChange: 2.1,
          usersChange: 15.2
        })
        setIsLoading(false)
      }, 1000)
    }

    loadStats()
  }, [])

  const statCards = [
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      change: stats.revenueChange,
      icon: '💰',
      color: 'green'
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders.toString(),
      change: stats.ordersChange,
      icon: '📋',
      color: 'blue'
    },
    {
      title: 'Products',
      value: stats.totalProducts.toString(),
      change: stats.productsChange,
      icon: '📦',
      color: 'purple'
    },
    {
      title: 'Users',
      value: stats.totalUsers.toString(),
      change: stats.usersChange,
      icon: '👥',
      color: 'orange'
    }
  ]

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg animate-pulse">
            <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-600 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
              {stat.title}
            </h3>
            <span className="text-3xl">{stat.icon}</span>
          </div>
          
          <div className="flex items-baseline justify-between">
            <p className="text-3xl font-bold text-white">
              {stat.value}
            </p>
            <div className={`flex items-center px-2 py-1 rounded-lg text-sm font-medium ${
              stat.change >= 0
                ? 'bg-green-900/30 text-green-400'
                : 'bg-red-900/30 text-red-400'
            }`}>
              <span className="mr-1">{stat.change >= 0 ? '↗' : '↘'}</span>
              {stat.change >= 0 ? '+' : ''}{stat.change}%
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            vs last month
          </p>
        </div>
      ))}
    </div>
  )
}

export default DashboardStats