import React from 'react'

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About me</h2>
      <div className="container about-container">
        <div className="about-img">
          <img src="https://placehold.co/400x400?text=Alex+Smith" alt="" />
        </div>
        <div className="about-content">
          <p>I'm a passionate and results-oriented frontend developer with a strong background in building modern, responsive, and user-friendly web applications. I have a deep understanding of HTML, CSS, and JavaScript, and I specialize in working with modern frontend frameworks like React. My goal is to create seamless and engaging user experiences while writing clean, efficient, and maintainable code.</p>
          <a href="#" className="btn">Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About