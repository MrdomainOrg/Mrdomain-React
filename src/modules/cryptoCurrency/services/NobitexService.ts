/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import { MarketStatsDataMap, type MarketStatsData } from '../type/CryptoTypes';

const apiClient = axios.create({
  baseURL: 'https://api.nobitex.ir',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': true,
  },
  timeout: 60000, // تنظیم timeout به 60 ثانیه
});

const findUsdtToRialPricePromise = async (): Promise<MarketStatsData> => {
  const response = await apiClient.get<MarketStatsData>(
    '/market/stats?srcCurrency=usdt&dstCurrency=rls',
  );
  return response.data;
};

const findCryptoToRialPrice = async (crypto: string): Promise<MarketStatsData> => {
  const response = await apiClient.get<MarketStatsData>(
    `/market/stats?srcCurrency=${crypto}&dstCurrency=rls`,
  );
  return response.data;
};

const findUsdtToRialPrice = async (): Promise<MarketStatsData> => {
  const response = await apiClient.get<MarketStatsData>(
    '/market/stats?srcCurrency=usdt&dstCurrency=rls',
  );
  return response.data;
};

const convertJsonToMarketStatsDataMap = (
  jsonData: string,symbol: string
): MarketStatsData => {
  return marketStatsDataMap;
};

const NobitexService = {
  findUsdtToRialPrice,
  findUsdtToRialPricePromise,
};

export default NobitexService;
