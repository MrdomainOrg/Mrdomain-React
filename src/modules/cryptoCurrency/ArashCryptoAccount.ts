import { cryptoDetails } from '../../constants/SiteConfigs';
import {
  type CryptoAccount,
  CryptoNetworkTypeId,
  CoinId,
} from './type/CryptoTypes';

const BTC: CryptoAccount[] = [
  {
    coinName: 'Bitcoin',
    symbol: 'BTC',
    cryptoNetwork: CryptoNetworkTypeId.BTC,
    cryptoAddress: cryptoDetails.btcWalletAddress,
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
  {
    coinName: 'Bitcoin',
    symbol: 'BTC',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
];

const ETH: CryptoAccount[] = [
  {
    coinName: 'Ethereum',
    symbol: 'ETH',
    cryptoNetwork: CryptoNetworkTypeId.ETH,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
  {
    coinName: 'Ethereum',
    symbol: 'ETH',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
];

const usdtTrc20: CryptoAccount = {
  coinName: 'Tether',
  symbol: 'USDT',
  cryptoNetwork: CryptoNetworkTypeId.TRX,
  cryptoAddress: cryptoDetails.trxWalletAddress,
  isActive: true,
  isToken: true,
  isMultiNetwork: true,
};

const usdtPolygon: CryptoAccount = {
  coinName: 'Tether',
  symbol: 'USDT',
  cryptoNetwork: CryptoNetworkTypeId.POLYGON,
  cryptoAddress: cryptoDetails.ethWalletAddress,
  isActive: true,
  isToken: true,
  isMultiNetwork: true,
};

const usdtErc20: CryptoAccount = {
  coinName: 'Tether',
  symbol: 'USDT',
  cryptoNetwork: CryptoNetworkTypeId.ETH,
  cryptoAddress: cryptoDetails.ethWalletAddress,
  isActive: true,
  isToken: true,
  isMultiNetwork: true,
};

const usdtBep20: CryptoAccount = {
  coinName: 'Tether',
  symbol: 'USDT',
  cryptoNetwork: CryptoNetworkTypeId.BSC,
  cryptoAddress: cryptoDetails.ethWalletAddress,
  isActive: true,
  isToken: true,
  isMultiNetwork: true,
};

const USDT: CryptoAccount[] = [usdtTrc20, usdtPolygon, usdtErc20, usdtBep20];

const USDC: CryptoAccount[] = [
  {
    coinName: 'USD Coin',
    symbol: 'USDC',
    cryptoNetwork: CryptoNetworkTypeId.TRX,
    cryptoAddress: cryptoDetails.trxWalletAddress,
    isActive: true,
    isToken: true,
    isMultiNetwork: true,
  },
  {
    coinName: 'USD Coin',
    symbol: 'USDC',
    cryptoNetwork: CryptoNetworkTypeId.ETH,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: true,
    isMultiNetwork: true,
  },
  {
    coinName: 'USD Coin',
    symbol: 'USDC',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: true,
    isMultiNetwork: true,
  },
];

const DAI: CryptoAccount[] = [
  {
    coinName: 'Dai',
    symbol: 'DAI',
    cryptoNetwork: CryptoNetworkTypeId.POLYGON,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: true,
    isMultiNetwork: true,
  },
  {
    coinName: 'Dai',
    symbol: 'DAI',
    cryptoNetwork: CryptoNetworkTypeId.ETH,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: true,
    isMultiNetwork: true,
  },
  {
    coinName: 'Dai',
    symbol: 'DAI',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: true,
    isMultiNetwork: true,
  },
];

const BNB: CryptoAccount[] = [
  {
    coinName: 'Binance coin',
    symbol: 'BNB',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
  {
    coinName: 'Binance coin',
    symbol: 'BNB',
    cryptoNetwork: CryptoNetworkTypeId.BNB,
    cryptoAddress: 'bnb137cxdlxc8ch4mezf0tjk4lwe8vlfqtgjvwv4sr',
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
];

const MATIC: CryptoAccount[] = [
  {
    coinName: 'Matic',
    symbol: 'MATIC',
    cryptoNetwork: CryptoNetworkTypeId.POLYGON,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
  {
    coinName: 'Matic',
    symbol: 'MATIC',
    cryptoNetwork: CryptoNetworkTypeId.ETH,
    cryptoAddress: cryptoDetails.ethWalletAddress,
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
];

const DOGE: CryptoAccount[] = [
  {
    coinName: 'Dogecoin',
    symbol: 'DOGE',
    cryptoNetwork: CryptoNetworkTypeId.DOGE,
    cryptoAddress: 'DHoS7ji9oMCDkS4i7e5XAXurQzwyi7zGjM',
    isActive: true,
    isToken: false,
    isMultiNetwork: false,
  },
];

const LTC: CryptoAccount[] = [
  {
    coinName: 'Litecoin',
    symbol: 'LTC',
    cryptoNetwork: CryptoNetworkTypeId.LTC,
    cryptoAddress: 'Lha38p2oA2Z4kd6XZHzESjWq3YANYHB4gw',
    isActive: true,
    isToken: false,
    isMultiNetwork: false,
  },
];

const ADA: CryptoAccount[] = [
  {
    coinName: 'Cardano',
    symbol: 'ADA',
    cryptoNetwork: CryptoNetworkTypeId.ADA,
    cryptoAddress:
      'addr1qyqjrzft999zudyzvsums80f28sm9svadyklmv6se6kh8zrjm67nslkjnz2zguz5rt8eththp7qqf8yw23xls4uj26ys8ljatn',
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
];

const TRX: CryptoAccount[] = [
  {
    coinName: 'Tron',
    symbol: 'TRX',
    cryptoNetwork: CryptoNetworkTypeId.TRX,
    cryptoAddress: cryptoDetails.trxWalletAddress,
    isActive: true,
    isToken: false,
    isMultiNetwork: true,
  },
];

const XRP: CryptoAccount[] = [
  {
    coinName: 'Ripple',
    symbol: 'XRP',
    cryptoNetwork: CryptoNetworkTypeId.XRP,
    cryptoAddress: 'rDV4ag5zS8vp2DrtMPSGL3Qg35GCHxABj9',
    isActive: true,
    isToken: false,
    isMultiNetwork: false,
  },
];

const XMR: CryptoAccount[] = [
  {
    coinName: 'Ripple',
    symbol: 'XMR',
    cryptoNetwork: CryptoNetworkTypeId.XMR,
    cryptoAddress:
      '48UKULcfQ6G15TYZfDngKQY19zctnruiLjRPYoCiTWhkQr975PansxJDmBEzhGum5TGFRyViGEKE5VNGfK68tBGgUz4npHV',
    isActive: true,
    isToken: false,
    isMultiNetwork: false,
  },
];

const ArashCryptoWallets = {
  [CoinId.BTC]: BTC,
  [CoinId.ETH]: ETH,
  [CoinId.MATIC]: MATIC,
  [CoinId.TRX]: TRX,
  [CoinId.ADA]: ADA,
  [CoinId.LTC]: LTC,
  [CoinId.DOGE]: DOGE,
  [CoinId.BNB]: BNB,
  [CoinId.DAI]: DAI,
  [CoinId.USDC]: USDC,
  [CoinId.USDT]: USDT,
  [CoinId.XMR]: XMR,
  [CoinId.XRP]: XRP,
} satisfies Record<CoinId, CryptoAccount[]>;

export default ArashCryptoWallets;
