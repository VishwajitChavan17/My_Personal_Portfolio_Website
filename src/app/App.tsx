import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Patents from './components/Patents';
import Research from './components/Research';
import ProjectsReorganized from './components/ProjectsReorganized';
import Events from './components/Events';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0c10] overflow-x-hidden">
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, #00aaff22 0%, transparent 50%)`
        }}
      />
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        {activeSection === 'home' && <Hero mousePosition={mousePosition} />}
        {activeSection === 'patents' && <Patents mousePosition={mousePosition} />}
        {activeSection === 'research' && <Research mousePosition={mousePosition} />}
        {activeSection === 'projects' && <ProjectsReorganized mousePosition={mousePosition} />}
        {activeSection === 'events' && <Events mousePosition={mousePosition} />}
        {activeSection === 'hackathons' && <Hackathons mousePosition={mousePosition} />}
        {activeSection === 'contact' && <Contact mousePosition={mousePosition} />}
      </main>

      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00aaff] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}