import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Guarantee from './components/Guarantee'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './style.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Guarantee />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
