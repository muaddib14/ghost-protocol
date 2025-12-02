'use client';

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

interface DashboardMetricProps {
  title: string;
  value: string | number;
  change?: string;
  icon: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  delay?: number;
}

/**
 * DashboardMetric - Metric display card for dashboard
 * Shows key privacy statistics with trend indicators
 */
export const DashboardMetric: FC<DashboardMetricProps> = ({
  title,
  value,
  change,
  icon,
  trend = 'neutral',
  delay = 0,
}) => {
  const trendColors = {
    up: 'text-ghost-neon-green',
    down: 'text-red-400',
    neutral: 'text-ghost-text-secondary',
  };

  const trendIcons = {
    up: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
    down: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
    neutral: null,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <GlassCard className="p-6">
        <div className="flex items-start justify-between">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ghost-neon-magenta/20 to-ghost-neon-cyan/20 flex items-center justify-center border border-ghost-neon-magenta/20">
            <span className="text-ghost-neon-cyan">{icon}</span>
          </div>

          {/* Trend */}
          {change && (
            <div className={`flex items-center gap-1 ${trendColors[trend]}`}>
              {trendIcons[trend]}
              <span className="text-sm font-medium">{change}</span>
            </div>
          )}
        </div>

        {/* Value */}
        <motion.div
          className="mt-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          <p className="text-3xl font-bold gradient-text">{value}</p>
        </motion.div>

        {/* Title */}
        <p className="text-ghost-text-secondary text-sm mt-1">{title}</p>
      </GlassCard>
    </motion.div>
  );
};

export default DashboardMetric;
