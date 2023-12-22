import { useQuery } from 'react-query';
import NobitexService from '../services/NobitexService';

const useOneCryptoPriceFromNobitex = () => {
  const { data, isLoading, isError, error } = useQuery(
    'marketStats',
    NobitexService.findUsdtToRialPricePromise,
  );
  return { data, isLoading, isError, error };
};

export default useOneCryptoPriceFromNobitex;
