'use client'

import { useState } from 'react'

const CraftsmanshipProcess = () => {
  const [activeStep, setActiveStep] = useState(0)

  const processSteps = [
    {
      title: 'Research & Ideation',
      subtitle: 'Understanding Needs',
      description: 'We begin by studying user behavior, conducting extensive market research, and identifying gaps in the current accessory landscape.',
      details: [
        'User experience studies',
        'Material research',
        'Technology trend analysis',
        'Competitor benchmarking'
      ],
      duration: '2-3 weeks'
    },
    {
      title: 'Design & Prototyping',
      subtitle: 'Bringing Ideas to Life',
      description: 'Our design team creates initial concepts, develops 3D models, and produces rapid prototypes for testing and iteration.',
      details: [
        '3D modeling & CAD design',
        'Rapid prototyping',
        'Material testing',
        'Ergonomic validation'
      ],
      duration: '4-6 weeks'
    },
    {
      title: 'Engineering & Testing',
      subtitle: 'Precision Manufacturing',
      description: 'Rigorous engineering ensures every product meets our exacting standards for durability, functionality, and aesthetic appeal.',
      details: [
        'Stress testing protocols',
        'Quality assurance',
        'Manufacturing optimization',
        'Compliance verification'
      ],
      duration: '3-4 weeks'
    },
    {
      title: 'Production & Quality Control',
      subtitle: 'Crafting Excellence',
      description: 'Each product is manufactured using premium materials and undergoes multiple quality checkpoints before reaching customers.',
      details: [
        'Premium material sourcing',
        'Precision manufacturing',
        'Multi-point quality checks',
        'Final inspection'
      ],
      duration: '2-3 weeks'
    }
  ]

  const materials = [
    {
      name: 'Aerospace Aluminum',
      description: '6061-T6 grade for superior strength-to-weight ratio',
      properties: ['Corrosion resistant', 'Lightweight', 'Durable finish']
    },
    {
      name: 'Premium Leather',
      description: 'Full-grain leather sourced from sustainable suppliers',
      properties: ['Natural aging', 'Soft touch', 'Water resistant']
    },
    {
      name: 'Carbon Fiber',
      description: 'Woven carbon fiber for ultimate protection',
      properties: ['Ultra-lightweight', 'Impact resistant', 'Modern aesthetic']
    },
    {
      name: 'Tempered Glass',
      description: 'Chemically strengthened with oleophobic coating',
      properties: ['Crystal clarity', 'Scratch resistant', 'Fingerprint proof']
    }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-6 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            From Concept to
            <br />
            <span className="italic font-extralight">Creation</span>
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Every Nextr product follows a meticulous development process that ensures exceptional quality 
            and innovative design at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-24">
          {/* Step Navigation */}
          <div className="flex flex-col lg:flex-row justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-8">
            {processSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`text-left p-4 rounded-lg border transition-all duration-300 ${
                  activeStep === index
                    ? 'border-white bg-gray-900 text-white'
                    : 'border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300'
                }`}
              >
                <div className="text-sm font-light uppercase tracking-wide mb-1">
                  Step {index + 1}
                </div>
                <div className="font-medium">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-2 block">
                  {processSteps[activeStep].subtitle}
                </span>
                <h3 className="text-3xl font-light text-white mb-4">
                  {processSteps[activeStep].title}
                </h3>
                <div className="w-16 h-px bg-white mb-6"></div>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {processSteps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-400 font-light">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="text-white">
                <span className="text-gray-400 font-light">Typical Duration: </span>
                <span className="font-medium">{processSteps[activeStep].duration}</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg bg-gray-900 border border-gray-800 overflow-hidden">
                {/* Process Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Central Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-light">{activeStep + 1}</span>
                    </div>

                    {/* Surrounding Elements */}
                    {[0, 1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className={`absolute w-8 h-8 border rounded-full transition-all duration-500 ${
                          index === activeStep
                            ? 'border-white bg-white'
                            : index < activeStep
                            ? 'border-gray-400 bg-gray-400'
                            : 'border-gray-600'
                        }`}
                        style={{
                          top: `${50 + 35 * Math.cos((index * Math.PI) / 2 - Math.PI / 2)}%`,
                          left: `${50 + 35 * Math.sin((index * Math.PI) / 2 - Math.PI / 2)}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      ></div>
                    ))}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="35%"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        className="animate-spin-slow"
                      />
                    </svg>
                  </div>
                </div>

                {/* Step Indicator */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-light opacity-60">Current Step</div>
                  <div className="text-sm font-medium">{processSteps[activeStep].title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Materials Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
              Premium Materials
            </h3>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              We source only the finest materials from trusted suppliers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <h4 className="text-lg font-light text-white mb-2 group-hover:text-gray-200 transition-colors">
                    {material.name}
                  </h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
                    {material.description}
                  </p>
                  <div className="space-y-2">
                    {material.properties.map((property, propIndex) => (
                      <div key={propIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-500">{property}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-12 border border-gray-800">
            <h3 className="text-2xl font-light text-white mb-4">Our Quality Promise</h3>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
              Every Nextr product is backed by our lifetime craftsmanship guarantee. We stand behind 
              the quality of our materials and workmanship with comprehensive warranty coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-light">Lifetime Warranty</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-light">30-Day Returns</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-light">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CraftsmanshipProcess