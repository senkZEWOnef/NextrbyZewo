import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ChatProvider } from '@/contexts/ChatContext'
import ChatWidget from '@/components/chat/ChatWidget'

export const metadata: Metadata = {
  title: 'Nextr - Premium Phone & Electronics Accessories',
  description: 'Elevate your devices with meticulously crafted accessories that blend form and function seamlessly.',
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