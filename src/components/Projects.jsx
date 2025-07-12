import React from 'react'
import ScrollReveal from './ScrollReveal'

const Projects = () => {
  const projects = [
    {
      icon: 'fas fa-tree',
      image: '/images/zimparks-project.jpg',
      title: 'Zimparks Radio Communication',
      description: 'Installation and servicing of VHF and DMR systems across Hwange and Mid Zambezi Valley regions.'
    },
    {
      icon: 'fas fa-mountain',
      image: '/images/kyle-project.jpg',
      title: 'Kyle and Chipangayi Projects',
      description: 'Hybrid radio and solar system installations supporting conservation field operations.'
    },
    {
      icon: 'fas fa-globe',
      image: '/images/aware-partnership.jpg',
      title: 'Aware Germany Partnership',
      description: 'Radio system supply and maintenance partnership with international conservation organizations.'
    },
    {
      icon: 'fas fa-map-marked-alt',
      image: '/images/conservation-tech.jpg',
      title: 'Conservation Technology',
      description: 'Integration with EarthRanger and SMART for real-time ranger tracking and reporting.'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header scroll-animate">
          <ScrollReveal size="4xl" align="center" variant="default" staggerDelay={0.06}>
            Key Projects & Partnerships
          </ScrollReveal>
          <ScrollReveal size="lg" align="center" variant="muted" staggerDelay={0.04}>
            Trusted by leading organizations across Zimbabwe
          </ScrollReveal>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <ScrollReveal size="xl" align="center" variant="default" staggerDelay={0.04}>
                {project.title}
              </ScrollReveal>
              <ScrollReveal size="sm" align="center" variant="muted" staggerDelay={0.03}>
                {project.description}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 