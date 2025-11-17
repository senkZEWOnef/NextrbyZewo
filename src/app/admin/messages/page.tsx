'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminLayout from '@/components/admin/AdminLayout'
import ChatSessionsList from '@/components/admin/ChatSessionsList'
import ChatViewer from '@/components/admin/ChatViewer'

interface ChatSession {
  id: string
  sessionId: string
  userId?: string
  status: string
  createdAt: string
  messageCount: number
  lastMessage?: string
  lastMessageAt?: string
}

const AdminMessages = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null)
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
          <h1 className="text-3xl font-bold text-white">Chat Messages</h1>
          <p className="text-gray-400">Manage customer conversations and support tickets</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          <div className="lg:col-span-1">
            <ChatSessionsList
              selectedSession={selectedSession}
              onSessionSelect={setSelectedSession}
            />
          </div>
          
          <div className="lg:col-span-2">
            {selectedSession ? (
              <ChatViewer session={selectedSession} />
            ) : (
              <div className="bg-white rounded-lg shadow h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-4">💬</div>
                  <p>Select a chat session to view messages</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminMessages