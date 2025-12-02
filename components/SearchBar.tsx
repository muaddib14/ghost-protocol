'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

/**
 * SearchBar - Glassmorphism search bar with neon focus effects
 * Full-width, center aligned with animated border on focus
 */
export const SearchBar: FC<SearchBarProps> = ({
  placeholder = 'Search Web3, dApps, and on-chain signals...',
  onSearch,
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`relative w-full max-w-3xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Animated border container */}
      <motion.div
        className={`
          absolute inset-0 rounded-2xl
          bg-gradient-to-r from-ghost-neon-magenta via-ghost-neon-cyan to-ghost-neon-magenta
          bg-[length:200%_100%]
          ${isFocused ? 'opacity-100' : 'opacity-0'}
        `}
        animate={
          isFocused
            ? {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
            : {}
        }
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ padding: '2px' }}
      />

      {/* Search input wrapper */}
      <div
        className={`
          relative rounded-2xl
          ${isFocused ? 'p-[2px]' : 'border border-white/10'}
          transition-all duration-300
        `}
      >
        <div className="relative flex items-center bg-ghost-bg-dark/80 backdrop-blur-xl rounded-2xl">
          {/* Search Icon */}
          <div className="pl-5 text-ghost-text-secondary">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="
              flex-1 bg-transparent
              py-4 px-4
              text-ghost-text-primary placeholder-ghost-text-secondary/60
              text-lg
              focus:outline-none
            "
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="
              mr-2 px-4 py-2 rounded-xl
              bg-gradient-to-r from-ghost-neon-magenta/20 to-ghost-neon-cyan/20
              text-ghost-text-primary text-sm font-medium
              border border-white/10
              hover:border-ghost-neon-magenta/30
              transition-colors
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        </div>
      </div>

      {/* Glow effect */}
      {isFocused && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-ghost-neon-magenta/20 to-ghost-neon-cyan/20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.form>
  );
};

export default SearchBar;
