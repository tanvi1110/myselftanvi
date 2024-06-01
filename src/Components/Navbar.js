import React from 'react'


const Navbar = () => {
  return (
    <>
     <nav className="h-20 w-full flex flex-row items-center justify-between fixed">
          <div className="nav-left"></div>
          <div className="nav-right">
            <div className=" p-2 navitem bor">
              <a href="/">Home</a>
            </div>

            <div className="p-2 navitem">
              <a href="/Experience">Experience</a>
            </div>

            <div className="p-2 navitem ">
              <a href="/Contact">Contact</a>
            </div>
          </div>
        </nav>
      
    </>
  )
}

export default Navbar
