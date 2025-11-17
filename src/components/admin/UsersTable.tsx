'use client'

import { useEffect, useState } from 'react'

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  createdAt: string
  lastOrderDate?: string
  totalOrders: number
  totalSpent: number
  status: 'active' | 'inactive' | 'banned'
}

const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    setIsLoading(true)
    try {
      // Mock data - replace with actual API call
      setTimeout(() => {
        const mockUsers: User[] = [
          {
            id: '1',
            firstName: 'Sarah',
            lastName: 'Johnson',
            email: 'sarah.johnson@email.com',
            phone: '+1 (555) 123-4567',
            createdAt: '2024-01-10T09:30:00Z',
            lastOrderDate: '2024-01-15T14:20:00Z',
            totalOrders: 3,
            totalSpent: 347.85,
            status: 'active'
          },
          {
            id: '2',
            firstName: 'Mike',
            lastName: 'Chen',
            email: 'mike.chen@email.com',
            phone: '+1 (555) 234-5678',
            createdAt: '2023-12-15T16:45:00Z',
            lastOrderDate: '2024-01-12T11:30:00Z',
            totalOrders: 7,
            totalSpent: 892.50,
            status: 'active'
          },
          {
            id: '3',
            firstName: 'Emma',
            lastName: 'Wilson',
            email: 'emma.wilson@email.com',
            createdAt: '2024-01-08T12:15:00Z',
            totalOrders: 0,
            totalSpent: 0,
            status: 'active'
          },
          {
            id: '4',
            firstName: 'David',
            lastName: 'Brown',
            email: 'david.brown@email.com',
            phone: '+1 (555) 345-6789',
            createdAt: '2023-11-20T10:00:00Z',
            lastOrderDate: '2024-01-05T16:45:00Z',
            totalOrders: 12,
            totalSpent: 1456.75,
            status: 'active'
          },
          {
            id: '5',
            firstName: 'Lisa',
            lastName: 'Garcia',
            email: 'lisa.garcia@email.com',
            createdAt: '2023-10-12T14:30:00Z',
            lastOrderDate: '2023-12-28T09:15:00Z',
            totalOrders: 2,
            totalSpent: 189.99,
            status: 'inactive'
          }
        ]
        setUsers(mockUsers)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error loading users:', error)
      setIsLoading(false)
    }
  }

  const handleStatusChange = async (userId: string, newStatus: string) => {
    try {
      setUsers(users.map(user => 
        user.id === userId 
          ? { ...user, status: newStatus as User['status'] }
          : user
      ))
    } catch (error) {
      console.error('Error updating user status:', error)
    }
  }

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return

    try {
      setUsers(users.filter(user => user.id !== userId))
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-900/30 text-green-400'
      case 'inactive':
        return 'bg-yellow-900/30 text-yellow-400'
      case 'banned':
        return 'bg-red-900/30 text-red-400'
      default:
        return 'bg-gray-700 text-gray-300'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getCustomerType = (user: User) => {
    if (user.totalOrders === 0) return { type: 'New', color: 'text-blue-400' }
    if (user.totalSpent > 1000) return { type: 'VIP', color: 'text-purple-400' }
    if (user.totalOrders >= 5) return { type: 'Regular', color: 'text-green-400' }
    return { type: 'Casual', color: 'text-gray-400' }
  }

  const filteredAndSortedUsers = users
    .filter(user => {
      const matchesSearch = searchTerm === '' || 
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || user.status === statusFilter
      
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case 'name':
          return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
        case 'spent':
          return b.totalSpent - a.totalSpent
        case 'orders':
          return b.totalOrders - a.totalOrders
        default:
          return 0
      }
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
      {/* Filters and Search */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="banned">Banned</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A-Z</option>
              <option value="spent">Highest Spent</option>
              <option value="orders">Most Orders</option>
            </select>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
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

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Orders
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total Spent
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Joined
              </th>
              <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {filteredAndSortedUsers.map((user) => {
              const customerType = getCustomerType(user)
              
              return (
                <tr key={user.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-white">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-sm text-gray-400">{user.email}</div>
                      {user.phone && (
                        <div className="text-xs text-gray-500">{user.phone}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${customerType.color}`}>
                      {customerType.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white">{user.totalOrders}</div>
                    {user.lastOrderDate && (
                      <div className="text-xs text-gray-400">
                        Last: {formatDate(user.lastOrderDate)}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-white">
                      ${user.totalSpent.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={user.status}
                      onChange={(e) => handleStatusChange(user.id, e.target.value)}
                      className={`text-xs font-medium rounded-full px-2 py-1 border-0 focus:ring-2 focus:ring-blue-500 ${getStatusColor(user.status)}`}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="banned">Banned</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300">
                      {formatDate(user.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                    <button
                      onClick={() => alert(`View profile for ${user.firstName} ${user.lastName}`)}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {filteredAndSortedUsers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">👥</div>
          <p className="text-gray-400">No users found</p>
        </div>
      )}

      {/* Summary Statistics */}
      <div className="px-6 py-4 bg-gray-900 border-t border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-white">{users.length}</div>
            <div className="text-xs text-gray-400">Total Users</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-green-400">
              {users.filter(u => u.status === 'active').length}
            </div>
            <div className="text-xs text-gray-400">Active Users</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-purple-400">
              {users.filter(u => u.totalSpent > 1000).length}
            </div>
            <div className="text-xs text-gray-400">VIP Customers</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-white">
              ${users.reduce((sum, u) => sum + u.totalSpent, 0).toFixed(0)}
            </div>
            <div className="text-xs text-gray-400">Total Revenue</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersTable