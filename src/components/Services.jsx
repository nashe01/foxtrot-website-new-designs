import React from 'react'
import ScrollReveal from './ScrollReveal'

const Services = () => {
  const services = [
    {
      icon: 'fas fa-broadcast-tower',
      image: '/images/radio-communications.jpg',
      title: 'Radio Communication Systems',
      features: [
        'VHF/UHF analog and DMR digital radio systems',
        'Wide-area repeater networks',
        'IP-linked multi-site systems',
        'EarthRanger and SMART integration',
        'Mobile, base, and handheld radios'
      ]
    },
    {
      icon: 'fas fa-solar-panel',
      image: '/images/solar-power.jpg',
      title: 'Solar Power Solutions',
      features: [
        'Hybrid and off-grid solar systems',
        'Solar backup solutions',
        'Communication sites and ranger bases',
        'Lithium and gel batteries',
        'Inverters and charge controllers'
      ]
    },
    {
      icon: 'fas fa-server',
      image: '/images/ict-infrastructure.jpg',
      title: 'ICT Infrastructure',
      features: [
        'Wireless networks deployment',
        'Point-to-Point & Point-to-Multipoint',
        'Network equipment installation',
        'Control room setups',
        'Servers, switches, and routers'
      ]
    },
    {
      icon: 'fas fa-video',
      image: '/images/security-surveillance.jpg',
      title: 'Security & Surveillance',
      features: [
        'Radio and solar-powered surveillance',
        'CCTV installation and maintenance',
        'Access control solutions',
        'Integrated security systems',
        'Remote monitoring capabilities'
      ]
    },
    {
      icon: 'fas fa-tools',
      image: '/images/technical-support.jpg',
      title: 'Technical Support & Training',
      features: [
        'On-site and remote technical support',
        'User and technical staff training',
        'Radio systems maintenance',
        'Solar maintenance programs',
        'Capacity-building initiatives'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header scroll-animate">
          <ScrollReveal size="4xl" align="center" variant="default" staggerDelay={0.06}>
            Our Services
          </ScrollReveal>
          <ScrollReveal size="lg" align="center" variant="muted" staggerDelay={0.04}>
            Comprehensive technology solutions for challenging environments
          </ScrollReveal>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <img 
                src={service.image} 
                alt={service.title}
                className="service-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <ScrollReveal size="xl" align="center" variant="default" staggerDelay={0.04}>
                {service.title}
              </ScrollReveal>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <ScrollReveal size="sm" align="left" variant="muted" staggerDelay={0.02}>
                      {feature}
                    </ScrollReveal>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 