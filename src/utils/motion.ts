import { Variants } from 'framer-motion';

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none',
  delay: number = 0,
  duration: number = 0.5
): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 100,
        duration,
        delay,
      },
    },
  };
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.03,
    y: -6,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 22,
      stiffness: 120,
    },
  },
};
