import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { db } from '../src/lib/db'
import { products, users, orders, orderItems, chatSessions, chatMessages, collections, collectionProducts } from '../src/db/schema'

const sampleProducts = [
  {
    name: 'Elite MagSafe Case',
    description: 'Premium protection with magnetic wireless charging compatibility',
    price: '89.99',
    originalPrice: '109.99',
    category: 'phone-cases',
    brand: 'nexr',
    features: ['wireless-charging', 'drop-protection', 'magnetic'],
    isNew: true,
    isBestseller: false,
    stock: 45,
    images: ['/api/placeholder/400/600'],
    rating: '4.9',
    reviewCount: 234
  },
  {
    name: 'Wireless Power Station Pro',
    description: 'Fast wireless charging with premium materials and elegant design',
    price: '149.99',
    category: 'wireless-chargers',
    brand: 'nexr',
    features: ['fast-charging', 'wireless-charging', 'premium-materials'],
    isNew: false,
    isBestseller: true,
    stock: 23,
    images: ['/api/placeholder/400/600'],
    rating: '4.8',
    reviewCount: 156
  },
  {
    name: 'Crystal Shield Pro',
    description: 'Military-grade screen protection with crystal clear clarity',
    price: '39.99',
    category: 'screen-protectors',
    brand: 'nexr',
    features: ['drop-protection', 'crystal-clear', 'military-grade'],
    isNew: false,
    isBestseller: false,
    stock: 156,
    images: ['/api/placeholder/400/600'],
    rating: '4.7',
    reviewCount: 89
  },
  {
    name: 'Magnetic Car Mount Elite',
    description: 'Secure magnetic mounting system for vehicles',
    price: '69.99',
    category: 'mounts-stands',
    brand: 'nexr',
    features: ['magnetic', 'vehicle-mount', 'premium-materials'],
    isNew: false,
    isBestseller: false,
    stock: 34,
    images: ['/api/placeholder/400/600'],
    rating: '4.6',
    reviewCount: 72
  },
  {
    name: 'Ultra Fast Cable',
    description: 'High-speed charging cable with premium braided design',
    price: '29.99',
    originalPrice: '39.99',
    category: 'cables-adapters',
    brand: 'nexr',
    features: ['fast-charging', 'braided-design', 'durable'],
    isNew: false,
    isBestseller: false,
    stock: 89,
    images: ['/api/placeholder/400/600'],
    rating: '4.5',
    reviewCount: 145
  },
  {
    name: 'Power Bank Pro 10K',
    description: 'Portable power bank with wireless and fast charging capabilities',
    price: '119.99',
    category: 'portable-batteries',
    brand: 'nexr',
    features: ['fast-charging', 'wireless-charging', 'portable'],
    isNew: false,
    isBestseller: true,
    stock: 67,
    images: ['/api/placeholder/400/600'],
    rating: '4.8',
    reviewCount: 203
  }
]

const sampleUsers = [
  {
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (555) 123-4567'
  },
  {
    email: 'jane.smith@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '+1 (555) 987-6543'
  },
  {
    email: 'mike.wilson@example.com',
    firstName: 'Mike',
    lastName: 'Wilson',
    phone: '+1 (555) 456-7890'
  }
]

async function seed() {
  try {
    console.log('🌱 Starting database seed...')

    // Insert sample users
    console.log('👥 Inserting users...')
    const insertedUsers = await db.insert(users).values(sampleUsers).returning()
    console.log(`✅ Inserted ${insertedUsers.length} users`)

    // Insert sample products
    console.log('📦 Inserting products...')
    const insertedProducts = await db.insert(products).values(sampleProducts).returning()
    console.log(`✅ Inserted ${insertedProducts.length} products`)

    // Create sample orders
    console.log('🛒 Creating sample orders...')
    const sampleOrders = [
      {
        userId: insertedUsers[0].id,
        status: 'delivered',
        totalAmount: '179.98',
        shippingAddress: {
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          city: 'San Francisco',
          state: 'CA',
          zipCode: '94102',
          country: 'US'
        }
      },
      {
        userId: insertedUsers[1].id,
        status: 'shipped',
        totalAmount: '89.99',
        trackingNumber: 'TRK123456789'
      },
      {
        userId: insertedUsers[2].id,
        status: 'pending',
        totalAmount: '149.99'
      }
    ]

    const insertedOrders = await db.insert(orders).values(sampleOrders).returning()
    console.log(`✅ Inserted ${insertedOrders.length} orders`)

    // Create order items
    console.log('📝 Creating order items...')
    const sampleOrderItems = [
      {
        orderId: insertedOrders[0].id,
        productId: insertedProducts[0].id,
        quantity: 1,
        price: '89.99'
      },
      {
        orderId: insertedOrders[0].id,
        productId: insertedProducts[1].id,
        quantity: 1,
        price: '89.99'
      },
      {
        orderId: insertedOrders[1].id,
        productId: insertedProducts[0].id,
        quantity: 1,
        price: '89.99'
      },
      {
        orderId: insertedOrders[2].id,
        productId: insertedProducts[1].id,
        quantity: 1,
        price: '149.99'
      }
    ]

    await db.insert(orderItems).values(sampleOrderItems)
    console.log(`✅ Inserted ${sampleOrderItems.length} order items`)

    // Create sample chat sessions and messages
    console.log('💬 Creating chat sessions...')
    const sampleChatSessions = [
      {
        sessionId: 'session_demo_1',
        userId: insertedUsers[0].id,
        status: 'active'
      },
      {
        sessionId: 'session_demo_2',
        status: 'closed'
      }
    ]

    const insertedSessions = await db.insert(chatSessions).values(sampleChatSessions).returning()
    console.log(`✅ Inserted ${insertedSessions.length} chat sessions`)

    // Create sample collections
    console.log('📚 Creating collections...')
    const sampleCollections = [
      {
        name: 'Essential Protection',
        description: 'Must-have protection accessories for your devices',
        slug: 'essential-protection'
      },
      {
        name: 'Power & Charging',
        description: 'Keep your devices powered with our charging solutions',
        slug: 'power-charging'
      }
    ]

    const insertedCollections = await db.insert(collections).values(sampleCollections).returning()
    console.log(`✅ Inserted ${insertedCollections.length} collections`)

    console.log('🎉 Database seeded successfully!')
    process.exit(0)

  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seed()