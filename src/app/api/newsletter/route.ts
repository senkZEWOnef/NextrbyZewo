import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { newsletterSubscriptions } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const isActive = searchParams.get('isActive')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')
    
    let query = db.select().from(newsletterSubscriptions)
    
    if (isActive !== null) {
      query = query.where(eq(newsletterSubscriptions.isActive, isActive === 'true'))
    }
    
    const subscriptions = await query
      .orderBy(desc(newsletterSubscriptions.createdAt))
      .limit(limit)
      .offset(offset)

    return NextResponse.json({
      subscriptions,
      pagination: {
        limit,
        offset,
        total: subscriptions.length
      }
    })

  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subscriptions' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingSubscription = await db
      .select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, email))
      .limit(1)

    if (existingSubscription.length > 0) {
      // If exists but inactive, reactivate
      if (!existingSubscription[0].isActive) {
        const updated = await db
          .update(newsletterSubscriptions)
          .set({ 
            isActive: true,
            updatedAt: new Date()
          })
          .where(eq(newsletterSubscriptions.email, email))
          .returning()
        
        return NextResponse.json(updated[0], { status: 200 })
      } else {
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 409 }
        )
      }
    }

    // Create new subscription
    const newSubscription = await db.insert(newsletterSubscriptions).values({
      email,
      isActive: true,
    }).returning()

    return NextResponse.json(newSubscription[0], { status: 201 })

  } catch (error) {
    console.error('Error creating newsletter subscription:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Soft delete by setting isActive to false
    const updated = await db
      .update(newsletterSubscriptions)
      .set({ 
        isActive: false,
        updatedAt: new Date()
      })
      .where(eq(newsletterSubscriptions.email, email))
      .returning()

    if (updated.length === 0) {
      return NextResponse.json(
        { error: 'Email not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Successfully unsubscribed' })

  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error)
    return NextResponse.json(
      { error: 'Failed to unsubscribe' },
      { status: 500 }
    )
  }
}