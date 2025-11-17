'use client'

const ContactHero = () => {
  return (
    <section className="relative min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Geometric Network */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
            {/* Connection Lines */}
            <g stroke="white" strokeWidth="1" fill="none">
              <path d="M100,100 L300,150 L500,100 L700,200 L600,400 L400,350 L200,450 L100,300 Z" />
              <path d="M150,50 L350,80 L550,50 L650,150" />
              <path d="M50,200 L250,250 L450,200 L750,300" />
            </g>
            {/* Network Nodes */}
            <g fill="white" opacity="0.3">
              <circle cx="100" cy="100" r="3" />
              <circle cx="300" cy="150" r="3" />
              <circle cx="500" cy="100" r="3" />
              <circle cx="700" cy="200" r="3" />
              <circle cx="600" cy="400" r="3" />
              <circle cx="400" cy="350" r="3" />
              <circle cx="200" cy="450" r="3" />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-tight">
            Get in
            <br />
            <span className="italic font-extralight">Touch</span>
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Whether you have questions about our products, need support, or want to explore 
            partnership opportunities, we're here to help you every step of the way.
          </p>
        </div>
        
        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="text-white mb-3">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-light mb-2">Email</h3>
            <p className="text-gray-400 text-sm">hello@nextr.com</p>
          </div>

          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="text-white mb-3">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-white font-light mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
          </div>

          <button 
            onClick={() => {
              // This will be handled by the ChatWidget component
              const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement
              if (chatButton) chatButton.click()
            }}
            className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-300 w-full"
          >
            <div className="text-white mb-3">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-white font-light mb-2">Live Chat</h3>
            <p className="text-gray-400 text-sm">Available 24/7</p>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero