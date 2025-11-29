import React, { useEffect } from 'react';
import { HistoryContent } from '../types';
import { ArrowLeft, Calendar, PlayCircle } from 'lucide-react';

interface HistoryProps {
  content: HistoryContent;
  onBack: () => void;
}

const History: React.FC<HistoryProps> = ({ content, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Navbar Placeholder / Back Button */}
      <div className="sticky top-0 z-50 bg-navy/95 backdrop-blur shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="flex items-center text-gold hover:text-white transition-colors font-bold uppercase tracking-wide text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {content.backButton}
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="relative bg-navy py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-cream mb-6">{content.title}</h1>
          <p className="text-xl md:text-2xl font-serif text-gold/90 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-sans font-bold text-navy text-center mb-16">{content.timelineTitle}</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30"></div>

          <div className="space-y-16">
            {content.timeline.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-navy border-4 border-gold z-10 hidden md:block"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 px-4 md:px-10">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gold hover:shadow-xl transition-shadow duration-300 group">
                    <div className="flex items-center text-gold font-bold text-xl mb-3">
                      <Calendar className="w-5 h-5 mr-2" />
                      {event.year}
                    </div>
                    
                    {event.image && (
                      <div className="mb-4 overflow-hidden rounded-lg h-48">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-navy mb-3">{event.title}</h3>
                    <p className="text-charcoal font-serif leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Empty Spacer for layout balance */}
                <div className="w-full md:w-1/2 px-4 md:px-10 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media / Videos Section */}
      <div className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-sans font-bold text-navy text-center mb-12">{content.mediaTitle}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.videos.map((video, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer">
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                   <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <div className="bg-navy p-4">
                  <h3 className="text-white font-bold text-lg">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer minimal */}
      <footer className="bg-navy py-12 text-center text-gray-500 text-sm border-t border-gray-700">
        <button 
          onClick={onBack} 
          className="text-gold hover:text-white transition-colors mb-4 uppercase tracking-widest font-bold text-xs"
        >
          {content.backButton}
        </button>
        <p>&copy; {new Date().getFullYear()} Evangelische Freikirche Groß-Gerau</p>
      </footer>
    </div>
  );
};

export default History;