'use client';

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

/**
 * FeatureCard - Feature showcase card with icon
 * Used in the landing page feature grid
 */
export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <GlassCard className="p-6 h-full">
        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-ghost-neon-magenta/20 to-ghost-neon-cyan/20 flex items-center justify-center mb-4 border border-ghost-neon-magenta/20"
          whileHover={{
            boxShadow: '0 0 20px rgba(255,46,201,0.3)',
            scale: 1.05,
          }}
        >
          <span className="text-ghost-neon-magenta">{icon}</span>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-ghost-text-primary mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-ghost-text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </GlassCard>
    </motion.div>
  );
};

export default FeatureCard;
