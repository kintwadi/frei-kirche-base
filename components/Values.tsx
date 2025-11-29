import React from 'react';
import { Content } from '../types';
import Section from './Section';
import { Users, BookHeart, Home } from 'lucide-react';

interface ValuesProps {
  content: Content['values'];
}

const Values: React.FC<ValuesProps> = ({ content }) => {
  return (
    <Section id="values" className="bg-navy text-center">
      <h2 className="text-3xl md:text-4xl font-sans font-bold text-cream mb-16 relative inline-block">
        {content.title}
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gold"></span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        
        {/* Value 1 */}
        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gold/50 transition-colors">
          <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{content.v1Title}</h3>
          <p className="text-gray-300 font-serif leading-relaxed">{content.v1Desc}</p>
        </div>

        {/* Value 2 */}
        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gold/50 transition-colors">
          <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookHeart className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{content.v2Title}</h3>
          <p className="text-gray-300 font-serif leading-relaxed">{content.v2Desc}</p>
        </div>

        {/* Value 3 */}
        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gold/50 transition-colors">
          <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{content.v3Title}</h3>
          <p className="text-gray-300 font-serif leading-relaxed">{content.v3Desc}</p>
        </div>

      </div>
    </Section>
  );
};

export default Values;