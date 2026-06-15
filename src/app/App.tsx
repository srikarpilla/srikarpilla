import { Mail, Github, Linkedin } from 'lucide-react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-primary">Srikar</h2>
          <div className="hidden sm:flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="bg-muted py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/srikarpilla" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/srikar-pilla-81179425a" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:pillasrikar12@gmail.com" className="hover:text-foreground transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p>&copy; 2026 Srikar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
