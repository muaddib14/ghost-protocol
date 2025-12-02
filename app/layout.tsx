import { Metadata, Viewport } from 'next';
import { WalletProvider } from '@/components/WalletProvider';
import { GhostHeader } from '@/components/GhostHeader';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050015',
};

export const metadata: Metadata = {
  title: 'Ghost Protocol | Privacy-First Web3 Browser',
  description:
    'A zk-powered browser built for Web3. Private search, encrypted identity, and seamless on-chain authentication.',
  keywords: [
    'Web3',
    'Privacy',
    'Browser',
    'Solana',
    'ZK',
    'Phantom',
    'DeFi',
    'Crypto',
  ],
  authors: [{ name: 'Ghost Protocol' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        {/* Wallet Provider wraps entire app for global access */}
        <WalletProvider>
          {/* Fixed Header */}
          <GhostHeader />
          
          {/* Main Content */}
          <main className="pt-16">{children}</main>
          
          {/* Background Effects */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Top-left glow */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-ghost-neon-magenta/10 rounded-full blur-[100px]" />
            
            {/* Bottom-right glow */}
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ghost-neon-cyan/10 rounded-full blur-[100px]" />
            
            {/* Center subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ghost-neon-magenta/5 rounded-full blur-[150px]" />
          </div>
        </WalletProvider>
      </body>
    </html>
  );
}
