import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-primary-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <ProjectsSection />
        <SkillsSection />
      </main>
      
      <Contact />
    </div>
  );
}

export default App;
