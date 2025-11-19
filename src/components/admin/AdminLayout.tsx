'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { name: 'Products', href: '/admin/products', icon: '📦' },
  { name: 'Orders', href: '/admin/orders', icon: '🛒' },
  { name: 'Chat Messages', href: '/admin/messages', icon: '💬' },
  { name: 'Users', href: '/admin/users', icon: '👥' },
  { name: 'Analytics', href: '/admin/analytics', icon: '📈' },
  { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
]

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    localStorage.removeItem('nextr_admin_token')
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex flex-col w-full max-w-xs bg-gray-800 border-r border-gray-700">
            <div className="flex items-center justify-between px-4 py-6 border-b border-gray-700">
              <h1 className="text-xl font-light tracking-wide text-white">⚡ nexr Admin</h1>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-gray-800 border-r border-gray-700">
          <div className="flex items-center px-6 py-6 border-b border-gray-700">
            <h1 className="text-xl font-light tracking-wide text-white">⚡ nexr Admin</h1>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex-shrink-0 px-4 py-4 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-3 text-sm font-medium text-red-400 rounded-xl hover:bg-red-900/30 hover:text-red-300 transition-all duration-200"
            >
              <span className="mr-3">🚪</span>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top header */}
        <div className="flex items-center justify-between px-4 py-4 bg-gray-800 border-b border-gray-700 lg:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-400 hover:text-white lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            ☰
          </button>
          
          <div className="flex items-center space-x-4 ml-auto">
            <span className="text-sm text-gray-300">Admin Panel</span>
            <div className="hidden lg:flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Online</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-1 text-xs text-red-400 border border-red-500 rounded-lg hover:bg-red-900/30 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="px-4 py-6 lg:px-6 bg-gray-900 min-h-screen">
          <div className="max-w-full overflow-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout