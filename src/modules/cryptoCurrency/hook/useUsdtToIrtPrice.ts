import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Axios from 'axios';
import { type MarketStatsData } from '../type/CryptoTypes';


// const {data , isLoading,isError,error,refetch} = useQuery<MarketStatsData, Error>('cat', () => {
//   return axios.get('https://api.nobitex.ir/market/stats?srcCurrency=usdt&dstCurrency=rls')}
// )

export const useUsdtToIrtPrice = (): unknown[] => {
  const fetchMarketStats = async (): Promise<MarketStatsData> => {
    const response = await Axios.get<MarketStatsData>('https://api.nobitex.ir/market/stats?srcCurrency=usdt&dstCurrency=rls');

    return response.data;
  };
  const { data, isLoading, isError, error } = useQuery('marketStats', fetchMarketStats);
  return [data, isLoading, isError, error];
};
