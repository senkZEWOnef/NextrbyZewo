'use client'

import Link from 'next/link'

const SeasonalShowcase = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-8">
              <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-4 block">
                Limited Edition
              </span>
              <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight leading-tight">
                Winter
                <br />
                <span className="italic font-extralight">Elements</span>
              </h2>
              <div className="w-16 h-px bg-white mb-6"></div>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                Embrace the season with our exclusive Winter Elements collection. 
                Featuring frost-resistant materials and elegant winter-inspired designs 
                that perform beautifully in cold conditions.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <h4 className="text-white font-medium mb-2">Temperature Resilient</h4>
                <p className="text-gray-400 text-sm font-light">
                  Tested in extreme conditions down to -20°C
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Premium Materials</h4>
                <p className="text-gray-400 text-sm font-light">
                  Aerospace-grade aluminum and leather
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Limited Availability</h4>
                <p className="text-gray-400 text-sm font-light">
                  Only 500 pieces worldwide
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Exclusive Design</h4>
                <p className="text-gray-400 text-sm font-light">
                  Collaboratively designed with Arctic explorers
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/collections/winter-elements"
                className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Explore Winter Elements
              </Link>
              <button className="border border-white text-white px-8 py-3 text-lg font-light hover:bg-white hover:text-black transition-colors">
                Notify When Available
              </button>
            </div>

            {/* Collection Stats */}
            <div className="flex items-center space-x-8 mt-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-light text-white">12</div>
                <div className="text-gray-400 text-sm">Unique Pieces</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white">$199-$499</div>
                <div className="text-gray-400 text-sm">Price Range</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white">Jan 15</div>
                <div className="text-gray-400 text-sm">Launch Date</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/5]">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-800 to-slate-900 opacity-30"></div>
              
              {/* Floating Ice Crystals Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-100 rounded-full opacity-40 animate-pulse delay-700"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse delay-1000"></div>
              </div>

              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gray-800"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-light">Coming Soon</h4>
                  <p className="text-sm text-gray-300 mt-2">Winter Elements Collection</p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  LIMITED EDITION
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white via-transparent to-transparent opacity-10"></div>
            </div>

            {/* Product Preview Cards */}
            <div className="absolute -bottom-8 -left-8 bg-black border border-gray-800 rounded-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-800 rounded-sm"></div>
                <div>
                  <h5 className="text-white text-sm font-medium">Arctic Shield Case</h5>
                  <p className="text-gray-400 text-xs">Flagship piece</p>
                  <p className="text-white text-sm font-medium mt-1">$299</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-black border border-gray-800 rounded-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-800 rounded-sm"></div>
                <div>
                  <h5 className="text-white text-sm font-medium">Frost Charger</h5>
                  <p className="text-gray-400 text-xs">Temperature resistant</p>
                  <p className="text-white text-sm font-medium mt-1">$199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeasonalShowcase