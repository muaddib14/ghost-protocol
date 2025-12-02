'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

interface ProtocolCardProps {
  name: string;
  description: string;
  tags: string[];
  logoColor: string;
  delay?: number;
}

/**
 * ProtocolCard - dApp/Protocol showcase card
 * Displays protocol info with tags and logo placeholder
 */
export const ProtocolCard: FC<ProtocolCardProps> = ({
  name,
  description,
  tags,
  logoColor,
  delay = 0,
}) => {
  const tagColors: Record<string, string> = {
    DeFi: 'from-ghost-neon-green/20 to-ghost-neon-green/10 text-ghost-neon-green border-ghost-neon-green/30',
    NFT: 'from-ghost-neon-magenta/20 to-ghost-neon-magenta/10 text-ghost-neon-magenta border-ghost-neon-magenta/30',
    Bridge: 'from-ghost-neon-cyan/20 to-ghost-neon-cyan/10 text-ghost-neon-cyan border-ghost-neon-cyan/30',
    DEX: 'from-purple-500/20 to-purple-500/10 text-purple-400 border-purple-400/30',
    Lending: 'from-yellow-500/20 to-yellow-500/10 text-yellow-400 border-yellow-400/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <GlassCard className="p-4">
        <div className="flex items-center gap-4">
          {/* Logo Placeholder */}
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold"
            style={{
              background: `linear-gradient(135deg, ${logoColor}30, ${logoColor}10)`,
              border: `1px solid ${logoColor}40`,
              color: logoColor,
            }}
            whileHover={{ scale: 1.1 }}
          >
            {name.charAt(0)}
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-ghost-text-primary truncate">
              {name}
            </h4>
            <p className="text-sm text-ghost-text-secondary truncate">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r border ${
                  tagColors[tag] || tagColors.DeFi
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ProtocolCard;
