import React from 'react'
import ScrollReveal from './ScrollReveal'

const About = () => {
  const values = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Integrity',
      description: 'Upholding the highest ethical standards'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Continuously evolving with technology'
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Reliability',
      description: 'Delivering solutions that clients can trust'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Collaboration',
      description: 'Building strong partnerships for lasting impact'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainability',
      description: 'Promoting environmentally friendly technologies'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header scroll-animate">
          <ScrollReveal size="4xl" align="center" variant="gold" staggerDelay={0.06}>
            About Foxtrot
          </ScrollReveal>
          <ScrollReveal size="lg" align="center" variant="muted" staggerDelay={0.04}>
            Empowering communities through innovative technology solutions
          </ScrollReveal>
        </div>
        <div className="about-content">
          <div className="about-text scroll-animate">
            <ScrollReveal size="2xl" align="left" variant="gold" staggerDelay={0.05}>
              Our Vision
            </ScrollReveal>
            <ScrollReveal size="md" align="left" variant="muted" staggerDelay={0.03}>
              To be the leading provider of robust, innovative, and sustainable communication and power solutions in Africa.
            </ScrollReveal>
            
            <ScrollReveal size="2xl" align="left" variant="gold" staggerDelay={0.05}>
              Our Mission
            </ScrollReveal>
            <ScrollReveal size="md" align="left" variant="muted" staggerDelay={0.03}>
              To deliver high-quality Electrocommunication systems and solar energy solutions tailored to meet the diverse needs of our clients, supporting conservation, safety, and development efforts across the region.
            </ScrollReveal>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <i className={value.icon}></i>
                  <ScrollReveal size="lg" align="center" variant="gold" staggerDelay={0.03}>
                    {value.title}
                  </ScrollReveal>
                  <ScrollReveal size="sm" align="center" variant="muted" staggerDelay={0.02}>
                    {value.description}
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 