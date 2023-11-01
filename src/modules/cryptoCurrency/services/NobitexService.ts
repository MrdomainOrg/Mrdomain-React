import axios from 'axios';
import { type MarketStatsData } from '../type/CryptoTypes';

const apiClient = axios.create({
  baseURL: 'https://api.nobitex.ir',
  headers: {
    'Content-type': 'application/json'
  }
});

const findUsdtTiRialPrice = async (): Promise<MarketStatsData> => {
  const response = await apiClient.get<MarketStatsData>('/market/stats?srcCurrency=usdt&dstCurrency=rls');
  return response.data;
};

const NobitexService = {
  findUsdtTiRialPrice
};

export default NobitexService;
