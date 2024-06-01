import React from 'react'


const Navbar = () => {
  return (
    <>
     <nav className="navtop">
          <div className="nav-left"></div>
          <div className="nav-right">
            <div className="navitem bor">
              <a href="/">Projects</a>
            </div>

            <div className=" navitem">
              <a href="/Experience">Experience</a>
            </div>

            <div className=" navitem ">
              <a href="/Contact">Contact</a>
            </div>
          </div>
        </nav>
      
    </>
  )
}

export default Navbar
