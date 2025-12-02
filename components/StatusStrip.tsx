'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface StatusItem {
  icon: 'shield' | 'lock' | 'dna' | 'check' | 'warning';
  label: string;
  status: string;
  active?: boolean;
}

interface StatusStripProps {
  items?: StatusItem[];
  className?: string;
}

const icons = {
  shield: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  lock: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  dna: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 2h16M4 22h16M6 6h12M6 18h12M8 10h8M8 14h8" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  ),
  warning: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
};

const defaultItems: StatusItem[] = [
  { icon: 'shield', label: 'Tracker Blocking', status: 'Active', active: true },
  { icon: 'lock', label: 'Encryption', status: 'On', active: true },
  { icon: 'dna', label: 'ZK Mode', status: 'Coming Soon', active: false },
];

/**
 * StatusStrip - Horizontal privacy status indicators
 * Shows privacy features as pills with icons and status
 */
export const StatusStrip: FC<StatusStripProps> = ({
  items = defaultItems,
  className = '',
}) => {
  return (
    <motion.div
      className={`flex flex-wrap items-center justify-center gap-3 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full
            backdrop-blur-md
            border
            ${
              item.active
                ? 'bg-ghost-neon-green/10 border-ghost-neon-green/30 text-ghost-neon-green'
                : 'bg-white/5 border-white/10 text-ghost-text-secondary'
            }
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className={item.active ? 'text-ghost-neon-green' : 'text-ghost-text-secondary'}>
            {icons[item.icon]}
          </span>
          <span className="text-sm font-medium">
            {item.label}: <span className="font-semibold">{item.status}</span>
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatusStrip;
