import React from 'react'

import "./Hero.css";
const Hero = () => {
  return (
    <div className='hero'>
      <div className="top" data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out">Yo! Tanvi here,</div>
      <div data-aos="zoom-out" data-aos-offset="200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out" className="middle">
        <h1>Web Developer </h1>
        <h1>UI/UX & Graphic Designer</h1>
      </div>
      <div className="bottom" data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out">from India.</div>

    </div>
  )
}

export default Hero
