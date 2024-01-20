import axios from 'axios';
import { type MarketStatsData } from '../type/CryptoTypes';

const apiClient = axios.create({
  baseURL: 'https://api.nobitex.ir',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': true,
  },
  timeout: 60000,
});

const findUsdtTiRialPricePromise = async (): Promise<MarketStatsData> => {
  const response = await apiClient.get<MarketStatsData>(
    '/market/stats?srcCurrency=usdt&dstCurrency=rls',
  );
  return response.data;
};

const findUsdtTiRialPrice = async (): Promise<MarketStatsData> => {
  const response = await apiClient.get<MarketStatsData>(
    '/market/stats?srcCurrency=usdt&dstCurrency=rls',
  );
  return response.data;
};

const NobitexService = {
  findUsdtTiRialPrice,
  findUsdtTiRialPricePromise,
};

export default NobitexService;
