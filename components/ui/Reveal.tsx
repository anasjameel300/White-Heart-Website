import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

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
  delay = 0.25,
  duration = 0.8,
  direction = 'up',
  variant = 'slide',
  className = "",
  threshold = 0.2
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px", amount: threshold });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = (): Variants => {
    const distance = 30;

    // Base hidden state
    let hiddenState: any = { opacity: 0 };
    let visibleState: any = {
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Cinematic ease
      }
    };

    switch (variant) {
      case 'slide':
        if (direction === 'up') hiddenState.y = distance;
        if (direction === 'down') hiddenState.y = -distance;
        if (direction === 'left') hiddenState.x = distance;
        if (direction === 'right') hiddenState.x = -distance;
        visibleState.y = 0;
        visibleState.x = 0;
        break;

      case 'scale':
        hiddenState.scale = 0.9;
        visibleState.scale = 1;
        break;

      case 'blur':
        hiddenState.filter = 'blur(10px)';
        visibleState.filter = 'blur(0px)';
        break;

      case 'fade':
      default:
        // Just opacity (handled in base)
        break;
    }

    return {
      hidden: hiddenState,
      visible: visibleState,
    };
  };

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};