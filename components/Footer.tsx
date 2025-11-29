
import React from 'react';
import { Content } from '../types';
import { Facebook, Youtube, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  content: Content['footer'];
  onImprintClick?: () => void;
  onPrivacyClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ content, onImprintClick, onPrivacyClick }) => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Address */}
          <div>
             <h4 className="text-2xl font-bold mb-4">Ev. Freikirche Groß-Gerau</h4>
             <address className="not-italic text-gray-300 font-serif leading-loose">
               Schützenstraße 29<br />
               64521 Groß-Gerau<br />
               Deutschland
             </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">{content.contact}</h4>
            <a href="mailto:simon-eisenhut@web.de" className="flex items-center text-gray-300 hover:text-white transition-colors mb-4">
              <Mail className="w-5 h-5 mr-2" />
              simon-eisenhut@web.de
            </a>
            <div className="flex space-x-4 mt-6">
              <a href="#" onClick={(e) => e.preventDefault()} className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-navy transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-navy transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-navy transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Rechtliches / Legal</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={(e) => { e.preventDefault(); if(onImprintClick) onImprintClick(); }} 
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  {content.imprint}
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => { e.preventDefault(); if(onPrivacyClick) onPrivacyClick(); }} 
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  {content.privacy}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Evangelische Freikirche Groß-Gerau. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
