import React from 'react'
import ScrollReveal from './ScrollReveal'

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-award',
      title: 'Proven Expertise',
      description: 'Decades of combined experience in radio engineering, solar systems, and ICT.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Tailored Solutions',
      description: 'We understand each client\'s unique needs and deliver customized systems.'
    },
    {
      icon: 'fas fa-users',
      title: 'Strong Partnerships',
      description: 'Trusted by international conservation organizations, NGOs, and government agencies.'
    },
    {
      icon: 'fas fa-headset',
      title: 'After-Sales Support',
      description: 'Reliable maintenance and rapid-response service teams.'
    }
  ]

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header scroll-animate">
          <ScrollReveal size="4xl" align="center" variant="gold" staggerDelay={0.06}>
            Why Choose Foxtrot
          </ScrollReveal>
          <ScrollReveal size="lg" align="center" variant="muted" staggerDelay={0.04}>
            Your trusted partner in technology solutions
          </ScrollReveal>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <i className={feature.icon}></i>
              <ScrollReveal size="lg" align="center" variant="gold" staggerDelay={0.04}>
                {feature.title}
              </ScrollReveal>
              <ScrollReveal size="sm" align="center" variant="muted" staggerDelay={0.03}>
                {feature.description}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 