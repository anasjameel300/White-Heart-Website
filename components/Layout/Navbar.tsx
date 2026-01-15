import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic text color classes
  const textColorClass = scrolled ? 'text-brand-dark' : 'text-brand-cream';
  const logoColorClass = scrolled ? 'fill-brand-dark stroke-brand-dark' : 'fill-brand-cream stroke-brand-cream';
  const buttonBgClass = scrolled ? 'bg-brand-dark text-brand-cream hover:bg-brand-gold' : 'bg-brand-cream text-brand-dark hover:bg-brand-gold hover:text-white';
  const borderClass = scrolled ? 'border-brand-dark/5' : 'border-white/10';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${scrolled
        ? `bg-brand-cream/85 backdrop-blur-xl shadow-sm ${borderClass} py-4`
        : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-50">
          <div className={`relative w-8 h-8 flex items-center justify-center transition-transform duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <Heart className={`w-full h-full transition-colors duration-500 ${logoColorClass}`} strokeWidth={1.5} />
          </div>
          <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 ${textColorClass}`}>
            White Heart
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-widest uppercase transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full hover:text-brand-gold ${textColorClass}`}
            >
              {link.name}
            </a>
          ))}

          {/* Order Button - Hides on Scroll */}
          <div className={`overflow-hidden transition-all duration-500 ease-[0.76, 0, 0.24, 1] ${scrolled ? 'max-w-0 opacity-0 -ml-5' : 'max-w-[150px] opacity-100'}`}>
            <a
              href="#delivery"
              className={`block px-6 py-2 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap rounded-sm ${buttonBgClass}`}
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 relative p-2 transition-colors duration-300 ${isOpen ? 'text-brand-dark' : textColorClass}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[0.76, 0, 0.24, 1] ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl text-brand-dark hover:text-brand-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#delivery"
          onClick={() => setIsOpen(false)}
          className="mt-8 px-8 py-3 bg-brand-dark text-brand-cream font-sans text-sm font-bold uppercase tracking-widest"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;