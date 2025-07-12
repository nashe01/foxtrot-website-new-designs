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

  // Split text into words
  const words = typeof children === 'string' ? children.split(' ') : [children];

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

  return (
    <div 
      ref={ref}
      className={`${sizeClasses[size]} ${alignClasses[align]} ${variantClasses[variant]} leading-relaxed ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
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
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default ScrollReveal; 