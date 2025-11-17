'use client'

import { useEffect, useState } from 'react'
import EditProductModal from './EditProductModal'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: string
  brand: string
  stock: number
  isActive: boolean
  isNew: boolean
  isBestseller: boolean
}

interface ProductsTableProps {
  refreshTrigger: number
}

const ProductsTable = ({ refreshTrigger }: ProductsTableProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const loadProducts = async () => {
    try {
      const response = await fetch('/api/products?admin=true&limit=100')
      if (response.ok) {
        const data = await response.json()
        setProducts(data.products)
      }
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [refreshTrigger])

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setProducts(products.filter(p => p.id !== productId))
      } else {
        alert('Error deleting product')
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Error deleting product')
    }
  }

  const handleToggleActive = async (product: Product) => {
    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isActive: !product.isActive
        })
      })

      if (response.ok) {
        setProducts(products.map(p => 
          p.id === product.id ? { ...p, isActive: !p.isActive } : p
        ))
      }
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  const handleProductUpdated = (updatedProduct: Product) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ))
    setEditingProduct(null)
  }

  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
        <div className="animate-pulse p-6">
          <div className="h-4 bg-gray-600 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-600 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Badges
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-white">
                        {product.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {product.category} • {product.brand}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">${product.price}</span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      product.stock > 10 
                        ? 'bg-green-900/30 text-green-400' 
                        : product.stock > 0 
                          ? 'bg-yellow-900/30 text-yellow-400' 
                          : 'bg-red-900/30 text-red-400'
                    }`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleToggleActive(product)}
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full transition-colors ${
                        product.isActive 
                          ? 'bg-green-900/30 text-green-400 hover:bg-green-900/50' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {product.isActive ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-1">
                      {product.isNew && (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-400 rounded-full">
                          New
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-purple-900/30 text-purple-400 rounded-full">
                          Bestseller
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📦</div>
            <p className="text-gray-400">No products found</p>
          </div>
        )}
      </div>

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onProductUpdated={handleProductUpdated}
        />
      )}
    </>
  )
}

export default ProductsTable