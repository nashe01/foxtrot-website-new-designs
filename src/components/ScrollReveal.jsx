import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  size = "md", 
  align = "left", 
  variant = "default",
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 2,
  blurStrength = 3,
  staggerDelay = 0.05,
  duration = 0.6,
  className = "",
  wordSpacing = "normal", // "tight", "normal", "wide"
  springConfig = {
    damping: 20,
    stiffness: 100,
    mass: 0.5,
  }
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  // Split text into words and handle spacing
  const words = typeof children === 'string' ? children.split(' ').filter(word => word.trim() !== '') : [children];

  // Size classes
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl"
  };

  // Alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  // Variant classes
  const variantClasses = {
    default: "text-gray-900 dark:text-gray-100",
    muted: "text-gray-600 dark:text-gray-400",
    primary: "text-blue-600 dark:text-blue-400",
    accent: "text-purple-600 dark:text-purple-400"
  };

  // Word spacing classes
  const spacingClasses = {
    tight: "w-0.5",
    normal: "w-1",
    wide: "w-2"
  };

  return (
    <div 
      ref={ref}
      className={`${sizeClasses[size]} ${alignClasses[align]} ${variantClasses[variant]} leading-relaxed ${className}`}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            initial={{
              opacity: baseOpacity,
              rotateX: baseRotation,
              filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
              y: 20
            }}
            animate={isInView ? {
              opacity: 1,
              rotateX: 0,
              filter: 'blur(0px)',
              y: 0
            } : {
              opacity: baseOpacity,
              rotateX: baseRotation,
              filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
              y: 20
            }}
            transition={{
              duration: duration,
              delay: index * staggerDelay,
              ease: [0.25, 0.46, 0.45, 0.94],
              ...springConfig
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {/* Add space after each word except the last one */}
          {index < words.length - 1 && <span className={`inline-block ${spacingClasses[wordSpacing]}`}></span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ScrollReveal; 