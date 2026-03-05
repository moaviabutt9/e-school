import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Components/Header'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Courses from './Components/Courses'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Courses />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
