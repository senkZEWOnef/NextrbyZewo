'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
  isTyping?: boolean
}

interface ChatContextType {
  isOpen: boolean
  isMinimized: boolean
  messages: Message[]
  unreadCount: number
  isAgentOnline: boolean
  isAgentTyping: boolean
  openChat: () => void
  closeChat: () => void
  minimizeChat: () => void
  expandChat: () => void
  sendMessage: (text: string) => void
  markAsRead: () => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const useChat = () => {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [isAgentOnline, setIsAgentOnline] = useState(true)
  const [isAgentTyping, setIsAgentTyping] = useState(false)
  const [sessionId] = useState(() => {
    // Generate or retrieve session ID
    if (typeof window !== 'undefined') {
      let storedSessionId = localStorage.getItem('nextr_chat_session')
      if (!storedSessionId) {
        storedSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        localStorage.setItem('nextr_chat_session', storedSessionId)
      }
      return storedSessionId
    }
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  })

  // Auto-responses for common questions
  const autoResponses = [
    {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
      responses: [
        "Hello! Welcome to Nextr. I'm here to help you with any questions about our premium accessories. How can I assist you today?",
        "Hi there! Thanks for reaching out to Nextr. What can I help you with today?",
        "Hey! Great to see you here. I'm ready to help you find the perfect accessory or answer any questions you might have."
      ]
    },
    {
      keywords: ['price', 'cost', 'expensive', 'cheap', 'affordable'],
      responses: [
        "Our accessories range from $29 for cables and adapters to $299 for our premium cases. All products come with a 5-year warranty and free shipping. Would you like to know about pricing for a specific product?",
        "We offer premium quality at various price points. You can view our full catalog with pricing on our shop page, or I can help you find something within your budget. What type of accessory are you looking for?"
      ]
    },
    {
      keywords: ['shipping', 'delivery', 'fast', 'express'],
      responses: [
        "We offer free standard shipping (3-5 business days) and express shipping (1-2 business days) for $15. International shipping is available to 15+ countries. Where would you like your order shipped?",
        "All orders ship within 24 hours! Standard shipping is free, and we also offer express options. Would you like to know the delivery time for your location?"
      ]
    },
    {
      keywords: ['warranty', 'guarantee', 'return', 'exchange'],
      responses: [
        "All Nextr products come with a 5-year limited warranty and 30-day return policy. We also offer a lifetime craftsmanship guarantee. Is there a specific issue you're experiencing with a product?",
        "We stand behind our quality! 5-year warranty, 30-day returns, and lifetime craftsmanship guarantee. What would you like to know about our warranty coverage?"
      ]
    },
    {
      keywords: ['compatible', 'compatibility', 'fit', 'iphone', 'samsung', 'pixel'],
      responses: [
        "We design accessories for all major phone models including iPhone, Samsung Galaxy, Google Pixel, and OnePlus. What device do you have? I can help you find the perfect compatible accessories.",
        "Great question! Our products are designed for specific device models to ensure perfect fit and functionality. Could you tell me which phone you have so I can show you compatible options?"
      ]
    },
    {
      keywords: ['thank', 'thanks', 'bye', 'goodbye'],
      responses: [
        "You're very welcome! Feel free to reach out anytime if you need help. Have a great day!",
        "Happy to help! Don't hesitate to contact us if you have more questions. Thanks for choosing Nextr!",
        "Thank you for chatting with us! We're always here when you need assistance. Take care!"
      ]
    }
  ]


  // Save message to database
  const saveMessageToDatabase = async (message: string, sender: 'user' | 'agent') => {
    try {
      await fetch('/api/chat/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          sender,
          message
        })
      })
    } catch (error) {
      console.error('Error saving message to database:', error)
    }
  }

  // Initialize with welcome message or load existing messages
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const response = await fetch(`/api/chat/messages?sessionId=${sessionId}`)
        if (response.ok) {
          const { messages: dbMessages } = await response.json()
          
          if (dbMessages.length === 0) {
            // No messages exist, create welcome message
            const welcomeText = "Hi! I'm Sarah from Nextr support. I'm here to help you find the perfect accessories for your devices. What can I assist you with today?"
            
            const welcomeMessage: Message = {
              id: '1',
              text: welcomeText,
              sender: 'agent',
              timestamp: new Date()
            }
            
            setMessages([welcomeMessage])
            await saveMessageToDatabase(welcomeText, 'agent')
          } else {
            // Load existing messages
            const convertedMessages: Message[] = dbMessages.map((msg: any) => ({
              id: msg.id,
              text: msg.message,
              sender: msg.sender,
              timestamp: new Date(msg.createdAt)
            }))
            
            setMessages(convertedMessages)
          }
        }
      } catch (error) {
        console.error('Error initializing chat:', error)
        // Fallback to local welcome message
        const welcomeMessage: Message = {
          id: '1',
          text: "Hi! I'm Sarah from Nextr support. I'm here to help you find the perfect accessories for your devices. What can I assist you with today?",
          sender: 'agent',
          timestamp: new Date()
        }
        setMessages([welcomeMessage])
      }
    }
    
    initializeChat()
  }, [sessionId])

  // Check business hours for agent availability
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date()
      const hour = now.getHours()
      const day = now.getDay()
      
      // Business hours: Mon-Fri 9AM-6PM PST, Sat-Sun 10AM-4PM PST
      const isWeekday = day >= 1 && day <= 5
      const isWeekend = day === 0 || day === 6
      
      const isBusinessHours = (
        (isWeekday && hour >= 9 && hour < 18) ||
        (isWeekend && hour >= 10 && hour < 16)
      )
      
      setIsAgentOnline(isBusinessHours)
    }

    checkBusinessHours()
    const interval = setInterval(checkBusinessHours, 60000) // Check every minute
    
    return () => clearInterval(interval)
  }, [])

  // Update unread count
  useEffect(() => {
    if (!isOpen || isMinimized) {
      const agentMessages = messages.filter(m => m.sender === 'agent')
      const lastUserMessage = messages.filter(m => m.sender === 'user').pop()
      
      if (lastUserMessage) {
        const unreadAgentMessages = agentMessages.filter(
          m => m.timestamp > lastUserMessage.timestamp
        )
        setUnreadCount(unreadAgentMessages.length)
      }
    } else {
      setUnreadCount(0)
    }
  }, [messages, isOpen, isMinimized])

  const findAutoResponse = (text: string): string | null => {
    const lowerText = text.toLowerCase()
    
    for (const responseGroup of autoResponses) {
      for (const keyword of responseGroup.keywords) {
        if (lowerText.includes(keyword)) {
          const responses = responseGroup.responses
          return responses[Math.floor(Math.random() * responses.length)]
        }
      }
    }
    
    return null
  }

  const openChat = () => {
    setIsOpen(true)
    setIsMinimized(false)
    setUnreadCount(0)
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const expandChat = () => {
    setIsMinimized(false)
    setUnreadCount(0)
  }

  const sendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    
    // Save user message to database
    await saveMessageToDatabase(text, 'user')

    // Simulate agent typing
    setIsAgentTyping(true)

    // Auto-response or default response
    setTimeout(async () => {
      setIsAgentTyping(false)
      
      const autoResponse = findAutoResponse(text)
      const responseText = autoResponse || 
        "Thanks for your message! Our team will get back to you shortly. For immediate assistance, you can also call us at +1 (555) 123-4567 or email support@nextr.com."

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'agent',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, agentMessage])
      
      // Save agent message to database
      await saveMessageToDatabase(responseText, 'agent')
    }, 1000 + Math.random() * 2000) // Random delay 1-3 seconds
  }

  const markAsRead = () => {
    setUnreadCount(0)
  }

  const value: ChatContextType = {
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
    sendMessage,
    markAsRead
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}