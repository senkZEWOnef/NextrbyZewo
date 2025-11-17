'use client'

const TeamShowcase = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Former Apple design engineer with 15 years of experience in premium consumer electronics. Passionate about creating products that seamlessly blend form and function.',
      image: '/api/placeholder/300/400',
      expertise: ['Product Strategy', 'Design Leadership', 'Innovation'],
      quote: 'Great design is invisible—it just works.'
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of Design',
      bio: 'Award-winning industrial designer who previously led design teams at Tesla and Dyson. Specializes in sustainable materials and user-centered design.',
      image: '/api/placeholder/300/400',
      expertise: ['Industrial Design', 'Sustainability', 'UX Research'],
      quote: 'Every detail matters when perfection is the standard.'
    },
    {
      name: 'Marcus Thompson',
      role: 'Chief Technology Officer',
      bio: 'PhD in Materials Science from MIT. Expert in advanced manufacturing processes and next-generation materials for consumer electronics.',
      image: '/api/placeholder/300/400',
      expertise: ['Materials Science', 'Manufacturing', 'R&D'],
      quote: 'Innovation happens at the intersection of science and imagination.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Quality Assurance',
      bio: 'Former aerospace engineer who brings military-grade precision to consumer products. Ensures every Nextr product meets the highest standards.',
      image: '/api/placeholder/300/400',
      expertise: ['Quality Systems', 'Testing Protocols', 'Compliance'],
      quote: 'Perfection is not an accident—it\'s the result of relentless attention to detail.'
    }
  ]

  const companyStats = [
    { label: 'Team Members', value: '47', description: 'Passionate professionals' },
    { label: 'Countries', value: '12', description: 'Global representation' },
    { label: 'Languages', value: '18', description: 'Spoken fluently' },
    { label: 'Years Experience', value: '200+', description: 'Combined expertise' }
  ]

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gray-400 text-sm font-light uppercase tracking-widest mb-6 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            Minds Behind
            <br />
            <span className="italic font-extralight">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Our diverse team of designers, engineers, and craftspeople share a common passion for 
            creating products that push the boundaries of what's possible.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-6">
                {/* Profile Image */}
                <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                
                {/* Floating Quote */}
                <div className="absolute -bottom-6 left-4 right-4 bg-black border border-gray-700 rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <blockquote className="text-white text-sm font-light italic">
                    "{member.quote}"
                  </blockquote>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-light text-white mb-1 group-hover:text-gray-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm font-light uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-light text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Culture & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
              Our
              <br />
              <span className="italic font-extralight">Culture</span>
            </h3>
            <div className="w-16 h-px bg-white mb-6"></div>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
              We've built a culture of curiosity, collaboration, and relentless pursuit of excellence. 
              Our team thrives on challenging conventions and exploring new possibilities in design and technology.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">Continuous Learning</h4>
                  <p className="text-gray-400 text-sm font-light">We invest in our team's growth through ongoing education and development opportunities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">Work-Life Balance</h4>
                  <p className="text-gray-400 text-sm font-light">Flexible schedules and remote work options ensure our team can do their best work.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">Diverse Perspectives</h4>
                  <p className="text-gray-400 text-sm font-light">We actively seek out different viewpoints to strengthen our design and decision-making.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg bg-gray-900 border border-gray-800 overflow-hidden">
              {/* Team Collaboration Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>

                  {/* Team Member Nodes */}
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <div
                      key={index}
                      className="absolute w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-600"
                      style={{
                        top: `${50 + 40 * Math.cos((index * Math.PI) / 3)}%`,
                        left: `${50 + 40 * Math.sin((index * Math.PI) / 3)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="w-full h-full bg-gray-600 rounded-full animate-pulse"></div>
                    </div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <line
                          key={index}
                          x1="50%"
                          y1="50%"
                          x2={`${50 + 40 * Math.sin((index * Math.PI) / 3)}%`}
                          y2={`${50 + 40 * Math.cos((index * Math.PI) / 3)}%`}
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 text-white text-xs font-light opacity-40">COLLABORATION</div>
              <div className="absolute bottom-4 right-4 text-white text-xs font-light opacity-40">INNOVATION</div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-12 border border-gray-800">
            <h3 className="text-2xl font-light text-white mb-4">Join Our Team</h3>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
              We're always looking for passionate individuals who share our commitment to excellence 
              and innovation. Explore opportunities to be part of something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
              <button className="border border-white text-white px-8 py-3 text-lg font-light hover:bg-white hover:text-black transition-colors">
                Send Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamShowcase