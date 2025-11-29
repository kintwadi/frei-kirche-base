import React from 'react';
import { Content } from '../types';
import Section from './Section';
import { Play, Download, Mic } from 'lucide-react';

interface SermonsProps {
  content: Content['sermons'];
}

const Sermons: React.FC<SermonsProps> = ({ content }) => {
  return (
    <Section id="sermons" className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-3xl font-sans font-bold text-navy">{content.title}</h2>
          <p className="text-gray-500 mt-2">{content.latestDate}</p>
        </div>
        <div className="hidden md:block">
           <Mic className="w-12 h-12 text-gray-100" />
        </div>
      </div>

      <div className="bg-navy rounded-2xl p-6 md:p-10 text-white shadow-2xl relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-4 inline-block">
              New / Neu
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4">{content.latestTitle}</h3>
            <p className="text-gray-300 mb-8 max-w-md">
              Based on Philippians 4:6-7. A message about finding the peace of God that surpasses all understanding.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center bg-white text-navy px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                <Play className="w-4 h-4 mr-2 fill-current" />
                {content.listen}
              </button>
              <button className="flex items-center border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                {content.download}
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            {/* Visual waveform placeholder */}
            <div className="flex items-center space-x-1 h-32">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 bg-gold/80 rounded-full animate-pulse"
                  style={{ 
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.1}s` 
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Sermons;