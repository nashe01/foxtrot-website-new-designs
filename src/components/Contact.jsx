import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header scroll-animate">
          <ScrollReveal size="4xl" align="center" variant="default" staggerDelay={0.06}>
            Contact Us
          </ScrollReveal>
          <ScrollReveal size="lg" align="center" variant="muted" staggerDelay={0.04}>
            Get in touch to discuss your technology needs
          </ScrollReveal>
        </div>
        <div className="contact-content">
          <div className="contact-info scroll-animate">
            <div className="contact-item scroll-animate" style={{ animationDelay: '0.1s' }}>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <ScrollReveal size="lg" align="left" variant="default" staggerDelay={0.03}>
                  Head Office
                </ScrollReveal>
                <ScrollReveal size="sm" align="left" variant="muted" staggerDelay={0.02}>
                  4584 Manyame Park, Chitungwiza, Zimbabwe
                </ScrollReveal>
              </div>
            </div>
            <div className="contact-item scroll-animate" style={{ animationDelay: '0.2s' }}>
              <i className="fas fa-phone"></i>
              <div>
                <ScrollReveal size="lg" align="left" variant="default" staggerDelay={0.03}>
                  Telephone
                </ScrollReveal>
                <ScrollReveal size="sm" align="left" variant="muted" staggerDelay={0.02}>
                  +263 (0) 774 116 149
                </ScrollReveal>
              </div>
            </div>
            <div className="contact-item scroll-animate" style={{ animationDelay: '0.3s' }}>
              <i className="fas fa-envelope"></i>
              <div>
                <ScrollReveal size="lg" align="left" variant="default" staggerDelay={0.03}>
                  Email
                </ScrollReveal>
                <ScrollReveal size="sm" align="left" variant="muted" staggerDelay={0.02}>
                  info@foxtrot_systems@aol.com
                </ScrollReveal>
              </div>
            </div>
          </div>
          <div className="contact-form scroll-animate">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 