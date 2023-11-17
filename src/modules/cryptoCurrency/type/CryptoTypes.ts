export interface CryptoMarketData {
  status: string;
  markets: Record<string, Record<string, number>>;
}

export interface MarketStats {
  isClosed: boolean;
  bestSell: string;
  bestBuy: string;
  volumeSrc: string;
  volumeDst: string;
  latest: string;
  dayLow: string;
  dayHigh: string;
  dayOpen: string;
  dayClose: string;
  dayChange: string;
}

export interface CryptoGlobalData {
  binance: Record<string, number>;
}

export interface MarketData {
  status: string;
  stats: Record<string, MarketStats>;
  global: CryptoGlobalData;
}

export interface MarketStatsData {
  status: string;
  stats: Record<
    string,
    {
      isClosed: boolean;
      bestSell: string;
      bestBuy: string;
      volumeSrc: string;
      volumeDst: string;
      latest: string;
      dayLow: string;
      dayHigh: string;
      dayOpen: string;
      dayClose: string;
      dayChange: string;
    }
  >;
}

export interface MarketStatsDataMap {
  'usdt-rls': MarketStatsData;
  'btc-rls': MarketStatsData;
  'eth-rls': MarketStatsData;
  'matic-rls': MarketStatsData;
  'bnb-rls': MarketStatsData;
  'ltc-rls': MarketStatsData;
  'xmr-rls': MarketStatsData;
  'xrp-rls': MarketStatsData;
  'doge-rls': MarketStatsData;
  'trx-rls': MarketStatsData;
  'ada-rls': MarketStatsData;
}

export enum CryptoNetworkId {
  BTC = 'Bitcoin',
  ETH = 'Ethereum',
  BNB = 'Binance Network',
  BSC = 'Binance Smart Chain',
  TRX = 'Tron',
  DOGE = 'Dogecoin',
  LTC = 'Litecoin',
  POLYGON = 'Polygon',
  ADA = 'Cardano',
}

export enum CryptoNetworkTypeId {
  BTC = 'BTC',
  ETH = 'ERC20',
  BNB = 'BEP2(BC)',
  BSC = 'BEP20(BSC)',
  TRX = 'TRC20',
  TRON = 'Tron',
  DOGE = 'Dogecoin',
  LTC = 'Litecoin',
  POLYGON = 'Polygon',
  ADA = 'Cardano',
  XRP = 'Ripple',
  XMR = 'Monero',
}

export enum CoinId {
  BTC = 'BTC',
  ETH = 'ETH',
  MATIC = 'MATIC',
  TRX = 'Tron',
  ADA = 'ADA',
  LTC = 'LTC',
  DOGE = 'DOGECOIN',
  BNB = 'BNB',
  DAI = 'DAI',
  USDC = 'USDC',
  USDT = 'USDT',
  BUSD = 'BUSD',
  XMR = 'XMR',
  XRP = 'XRP',
}

export interface CryptoCoin {
  coinISO: string;
  coinName: string;
  persianName: string;
  iamgeUrl: string;
  isActive: boolean;
  isToken: boolean;
  isMultiNetwork: boolean;
  isStableCoin: boolean;
  nobitexTicker?: string;
  nobitexApiUrl?: string;
}

export interface OldCryptoAccount {
  coinName: string;
  symbol: string;
  cryptoNetwork: CryptoNetworkTypeId;
  cryptoAddress: string;
  isActive: boolean;
  isToken: boolean;
  isMultiNetwork: boolean;
}
