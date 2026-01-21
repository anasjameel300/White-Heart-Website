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
  const yText = useTransform(smoothYProgress, [0, 1], [0, 200]);
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
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.07, 0.04]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 lg:py-24">
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
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-cream font-medium leading-[1.05] mb-8 tracking-tighter w-full overflow-hidden">
                  {isRTL ? (
                    <div className="flex flex-col">
                      <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8 }}>جوهر</motion.span>
                      <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1 }} className="italic text-brand-gold mt-2">كرم الضيافة</motion.span>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8 }}>The Essence of</motion.span>
                      <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1 }} className="italic text-brand-gold mt-2">Pure Hospitality</motion.span>
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
                className={`flex flex-col sm:flex-row gap-6 w-full sm:w-auto ${isRTL ? 'flex-row-reverse ml-auto' : ''}`}
              >
                  <button onClick={() => setView('menu')} className="group px-10 py-5 bg-brand-cream text-brand-dark font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-white transition-all duration-500 rounded-sm text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
                      <span className="relative z-10">{UI_TEXT.exploreMenu[lang]}</span>
                  </button>
                  <a href="#locations" className="px-10 py-5 bg-transparent border border-brand-cream/15 text-brand-cream font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:border-brand-gold hover:text-brand-gold transition-all duration-500 rounded-sm text-center">
                      {UI_TEXT.findBranch[lang]}
                  </a>
              </motion.div>
          </motion.div>

          {/* Composition Container */}
          <div className={`relative h-[550px] lg:h-[800px] w-full hidden lg:flex items-center justify-center ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
             
             {/* Tertiary: Premium Gelato */}
             <motion.div 
               style={{ y: yImageFloating }}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 2, delay: 1.2 }}
               className={`absolute top-20 ${isRTL ? 'left-8' : 'right-8'} w-[40%] h-[35%] z-[2]`}
             >
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl opacity-60 border border-white/10 grayscale-[40%] hover:grayscale-0 transition-all duration-1000"
                >
                   <img 
                    src="https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80&w=800" 
                    alt="Pistachio Gelato" 
                    className="w-full h-full object-cover" 
                   />
                </motion.div>
             </motion.div>

             {/* Main Focal Image: The Red Tea */}
             <motion.div 
               style={{ y: yImageLarge }}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
               className={`absolute top-12 ${isRTL ? 'right-[5%]' : 'left-[5%]'} w-[75%] h-[80%] z-[3]`}
             >
                <motion.div 
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full overflow-hidden rounded-sm shadow-[0_60px_120px_-20px_rgba(0,0,0,0.7)] border border-white/5 bg-brand-stone/5 group"
                >
                   <img 
                    src="https://images.unsplash.com/photo-1544254200-0df5275d33e7?auto=format&fit=crop&q=80&w=1200" 
                    alt="Signature Iced Tea" 
                    className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent" />
                   <div className="absolute bottom-8 left-8 right-8 flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="h-[1px] w-12 bg-brand-gold"></span>
                      <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-brand-gold">Cold Brew Masterpiece</span>
                   </div>
                </motion.div>
             </motion.div>

             {/* Secondary: Fresh Cookies */}
             <motion.div 
               style={{ y: yImageSmall }}
               initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
               className={`absolute bottom-0 ${isRTL ? '-right-8' : '-left-8'} w-[55%] h-[45%] z-[4]`}
             >
                <motion.div 
                  animate={{ y: [0, 15, 0], rotate: isRTL ? [1, -1, 1] : [-1, 1, -1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="relative w-full h-full overflow-hidden rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-8 border-brand-dark bg-brand-stone/5 group"
                >
                   <img 
                    src="https://images.unsplash.com/photo-1621236378699-8597f840b4a8?auto=format&fit=crop&q=80&w=1000" 
                    alt="Handcrafted Cookies" 
                    className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" 
                   />
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Dynamic Scroll Hint */}
      <motion.div 
        style={{ opacity: opacityScroll }} 
        className={`absolute bottom-12 ${isRTL ? 'right-6 lg:right-12' : 'left-6 lg:left-12'} flex items-center gap-8 text-brand-cream/30 z-[50]`}
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