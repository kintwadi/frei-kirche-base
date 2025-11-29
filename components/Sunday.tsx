import React, { useState } from 'react';
import { Content } from '../types';
import Section from './Section';
import { MapPin, Clock, Music, BookOpen, Coffee, Smile, X, ExternalLink } from 'lucide-react';

interface SundayProps {
  content: Content['sunday'];
}

const Sunday: React.FC<SundayProps> = ({ content }) => {
  const [showMap, setShowMap] = useState(false);

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Music className="w-5 h-5 text-gold" />;
      case 1: return <BookOpen className="w-5 h-5 text-gold" />;
      case 2: return <Smile className="w-5 h-5 text-gold" />;
      default: return <Coffee className="w-5 h-5 text-gold" />;
    }
  };

  const addressEncoded = encodeURIComponent(content.address);
  const mapUrl = `https://maps.google.com/maps?q=${addressEncoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = `https://maps.google.com/?q=${addressEncoded}`;

  return (
    <Section id="sunday" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Info Card */}
        <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-xl border-l-8 border-gold">
          <h2 className="text-3xl font-sans font-bold text-navy mb-6">{content.title}</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-navy mt-1 mr-4 shrink-0" />
              <div>
                <p className="font-bold text-lg text-navy">Zeit / Time</p>
                <p className="text-charcoal font-serif text-lg">{content.time}</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-navy mt-1 mr-4 shrink-0" />
              <div>
                <p className="font-bold text-lg text-navy">Ort / Location</p>
                <p className="text-charcoal font-serif text-lg">{content.address}</p>
                <button 
                  onClick={() => setShowMap(true)}
                  className="text-gold hover:text-navy hover:underline text-sm font-bold mt-2 inline-flex items-center transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Expectations */}
        <div>
          <h3 className="text-2xl font-sans font-bold text-navy mb-8">{content.whatToExpectTitle}</h3>
          <ul className="space-y-6">
            {content.expectations.map((item, idx) => (
              <li key={idx} className="flex items-center bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-navy/10 p-2 rounded-full mr-4">
                  {getIcon(idx)}
                </div>
                <span className="text-lg text-charcoal font-serif">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Map Modal */}
      {showMap && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 px-4">
          <div 
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            onClick={() => setShowMap(false)}
          ></div>
          
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="bg-navy p-4 flex justify-between items-center text-white shrink-0">
              <h3 className="font-bold text-lg flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gold" />
                Anfahrt / Directions
              </h3>
              <button 
                onClick={() => setShowMap(false)}
                className="hover:text-gold transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Map Iframe */}
            <div className="flex-grow relative h-[400px] md:h-[500px] bg-gray-100">
              <iframe 
                title="Church Location"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src={mapUrl}
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center shrink-0">
              <span className="text-xs text-gray-500 hidden sm:inline">{content.address}</span>
              <a 
                href={externalMapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center text-sm font-bold text-navy hover:text-gold transition-colors"
              >
                Open in App <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Sunday;