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

  // Smooth scroll transformations - Adjusted for better responsiveness
  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 80, // Slightly more relaxed for smoother parallax
    damping: 25,
    restDelta: 0.001
  });

  // Multi-layered parallax weights - Subtle ranges for better performance
  const yBg = useTransform(smoothYProgress, [0, 1], [0, 80]);
  const yText = useTransform(smoothYProgress, [0, 1], [0, -60]);
  const yImageLarge = useTransform(smoothYProgress, [0, 1], [0, -80]);
  const yImageSmall = useTransform(smoothYProgress, [0, 1], [0, -120]);
  const yImageFloating = useTransform(smoothYProgress, [0, 1], [0, -40]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);

  const isRTL = lang === 'ar';

  // Content Variants for efficient staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center bg-brand-dark overflow-hidden pt-48 lg:pt-32">
      {/* Background Layering with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 opacity-15 bg-mashrabiya pointer-events-none scale-105 will-change-transform"
      />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* Cinematic Ambient Glows - Optimized Animation */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.08, 0.1, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none will-change-[transform,opacity]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.06, 0.04]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[70px] pointer-events-none will-change-[transform,opacity]"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center min-h-[80vh] lg:min-h-0">

          {/* Hero Text Content */}
          <motion.div
            style={{ y: yText, scale: scaleHero }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-col justify-center ${isRTL ? 'lg:order-2 rtl:text-right items-end' : 'lg:order-1 text-left items-start'} relative z-20 will-change-transform py-8 lg:py-16`}
          >
            <motion.div
              variants={itemVariants}
              className={`flex items-center gap-6 mb-12 lg:mb-16 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-[1px] bg-brand-gold/80"
              />
              <span className="font-sans text-brand-gold text-xs md:text-sm font-bold tracking-[0.4em] uppercase whitespace-nowrap">
                {UI_TEXT.estJeddah[lang]}
              </span>
            </motion.div>

            <div className="mb-12 lg:mb-16 w-full">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-brand-cream font-medium leading-[1.3] tracking-tight break-words hyphens-auto">
                {isRTL ? (
                  <div className="flex flex-col gap-2 lg:gap-3">
                    <div className="overflow-visible">
                      <motion.span variants={titleVariants} className="block break-words">جوهر</motion.span>
                    </div>
                    <div className="overflow-visible">
                      <motion.span variants={titleVariants} className="block italic text-brand-gold break-words">كرم الضيافة</motion.span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 lg:gap-3">
                    <div className="overflow-visible">
                      <motion.span variants={titleVariants} className="block break-words">The Essence of</motion.span>
                    </div>
                    <div className="overflow-visible">
                      <motion.span variants={titleVariants} className="block italic text-brand-gold break-words">Pure Hospitality</motion.span>
                    </div>
                  </div>
                )}
              </h1>
            </div>

            <motion.p
              variants={itemVariants}
              className={`max-w-xl text-brand-stone/70 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed mb-16 lg:mb-20 break-words ${isRTL ? 'text-right' : 'text-left'}`}
            >
              {isRTL
                ? 'رحلة من المذاق الرفيع في قلب جدة. اكتشف روح الشاي المثلج والحلويات المصنوعة يدوياً، بلمسة من العراقة العربية.'
                : 'A journey of refined taste in the heart of Jeddah. Discover the soul of artisanal cold tea and handcrafted sweets, served with timeless Arabian grace.'}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className={`flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-[50] ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <button onClick={() => setView('menu')} className="group px-10 py-5 bg-brand-cream text-brand-dark font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-white transition-all duration-300 rounded-sm text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden active:scale-95">
                <span className="relative z-10">{UI_TEXT.exploreMenu[lang]}</span>
              </button>
              <a href="#locations" className="px-10 py-5 bg-transparent border border-brand-cream/15 text-brand-cream font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:border-brand-gold hover:text-brand-gold transition-all duration-300 rounded-sm text-center active:scale-95">
                {UI_TEXT.findBranch[lang]}
              </a>
            </motion.div>
          </motion.div>

          {/* Composition Container: Professional Collage - Optimized */}
          <div className="relative min-h-[700px] lg:min-h-[900px] w-full hidden lg:flex items-center justify-center lg:order-2">

            {/* Top-Right Layer: Context */}
            <motion.div
              style={{ y: useTransform(smoothYProgress, [0, 1], [0, -40]) }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className={`absolute top-[5%] ${isRTL ? 'left-[10%]' : 'right-[10%]'} w-[45%] h-[35%] z-10 will-change-transform`}
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-brand-stone/5"
              >
                <img src="/assets/EmptyName 55.jpg" alt="Artisanal Ambience" className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-105" />
              </motion.div>
            </motion.div>

            {/* Middle Layer: main focal */}
            <motion.div
              style={{ y: yImageLarge }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              className={`absolute top-[22%] ${isRTL ? 'right-[5%]' : 'left-[5%]'} w-[65%] h-[55%] z-20 will-change-transform`}
            >
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-brand-stone/5"
              >
                <img src="/assets/EmptyName 54.jpg" alt="White Heart Selection" className="w-full h-full object-cover transition-transform duration-[6s] hover:scale-105" />
              </motion.div>
            </motion.div>

            {/* Bottom Layer: Details */}
            <motion.div
              style={{ y: yImageSmall }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className={`absolute bottom-[10%] ${isRTL ? 'left-[15%]' : 'right-[15%]'} w-[50%] h-[40%] z-30 will-change-transform`}
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl border-4 border-brand-dark bg-brand-stone/5"
              >
                <img src="/assets/EmptyName 53.jpg" alt="Handcrafted Details" className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-105" />
              </motion.div>
            </motion.div>

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
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] writing-vertical-lr hidden lg:block opacity-50">
            {UI_TEXT.scrollDown[lang]}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-5 border border-brand-cream/10 rounded-full"
          >
            <ArrowDown size={18} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;