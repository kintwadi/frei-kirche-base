import React from 'react';
import { Content } from '../types';
import { Clock } from 'lucide-react';

interface HeroProps {
  content: Content['hero'];
  cta: string;
}

const Hero: React.FC<HeroProps> = ({ content, cta }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="home" className="relative h-screen min-h-[600px] w-full bg-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Community gathering" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-sans font-bold text-cream mb-6 leading-tight">
          {content.title}
        </h1>
        
        <div className="flex items-center text-gold text-lg md:text-xl font-medium mb-10 bg-navy/50 px-6 py-2 rounded-full backdrop-blur-sm border border-gold/30">
          <Clock className="w-5 h-5 mr-3" />
          {content.subtitle}
        </div>

        <a 
          href="#sunday"
          onClick={(e) => scrollToSection(e, '#sunday')}
          className="bg-gold hover:bg-goldHover text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ring-4 ring-gold/30 cursor-pointer"
        >
          {cta}
        </a>
      </div>
      
      {/* Scroll indicator - now clickable */}
      <a 
        href="#sunday"
        onClick={(e) => scrollToSection(e, '#sunday')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </a>
    </div>
  );
};

export default Hero;