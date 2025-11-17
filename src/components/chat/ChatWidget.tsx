'use client'

import { useChat } from '@/contexts/ChatContext'
import { useState, useRef, useEffect } from 'react'

const ChatWidget = () => {
  const { 
    isOpen, 
    isMinimized, 
    messages, 
    unreadCount, 
    isAgentOnline,
    isAgentTyping,
    openChat, 
    closeChat, 
    minimizeChat, 
    expandChat, 
    sendMessage 
  } = useChat()
  
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom()
      // Focus input when chat opens
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [messages, isOpen, isMinimized])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      sendMessage(inputValue.trim())
      setInputValue('')
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={openChat}
          data-chat-trigger
          className="bg-white text-black rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        >
          {/* Notification Badge */}
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
              {unreadCount > 9 ? '9+' : unreadCount}
            </div>
          )}
          
          {/* Online Status Indicator */}
          <div className={`absolute -top-1 -left-1 w-4 h-4 rounded-full border-2 border-white ${
            isAgentOnline ? 'bg-green-400' : 'bg-gray-400'
          }`}></div>

          <svg 
            className="w-6 h-6 group-hover:scale-110 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            {isAgentOnline ? 'Chat with us - We\'re online!' : 'Leave us a message'}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>
    )
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs sm:max-w-sm cursor-pointer" onClick={expandChat}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">N</span>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                  isAgentOnline ? 'bg-green-400' : 'bg-gray-400'
                }`}></div>
              </div>
              <div>
                <div className="font-medium text-sm">Nextr Support</div>
                <div className={`text-xs ${isAgentOnline ? 'text-green-600' : 'text-gray-500'}`}>
                  {isAgentOnline ? 'Online' : 'Offline'}
                </div>
              </div>
            </div>
            
            {unreadCount > 0 && (
              <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {unreadCount > 9 ? '9+' : unreadCount}
              </div>
            )}
          </div>
          
          {messages.length > 1 && (
            <div className="mt-3 text-sm text-gray-600 truncate">
              {messages[messages.length - 1]?.text}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-50">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-full sm:w-80 h-96 max-h-[calc(100vh-2rem)] flex flex-col">
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">N</span>
              </div>
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                isAgentOnline ? 'bg-green-400' : 'bg-gray-400'
              }`}></div>
            </div>
            <div>
              <div className="font-medium text-sm">Nextr Support</div>
              <div className="text-xs text-gray-300">
                {isAgentOnline ? 'Online - We typically reply instantly' : 'Offline - We\'ll get back to you soon'}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={minimizeChat}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={closeChat}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`rounded-lg p-3 text-sm ${
                    message.sender === 'user'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">
                  {formatTime(message.timestamp)}
                </div>
              </div>
              
              {message.sender === 'agent' && (
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs text-white mr-2 order-1 flex-shrink-0">
                  N
                </div>
              )}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isAgentTyping && (
            <div className="flex justify-start">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs text-white mr-2 flex-shrink-0">
                N
              </div>
              <div className="bg-gray-100 text-gray-900 rounded-lg p-3 text-sm max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              disabled={isAgentTyping}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isAgentTyping}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
          
          {!isAgentOnline && (
            <div className="text-xs text-gray-500 mt-2">
              We're currently offline. We'll respond to your message during business hours (Mon-Fri 9AM-6PM PST).
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatWidget