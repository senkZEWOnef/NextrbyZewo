'use client'

const BusinessPartnerships = () => {
  const partnershipTypes = [
    {
      title: "Retail Partners",
      description: "Join our network of premium retailers and bring Nextr products to your customers",
      benefits: [
        "Competitive wholesale pricing",
        "Marketing support and materials",
        "Exclusive retailer-only products",
        "Dedicated account management"
      ],
      requirements: [
        "Established retail presence",
        "Minimum order quantities",
        "Brand alignment standards",
        "Customer service excellence"
      ],
      contact: "retail@nextr.com",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Technology Partners",
      description: "Collaborate with us on innovation and integrate our accessories with your technology",
      benefits: [
        "Co-development opportunities",
        "Early access to new tech",
        "Joint marketing initiatives",
        "Technical integration support"
      ],
      requirements: [
        "Complementary technology",
        "Innovation track record",
        "Technical compatibility",
        "Strategic alignment"
      ],
      contact: "tech@nextr.com",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Design Collaborations",
      description: "Work with renowned designers and artists to create limited edition collections",
      benefits: [
        "Creative freedom and support",
        "Premium material access",
        "Global distribution platform",
        "Marketing and PR support"
      ],
      requirements: [
        "Established design portfolio",
        "Brand compatibility",
        "Creative innovation",
        "Professional experience"
      ],
      contact: "design@nextr.com",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Distribution Partners",
      description: "Expand our reach in new markets and regions through strategic distribution partnerships",
      benefits: [
        "Exclusive territory rights",
        "Comprehensive training",
        "Marketing fund allocation",
        "Logistics support"
      ],
      requirements: [
        "Market expertise",
        "Distribution infrastructure",
        "Financial stability",
        "Local market presence"
      ],
      contact: "distribution@nextr.com",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const corporateServices = [
    {
      title: "Corporate Gifts",
      description: "Custom branded accessories for your employees, clients, and events",
      features: ["Custom logo engraving", "Bulk order pricing", "Gift packaging options", "Quick turnaround"],
      minOrder: "50+ units"
    },
    {
      title: "Employee Programs",
      description: "Exclusive discounts and product access for your organization's employees",
      features: ["Volume discounts", "Easy ordering portal", "Direct shipping", "Product customization"],
      minOrder: "100+ employees"
    },
    {
      title: "Brand Licensing",
      description: "License our technology and design expertise for your branded accessories",
      features: ["Technology licensing", "Design consultation", "Manufacturing support", "Quality assurance"],
      minOrder: "Strategic partnerships"
    }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
            Business Partnerships
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Join forces with Nextr to create exceptional experiences and drive mutual success. 
            We're always looking for like-minded partners who share our commitment to excellence.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {partnershipTypes.map((partnership, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                <div className="flex items-start mb-6">
                  <div className="text-white group-hover:text-gray-300 transition-colors mr-6 mt-1">
                    {partnership.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-3 group-hover:text-gray-200 transition-colors">
                      {partnership.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-6">
                      {partnership.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {partnership.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <div className="w-1 h-1 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm font-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {partnership.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm font-light">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <a 
                    href={`mailto:${partnership.contact}`}
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                  >
                    <span className="font-light mr-2">Contact: {partnership.contact}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
              Corporate Services
            </h3>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Tailored solutions for businesses and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporateServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <h4 className="text-lg font-light text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          <span className="text-gray-400 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-gray-800">
                    <span className="text-gray-500 text-xs">Minimum: {service.minOrder}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Application */}
        <div className="bg-gray-900 rounded-lg p-12 border border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light text-white mb-6">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
              Tell us about your business and how we can work together to create something exceptional. 
              Our partnership team will review your application and get back to you within 48 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">48hrs</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">150+</div>
                <div className="text-gray-400 text-sm">Active Partners</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnerships@nextr.com"
                className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Partnership Discussion
              </a>
              <button className="border border-white text-white px-8 py-3 text-lg font-light hover:bg-white hover:text-black transition-colors">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
              Stay Connected
            </h3>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Follow us for updates, behind-the-scenes content, and partnership opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Social Media */}
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-light text-white mb-6">Follow Our Journey</h4>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.307-.744 2.87-.269 1.056-1.03 2.38-1.533 3.188 1.156.359 2.384.551 3.661.551 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-light text-white mb-6 text-center lg:text-left">Stay Updated</h4>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <p className="text-gray-400 text-sm font-light mb-4">
                  Get the latest partnership opportunities, product launches, and company news delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className="flex-1 bg-black border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light placeholder-gray-500"
                  />
                  <button className="bg-white text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessPartnerships