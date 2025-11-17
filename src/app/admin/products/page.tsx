'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminLayout from '@/components/admin/AdminLayout'
import ProductsTable from '@/components/admin/ProductsTable'
import AddProductModal from '@/components/admin/AddProductModal'

const AdminProducts = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
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

  const handleProductAdded = () => {
    setShowAddModal(false)
    setRefreshTrigger(prev => prev + 1)
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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Products</h1>
            <p className="text-gray-400">Manage your product catalog</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
          >
            + Add Product
          </button>
        </div>

        <ProductsTable refreshTrigger={refreshTrigger} />

        {showAddModal && (
          <AddProductModal
            onClose={() => setShowAddModal(false)}
            onProductAdded={handleProductAdded}
          />
        )}
      </div>
    </AdminLayout>
  )
}

export default AdminProducts