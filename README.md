# Ghost Protocol

A zk-powered, privacy-first Web3 browser interface built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Privacy-First Design**: Dark cyberpunk aesthetic with neon accents and glassmorphism effects
- **Phantom Wallet Integration**: Connect your Solana wallet for Web3 authentication
- **Privacy Dashboard**: Monitor blocked trackers, private sessions, and secure dApp launches
- **Settings Management**: Configure privacy preferences with localStorage persistence

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **Solana Wallet Adapter** for Phantom integration

## Pages

1. **Landing Page** (`/`) - Hero section with search bar, status strip, and feature cards
2. **Dashboard** (`/dashboard`) - Privacy metrics and recent protocols (requires wallet connection)
3. **Settings** (`/settings`) - Privacy toggle switches with localStorage persistence

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ghost-protocol

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

### Netlify

1. Push your code to a Git provider
2. Import in Netlify and set:
   - Build command: `pnpm build`
   - Publish directory: `.next`
3. Deploy

### Self-Hosted

```bash
# Build the application
pnpm build

# Start production server
pnpm start

# Or use PM2 for process management
pm2 start npm --name "ghost-protocol" -- start
```

## Project Structure

```
ghost-protocol/
  app/
    layout.tsx         # Root layout with WalletProvider
    page.tsx           # Landing page
    dashboard/
      page.tsx         # Dashboard page
    settings/
      page.tsx         # Settings page
    globals.css        # Global styles
  components/
    NeonGhostLogo.tsx  # Animated ghost logo
    NeonButton.tsx     # Styled button variants
    GlassCard.tsx      # Glassmorphism card
    SearchBar.tsx      # Search input with neon effects
    StatusStrip.tsx    # Privacy status indicators
    GhostHeader.tsx    # Navigation header
    WalletProvider.tsx # Solana wallet context
    FeatureCard.tsx    # Feature showcase card
    DashboardMetric.tsx# Metric display card
    ProtocolCard.tsx   # Protocol/dApp card
    ToggleSwitch.tsx   # Settings toggle
  lib/
    wallet.ts          # Wallet utilities
  public/
    favicon.ico        # App icon
```

## Design System

### Colors

- **Background**: `#050015` to `#120026` (dark purple gradient)
- **Neon Magenta**: `#FF2EC9`
- **Neon Cyan**: `#3DFFFF`
- **Accent Green**: `#20FF9F`
- **Text Primary**: `#F5F5FF`
- **Text Secondary**: `#A6A6D9`

### Effects

- Glassmorphism with backdrop blur
- Neon glow shadows
- Framer Motion animations
- Gradient text and borders

## License

MIT License - See LICENSE file for details.

---

Built with privacy in mind for the Web3 community.
