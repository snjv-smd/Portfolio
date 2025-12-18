import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-purple-400">Portfolio</div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
