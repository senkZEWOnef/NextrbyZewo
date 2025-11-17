import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { products } from '@/db/schema'
import { eq, and, gte, lte, ilike, inArray } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract query parameters
    const category = searchParams.get('category')
    const brand = searchParams.get('brand')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const features = searchParams.get('features')?.split(',')
    const search = searchParams.get('search')
    const isNew = searchParams.get('isNew')
    const isBestseller = searchParams.get('isBestseller')
    const sortBy = searchParams.get('sortBy') || 'featured'
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Build where conditions
    const conditions = []
    
    // Check if this is an admin request (show all products)
    const isAdmin = searchParams.get('admin') === 'true'
    
    // Only filter active products for public requests
    if (!isAdmin) {
      conditions.push(eq(products.isActive, true))
    }
    
    if (category) {
      conditions.push(eq(products.category, category))
    }
    
    if (brand) {
      conditions.push(eq(products.brand, brand))
    }
    
    if (minPrice) {
      conditions.push(gte(products.price, minPrice))
    }
    
    if (maxPrice) {
      conditions.push(lte(products.price, maxPrice))
    }
    
    if (search) {
      conditions.push(ilike(products.name, `%${search}%`))
    }
    
    if (isNew === 'true') {
      conditions.push(eq(products.isNew, true))
    }
    
    if (isBestseller === 'true') {
      conditions.push(eq(products.isBestseller, true))
    }

    // Build the query
    let query = db.select().from(products)
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions))
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        query = query.orderBy(products.price)
        break
      case 'price-high':
        query = query.orderBy(products.price)
        break
      case 'rating':
        query = query.orderBy(products.rating)
        break
      case 'newest':
        query = query.orderBy(products.createdAt)
        break
      default:
        // Featured - could be based on isBestseller, rating, etc.
        query = query.orderBy(products.isBestseller, products.rating)
        break
    }

    // Apply pagination
    const result = await query.limit(limit).offset(offset)

    return NextResponse.json({
      products: result,
      pagination: {
        limit,
        offset,
        total: result.length // In a real app, you'd count total separately
      }
    })

  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const newProduct = await db.insert(products).values({
      name: body.name,
      description: body.description,
      price: body.price,
      originalPrice: body.originalPrice,
      category: body.category,
      brand: body.brand,
      features: body.features || [],
      isNew: body.isNew || false,
      isBestseller: body.isBestseller || false,
      stock: body.stock || 0,
      images: body.images || [],
    }).returning()

    return NextResponse.json(newProduct[0], { status: 201 })

  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}