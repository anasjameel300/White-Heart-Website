import React, { useEffect, useRef, useContext } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { LanguageContext } from '../../App';

export type RevealVariant = 'slide' | 'fade' | 'scale' | 'blur';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  variant?: RevealVariant;
  className?: string;
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%", 
  delay = 0.2, 
  duration = 1.4, // Deliberate and luxurious
  direction = 'up',
  variant = 'slide',
  className = "",
  threshold = 0.1
}) => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px", amount: threshold });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = (): Variants => {
    const distance = 40;
    const luxuriousEase = [0.22, 1, 0.36, 1]; // Weighted flow
    
    let hiddenState: any = { opacity: 0 };
    let visibleState: any = { 
      opacity: 1,
      transition: { duration, delay, ease: luxuriousEase } 
    };

    switch (variant) {
      case 'slide':
        if (direction === 'up') hiddenState.y = distance;
        if (direction === 'down') hiddenState.y = -distance;
        
        // Handle RTL flipping for horizontal slides
        if (direction === 'left') hiddenState.x = isRTL ? -distance : distance;
        if (direction === 'right') hiddenState.x = isRTL ? distance : -distance;
        
        visibleState.y = 0;
        visibleState.x = 0;
        break;
      case 'scale':
        hiddenState.scale = 0.96;
        visibleState.scale = 1;
        break;
      case 'blur':
        hiddenState.filter = 'blur(12px)';
        visibleState.filter = 'blur(0px)';
        break;
    }

    return { hidden: hiddenState, visible: visibleState };
  };

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div variants={getVariants()} initial="hidden" animate={mainControls}>
        {children}
      </motion.div>
    </div>
  );
};