'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extralight tracking-[0.3em] text-white hover:text-gray-300 transition-colors">
              nexr
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="text-white hover:text-gray-300 transition-colors font-light">
              Collections
            </Link>
            <Link href="/shop" className="text-white hover:text-gray-300 transition-colors font-light">
              Shop
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-light">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-light">
              Contact
            </Link>
            <button className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="ml-1 text-sm">0</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <Link href="/collections" className="text-white hover:text-gray-300 transition-colors font-light">
                Collections
              </Link>
              <Link href="/shop" className="text-white hover:text-gray-300 transition-colors font-light">
                Shop
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-light">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-light">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header