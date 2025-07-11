import React from 'react'

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
          <h2>Key Projects & Partnerships</h2>
          <p>Trusted by leading organizations across Zimbabwe</p>
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 