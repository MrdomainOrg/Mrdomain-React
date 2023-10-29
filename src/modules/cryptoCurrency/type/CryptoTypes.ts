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
