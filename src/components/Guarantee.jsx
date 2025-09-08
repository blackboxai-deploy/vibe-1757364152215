import React from 'react'

const Guarantee = () => {
  return (
    <section className="guarantee-section">
      <h2>
        <span>Experience +</span> Projects
      </h2>
      <div className="container guarantee-container">
        <div className="guarantee-box">
          <i className='bx bx-check-shield'></i>
          <h3>Frontend Development</h3>
          <p>As a frontend developer with expertise in React, I build intuitive and responsive user interfaces that deliver exceptional user experiences.</p>
        </div>
        <div className="guarantee-box">
          <i className='bx bx-lock-alt'></i>
          <h3>Project Management</h3>
          <p>I have a proven track record of successfully managing projects from conception to completion, ensuring they are delivered on time and within budget.</p>
        </div>
        <div className="guarantee-box">
          <i className='bx bx-pen'></i>
          <h3>UI/UX Design</h3>
          <p>I specialize in creating visually appealing and user-friendly designs that enhance usability and drive engagement.</p>
        </div>
        <div className="guarantee-box">
          <i className='bx bx-pen'></i>
          <h3>Web Development</h3>
          <p>With a strong foundation in web development, I create robust and scalable applications that meet the diverse needs of clients and users.</p>
        </div>
      </div>
    </section>
  )
}

export default Guarantee;