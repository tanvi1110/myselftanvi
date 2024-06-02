
import Skills from '@/Components/Skills';
import Hero from '../Components/Hero';
import Navbar from '@/Components/Navbar';
import Social from '@/Components/Social';
import Walkaway from '@/Components/Walkaway';
import Projects from '@/Components/Projects';

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
        </div>
      </main>
    
  );
}
