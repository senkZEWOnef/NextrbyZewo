'use client'

const ContactInfo = () => {
  const offices = [
    {
      city: 'San Francisco',
      type: 'Headquarters',
      address: '123 Design District\nSan Francisco, CA 94105\nUnited States',
      phone: '+1 (555) 123-4567',
      email: 'sf@nextr.com',
      hours: 'Mon-Fri: 9AM-6PM PST',
      isHeadquarters: true
    },
    {
      city: 'London',
      type: 'European Office',
      address: '45 Shoreditch High St\nLondon E1 6PN\nUnited Kingdom',
      phone: '+44 20 7946 0958',
      email: 'london@nextr.com',
      hours: 'Mon-Fri: 9AM-6PM GMT'
    },
    {
      city: 'Tokyo',
      type: 'Asia Pacific',
      address: '2-3-1 Shibuya, Shibuya City\nTokyo 150-0002\nJapan',
      phone: '+81 3-5555-0123',
      email: 'tokyo@nextr.com',
      hours: 'Mon-Fri: 9AM-6PM JST'
    }
  ]

  const departments = [
    {
      title: 'Customer Support',
      description: 'Product questions, orders, returns, and technical assistance',
      email: 'support@nextr.com',
      phone: '+1 (555) 123-HELP',
      hours: '24/7 Support Available',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Sales & Wholesale',
      description: 'B2B partnerships, bulk orders, and retail opportunities',
      email: 'sales@nextr.com',
      phone: '+1 (555) 123-SALE',
      hours: 'Mon-Fri: 9AM-6PM PST',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Press & Media',
      description: 'Media inquiries, press releases, and review units',
      email: 'press@nextr.com',
      phone: '+1 (555) 123-NEWS',
      hours: 'Mon-Fri: 9AM-5PM PST',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
        </svg>
      )
    },
    {
      title: 'Partnerships',
      description: 'Strategic partnerships, collaborations, and joint ventures',
      email: 'partnerships@nextr.com',
      phone: '+1 (555) 123-PART',
      hours: 'Mon-Fri: 9AM-6PM PST',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Office Locations */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
              Global Offices
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Find us around the world. We're here to support you wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full relative">
                  {office.isHeadquarters && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">
                        HQ
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-light text-white mb-2 group-hover:text-gray-200 transition-colors">
                      {office.city}
                    </h3>
                    <p className="text-gray-400 text-sm font-light uppercase tracking-wide mb-4">
                      {office.type}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Address
                      </h4>
                      <p className="text-gray-400 text-sm font-light whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Phone
                      </h4>
                      <a href={`tel:${office.phone}`} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                        {office.phone}
                      </a>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </h4>
                      <a href={`mailto:${office.email}`} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                        {office.email}
                      </a>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Hours
                      </h4>
                      <p className="text-gray-400 text-sm font-light">
                        {office.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Contacts */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
              Department Contacts
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Get in touch with the right team for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <div className="flex items-start mb-4">
                    <div className="text-white group-hover:text-gray-300 transition-colors mr-4 mt-1">
                      {dept.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-light text-white mb-2 group-hover:text-gray-200 transition-colors">
                        {dept.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                        {dept.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Email:</span>
                      <a href={`mailto:${dept.email}`} className="text-gray-300 hover:text-white transition-colors">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Phone:</span>
                      <a href={`tel:${dept.phone}`} className="text-gray-300 hover:text-white transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Hours:</span>
                      <span className="text-gray-400">{dept.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-white">Emergency Support</h3>
            </div>
            <p className="text-gray-400 font-light mb-4">
              For urgent issues outside business hours, use our emergency support line.
            </p>
            <a 
              href="tel:+15551234911"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-sm hover:bg-red-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Emergency: +1 (555) 123-4911
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo