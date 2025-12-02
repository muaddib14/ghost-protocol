'use client';

import { motion } from 'framer-motion';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import {
  NeonGhostLogo,
  NeonButton,
  SearchBar,
  StatusStrip,
  FeatureCard,
} from '@/components';

/**
 * Landing Page - Ghost Protocol Home
 * Features hero section, search bar, status strip, and feature cards
 */
export default function HomePage() {
  const { connected } = useWallet();
  const { setVisible } = useWalletModal();

  const handleConnect = () => {
    setVisible(true);
  };

  const features = [
    {
      title: 'Private Search',
      description:
        'Search the decentralized web without leaving traces. Your queries are encrypted and never stored.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Encrypted Identity',
      description:
        'Your on-chain identity remains private. Connect to dApps without revealing your full wallet history.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: 'On-Chain Access',
      description:
        'Seamless authentication to Web3 protocols. One-click access with zero-knowledge proofs.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      title: 'Web3 Dashboard',
      description:
        'Monitor your privacy score, track blocked trackers, and manage your secure dApp connections.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <NeonGhostLogo size="xl" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl lg:text-2xl text-ghost-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A zk-powered browser built for Web3. Private search, encrypted
            identity, and seamless on-chain authentication.
          </motion.p>

          {/* Search Bar */}
          <SearchBar className="mb-8" />

          {/* Status Strip */}
          <StatusStrip className="mb-12" />

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {!connected && (
              <NeonButton variant="primary" size="lg" onClick={handleConnect}>
                <svg
                  className="w-5 h-5"
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
                Connect Phantom Wallet
              </NeonButton>
            )}
            <NeonButton variant="outline" size="lg">
              Learn More
            </NeonButton>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Privacy-First Features
            </h2>
            <p className="text-ghost-text-secondary max-w-2xl mx-auto">
              Built from the ground up with privacy as the core principle. Every
              feature is designed to protect your identity and data.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 lg:p-12 rounded-3xl glass-effect border border-white/10">
            <h2 className="text-2xl lg:text-3xl font-bold text-ghost-text-primary mb-4">
              Ready to browse privately?
            </h2>
            <p className="text-ghost-text-secondary mb-8 max-w-xl mx-auto">
              Connect your Phantom wallet to unlock the full Ghost Protocol
              experience. Your privacy journey starts here.
            </p>
            {!connected ? (
              <NeonButton variant="primary" size="lg" onClick={handleConnect}>
                Get Started with Phantom
              </NeonButton>
            ) : (
              <NeonButton
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = '/dashboard')}
              >
                Go to Dashboard
              </NeonButton>
            )}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <NeonGhostLogo size="sm" showText={false} className="justify-center mb-4" />
          <p className="text-ghost-text-secondary text-sm">
            2024 Ghost Protocol. Built for Web3 privacy.
          </p>
        </div>
      </footer>
    </div>
  );
}
