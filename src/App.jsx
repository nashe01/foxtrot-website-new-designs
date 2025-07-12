import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollRevealDemo from './components/ScrollRevealDemo'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false)
    setIsLoaded(true)
  }

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
          setIsMenuOpen(false) // Close mobile menu after clicking
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  // Scroll-triggered animations and initial load animations
  useEffect(() => {
    if (!isLoaded) return

    // Trigger initial load animations after a short delay
    setTimeout(() => {
      const loadElements = document.querySelectorAll('.animate-on-load, .animate-on-load-left, .animate-on-load-right, .animate-on-load-scale, .animate-on-load-top')
      loadElements.forEach(el => {
        el.style.animationPlayState = 'running'
      })
    }, 100)

    // Set up scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll('.scroll-animate')
    scrollElements.forEach(el => observer.observe(el))

    return () => {
      scrollElements.forEach(el => observer.unobserve(el))
    }
  }, [isLoaded])

  return (
    <Router>
      <div className={`App ${isLoaded ? 'animations-ready' : ''}`}>
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        <div className={`main-content ${isLoaded ? 'loaded' : ''}`}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <Hero />
                <About />
                <Services />
                <Projects />
                <WhyChooseUs />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/demo" element={<ScrollRevealDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App 