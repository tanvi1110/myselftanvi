import Skills from "@/Components/Skills";
import Hero from "../Components/Hero"
import Navbar from "@/Components/Navbar";
import Social from "@/Components/Social";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center before:overflow-hidden mx-auto  ">
      <div className="w-full">
       <Navbar />
       <Social />
        <Hero />
        <Skills />
      </div>


    </main>
  );
}
