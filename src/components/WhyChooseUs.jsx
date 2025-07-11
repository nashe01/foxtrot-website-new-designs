import React from 'react'

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
        <div className="section-header">
          <h2>Why Choose Foxtrot</h2>
          <p>Your trusted partner in technology solutions</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 