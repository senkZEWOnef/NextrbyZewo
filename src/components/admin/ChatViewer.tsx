'use client'

import { useEffect, useState } from 'react'

interface ChatMessage {
  id: string
  message: string
  sender: 'user' | 'agent'
  createdAt: string
  isRead: boolean
}

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

interface ChatViewerProps {
  session: ChatSession
}

const ChatViewer = ({ session }: ChatViewerProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [replyText, setReplyText] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    loadMessages()
  }, [session.sessionId])

  const loadMessages = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/chat/messages?sessionId=${session.sessionId}`)
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages || [])
      } else {
        // Mock data if API fails
        const mockMessages: ChatMessage[] = [
          {
            id: '1',
            message: "Hi! I'm Sarah from Nextr support. How can I help you today?",
            sender: 'agent',
            createdAt: '2024-01-15T10:30:00Z',
            isRead: true
          },
          {
            id: '2',
            message: 'Hello! I need help with my order. It says it was shipped but I haven\'t received it yet.',
            sender: 'user',
            createdAt: '2024-01-15T10:32:00Z',
            isRead: true
          },
          {
            id: '3',
            message: 'I\'d be happy to help you track your order. Could you please provide your order number?',
            sender: 'agent',
            createdAt: '2024-01-15T10:33:00Z',
            isRead: true
          },
          {
            id: '4',
            message: 'Sure! It\'s #12345',
            sender: 'user',
            createdAt: '2024-01-15T10:35:00Z',
            isRead: true
          }
        ]
        setMessages(mockMessages)
      }
    } catch (error) {
      console.error('Error loading messages:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!replyText.trim() || isSending) return

    setIsSending(true)
    try {
      const response = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: session.sessionId,
          sender: 'agent',
          message: replyText
        })
      })

      if (response.ok) {
        const newMessage = await response.json()
        setMessages(prev => [...prev, newMessage])
        setReplyText('')
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsSending(false)
    }
  }

  const updateSessionStatus = async (newStatus: string) => {
    try {
      // Mock implementation - replace with actual API call
      console.log(`Updating session ${session.id} status to ${newStatus}`)
    } catch (error) {
      console.error('Error updating session status:', error)
    }
  }

  const formatMessageTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-white">
              Session #{session.sessionId.slice(-6)}
            </h3>
            <p className="text-sm text-gray-400">
              Started {new Date(session.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="flex space-x-2">
            {session.status === 'active' && (
              <>
                <button
                  onClick={() => updateSessionStatus('transferred')}
                  className="px-3 py-1 text-xs bg-blue-900/30 text-blue-400 rounded-full hover:bg-blue-900/50 transition-colors"
                >
                  Transfer
                </button>
                <button
                  onClick={() => updateSessionStatus('closed')}
                  className="px-3 py-1 text-xs bg-red-900/30 text-red-400 rounded-full hover:bg-red-900/50 transition-colors"
                >
                  Close
                </button>
              </>
            )}
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              session.status === 'active' ? 'bg-green-900/30 text-green-400' :
              session.status === 'closed' ? 'bg-gray-700 text-gray-300' :
              'bg-blue-900/30 text-blue-400'
            }`}>
              {session.status}
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>No messages in this conversation</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="text-sm">{message.message}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {message.sender === 'user' ? 'Customer' : 'Agent'} • {formatMessageTime(message.createdAt)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Reply form */}
      {session.status === 'active' && (
        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleSendReply} className="flex space-x-2">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              disabled={isSending}
            />
            <button
              type="submit"
              disabled={!replyText.trim() || isSending}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatViewer