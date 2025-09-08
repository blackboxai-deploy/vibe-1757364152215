import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>I'm Alex Smith</h1>
        <p>Frontend Developer</p>
        <div className="social-links">
          <a href="#"><i className='bx bxl-linkedin'></i></a>
          <a href="#"><i className='bx bxl-github'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
        </div>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
    </section>
  )
}

export default Hero;