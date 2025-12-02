'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface NeonGhostLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

/**
 * NeonGhostLogo - Animated ghost logo with neon gradient effect
 * Features a slow pulsing glow animation
 */
export const NeonGhostLogo: FC<NeonGhostLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 48, text: 'text-2xl' },
    lg: { icon: 64, text: 'text-3xl' },
    xl: { icon: 96, text: 'text-4xl' },
  };

  const { icon, text } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ghost Icon with Neon Gradient */}
      <motion.div
        className="relative"
        animate={{
          filter: [
            'drop-shadow(0 0 10px rgba(255,46,201,0.5))',
            'drop-shadow(0 0 20px rgba(61,255,255,0.6))',
            'drop-shadow(0 0 10px rgba(255,46,201,0.5))',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ghostGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF2EC9" />
              <stop offset="100%" stopColor="#3DFFFF" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Ghost Body */}
          <path
            d="M32 4C20.954 4 12 12.954 12 24V52C12 53.5 13.5 54.5 15 53.5L20 50L25 54L32 48L39 54L44 50L49 53.5C50.5 54.5 52 53.5 52 52V24C52 12.954 43.046 4 32 4Z"
            fill="url(#ghostGradient)"
            fillOpacity="0.15"
            stroke="url(#ghostGradient)"
            strokeWidth="2.5"
            filter="url(#glow)"
          />
          
          {/* Eyes */}
          <circle cx="24" cy="26" r="4" fill="url(#ghostGradient)" />
          <circle cx="40" cy="26" r="4" fill="url(#ghostGradient)" />
          
          {/* Mouth */}
          <path
            d="M26 36C26 36 29 40 32 40C35 40 38 36 38 36"
            stroke="url(#ghostGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Text Logo */}
      {showText && (
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span
            className={`font-display font-bold ${text} tracking-wider gradient-text`}
          >
            GHOST
          </span>
          <span
            className={`font-display font-medium ${
              size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
            } tracking-[0.3em] text-ghost-text-secondary -mt-1`}
          >
            PROTOCOL
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NeonGhostLogo;
