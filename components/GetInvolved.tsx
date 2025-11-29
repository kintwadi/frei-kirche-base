
import React, { useState, useEffect } from 'react';
import { Content, Group } from '../types';
import Section from './Section';
import { Calendar, Users, ChevronLeft, ChevronRight, X, MessageCircle } from 'lucide-react';

interface GetInvolvedProps {
  content: Content['involved'];
}

const GetInvolved: React.FC<GetInvolvedProps> = ({ content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive slides count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(content.groups.length / cardsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Ensure index is valid when resizing
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsToShow]);

  return (
    <Section id="groups" className="bg-cream">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-navy mb-4">{content.title}</h2>
        <p className="text-lg text-charcoal font-serif max-w-2xl mx-auto">
          {content.groupsDesc}
        </p>
      </div>

      {/* Groups Slideshow */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="flex items-center justify-between absolute top-1/2 -left-2 -right-2 transform -translate-y-1/2 z-10 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-navy text-gold shadow-lg hover:bg-navy/90 transition-all pointer-events-auto transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-navy text-gold shadow-lg hover:bg-navy/90 transition-all pointer-events-auto transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-hidden py-4 -mx-4 px-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* We create chunks of groups based on cardsToShow to act as pages */}
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
               <div key={slideIndex} className="w-full flex-shrink-0 grid gap-6" style={{ gridTemplateColumns: `repeat(${cardsToShow}, minmax(0, 1fr))` }}>
                  {content.groups.slice(slideIndex * cardsToShow, (slideIndex + 1) * cardsToShow).map((group) => (
                    <div key={group.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={group.image} 
                          alt={group.name} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                        />
                        <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                          {group.schedule}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center mb-3">
                          <Users className="w-5 h-5 text-gold mr-2" />
                          <h3 className="text-xl font-bold text-navy">{group.name}</h3>
                        </div>
                        <p className="text-charcoal font-serif text-sm leading-relaxed mb-6 flex-grow">
                          {group.description}
                        </p>
                        <button 
                          onClick={() => setSelectedGroup(group)}
                          className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3 rounded-lg flex items-center justify-center transition-colors group"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {content.connectBtn}
                        </button>
                      </div>
                    </div>
                  ))}
               </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === idx ? 'bg-gold' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Events Divider */}
      <div className="w-full h-px bg-gray-200 mb-16 max-w-5xl mx-auto"></div>

      {/* Events Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
           <h3 className="text-2xl font-sans font-bold text-navy flex items-center justify-center">
             <Calendar className="w-6 h-6 text-gold mr-3" />
             {content.eventsTitle}
           </h3>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {content.events.map((event, idx) => (
            <div key={idx} className={`flex items-center p-6 hover:bg-gray-50 transition-colors ${idx !== content.events.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex-shrink-0 bg-navy text-white w-20 h-20 rounded-lg flex flex-col items-center justify-center mr-6 shadow-sm p-1">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">{event.month}</span>
                <span className="text-2xl font-bold leading-none my-1">{event.day}</span>
                <span className="text-[10px] opacity-80 font-medium">{event.year}</span>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-1">{event.name}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-gold/20 text-navy text-xs px-2 py-0.5 rounded-full font-medium">Groß-Gerau</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedGroup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm" 
            onClick={() => setSelectedGroup(null)}
          ></div>
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-navy p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">{content.modalTitle}</h3>
              <button onClick={() => setSelectedGroup(null)} className="text-white/70 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 text-center">
              <div className="mb-2 font-bold text-xl text-navy">{selectedGroup.name}</div>
              <p className="text-gray-500 text-sm mb-6">{content.modalDesc}</p>
              
              <div className="bg-white p-2 border-2 border-navy/10 rounded-xl inline-block mb-6 shadow-inner">
                {/* QR Code Placeholder using API */}
                <img 
                  src={`https://call.whatsapp.com/voice/ArNvR1YQLYEcXoJ1uAJzp2${encodeURIComponent(selectedGroup.name)}%20group!&color=2C3E50`}
                  alt="QR Code" 
                  className="w-48 h-48"
                />
              </div>

              <div className="text-xs text-gray-400">
                Scan with your camera or WhatsApp
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default GetInvolved;
