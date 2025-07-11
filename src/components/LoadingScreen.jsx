import React, { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      onLoadingComplete()
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loading-logo">
        <h2>Foxtrot</h2>
        <span>Electrocommunication Systems</span>
      </div>
    </div>
  )
}

export default LoadingScreen 