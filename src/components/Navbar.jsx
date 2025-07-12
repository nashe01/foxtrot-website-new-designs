import React from 'react'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="navbar animate-on-load-top">
      <div className="nav-container">
        <div className="nav-logo animate-on-load-left">
          <h2>Foxtrot</h2>
          <span>Electrocommunication Systems</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''} animate-on-load-right`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''} animate-on-load-right`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 