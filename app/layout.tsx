import { Metadata, Viewport } from 'next';
import { WalletProvider } from '@/components/WalletProvider';
import { GhostHeader } from '@/components/GhostHeader';
import { InteractiveBackground } from '@/components/InteractiveBackground';
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
    icon: '/logo.jpeg',
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
          
          {/* Interactive Background */}
          <InteractiveBackground />
        </WalletProvider>
      </body>
    </html>
  );
}
