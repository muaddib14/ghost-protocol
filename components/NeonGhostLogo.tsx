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
      {/* Logo Image */}
      <motion.img
        src="/logo.jpeg"
        alt="Ghost Protocol Logo"
        width={icon}
        height={icon}
        className="rounded-xl"
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
      />

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
