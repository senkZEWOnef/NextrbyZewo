'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Order {
  id: string
  customerName: string
  amount: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
  createdAt: string
}

const RecentOrders = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock recent orders data
    setTimeout(() => {
      setOrders([
        {
          id: '001',
          customerName: 'Sarah Johnson',
          amount: 129.99,
          status: 'confirmed',
          createdAt: '2 hours ago'
        },
        {
          id: '002',
          customerName: 'Mike Chen',
          amount: 89.50,
          status: 'shipped',
          createdAt: '4 hours ago'
        },
        {
          id: '003',
          customerName: 'Emma Wilson',
          amount: 199.99,
          status: 'pending',
          createdAt: '6 hours ago'
        },
        {
          id: '004',
          customerName: 'David Brown',
          amount: 64.99,
          status: 'delivered',
          createdAt: '1 day ago'
        },
        {
          id: '005',
          customerName: 'Lisa Garcia',
          amount: 149.99,
          status: 'confirmed',
          createdAt: '1 day ago'
        }
      ])
      setIsLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'confirmed':
        return 'bg-blue-100 text-blue-800'
      case 'shipped':
        return 'bg-purple-100 text-purple-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (isLoading) {
    return (
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-600 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-3 bg-gray-600 rounded w-16"></div>
                <div className="h-3 bg-gray-600 rounded flex-1"></div>
                <div className="h-3 bg-gray-600 rounded w-20"></div>
                <div className="h-3 bg-gray-600 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Recent Orders</h3>
          <p className="text-sm text-gray-400">Latest customer orders</p>
        </div>
        <Link
          href="/admin/orders"
          className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">
                Order
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">
                Customer
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">
                Amount
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-700/50 transition-colors">
                <td className="py-3">
                  <div className="text-sm font-medium text-white">
                    #{order.id}
                  </div>
                  <div className="text-xs text-gray-400">
                    {order.createdAt}
                  </div>
                </td>
                <td className="py-3">
                  <div className="text-sm text-gray-300">
                    {order.customerName}
                  </div>
                </td>
                <td className="py-3">
                  <div className="text-sm font-medium text-white">
                    ${order.amount}
                  </div>
                </td>
                <td className="py-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentOrders