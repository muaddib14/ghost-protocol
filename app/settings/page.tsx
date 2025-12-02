'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  NeonGhostLogo,
  GlassCard,
  ToggleSwitch,
  NeonButton,
} from '@/components';

interface SettingsState {
  blockTrackers: boolean;
  blockFingerprinting: boolean;
  askBeforeConnect: boolean;
  enhancedPrivacy: boolean;
  autoLockWallet: boolean;
}

const defaultSettings: SettingsState = {
  blockTrackers: true,
  blockFingerprinting: true,
  askBeforeConnect: true,
  enhancedPrivacy: false,
  autoLockWallet: false,
};

/**
 * Settings Page - Privacy configuration
 * Toggle switches for privacy settings with localStorage persistence
 */
export default function SettingsPage() {
  const { connected } = useWallet();
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);
  const [saved, setSaved] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('ghostProtocolSettings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error('Failed to parse settings:', e);
      }
    }
  }, []);

  // Save settings to localStorage
  const handleSave = () => {
    localStorage.setItem('ghostProtocolSettings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // Update individual setting
  const updateSetting = (key: keyof SettingsState, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  // Reset to defaults
  const handleReset = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('ghostProtocolSettings');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Privacy Settings
          </h1>
          <p className="text-ghost-text-secondary">
            Configure your Ghost Protocol privacy preferences
          </p>
        </motion.div>

        {/* Privacy Settings Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-ghost-text-primary mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-ghost-neon-magenta"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Core Privacy
            </h2>

            <div className="space-y-4">
              <ToggleSwitch
                label="Block Trackers"
                description="Prevent third-party trackers from collecting your browsing data"
                checked={settings.blockTrackers}
                onChange={(val) => updateSetting('blockTrackers', val)}
              />

              <ToggleSwitch
                label="Block Fingerprinting"
                description="Protect against browser fingerprinting techniques that identify you"
                checked={settings.blockFingerprinting}
                onChange={(val) => updateSetting('blockFingerprinting', val)}
              />

              <ToggleSwitch
                label="Enhanced Privacy Mode"
                description="Maximum privacy settings - may affect some dApp functionality"
                checked={settings.enhancedPrivacy}
                onChange={(val) => updateSetting('enhancedPrivacy', val)}
              />
            </div>
          </GlassCard>
        </motion.div>

        {/* Wallet Settings Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-ghost-text-primary mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-ghost-neon-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Wallet Settings
            </h2>

            <div className="space-y-4">
              <ToggleSwitch
                label="Always Ask Before Connecting"
                description="Require confirmation before connecting wallet to new dApps"
                checked={settings.askBeforeConnect}
                onChange={(val) => updateSetting('askBeforeConnect', val)}
              />

              <ToggleSwitch
                label="Auto-Lock Wallet"
                description="Automatically disconnect wallet after 30 minutes of inactivity"
                checked={settings.autoLockWallet}
                onChange={(val) => updateSetting('autoLockWallet', val)}
              />
            </div>
          </GlassCard>
        </motion.div>

        {/* Connection Status */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-ghost-text-primary mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-ghost-neon-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              Connection Status
            </h2>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <div
                className={`w-3 h-3 rounded-full ${
                  connected ? 'bg-ghost-neon-green animate-pulse' : 'bg-red-500'
                }`}
              />
              <span className="text-ghost-text-primary font-medium">
                {connected ? 'Wallet Connected' : 'No Wallet Connected'}
              </span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <NeonButton variant="ghost" onClick={handleReset}>
            Reset to Defaults
          </NeonButton>
          <NeonButton variant="primary" onClick={handleSave}>
            {saved ? (
              <>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Saved!
              </>
            ) : (
              <>
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
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                Save Settings
              </>
            )}
          </NeonButton>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          className="mt-12 p-6 rounded-xl glass-effect border border-ghost-neon-cyan/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-4">
            <div className="text-ghost-neon-cyan flex-shrink-0">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-ghost-text-primary mb-1">
                ZK Mode Coming Soon
              </h3>
              <p className="text-sm text-ghost-text-secondary">
                Zero-knowledge proofs will enable you to interact with dApps
                without revealing your wallet address or transaction history.
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
