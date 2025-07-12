import React from 'react'
import ScrollReveal from './ScrollReveal'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content animate-on-load-left">
          <ScrollReveal 
            size="5xl" 
            align="left" 
            variant="default"
            staggerDelay={0.08}
            className="animate-delay-1"
          >
            Leading Technology Solutions in Zimbabwe
          </ScrollReveal>
          <ScrollReveal 
            size="lg" 
            align="left" 
            variant="muted"
            staggerDelay={0.05}
            className="animate-delay-2"
          >
            Advanced radio communications, solar energy solutions, ICT infrastructure, and integrated security systems for conservation, government, and private sector clients.
          </ScrollReveal>
          <div className="hero-buttons animate-on-load animate-delay-3">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image animate-on-load-right">
          <div className="hero-card animate-on-load-scale animate-delay-2">
            <i className="fas fa-satellite-dish"></i>
            <h3>Radio Communications</h3>
          </div>
          <div className="hero-card animate-on-load-scale animate-delay-3">
            <i className="fas fa-solar-panel"></i>
            <h3>Solar Solutions</h3>
          </div>
          <div className="hero-card animate-on-load-scale animate-delay-4">
            <i className="fas fa-network-wired"></i>
            <h3>ICT Infrastructure</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 