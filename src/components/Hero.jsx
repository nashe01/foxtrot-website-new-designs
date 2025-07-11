import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content animate-on-load-left">
          <h1 className="animate-on-load animate-delay-1">Leading Technology Solutions in Zimbabwe</h1>
          <p className="animate-on-load animate-delay-2">Advanced radio communications, solar energy solutions, ICT infrastructure, and integrated security systems for conservation, government, and private sector clients.</p>
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