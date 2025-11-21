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
    <div className="relative min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-600/3 to-blue-600/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-md w-full space-y-10">
        <div className="text-center">
          {/* nexr Admin Branding */}
          <div className="mb-6">
            <h1 className="text-4xl font-extralight text-white tracking-[0.3em] mb-3">
              nexr
            </h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4 opacity-60"></div>
            <p className="text-gray-400 text-sm font-light tracking-wider uppercase">Admin Portal</p>
          </div>
          <p className="text-gray-500 text-sm font-light">Restricted Access</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-400 text-sm text-center font-light">{error}</div>
          )}
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl"
          >
            Access Dashboard
          </button>
        </form>
        
        <div className="text-center">
          <button
            onClick={() => router.push('/')}
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors font-light tracking-wide"
          >
            ← Back to nexr
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin