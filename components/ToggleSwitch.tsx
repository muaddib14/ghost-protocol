'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface ToggleSwitchProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

/**
 * ToggleSwitch - Animated toggle switch for settings
 * Features neon glow when active
 */
export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  label,
  description,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <motion.div
      className={`flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 ${
        disabled ? 'opacity-50' : ''
      }`}
      whileHover={!disabled ? { borderColor: 'rgba(255,46,201,0.3)' } : {}}
    >
      <div className="flex-1 pr-4">
        <h4 className="font-medium text-ghost-text-primary">{label}</h4>
        {description && (
          <p className="text-sm text-ghost-text-secondary mt-1">{description}</p>
        )}
      </div>

      {/* Toggle */}
      <button
        type="button"
        className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
          checked
            ? 'bg-gradient-to-r from-ghost-neon-magenta to-ghost-neon-cyan'
            : 'bg-white/10'
        } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
      >
        {/* Glow effect when active */}
        {checked && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-ghost-neon-magenta to-ghost-neon-cyan blur-md opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
          />
        )}

        {/* Toggle knob */}
        <motion.div
          className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg"
          initial={false}
          animate={{
            left: checked ? 'calc(100% - 28px)' : '4px',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </button>
    </motion.div>
  );
};

export default ToggleSwitch;
