import { type CryptoNetwork } from './CryptoNetwork';
import { CryptoCoin } from './CryptoTypes';

export interface CryptoAccount {
  cryptoCoin: CryptoCoin;
  cryptoNetwork: CryptoNetwork;
  walletAddress: string;
  enable: boolean;
}
