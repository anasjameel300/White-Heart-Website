import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-40 bg-brand-gold text-white p-5 rounded-full shadow-[0_25px_50px_-12px_rgba(212,175,55,0.4)] hover:bg-brand-dark transition-all duration-500 border border-white/20 group overflow-hidden"
          aria-label="Return to heritage"
        >
          <div className="relative z-10">
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-2 transition-transform duration-500 ease-out" />
          </div>
          <motion.div 
            initial={false}
            className="absolute inset-0 bg-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;