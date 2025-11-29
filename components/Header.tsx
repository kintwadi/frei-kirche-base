import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Content } from '../types';
import Logo from './Logo';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Remove the '#' from the href to get the id
    const targetId = href.replace('#', '');

    // Special case for home/top to ensure we go to 0 without offset
    if (targetId === 'home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }
    
    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: content.home, href: '#home' },
    { label: content.services, href: '#sunday' },
    { label: content.about, href: '#about' },
    { label: content.sermons, href: '#sermons' },
    { label: content.groups, href: '#groups' },
  ];

  const toggleLang = () => {
    setLang(lang === 'DE' ? 'EN' : 'DE');
  };

  // Dynamic color classes based on scroll state
  const textColor = scrolled ? 'text-navy' : 'text-white';
  const navLinkColor = scrolled ? 'text-navy hover:text-gold' : 'text-gray-200 hover:text-white';
  const mobileButtonColor = scrolled ? 'text-navy' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3 border-b border-gold' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center group cursor-pointer"
            >
              <Logo className="h-10 w-10 mr-3 transition-transform group-hover:scale-105" />
              
              <span className={`font-sans font-bold text-sm md:text-xl tracking-wider uppercase whitespace-nowrap transition-colors ${textColor}`}>
                Ev. Freikirche <span className="text-gold">Groß-Gerau</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium uppercase tracking-wide cursor-pointer transition-colors ${navLinkColor}`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className={`flex items-center text-sm font-medium transition-colors hover:text-gold ${textColor}`}
            >
              <Globe className="w-4 h-4 mr-1" />
              {lang}
            </button>

            {/* CTA */}
            <a 
              href="#sunday"
              onClick={(e) => scrollToSection(e, '#sunday')}
              className="bg-gold hover:bg-goldHover text-white px-5 py-2 rounded-full font-bold text-sm transition-colors shadow-md cursor-pointer"
            >
              {content.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={toggleLang}
              className={`flex items-center mr-4 font-bold ${textColor}`}
            >
              {lang}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${mobileButtonColor} hover:text-gold p-2 transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gold absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-navy hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#sunday"
              onClick={(e) => scrollToSection(e, '#sunday')}
              className="bg-gold text-white block px-3 py-2 rounded-md text-base font-bold mt-4 text-center"
            >
              {content.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;