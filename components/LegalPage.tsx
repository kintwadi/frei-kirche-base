
import React, { useEffect } from 'react';
import { LegalPageContent } from '../types';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  content: LegalPageContent;
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ content, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header with Back Button */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="flex items-center text-navy hover:text-gold transition-colors font-bold uppercase tracking-wide text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {content.backButton}
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-sans font-bold text-navy mb-12 border-l-8 border-gold pl-6">
          {content.title}
        </h1>

        <div className="space-y-12">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              {section.heading && (
                <h2 className="text-xl font-bold text-navy mb-4">
                  {section.heading}
                </h2>
              )}
              <div className="prose prose-lg text-charcoal font-serif whitespace-pre-line leading-relaxed">
                {section.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-8 border-t border-gray-100 mt-12">
         <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Ev. Freikirche Groß-Gerau</p>
      </div>
    </div>
  );
};

export default LegalPage;
