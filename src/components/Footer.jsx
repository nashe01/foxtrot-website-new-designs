import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Foxtrot Electrocommunication Systems</h3>
            <p>Empowering communities, protecting wildlife, and connecting people through innovative technology solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Radio Communications</li>
              <li>Solar Power Solutions</li>
              <li>ICT Infrastructure</li>
              <li>Security Systems</li>
              <li>Technical Support</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Foxtrot Electrocommunication Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 