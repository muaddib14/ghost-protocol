'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/navigation';
import {
  NeonGhostLogo,
  NeonButton,
  GlassCard,
  DashboardMetric,
  ProtocolCard,
} from '@/components';
import { shortenAddress } from '@/lib/wallet';

/**
 * Dashboard Page - Connected wallet experience
 * Shows privacy metrics and recent protocols
 * Requires Phantom wallet connection to access
 */
export default function DashboardPage() {
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const router = useRouter();

  // Redirect to home if not connected
  useEffect(() => {
    if (!connected) {
      // Give time for wallet adapter to check connection status
      const timeout = setTimeout(() => {
        if (!connected) {
          // Don't redirect immediately, show connect prompt instead
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [connected, router]);

  // Mock data for privacy metrics
  const metrics = [
    {
      title: 'Trackers Blocked',
      value: '2,847',
      change: '+124 today',
      trend: 'up' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      title: 'Private Sessions',
      value: '156',
      change: '+12 this week',
      trend: 'up' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Secure dApp Launches',
      value: '89',
      change: '+7 this week',
      trend: 'up' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
  ];

  // Mock data for recent protocols
  const protocols = [
    {
      name: 'Jupiter',
      description: 'Best swap rates across Solana',
      tags: ['DEX', 'DeFi'],
      logo: '/jupiter.jpeg',
    },
    {
      name: 'Magic Eden',
      description: 'Leading NFT marketplace',
      tags: ['NFT'],
      logo: '/magic-eden.jpeg',
    },
    {
      name: 'Marinade',
      description: 'Liquid staking protocol',
      tags: ['DeFi'],
      logo: '/marinade.jpeg',
    },
    {
      name: 'Wormhole',
      description: 'Cross-chain bridge',
      tags: ['Bridge'],
      logo: '/wormhole.jpeg',
    },
    {
      name: 'Kamino',
      description: 'Automated liquidity',
      tags: ['DeFi', 'Lending'],
      logo: '/kamino.jpeg',
    },
  ];

  // Not connected state
  if (!connected) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <NeonGhostLogo size="lg" className="justify-center mb-8" />
          <h1 className="text-2xl font-bold text-ghost-text-primary mb-4">
            Connect Your Wallet
          </h1>
          <p className="text-ghost-text-secondary mb-8">
            Connect your Phantom wallet to access your private dashboard and
            start browsing securely.
          </p>
          <NeonButton variant="primary" size="lg" onClick={() => setVisible(true)}>
            Connect Phantom
          </NeonButton>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Privacy Dashboard
            </h1>
            <p className="text-ghost-text-secondary">
              Monitor your privacy metrics and secure connections
            </p>
          </div>

          {/* Connected Wallet Display */}
          {publicKey && (
            <motion.div
              className="mt-4 md:mt-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-ghost-neon-magenta/10 to-ghost-neon-cyan/10 border border-ghost-neon-magenta/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-3 h-3 rounded-full bg-ghost-neon-green animate-pulse" />
              <span className="font-mono text-ghost-text-primary">
                {shortenAddress(publicKey.toString(), 6)}
              </span>
              <span className="text-xs text-ghost-text-secondary">
                Connected
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <DashboardMetric key={metric.title} {...metric} delay={index * 0.1} />
          ))}
        </div>

        {/* Privacy Score Card */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-ghost-text-primary mb-2">
                  Privacy Score
                </h3>
                <p className="text-ghost-text-secondary">
                  Your overall privacy health based on browsing habits and
                  security settings
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#scoreGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${85 * 2.51} 251`}
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF2EC9" />
                        <stop offset="100%" stopColor="#3DFFFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">85</span>
                  </div>
                </div>
                <div>
                  <p className="text-ghost-neon-green font-semibold">Excellent</p>
                  <p className="text-sm text-ghost-text-secondary">Top 15% of users</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Recent Protocols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-ghost-text-primary mb-6">
            Recent Protocols
          </h2>
          <div className="space-y-4">
            {protocols.map((protocol, index) => (
              <ProtocolCard key={protocol.name} {...protocol} delay={0.4 + index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
