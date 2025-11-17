import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { contactSubmissions } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')
    
    let query = db.select().from(contactSubmissions)
    
    if (status) {
      query = query.where(eq(contactSubmissions.status, status))
    }
    
    const submissions = await query
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(limit)
      .offset(offset)

    return NextResponse.json({
      submissions,
      pagination: {
        limit,
        offset,
        total: submissions.length
      }
    })

  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
      inquiryType
    } = body
    
    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message || !inquiryType) {
      return NextResponse.json(
        { error: 'First name, last name, email, subject, message, and inquiry type are required' },
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

    const newSubmission = await db.insert(contactSubmissions).values({
      firstName,
      lastName,
      email,
      phone: phone || null,
      company: company || null,
      subject,
      message,
      inquiryType,
      status: 'new',
    }).returning()

    return NextResponse.json(newSubmission[0], { status: 201 })

  } catch (error) {
    console.error('Error creating contact submission:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}