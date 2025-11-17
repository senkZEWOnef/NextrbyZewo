'use client'

import { useEffect, useState } from 'react'

interface Order {
  id: string
  customerName: string
  email: string
  totalAmount: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  items: Array<{
    productName: string
    quantity: number
    price: number
  }>
  shippingAddress: {
    firstName: string
    lastName: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

interface OrdersTableProps {
  onOrderSelect: (order: Order) => void
}

const OrdersTable = ({ onOrderSelect }: OrdersTableProps) => {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadOrders()
  }, [])

  const loadOrders = async () => {
    setIsLoading(true)
    try {
      // Mock data - replace with actual API call
      setTimeout(() => {
        const mockOrders: Order[] = [
          {
            id: '1',
            customerName: 'Sarah Johnson',
            email: 'sarah@example.com',
            totalAmount: 129.99,
            status: 'confirmed',
            createdAt: '2024-01-15T10:30:00Z',
            items: [
              { productName: 'Premium iPhone 15 Case', quantity: 1, price: 79.99 },
              { productName: 'Screen Protector', quantity: 1, price: 29.99 }
            ],
            shippingAddress: {
              firstName: 'Sarah',
              lastName: 'Johnson',
              address: '123 Main St',
              city: 'San Francisco',
              state: 'CA',
              zipCode: '94102',
              country: 'US'
            }
          },
          {
            id: '2',
            customerName: 'Mike Chen',
            email: 'mike@example.com',
            totalAmount: 89.50,
            status: 'shipped',
            createdAt: '2024-01-14T16:20:00Z',
            items: [
              { productName: 'Wireless Charging Pad', quantity: 1, price: 59.99 },
              { productName: 'USB-C Cable', quantity: 1, price: 29.99 }
            ],
            shippingAddress: {
              firstName: 'Mike',
              lastName: 'Chen',
              address: '456 Oak Ave',
              city: 'New York',
              state: 'NY',
              zipCode: '10001',
              country: 'US'
            }
          },
          {
            id: '3',
            customerName: 'Emma Wilson',
            email: 'emma@example.com',
            totalAmount: 199.99,
            status: 'pending',
            createdAt: '2024-01-14T09:15:00Z',
            items: [
              { productName: 'Premium Phone Stand', quantity: 1, price: 89.99 },
              { productName: 'Wireless Charger Pro', quantity: 1, price: 89.99 }
            ],
            shippingAddress: {
              firstName: 'Emma',
              lastName: 'Wilson',
              address: '789 Pine St',
              city: 'Austin',
              state: 'TX',
              zipCode: '73301',
              country: 'US'
            }
          },
          {
            id: '4',
            customerName: 'David Brown',
            email: 'david@example.com',
            totalAmount: 64.99,
            status: 'delivered',
            createdAt: '2024-01-13T14:45:00Z',
            items: [
              { productName: 'Crystal Clear Case', quantity: 1, price: 49.99 },
              { productName: 'Cable Organizer', quantity: 1, price: 14.99 }
            ],
            shippingAddress: {
              firstName: 'David',
              lastName: 'Brown',
              address: '321 Elm St',
              city: 'Seattle',
              state: 'WA',
              zipCode: '98101',
              country: 'US'
            }
          }
        ]
        setOrders(mockOrders)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error loading orders:', error)
      setIsLoading(false)
    }
  }

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      // Mock API call - replace with actual implementation
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus as Order['status'] }
          : order
      ))
    } catch (error) {
      console.error('Error updating order status:', error)
    }
  }

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
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const filteredOrders = orders.filter(order => {
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    const matchesSearch = searchTerm === '' || 
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.includes(searchTerm)
    
    return matchesStatus && matchesSearch
  })

  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
        <div className="p-6 animate-pulse">
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
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
      {/* Filters */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Order
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-white">
                    #{order.id}
                  </div>
                  <div className="text-xs text-gray-400">
                    {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-300">{order.customerName}</div>
                  <div className="text-xs text-gray-400">{order.email}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-white">
                    ${order.totalAmount}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className={`text-xs font-medium rounded-full px-2 py-1 border-0 focus:ring-2 focus:ring-blue-500 ${getStatusColor(order.status)}`}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-300">
                    {formatDate(order.createdAt)}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => onOrderSelect(order)}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🛒</div>
          <p className="text-gray-400">No orders found</p>
        </div>
      )}
    </div>
  )
}

export default OrdersTable