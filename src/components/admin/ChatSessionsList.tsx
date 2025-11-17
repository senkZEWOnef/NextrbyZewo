'use client'

import { useEffect, useState } from 'react'

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

interface ChatSessionsListProps {
  selectedSession: ChatSession | null
  onSessionSelect: (session: ChatSession) => void
}

const ChatSessionsList = ({ selectedSession, onSessionSelect }: ChatSessionsListProps) => {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    loadSessions()
  }, [])

  const loadSessions = async () => {
    try {
      // Mock data - replace with actual API call
      setTimeout(() => {
        const mockSessions: ChatSession[] = [
          {
            id: '1',
            sessionId: 'session_1699123456_abc123',
            status: 'active',
            createdAt: '2024-01-15T10:30:00Z',
            messageCount: 8,
            lastMessage: 'Thank you for your help!',
            lastMessageAt: '2024-01-15T11:45:00Z'
          },
          {
            id: '2',
            sessionId: 'session_1699123457_def456',
            status: 'closed',
            createdAt: '2024-01-15T09:15:00Z',
            messageCount: 12,
            lastMessage: 'Problem resolved, thanks!',
            lastMessageAt: '2024-01-15T10:20:00Z'
          },
          {
            id: '3',
            sessionId: 'session_1699123458_ghi789',
            status: 'active',
            createdAt: '2024-01-15T08:00:00Z',
            messageCount: 5,
            lastMessage: 'Can you help me with shipping?',
            lastMessageAt: '2024-01-15T08:30:00Z'
          }
        ]
        setSessions(mockSessions)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error loading chat sessions:', error)
      setIsLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'closed':
        return 'bg-gray-100 text-gray-800'
      case 'transferred':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffHours / 24)

    if (diffHours < 1) {
      const diffMins = Math.floor(diffMs / (1000 * 60))
      return `${diffMins}m ago`
    } else if (diffHours < 24) {
      return `${diffHours}h ago`
    } else {
      return `${diffDays}d ago`
    }
  }

  const filteredSessions = sessions.filter(session => {
    if (filter === 'all') return true
    return session.status === filter
  })

  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg h-full">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-medium text-white">Chat Sessions</h3>
        </div>
        <div className="p-4 space-y-4 animate-pulse">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border border-gray-700 rounded-lg p-3">
              <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-600 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-600 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-medium text-white mb-4">Chat Sessions</h3>
        
        <div className="flex space-x-2">
          {['all', 'active', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredSessions.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            <div className="text-2xl mb-2">💬</div>
            <p>No chat sessions found</p>
          </div>
        ) : (
          filteredSessions.map((session) => (
            <div
              key={session.id}
              onClick={() => onSessionSelect(session)}
              className={`border rounded-lg p-3 cursor-pointer transition-colors hover:bg-gray-700/50 ${
                selectedSession?.id === session.id ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-700'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-medium text-white truncate">
                  Session #{session.sessionId.slice(-6)}
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(session.status)}`}>
                  {session.status}
                </span>
              </div>
              
              <div className="text-xs text-gray-400 mb-2">
                {session.messageCount} messages • Started {formatDate(session.createdAt)}
              </div>
              
              {session.lastMessage && (
                <div className="text-xs text-gray-300 truncate">
                  Last: "{session.lastMessage}"
                </div>
              )}
              
              {session.lastMessageAt && (
                <div className="text-xs text-gray-500 mt-1">
                  {formatDate(session.lastMessageAt)}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ChatSessionsList