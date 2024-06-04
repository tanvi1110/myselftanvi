'use client'
import { useEffect } from 'react';
import Skills from '@/Components/Skills';
import Hero from '../Components/Hero';
import Navbar from '@/Components/Navbar';
import Social from '@/Components/Social';
import Walkaway from '@/Components/Walkaway';
import Projects from '@/Components/Projects';
import Experience from '@/Components/Experience';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
// import BackToTopButton from '@/Components/BackToTop';
import Spotlight from '@/Components/ui/Spotlight';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const { hash } = window.location;
    if (hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center before:overflow-hidden mx-auto">
      <div className="w-full">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="spotlight top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="spotlight top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        
        <Navbar />
        <Social />
        <Hero />
        
        <Skills />
        <Walkaway />
        <Projects />
        <Experience />
        <Contact />
        {/* <BackToTopButto /> */}
        <Footer />
      </div>
    </main>
  );
}
