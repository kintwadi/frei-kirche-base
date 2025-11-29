
import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Sunday from './components/Sunday';
import Values from './components/Values';
import About from './components/About';
import Sermons from './components/Sermons';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import History from './components/History';
import LegalPage from './components/LegalPage';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('DE'); // Default to German for local relevance
  const [view, setView] = useState<'home' | 'history' | 'imprint' | 'privacy'>('home');

  const content = CONTENT[lang];

  // If in history view, render the History component
  if (view === 'history') {
    return (
      <History 
        content={content.history} 
        onBack={() => setView('home')} 
      />
    );
  }

  // If in imprint view, render LegalPage
  if (view === 'imprint') {
    return (
      <LegalPage 
        content={content.imprintPage} 
        onBack={() => setView('home')} 
      />
    );
  }

  // If in privacy view, render LegalPage
  if (view === 'privacy') {
    return (
      <LegalPage 
        content={content.privacyPage} 
        onBack={() => setView('home')} 
      />
    );
  }

  // Default Home View
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        lang={lang} 
        setLang={setLang} 
        content={content.nav} 
      />
      
      <main>
        <Hero content={content.hero} cta={content.nav.cta} />
        <Sunday content={content.sunday} />
        <Values content={content.values} />
        <About 
          content={content.about} 
          onReadMore={() => setView('history')} 
        />
        <Sermons content={content.sermons} />
        <GetInvolved content={content.involved} />
      </main>

      <Footer 
        content={content.footer} 
        onImprintClick={() => setView('imprint')}
        onPrivacyClick={() => setView('privacy')}
      />
    </div>
  );
};

export default App;
