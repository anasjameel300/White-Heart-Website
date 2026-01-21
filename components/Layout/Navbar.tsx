import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { NAV_LINKS, UI_TEXT } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext, NavigationContext } from '../../App';

const Navbar: React.FC = () => {
  const { lang, toggleLang } = useContext(LanguageContext);
  const { view, setView } = useContext(NavigationContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkId: string, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (linkId === 'menu') {
      setView('menu');
      return;
    }

    if (view !== 'home') {
      setView('home');
      // Wait for view transition before scrolling
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 700);
    } else {
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  const isRTL = lang === 'ar';
  const textColor = scrolled ? 'text-brand-dark' : 'text-brand-cream';
  const logoColor = scrolled ? 'fill-brand-dark stroke-brand-dark' : 'fill-brand-cream stroke-brand-cream';
  const buttonClass = scrolled ? 'bg-brand-dark text-brand-cream' : 'bg-brand-cream text-brand-dark';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-1000 ease-[0.22, 1, 0.36, 1] ${scrolled || view === 'menu' ? 'bg-brand-cream/95 backdrop-blur-2xl py-5 border-b border-brand-dark/10' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => setView('home')} className="flex items-center gap-3 group relative z-[110]">
           <Heart className={`w-8 h-8 transition-all duration-700 ${view === 'menu' ? 'fill-brand-dark stroke-brand-dark' : logoColor} ${scrolled ? 'scale-90' : 'scale-110'}`} />
           <div className="flex flex-col text-left rtl:text-right">
             <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-700 ${view === 'menu' ? 'text-brand-dark' : textColor}`}>
               {isRTL ? 'وايت هارت' : 'White Heart'}
             </span>
             <span className={`text-[8px] uppercase tracking-[0.3em] opacity-60 transition-colors duration-700 ${view === 'menu' ? 'text-brand-dark' : textColor}`}>
               {isRTL ? 'كافيه وحلويات' : 'Café & Sweets'}
             </span>
           </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.id, link.href)}
              className={`font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-gold ${view === 'menu' ? 'text-brand-dark' : textColor}`}
            >
              {link.name[lang]}
            </a>
          ))}
          
          <button 
            onClick={toggleLang}
            className={`flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] border border-current px-3 py-1 rounded-full transition-all hover:bg-brand-gold hover:border-brand-gold hover:text-white ${view === 'menu' ? 'text-brand-dark border-brand-dark' : textColor}`}
          >
            <Globe size={14} />
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>

          <a href="#delivery" onClick={(e) => handleNavClick(e, 'delivery', '#delivery')} className={`px-8 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.3em] transition-all rounded-sm hover:bg-brand-gold hover:text-white ${view === 'menu' ? 'bg-brand-dark text-brand-cream' : buttonClass}`}>
            {UI_TEXT.orderNow[lang]}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleLang} className={`p-2 ${view === 'menu' ? 'text-brand-dark' : textColor}`}>
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={`z-[110] ${isOpen ? 'text-brand-dark' : (view === 'menu' ? 'text-brand-dark' : textColor)}`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: isRTL ? 'circle(0% at 10% 10%)' : 'circle(0% at 90% 10%)' }}
            animate={{ clipPath: isRTL ? 'circle(150% at 10% 10%)' : 'circle(150% at 90% 10%)' }}
            exit={{ clipPath: isRTL ? 'circle(0% at 10% 10%)' : 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-brand-cream z-[105] flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map(link => (
              <a key={link.id} href={link.href} onClick={(e) => handleNavClick(e, link.id, link.href)} className="font-serif text-5xl text-brand-dark hover:text-brand-gold tracking-tighter">
                {link.name[lang]}
              </a>
            ))}
            <a href="#delivery" onClick={(e) => handleNavClick(e, 'delivery', '#delivery')} className="mt-12 px-12 py-5 bg-brand-dark text-brand-cream font-sans text-xs font-bold uppercase tracking-[0.3em]">
              {UI_TEXT.orderNow[lang]}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;