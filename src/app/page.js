
import Skills from '@/Components/Skills';
import Hero from '../Components/Hero';
import Navbar from '@/Components/Navbar';
import Social from '@/Components/Social';
import Walkaway from '@/Components/Walkaway';
import Projects from '@/Components/Projects';
import Experience from '@/Components/Experience';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

export default function Home() {

  return (
   
      <main
       
        className="relative flex flex-col items-center justify-center before:overflow-hidden mx-auto"
      >
        <div className="w-full">
          <Navbar />
          <Social />
          <Hero />
          <Skills />
          <Walkaway />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    
  );
}
