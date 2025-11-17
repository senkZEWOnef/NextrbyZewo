'use client'

import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  inquiryType: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Customer Support' },
    { value: 'wholesale', label: 'Wholesale/B2B' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'press', label: 'Press/Media' },
    { value: 'careers', label: 'Careers' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gray-900 rounded-lg p-12 border border-gray-800">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">Thank You</h2>
            <p className="text-gray-300 font-light leading-relaxed mb-6">
              Your message has been received. Our team will get back to you within 24 hours.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  company: '',
                  subject: '',
                  message: '',
                  inquiryType: 'general'
                })
              }}
              className="text-gray-400 hover:text-white transition-colors font-light"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
            Send us a Message
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Inquiry Type */}
          <div>
            <label htmlFor="inquiryType" className="block text-white font-light mb-3">
              Type of Inquiry
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light"
              required
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-white font-light mb-3">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light placeholder-gray-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-white font-light mb-3">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light placeholder-gray-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-white font-light mb-3">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light placeholder-gray-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white font-light mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light placeholder-gray-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Company & Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-white font-light mb-3">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light placeholder-gray-500"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white font-light mb-3">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light placeholder-gray-500"
                placeholder="What is this regarding?"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-white font-light mb-3">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:border-gray-500 focus:outline-none font-light placeholder-gray-500 resize-none"
              placeholder="Tell us more about your inquiry..."
              required
            />
          </div>

          {/* Privacy Notice */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-white font-medium mb-2">Privacy & Data</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Your information is secure with us. We use your contact details solely to respond to your inquiry 
                  and will never share your personal information with third parties without your consent.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-light mb-6">
            Prefer to reach out directly?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@nextr.com"
              className="inline-flex items-center justify-center border border-gray-700 text-gray-300 px-6 py-3 rounded-sm hover:border-gray-600 hover:text-white transition-colors font-light"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@nextr.com
            </a>
            <a 
              href="tel:+15551234567"
              className="inline-flex items-center justify-center border border-gray-700 text-gray-300 px-6 py-3 rounded-sm hover:border-gray-600 hover:text-white transition-colors font-light"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm