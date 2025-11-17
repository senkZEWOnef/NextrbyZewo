'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionHero from '@/components/collections/CollectionHero'
import FeaturedCollections from '@/components/collections/FeaturedCollections'
import SeasonalShowcase from '@/components/collections/SeasonalShowcase'
import CollectionGrid from '@/components/collections/CollectionGrid'

const Collections = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <CollectionHero />
      <FeaturedCollections />
      <SeasonalShowcase />
      <CollectionGrid />
      
      <Footer />
    </div>
  )
}

export default Collections