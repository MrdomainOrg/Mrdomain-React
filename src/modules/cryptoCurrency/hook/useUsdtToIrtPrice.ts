import { useQuery } from 'react-query';
import Axios from 'axios';
import { type MarketStatsData } from '../type/CryptoTypes';
import NobitexService from '../services/NobitexService';

// const {data , isLoading,isError,error,refetch} = useQuery<MarketStatsData, Error>('cat', () => {
//   return axios.get('https://api.nobitex.ir/market/stats?srcCurrency=usdt&dstCurrency=rls')}
// )

export const useUsdtToIrtPrice = (): unknown[] => {
  const { data, isLoading, isError, error } = useQuery('marketStats', NobitexService.findUsdtTiRialPrice);
  return [data, isLoading, isError, error];
};
