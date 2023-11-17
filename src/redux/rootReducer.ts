import { combineReducers } from '@reduxjs/toolkit';
import usdtPriceReducer from './usdtPriceSlice';
import domainDetailsReducer from './domainDetailsSlice';
import cryptoPricesReducer from './cryptoPriceSlice';

const rootReducer = combineReducers({
  usdtPrice: usdtPriceReducer,
  domainDetails: domainDetailsReducer,
  cryptoPrices: cryptoPricesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
