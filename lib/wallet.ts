import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';

/**
 * Wallet configuration for Ghost Protocol
 * Uses Phantom as the primary wallet adapter
 */

export const network = WalletAdapterNetwork.Mainnet;

export const endpoint = clusterApiUrl(network);

export const wallets = [new PhantomWalletAdapter()];

/**
 * Shorten wallet address for display
 * @param address - Full wallet address
 * @param chars - Number of characters to show on each side
 */
export function shortenAddress(address: string, chars = 4): string {
  if (!address) return '';
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}
