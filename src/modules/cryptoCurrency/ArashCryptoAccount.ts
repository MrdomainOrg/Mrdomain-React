import { cryptoDetails } from '../../constants/SiteConfigs';
import {
  ADACoin,
  BNBCoin,
  BTCCoin,
  BUSDCoin,
  DAICoin,
  DOGECoin,
  ETHCoin,
  LTCCoin,
  MATICCoin,
  TRXCoin,
  USDCCoin,
  USDTCoin,
  XMRCoin,
  XRPCoin,
} from './coin/CryptoCoin';
import { CryptoAccount } from './type/CryptoAccount';
import { CryptoNetworkTypeId, CoinId } from './type/CryptoTypes';
import {
  BTCNetwork,
  ETHNetwork,
  ADANetwork,
  BCNetwork,
  BSCNetwork,
  DOGENetwork,
  LTCNetwork,
  TRONNetwork,
  XMRNetwork,
  XRPNetwork,
  PolygonNetwork,
} from './type/CryptoNetwork';

const BTCWallet: CryptoAccount[] = [
  {
    cryptoCoin: BTCCoin,
    cryptoNetwork: BTCNetwork,
    enable: true,
    walletAddress: cryptoDetails.btcWalletAddress,
  },
  {
    cryptoCoin: BTCCoin,
    cryptoNetwork: BSCNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
];

const ETHWallet: CryptoAccount[] = [
  {
    cryptoCoin: ETHCoin,
    cryptoNetwork: ETHNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
  {
    cryptoCoin: ETHCoin,
    cryptoNetwork: BSCNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
];

const usdtTrc20Wallet: CryptoAccount = {
  cryptoCoin: USDTCoin,
  cryptoNetwork: TRONNetwork,
  enable: true,
  walletAddress: cryptoDetails.trxWalletAddress,
};

const usdtPolygonWallet: CryptoAccount = {
  cryptoCoin: USDTCoin,
  cryptoNetwork: PolygonNetwork,
  enable: true,
  walletAddress: cryptoDetails.ethWalletAddress,
};

const usdtErc20Wallet: CryptoAccount = {
  cryptoCoin: USDTCoin,
  cryptoNetwork: ETHNetwork,
  enable: true,
  walletAddress: cryptoDetails.ethWalletAddress,
};

const usdtBep20Wallet: CryptoAccount = {
  cryptoCoin: USDTCoin,
  cryptoNetwork: BSCNetwork,
  enable: true,
  walletAddress: cryptoDetails.ethWalletAddress,
};

const USDTWallet: CryptoAccount[] = [
  usdtTrc20Wallet,
  usdtPolygonWallet,
  usdtErc20Wallet,
  usdtBep20Wallet,
];

const USDCWallet: CryptoAccount[] = [
  {
    cryptoCoin: USDCCoin,
    cryptoNetwork: TRONNetwork,
    enable: true,
    walletAddress: cryptoDetails.trxWalletAddress,
  },
  {
    cryptoCoin: USDCCoin,
    cryptoNetwork: ETHNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
  {
    cryptoCoin: USDCCoin,
    cryptoNetwork: BSCNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
];

const DAIWallet: CryptoAccount[] = [
  {
    cryptoCoin: DAICoin,
    cryptoNetwork: PolygonNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
  {
    cryptoCoin: DAICoin,
    cryptoNetwork: ETHNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
  {
    cryptoCoin: DAICoin,
    cryptoNetwork: BSCNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
];

const BUSDWallet: CryptoAccount[] = [
  {
    cryptoCoin: BUSDCoin,
    cryptoNetwork: ETHNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
  {
    cryptoCoin: BUSDCoin,
    cryptoNetwork: BSCNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
];

const BNBWallet: CryptoAccount[] = [
  {
    cryptoCoin: BNBCoin,
    cryptoNetwork: BSCNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
  {
    cryptoCoin: BNBCoin,
    cryptoNetwork: BCNetwork,
    enable: true,
    walletAddress: 'bnb137cxdlxc8ch4mezf0tjk4lwe8vlfqtgjvwv4sr',
  },
];

const MATICWallet: CryptoAccount[] = [
  {
    cryptoCoin: MATICCoin,
    cryptoNetwork: PolygonNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
  {
    cryptoCoin: MATICCoin,
    cryptoNetwork: ETHNetwork,
    enable: true,
    walletAddress: cryptoDetails.ethWalletAddress,
  },
];

const DOGEWallet: CryptoAccount[] = [
  {
    cryptoCoin: DOGECoin,
    cryptoNetwork: DOGENetwork,
    enable: true,
    walletAddress: 'DHoS7ji9oMCDkS4i7e5XAXurQzwyi7zGjM',
  },
];

const LTCWallet: CryptoAccount[] = [
  {
    cryptoCoin: LTCCoin,
    cryptoNetwork: LTCNetwork,
    enable: true,
    walletAddress: 'Lha38p2oA2Z4kd6XZHzESjWq3YANYHB4gw',
  },
];

const ADAWallet: CryptoAccount[] = [
  {
    cryptoCoin: ADACoin,
    cryptoNetwork: ADANetwork,
    enable: true,
    walletAddress:
      'addr1qyqjrzft999zudyzvsums80f28sm9svadyklmv6se6kh8zrjm67nslkjnz2zguz5rt8eththp7qqf8yw23xls4uj26ys8ljatn',
  },
];

const TRXWallet: CryptoAccount[] = [
  {
    cryptoCoin: TRXCoin,
    cryptoNetwork: TRONNetwork,
    enable: true,
    walletAddress: cryptoDetails.trxWalletAddress,
  },
];

const XRPWallet: CryptoAccount[] = [
  {
    cryptoCoin: XRPCoin,
    cryptoNetwork: XRPNetwork,
    enable: true,
    walletAddress: 'rDV4ag5zS8vp2DrtMPSGL3Qg35GCHxABj9',
  },
];

const XMRWallet: CryptoAccount[] = [
  {
    cryptoCoin: XMRCoin,
    cryptoNetwork: XMRNetwork,
    enable: true,
    walletAddress:
      '48UKULcfQ6G15TYZfDngKQY19zctnruiLjRPYoCiTWhkQr975PansxJDmBEzhGum5TGFRyViGEKE5VNGfK68tBGgUz4npHV',
  },
];

const ArashCryptoWallets = {
  [CoinId.BTC]: BTCWallet,
  [CoinId.ETH]: ETHWallet,
  [CoinId.MATIC]: MATICWallet,
  [CoinId.TRX]: TRXWallet,
  [CoinId.ADA]: ADAWallet,
  [CoinId.LTC]: LTCWallet,
  [CoinId.DOGE]: DOGEWallet,
  [CoinId.BNB]: BNBWallet,
  [CoinId.DAI]: DAIWallet,
  [CoinId.USDC]: USDCWallet,
  [CoinId.USDT]: USDTWallet,
  [CoinId.XMR]: XMRWallet,
  [CoinId.XRP]: XRPWallet,
  [CoinId.BUSD]: BUSDWallet,
} satisfies Record<CoinId, CryptoAccount[]>;

export default ArashCryptoWallets;
