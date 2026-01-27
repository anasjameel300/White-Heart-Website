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

          {/* Composition Container: Professional Collage - Visibility Fix */}
          <div className="relative h-[700px] lg:h-[900px] w-full hidden lg:flex items-center justify-center lg:order-2">

            {/* Top-Right Layer: Context (EmptyName 55) */}
            <motion.div
              style={{ y: useTransform(smoothYProgress, [0, 1], [0, -100]) }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}
              className={`absolute top-[5%] ${isRTL ? 'left-[10%]' : 'right-[10%]'} w-[45%] h-[35%] z-10`}
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 group bg-brand-stone/5"
              >
                <img src="/assets/EmptyName 55.jpg" alt="Artisanal Ambience" className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" />
              </motion.div>
            </motion.div>

            {/* Middle Layer: main focal (EmptyName 54) */}
            <motion.div
              style={{ y: yImageLarge }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 60px 120px rgba(0,0,0,0.5)" }}
              className={`absolute top-[22%] ${isRTL ? 'right-[5%]' : 'left-[5%]'} w-[65%] h-[55%] z-20`}
            >
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 bg-brand-stone/5 group"
              >
                <img src="/assets/EmptyName 54.jpg" alt="White Heart Selection" className="w-full h-full object-cover transition-transform duration-[12s] group-hover:scale-110" />
              </motion.div>
            </motion.div>

            {/* Bottom Layer: Details (EmptyName 53) */}
            <motion.div
              style={{ y: yImageSmall }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 40px 90px rgba(0,0,0,0.4)" }}
              className={`absolute bottom-[10%] ${isRTL ? 'left-[15%]' : 'right-[15%]'} w-[50%] h-[40%] z-30`}
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.5)] border-4 border-brand-dark group hover:border-brand-gold/50 transition-colors duration-500 bg-brand-stone/5"
              >
                <img src="/assets/EmptyName 53.jpg" alt="Handcrafted Details" className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-115" />
              </motion.div>
            </motion.div>

            {/* Decorative Glow Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/5 blur-[120px] -z-10 rounded-full scale-110" />
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