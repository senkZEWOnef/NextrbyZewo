'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminLayout from '@/components/admin/AdminLayout'

const AdminSettings = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [settings, setSettings] = useState({
    storeName: 'Nextr',
    storeEmail: 'support@nextr.com',
    storePhone: '+1 (555) 123-4567',
    currency: 'USD',
    timezone: 'America/Los_Angeles',
    taxRate: 8.25,
    shippingFee: 15.00,
    freeShippingThreshold: 100.00,
    emailNotifications: true,
    orderNotifications: true,
    lowStockAlert: true,
    lowStockThreshold: 10
  })
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

  const handleSave = () => {
    // Mock save functionality
    alert('Settings saved successfully!')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setSettings(prev => ({ ...prev, [name]: checked }))
    } else if (type === 'number') {
      setSettings(prev => ({ ...prev, [name]: parseFloat(value) || 0 }))
    } else {
      setSettings(prev => ({ ...prev, [name]: value }))
    }
  }

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

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">Settings</h1>
          <p className="text-gray-400">Manage your store configuration and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Store Information */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Store Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Store Name
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={settings.storeName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Support Email
                </label>
                <input
                  type="email"
                  name="storeEmail"
                  value={settings.storeEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Support Phone
                </label>
                <input
                  type="text"
                  name="storePhone"
                  value={settings.storePhone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Currency
                </label>
                <select
                  name="currency"
                  value={settings.currency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Timezone
                </label>
                <select
                  name="timezone"
                  value={settings.timezone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
            </div>
          </div>

          {/* Financial Settings */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Financial Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  name="taxRate"
                  value={settings.taxRate}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Shipping Fee ($)
                </label>
                <input
                  type="number"
                  name="shippingFee"
                  value={settings.shippingFee}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Free Shipping Threshold ($)
                </label>
                <input
                  type="number"
                  name="freeShippingThreshold"
                  value={settings.freeShippingThreshold}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Low Stock Threshold
                </label>
                <input
                  type="number"
                  name="lowStockThreshold"
                  value={settings.lowStockThreshold}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <label className="ml-2 text-sm text-gray-300">
                  Email notifications for new orders
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="orderNotifications"
                  checked={settings.orderNotifications}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <label className="ml-2 text-sm text-gray-300">
                  Push notifications for order updates
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="lowStockAlert"
                  checked={settings.lowStockAlert}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <label className="ml-2 text-sm text-gray-300">
                  Low stock alerts
                </label>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">Security & Access</h3>
            <div className="space-y-4">
              <button
                onClick={() => {
                  const newPassword = prompt('Enter new admin password:')
                  if (newPassword) {
                    alert('Password updated successfully!')
                  }
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Change Admin Password
              </button>

              <button
                onClick={() => {
                  if (confirm('Are you sure you want to clear all session data?')) {
                    localStorage.clear()
                    alert('Session data cleared!')
                  }
                }}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear Session Data
              </button>

              <div className="text-sm text-gray-400">
                <p className="mb-2">Admin Access Stats:</p>
                <ul className="space-y-1">
                  <li>• Last login: Today at 2:30 PM</li>
                  <li>• Total logins: 47</li>
                  <li>• Active session: 2h 15m</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            💾 Save All Settings
          </button>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminSettings