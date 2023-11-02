import { useQuery } from 'react-query';
import NobitexService from '../services/NobitexService';
import { type MarketStatsData } from '../type/CryptoTypes';

// const {data , isLoading,isError,error,refetch} = useQuery<MarketStatsData, Error>('cat', () => {
//   return axios.get('https://api.nobitex.ir/market/stats?srcCurrency=usdt&dstCurrency=rls')}
// )

interface UsdtToIrtPriceData {
  data: MarketStatsData | null | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null | unknown;
}

const useUsdtToIrtPrice = (): UsdtToIrtPriceData => {
  const { data, isLoading, isError, error } = useQuery(
    'marketStats',
    NobitexService.findUsdtTiRialPrice,
  );
  return { data, isLoading, isError, error };
};

export default useUsdtToIrtPrice;
