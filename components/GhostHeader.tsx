'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';
import NeonGhostLogo from './NeonGhostLogo';
import NeonButton from './NeonButton';
import { shortenAddress } from '@/lib/wallet';

interface GhostHeaderProps {
  className?: string;
}

/**
 * GhostHeader - Main navigation header
 * Includes logo, navigation links, and wallet connection
 */
export const GhostHeader: FC<GhostHeaderProps> = ({ className = '' }) => {
  const { connected, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleConnect = () => {
    setVisible(true);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/settings', label: 'Settings' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="backdrop-blur-xl bg-ghost-bg-dark/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <NeonGhostLogo size="sm" />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ghost-text-secondary hover:text-ghost-text-primary transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* X (Twitter) Link */}
              <a
                href="https://x.com/ghostprotocolzk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ghost-text-secondary hover:text-ghost-neon-cyan transition-colors ml-2"
                aria-label="Follow us on X (Twitter)"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </nav>

            {/* Wallet Connection */}
            <div className="flex items-center gap-3">
              {connected && publicKey ? (
                <div className="flex items-center gap-3">
                  {/* Connected Address Pill */}
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-ghost-neon-magenta/20 to-ghost-neon-cyan/20 border border-ghost-neon-magenta/30"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-ghost-neon-green animate-pulse" />
                    <span className="text-sm font-mono text-ghost-text-primary">
                      {shortenAddress(publicKey.toString())}
                    </span>
                  </motion.div>
                  
                  {/* Disconnect Button */}
                  <NeonButton
                    variant="ghost"
                    size="sm"
                    onClick={handleDisconnect}
                  >
                    Disconnect
                  </NeonButton>
                </div>
              ) : (
                <NeonButton variant="primary" size="sm" onClick={handleConnect}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Connect Phantom
                </NeonButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default GhostHeader;
