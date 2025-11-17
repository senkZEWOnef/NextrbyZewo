'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminLayout from '@/components/admin/AdminLayout'
import SalesAnalytics from '@/components/admin/SalesAnalytics'
import ProductAnalytics from '@/components/admin/ProductAnalytics'
import CustomerAnalytics from '@/components/admin/CustomerAnalytics'

const AdminAnalytics = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('sales')
  const router = useRouter()

  useEffect(() => {
    const adminToken = localStorage.getItem('nextr_admin_token')
    if (adminToken !== 'nextr_admin_authenticated_2024') {
      router.push('/admin')
      return
    }
    setIsAuthenticated(true)
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const tabs = [
    { id: 'sales', name: 'Sales Analytics', icon: '📊' },
    { id: 'products', name: 'Product Performance', icon: '📦' },
    { id: 'customers', name: 'Customer Insights', icon: '👥' }
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <p className="text-gray-400">Insights into your store performance and customer behavior</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'sales' && <SalesAnalytics />}
          {activeTab === 'products' && <ProductAnalytics />}
          {activeTab === 'customers' && <CustomerAnalytics />}
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminAnalytics