import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ChatProvider } from '@/contexts/ChatContext'
import ChatWidget from '@/components/chat/ChatWidget'

export const metadata: Metadata = {
  title: 'nexr - Premium Phone & Electronics Accessories',
  description: 'Where innovation meets dependability. Premium accessories engineered for the modern era. Reliably. Redefined.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChatProvider>
          {children}
          <ChatWidget />
        </ChatProvider>
      </body>
    </html>
  )
}