'use client';

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

/**
 * GlassCard - Glassmorphism card component
 * Features blur effect, subtle border, inner glow, and optional hover animation
 */
export const GlassCard: FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
}) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        backdrop-blur-md
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        border border-white/[0.08]
        ${glow ? 'shadow-neon-glow' : 'shadow-glass'}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={
        hover
          ? {
              y: -5,
              boxShadow:
                '0 0 30px rgba(255,46,201,0.3), 0 0 60px rgba(61,255,255,0.15)',
              borderColor: 'rgba(255,46,201,0.3)',
            }
          : {}
      }
      onClick={onClick}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-ghost-neon-magenta/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
