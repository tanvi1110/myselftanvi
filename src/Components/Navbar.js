import React from 'react';
import { useLenis } from 'lenis/react';

const Navbar = () => {
  const lenis = useLenis();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      lenis.scrollTo(element);
    }
  };

  return (
    <nav data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out" className="navtop" >
      <div className="nav-left"></div>
      <div className="nav-right">
        <div className="navitem bor">
          <a onClick={() => scrollToSection('projects')}>Projects</a>
        </div>
        <div className="navitem">
          <a onClick={() => scrollToSection('experience')}>Experience</a>
        </div>
        <div className="navitem">
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
