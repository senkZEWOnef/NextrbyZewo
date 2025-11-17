'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AdminLogin = () => {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated
    const adminToken = localStorage.getItem('nextr_admin_token')
    if (adminToken === 'nextr_admin_authenticated_2024') {
      setIsAuthenticated(true)
      router.push('/admin/dashboard')
    }
    setIsLoading(false)
  }, [router])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple password authentication - in production, use proper auth
    if (password === 'nextr_admin_2024!') {
      localStorage.setItem('nextr_admin_token', 'nextr_admin_authenticated_2024')
      setIsAuthenticated(true)
      router.push('/admin/dashboard')
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-light text-white mb-2">Nextr Admin</h1>
          <p className="text-gray-400 text-sm">Access restricted area</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}
          
          <button
            type="submit"
            className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Access Dashboard
          </button>
        </form>
        
        <div className="text-center">
          <button
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            ← Back to site
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin