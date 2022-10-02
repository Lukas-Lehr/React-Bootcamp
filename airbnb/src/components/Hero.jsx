import React from 'react'

const Hero = () => {
  return (
    <section className="hero-section">
        <img className="hero-image-grid" src={require('./../images/image_grid.png')} alt="Image grid" />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero
