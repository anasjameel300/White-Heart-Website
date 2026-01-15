import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Refined Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const yImages = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center bg-brand-dark overflow-hidden pt-20 lg:pt-0 perspective-1000">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise opacity-20" />

        {/* Ambient Glows - Parallax enabled */}
        <motion.div style={{ y: yBackground }} className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-brand-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Content */}
          <motion.div
            style={{ y: yText }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-start text-left pt-12 lg:pt-0 relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-[1px] w-12 bg-brand-gold/60"></span>
              <span className="font-sans text-brand-gold text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
                Est. Jeddah • 2024
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-cream font-medium leading-[1.1] mb-8 tracking-tight">
              The Heart of <br />
              <span className="italic text-brand-gold relative inline-block">
                Good Taste
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1.5, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-gold/50"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <motion.path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </motion.svg>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="max-w-lg text-brand-stone/80 font-sans text-lg leading-relaxed mb-10"
            >
              Where tradition meets craft. Experience our signature cold tea blends, fresh-baked artisanal cookies, and premium gelato in the heart of Jeddah.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <a
                href="#menu"
                className="group px-8 py-4 bg-brand-cream text-brand-dark font-sans text-sm font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300 rounded-sm text-center shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              >
                Explore Menu
              </a>
              <a
                href="#locations"
                className="px-8 py-4 bg-transparent border border-brand-cream/20 text-brand-cream font-sans text-sm font-bold uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all duration-300 rounded-sm text-center"
              >
                Find a Branch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Composition with Parallax & Floating */}
          <motion.div
            style={{ y: yImages }}
            className="relative h-[600px] w-full hidden lg:block"
          >

            {/* Image 1: Ice Tea (Main Center) */}
            {/* Animation: Gentle vertical float + Subtle Zoom Entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                y: [0, -15, 0] // Gentle Float
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.2 },
                scale: { duration: 1.4, ease: "easeOut", delay: 0.2 },
                filter: { duration: 1, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
              }}
              className="absolute top-10 left-[15%] w-[60%] h-[75%] z-10"
            >
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl border border-white/5 group transform transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src="https://images.unsplash.com/photo-1544254200-0df5275d33e7?q=80&w=800&auto=format&fit=crop"
                  alt="Signature Cold Tea"
                  className="w-full h-full object-cover transition-transform duration-[3s] scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Image 2: Cookies (Bottom Left) */}
            {/* Animation: Float with slight rotation + Slide In Entrance */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotate: -5 }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
                y: [0, -10, 0]
              }}
              transition={{
                opacity: { duration: 1, delay: 0.5 },
                x: { duration: 1.2, type: "spring", stiffness: 50, delay: 0.5 },
                rotate: { duration: 1.2, type: "spring", stiffness: 50, delay: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.7 }
              }}
              className="absolute bottom-12 left-0 w-[45%] h-[40%] z-20"
            >
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-brand-dark group">
                <img
                  src="https://images.unsplash.com/photo-1621236378699-8597f840b4a8?q=80&w=800&auto=format&fit=crop"
                  alt="Fresh Cookies"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Image 3: Ice Cream (Top Right) */}
            {/* Animation: Float opposite phase + Slide In Entrance */}
            <motion.div
              initial={{ opacity: 0, x: 80, y: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, 15, 0] // Floating opposite phase
              }}
              transition={{
                opacity: { duration: 1, delay: 0.7 },
                x: { duration: 1.2, type: "spring", stiffness: 50, delay: 0.7 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }
              }}
              className="absolute top-0 right-4 w-[40%] h-[35%] z-0"
            >
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-xl opacity-90 group">
                <img
                  src="https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=800&auto=format&fit=crop"
                  alt="Premium Gelato"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: opacityScroll }}
        className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-4 text-brand-cream/40"
      >
        <span className="text-[10px] uppercase tracking-widest writing-vertical-lr hidden lg:block">Scroll Down</span>
        <div className="p-3 border border-brand-cream/20 rounded-full animate-bounce">
          <ArrowDown size={16} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;