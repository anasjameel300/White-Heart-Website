import React, { useState, createContext, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Menu from './components/Sections/Menu';
import MenuPage from './components/Pages/MenuPage';
import Delivery from './components/Sections/Delivery';
import Locations from './components/Sections/Locations';
import Testimonials from './components/Sections/Testimonials';
import InstagramFeed from './components/Sections/InstagramFeed';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { Language } from './types';
import { motion, AnimatePresence } from 'framer-motion';

export type View = 'home' | 'menu';

export const NavigationContext = createContext<{
  view: View;
  setView: (v: View) => void;
}>({ view: 'home', setView: () => {} });

export const LanguageContext = createContext<{
  lang: Language;
  toggleLang: () => void;
}>({ lang: 'en', toggleLang: () => {} });

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<View>('home');

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      <NavigationContext.Provider value={{ view, setView }}>
        <div className={`bg-brand-cream min-h-screen selection:bg-brand-gold selection:text-white font-sans ${lang === 'ar' ? 'font-arabicSans' : 'font-sans'}`}>
          <Navbar />
          <AnimatePresence mode="wait">
            {view === 'home' ? (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <main>
                  <Hero />
                  <About />
                  <Menu teaser />
                  <InstagramFeed />
                  <Testimonials />
                  <Delivery />
                  <Locations />
                </main>
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <MenuPage />
              </motion.div>
            )}
          </AnimatePresence>
          <Footer />
          <ScrollToTop />
        </div>
      </NavigationContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;