import React from 'react'

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
          <h2>About Foxtrot</h2>
          <p>Empowering communities through innovative technology solutions</p>
        </div>
        <div className="about-content">
          <div className="about-text scroll-animate">
            <h3>Our Vision</h3>
            <p>To be the leading provider of robust, innovative, and sustainable communication and power solutions in Africa.</p>
            
            <h3>Our Mission</h3>
            <p>To deliver high-quality Electrocommunication systems and solar energy solutions tailored to meet the diverse needs of our clients, supporting conservation, safety, and development efforts across the region.</p>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <i className={value.icon}></i>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
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