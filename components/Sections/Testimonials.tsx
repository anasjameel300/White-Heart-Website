import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, UI_TEXT } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { LanguageContext } from '../../App';

const Testimonials: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const isRTL = lang === 'ar';

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-32 bg-brand-dark text-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-mashrabiya opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]">
        <Quote size={600} className="text-brand-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <Reveal variant="blur">
            <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              {UI_TEXT.community[lang]}
            </h2>
            <h3 className="font-serif text-4xl md:text-6xl text-brand-cream">
              {isRTL ? <>محبوب <span className="italic">في جدة</span></> : <>Loved by <span className="italic">Jeddah</span></>}
            </h3>
          </Reveal>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex + lang}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full max-w-4xl flex flex-col items-center text-center px-6"
            >
              <div className="flex gap-1 mb-10 rtl:flex-row-reverse">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="font-serif text-2xl md:text-4xl text-brand-stone leading-normal italic mb-12 break-words">
                "{TESTIMONIALS[activeIndex].text[lang]}"
              </p>

              <div>
                <h4 className="font-sans font-bold text-brand-gold uppercase tracking-[0.3em] text-sm mb-2 break-words">
                  {TESTIMONIALS[activeIndex].author[lang]}
                </h4>
                <p className="font-sans text-brand-stone/40 text-xs uppercase tracking-widest">
                  {TESTIMONIALS[activeIndex].location[lang]}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute inset-x-0 bottom-0 md:top-1/2 md:-translate-y-1/2 flex justify-between items-center pointer-events-none">
            <button onClick={prevSlide} className="p-5 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all pointer-events-auto backdrop-blur-md">
              <ChevronLeft size={24} className={isRTL ? 'rotate-180' : ''} />
            </button>
            <button onClick={nextSlide} className="p-5 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all pointer-events-auto backdrop-blur-md">
              <ChevronRight size={24} className={isRTL ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;