import React, { useRef, useContext } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { LanguageContext, NavigationContext } from '../../App';
import { UI_TEXT } from '../../constants';

const Hero: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const { setView } = useContext(NavigationContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth scroll transformations
  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Multi-layered parallax weights
  const yBg = useTransform(smoothYProgress, [0, 1], [0, 150]);
  const yText = useTransform(smoothYProgress, [0, 1], [0, -100]);
  const yImageLarge = useTransform(smoothYProgress, [0, 1], [50, -100]);
  const yImageSmall = useTransform(smoothYProgress, [0, 1], [80, -140]);
  const yImageFloating = useTransform(smoothYProgress, [0, 1], [20, -60]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const isRTL = lang === 'ar';

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center bg-brand-dark overflow-hidden pt-48 lg:pt-32">
      {/* Background Layering with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 opacity-15 bg-mashrabiya pointer-events-none scale-110"
      />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* Cinematic Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none will-change-[transform,opacity]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.07, 0.04]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[70px] pointer-events-none will-change-[transform,opacity]"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Hero Text Content */}
          <motion.div
            style={{ y: yText, scale: scaleHero }}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col items-start ${isRTL ? 'lg:order-2 rtl:text-right' : 'lg:order-1 text-left'} relative z-20 mt-8 lg:mt-0`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
              className={`flex items-center gap-6 mb-8 lg:mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-[1px] bg-brand-gold/80"
              />
              <span className="font-sans text-brand-gold text-xs md:text-sm font-bold tracking-[0.4em] uppercase whitespace-nowrap">
                {UI_TEXT.estJeddah[lang]}
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-8xl text-brand-cream font-medium leading-[1.05] mb-8 tracking-tighter w-full overflow-visible">
              {isRTL ? (
                <div className="flex flex-col">
                  <div className="overflow-visible">
                    <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8 }}>جوهر</motion.span>
                  </div>
                  <div className="overflow-visible">
                    <motion.span className="block italic text-brand-gold mt-2" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1 }}>كرم الضيافة</motion.span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="overflow-visible">
                    <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8 }}>The Essence of</motion.span>
                  </div>
                  <div className="overflow-visible">
                    <motion.span className="block italic text-brand-gold mt-2" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1 }}>Pure Hospitality</motion.span>
                  </div>
                </div>
              )}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className={`max-w-xl text-brand-stone/50 font-sans text-lg md:text-xl leading-relaxed mb-12 lg:mb-16 ${isRTL ? 'text-right ml-auto' : 'text-left'}`}
            >
              {isRTL
                ? 'رحلة من المذاق الرفيع في قلب جدة. اكتشف روح الشاي المثلج والحلويات المصنوعة يدوياً، بلمسة من العراقة العربية.'
                : 'A journey of refined taste in the heart of Jeddah. Discover the soul of artisanal cold tea and handcrafted sweets, served with timeless Arabian grace.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className={`flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-[50] ${isRTL ? 'flex-row-reverse ml-auto' : ''} mb-8`}
            >
              <button onClick={() => setView('menu')} className="group px-10 py-5 bg-brand-cream text-brand-dark font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-white transition-all duration-500 rounded-sm text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden active:scale-95">
                <span className="relative z-10">{UI_TEXT.exploreMenu[lang]}</span>
              </button>
              <a href="#locations" className="px-10 py-5 bg-transparent border border-brand-cream/15 text-brand-cream font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:border-brand-gold hover:text-brand-gold transition-all duration-500 rounded-sm text-center active:scale-95">
                {UI_TEXT.findBranch[lang]}
              </a>
            </motion.div>
          </motion.div>

          {/* Composition Container */}
          <div className="relative h-[600px] lg:h-[800px] w-full hidden lg:flex items-center justify-center lg:order-2">

            {/* Tertiary: Premium Gelato (Local asset) */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute top-[10%] ${isRTL ? 'left-4' : 'right-4'} w-[35%] h-[30%] z-[1] will-change-transform`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-md shadow-xl border border-white/10 group">
                <img
                  src="/assets/Ice cream.jpg"
                  alt="Premium Gelato"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Main Focal Image: White Heart Signature (Local asset) */}
            <motion.div
              style={{ y: yImageLarge }}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className={`absolute top-[15%] ${isRTL ? 'right-[10%]' : 'left-[10%]'} w-[70%] h-[70%] z-[2] will-change-transform`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/5 bg-brand-stone/5 group">
                <img
                  src="/assets/Ice Tea.jpg"
                  alt="Signature Iced Tea"
                  className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent h-1/3 bottom-0" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="h-[1px] w-8 bg-brand-gold"></span>
                  <span className="text-[9px] uppercase tracking-[0.3em] font-sans font-bold text-brand-gold">Signature Selection</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary: Craft Cookies (Local asset) */}
            <motion.div
              style={{ y: yImageSmall }}
              initial={{ opacity: 0, y: 100, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              className={`absolute bottom-[5%] ${isRTL ? '-right-4' : '-left-4'} w-[45%] h-[40%] z-[3] will-change-transform`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-md shadow-2xl border-4 border-brand-dark bg-brand-stone/5 group">
                <img
                  src="/assets/Clasic cookies.jpg"
                  alt="Handcrafted Cookies"
                  className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dynamic Scroll Hint */}
      <motion.div
        style={{ opacity: opacityScroll }}
        className={`absolute bottom-12 ${isRTL ? 'right-6 lg:right-12' : 'left-6 lg:left-12'} flex items-center gap-8 text-brand-cream/30 z-[60]`}
      >
        <div className={`flex flex-col items-center gap-4 ${isRTL ? 'order-1' : ''}`}>
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] writing-vertical-lr hidden lg:block opacity-50 hover:opacity-100 transition-opacity cursor-default">
            {UI_TEXT.scrollDown[lang]}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-5 border border-brand-cream/10 rounded-full hover:border-brand-gold transition-colors duration-500"
          >
            <ArrowDown size={18} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;