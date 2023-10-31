export interface CryptoMarketData {
  status: string;
  markets: Record<string, Record<string, number>>;

};

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
};

export interface CryptoGlobalData {
  binance: Record<string, number>;
};

export interface MarketData {
  status: string;
  stats: Record<string, MarketStats>;
  global: CryptoGlobalData;
};

export interface MarketStatsData {
  status: string;
  stats: {
    'usdt-rls': {
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
    };
  };
};

export enum CryptoNetworkId {
  BTC = 'Bitcoin',
  ETH = 'Ethereum',
  BNB = 'Binance Network',
  BSC = 'Binance Smart Chain',
  TRX = 'Tron',
  DOGE = 'Dogecoin',
  LTC = 'Litecoin',
  POLYGON = 'Polygon',
  ADA = 'Cardano'
};

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
  ADA = 'Cardano'
};

export interface CryptoAccount {
  coinName: string;
  symbol: string;
  cryptoNetwork: CryptoNetworkTypeId;
  cryptoAddress: string;
  isActive: boolean;
  isToken: boolean;
  isMultiNetwork: boolean;
};
