import React from 'react'
import "./Hero.css";
const Skills = () => {
  return (
    <>
      <div className='skills'>
        <div className='skillHeading'>
          <h3>Skills</h3>
        </div>
        <div className='skillPart'>
          <div className='skillBox' data-aos="flip-left" data-aos-duration="1000"
            data-aos-easing="ease-in-out"><h5>Competitive Coding </h5></div>
          <div className='skillBox' data-aos="flip-left" data-aos-duration="1000"
            data-aos-easing="ease-in-out"><h5>Frontend Development</h5></div>
          <div className='skillBox' data-aos="flip-right" data-aos-duration="1000"
            data-aos-easing="ease-in-out"><h5>Backend Development</h5></div>
          <div className='skillBox' data-aos="flip-left" data-aos-duration="1000"
            data-aos-easing="ease-in-out"><h5>Data Science</h5></div>
          <div className='skillBox' data-aos="flip-right" data-aos-duration="1000"
            data-aos-easing="ease-in-out"><h5>Designer</h5></div>

        </div>
      </div>
    </>
  )
}

export default Skills
