import React, { useRef, useContext, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
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

  // Carousel Logic
  const HERO_IMAGES = [
    "/assets/EmptyName 54.jpg",
    "/assets/EmptyName 55.jpg",
    "/assets/EmptyName 53.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const carouselVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8 }
    }
  };

  // Premium Reveal Variants
  const revealContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const revealItemVariants = {
    hidden: { y: "110%", opacity: 0, rotateX: 10 },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      y: "-110%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      scaleX: 0,
      originX: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center bg-brand-dark overflow-hidden pt-24 lg:pt-20">
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

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center min-h-[80vh] lg:min-h-0">

          {/* Hero Text Content */}
          {/* Hero Text Content */}
          <div className={`flex flex-col justify-center ${isRTL ? 'lg:order-2 rtl:text-right items-end' : 'lg:order-1 text-left items-start'} relative z-20 will-change-transform py-8 lg:py-16 min-h-[400px]`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={revealContainerVariants}
                className="w-full"
              >
                {/* Est. Label */}
                <div className={`flex items-center gap-6 mb-8 lg:mb-12 overflow-hidden ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <motion.span
                    variants={lineVariants}
                    className="h-[1px] w-20 bg-brand-gold/80"
                  />
                  <div className="overflow-hidden">
                    <motion.span
                      variants={revealItemVariants}
                      className="block font-sans text-brand-gold text-xs md:text-sm font-bold tracking-[0.4em] uppercase whitespace-nowrap"
                    >
                      {UI_TEXT.estJeddah[lang]}
                    </motion.span>
                  </div>
                </div>

                {/* Main Heading */}
                <div className="mb-8 lg:mb-12 w-full">
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-brand-cream font-medium leading-[1.1] tracking-tight">
                    {isRTL ? (
                      <div className="flex flex-col gap-1 lg:gap-2">
                        <div className="overflow-hidden pb-2">
                          <motion.span variants={revealItemVariants} className="block">جوهر</motion.span>
                        </div>
                        <div className="overflow-hidden pb-2">
                          <motion.span variants={revealItemVariants} className="block italic text-brand-gold">كرم الضيافة</motion.span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1 lg:gap-2">
                        <div className="overflow-hidden pb-2">
                          <motion.span variants={revealItemVariants} className="block">The Essence of</motion.span>
                        </div>
                        <div className="overflow-hidden pb-2">
                          <motion.span variants={revealItemVariants} className="block italic text-brand-gold">Pure Hospitality</motion.span>
                        </div>
                      </div>
                    )}
                  </h1>
                </div>

                {/* Description */}
                <div className="overflow-hidden mb-12 lg:mb-16">
                  <motion.p
                    variants={revealItemVariants}
                    className={`max-w-xl text-brand-stone/70 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed ${isRTL ? 'text-right ml-auto' : 'text-left mr-auto'}`}
                  >
                    {isRTL
                      ? 'رحلة من المذاق الرفيع في قلب جدة. اكتشف روح الشاي المثلج والحلويات المصنوعة يدوياً، بلمسة من العراقة العربية.'
                      : 'A journey of refined taste in the heart of Jeddah. Discover the soul of artisanal cold tea and handcrafted sweets, served with timeless Arabian grace.'}
                  </motion.p>
                </div>

                {/* Buttons */}
                <div className="overflow-hidden">
                  <motion.div
                    variants={revealItemVariants}
                    className={`flex flex-col sm:flex-row gap-6 w-full sm:w-auto ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <button onClick={() => setView('menu')} className="group px-10 py-5 bg-brand-cream text-brand-dark font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-white transition-all duration-300 rounded-sm text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden active:scale-95">
                      <span className="relative z-10">{UI_TEXT.exploreMenu[lang]}</span>
                    </button>
                    <a href="#locations" className="px-10 py-5 bg-transparent border border-brand-cream/15 text-brand-cream font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:border-brand-gold hover:text-brand-gold transition-all duration-300 rounded-sm text-center active:scale-95">
                      {UI_TEXT.findBranch[lang]}
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Composition Container: Professional Collage - Optimized */}
          {/* Hero Carousel - Premium Implementation - Refined Modern */}
          <div className="relative min-h-[500px] lg:min-h-[700px] w-full hidden lg:flex items-center justify-center lg:order-2 perspective-1000">
            <div className="relative w-full max-w-[550px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-brand-cream/10 bg-brand-stone/5">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={currentSlide}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  src={HERO_IMAGES[currentSlide]}
                  alt="Hero Ambience"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none" />

              {/* Progress Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded-full transition-all duration-500 ${idx === currentSlide ? "w-8 bg-brand-cream/90" : "w-1.5 bg-brand-cream/20 hover:bg-brand-cream/40"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Subtle Back Glow (Modern) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[550px] aspect-[4/5] bg-brand-accent/10 blur-[90px] -z-10 rounded-full opacity-60" />
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