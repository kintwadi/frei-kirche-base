import React, { useState } from 'react';
import { Content } from '../types';
import Section from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AboutProps {
  content: Content['about'];
  onReadMore?: () => void;
}

const About: React.FC<AboutProps> = ({ content, onReadMore }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Section id="about" className="bg-cream">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left: Story */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-sans font-bold text-navy mb-6">{content.title}</h2>
          <div className="prose prose-lg text-charcoal font-serif mb-8">
            <p className="leading-relaxed">
              {content.welcome}
            </p>
          </div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              if (onReadMore) onReadMore();
            }}
            className="text-gold hover:text-navy font-bold uppercase tracking-wide transition-colors cursor-pointer text-left focus:outline-none"
          >
            {content.storyLink}
          </button>
          
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
             <img src="https://picsum.photos/800/500?grayscale" alt="Church family" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Right: FAQ */}
        <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-sm h-fit">
          <h3 className="text-xl font-bold text-navy mb-6 border-b pb-4">{content.faqTitle}</h3>
          
          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 text-left transition-colors"
                >
                  <span className="font-semibold text-navy pr-4">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gold" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                
                {openFaq === idx && (
                  <div className="p-4 bg-white text-charcoal font-serif text-sm leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default About;