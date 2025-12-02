'use client';

import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
}

/**
 * NeonButton - Styled button with neon effects
 * Supports primary, outline, and ghost variants
 */
export const NeonButton: FC<NeonButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  loading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ghost-neon-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-ghost-neon-magenta to-ghost-neon-cyan
      text-white font-semibold
      shadow-neon-glow
      hover:shadow-[0_0_40px_rgba(255,46,201,0.5),0_0_80px_rgba(61,255,255,0.3)]
    `,
    outline: `
      bg-transparent
      border-2 border-transparent
      text-ghost-text-primary
      [background:linear-gradient(#120026,#120026)_padding-box,linear-gradient(135deg,#FF2EC9,#3DFFFF)_border-box]
      hover:shadow-neon-glow
    `,
    ghost: `
      bg-white/5
      text-ghost-text-primary
      border border-white/10
      hover:bg-white/10
      hover:border-ghost-neon-magenta/30
    `,
  };

  return (
    <motion.button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <motion.div
          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      ) : (
        <>
          {icon && <span className="w-5 h-5">{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
};

export default NeonButton;
