'use client'

import { useState } from 'react'

const CustomerSupport = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also check your order status anytime by logging into your account on our website or using our order lookup tool."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return window for all products. Items must be in original condition with packaging. Return shipping is free for defective products, while customer-initiated returns have a small restocking fee."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to 15+ countries worldwide. Shipping costs and delivery times vary by location. International orders may be subject to customs duties and import taxes determined by your local government."
    },
    {
      question: "Are your products compatible with all phone models?",
      answer: "We design accessories for the most popular phone models including iPhone, Samsung Galaxy, Google Pixel, and OnePlus devices. Check individual product pages for specific compatibility information."
    },
    {
      question: "How long is the warranty on your products?",
      answer: "All Nextr products come with a 5-year limited warranty against manufacturing defects. This covers materials and workmanship but not normal wear and tear or accidental damage."
    },
    {
      question: "Can I change or cancel my order?",
      answer: "Orders can be modified or cancelled within 2 hours of placement. After this window, orders enter our fulfillment process and cannot be changed. Contact our support team immediately if you need assistance."
    },
    {
      question: "Do you offer bulk or wholesale pricing?",
      answer: "Yes, we have special pricing for bulk orders (50+ units) and retail partnerships. Contact our wholesale team at sales@nextr.com for pricing information and partnership opportunities."
    },
    {
      question: "How do I clean and maintain my accessories?",
      answer: "Most products can be cleaned with a soft, damp cloth. Avoid harsh chemicals or abrasive materials. For leather products, use appropriate leather cleaners. Detailed care instructions are included with each product."
    }
  ]

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      responseTime: "< 2 minutes",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: "Start Chat",
      primary: true
    },
    {
      title: "Email Support",
      description: "Detailed help for complex questions",
      availability: "24/7",
      responseTime: "< 4 hours",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: "Send Email"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri: 9AM-6PM PST",
      responseTime: "Immediate",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: "Call Now"
    },
    {
      title: "Help Center",
      description: "Browse guides and tutorials",
      availability: "Always available",
      responseTime: "Self-service",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      action: "Browse Help"
    }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
            Customer Support
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            We're here to help you get the most out of your Nextr products
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {supportChannels.map((channel, index) => (
            <div key={index} className="group">
              <div className={`rounded-lg p-6 border transition-all duration-300 h-full ${
                channel.primary 
                  ? 'bg-white text-black border-white' 
                  : 'bg-gray-900 border-gray-800 hover:border-gray-700'
              }`}>
                <div className={`mb-4 ${channel.primary ? 'text-black' : 'text-white group-hover:text-gray-300'} transition-colors`}>
                  {channel.icon}
                </div>
                
                <h3 className={`text-lg font-light mb-2 ${
                  channel.primary ? 'text-black' : 'text-white group-hover:text-gray-200'
                } transition-colors`}>
                  {channel.title}
                </h3>
                
                <p className={`text-sm font-light mb-4 leading-relaxed ${
                  channel.primary ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-300'
                } transition-colors`}>
                  {channel.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className={channel.primary ? 'text-gray-600' : 'text-gray-500'}>Available:</span>
                    <span className={channel.primary ? 'text-gray-800' : 'text-gray-400'}>{channel.availability}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className={channel.primary ? 'text-gray-600' : 'text-gray-500'}>Response:</span>
                    <span className={channel.primary ? 'text-gray-800' : 'text-gray-400'}>{channel.responseTime}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    if (channel.title === 'Live Chat') {
                      const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement
                      if (chatButton) chatButton.click()
                    }
                  }}
                  className={`w-full py-2 text-sm font-medium rounded-sm transition-colors ${
                    channel.primary
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {channel.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-400 font-light">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-white font-light text-lg pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-800">
                      <p className="text-gray-400 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-white font-light mb-2">User Guides</h4>
            <p className="text-gray-400 text-sm font-light mb-4">
              Step-by-step setup and usage instructions for all products
            </p>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
              View Guides →
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-white font-light mb-2">Video Tutorials</h4>
            <p className="text-gray-400 text-sm font-light mb-4">
              Watch detailed video guides and product demonstrations
            </p>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
              Watch Videos →
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-white font-light mb-2">Community Forum</h4>
            <p className="text-gray-400 text-sm font-light mb-4">
              Connect with other users and share tips and experiences
            </p>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
              Join Community →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerSupport