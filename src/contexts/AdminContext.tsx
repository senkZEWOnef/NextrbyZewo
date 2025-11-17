'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface AdminContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (password: string) => boolean
  logout: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

interface AdminProviderProps {
  children: ReactNode
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const adminToken = localStorage.getItem('nextr_admin_token')
      setIsAuthenticated(adminToken === 'nextr_admin_authenticated_2024')
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = (password: string): boolean => {
    if (password === 'nextr_admin_2024!') {
      localStorage.setItem('nextr_admin_token', 'nextr_admin_authenticated_2024')
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('nextr_admin_token')
    setIsAuthenticated(false)
    router.push('/admin')
  }

  const value: AdminContextType = {
    isAuthenticated,
    isLoading,
    login,
    logout
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}