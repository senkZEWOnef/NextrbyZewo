import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { chatMessages, chatSessions } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      )
    }

    // First find the chat session by sessionId
    const session = await db
      .select()
      .from(chatSessions)
      .where(eq(chatSessions.sessionId, sessionId))
      .limit(1)

    if (session.length === 0) {
      return NextResponse.json({ messages: [] })
    }

    // Then get messages using the session's UUID
    const messages = await db
      .select()
      .from(chatMessages)
      .where(eq(chatMessages.sessionId, session[0].id))
      .orderBy(chatMessages.createdAt)

    return NextResponse.json({ messages })

  } catch (error) {
    console.error('Error fetching chat messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId, sender, message } = body
    
    if (!sessionId || !sender || !message) {
      return NextResponse.json(
        { error: 'Session ID, sender, and message are required' },
        { status: 400 }
      )
    }

    // First ensure the session exists
    let session = await db
      .select()
      .from(chatSessions)
      .where(eq(chatSessions.sessionId, sessionId))
      .limit(1)

    if (session.length === 0) {
      // Create new session if it doesn't exist
      const newSession = await db.insert(chatSessions).values({
        sessionId,
        status: 'active',
      }).returning()
      
      session = newSession
    }

    // Insert the message
    const newMessage = await db.insert(chatMessages).values({
      sessionId: session[0].id,
      sender,
      message,
      isRead: sender === 'agent',
    }).returning()

    return NextResponse.json(newMessage[0], { status: 201 })

  } catch (error) {
    console.error('Error creating chat message:', error)
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    )
  }
}