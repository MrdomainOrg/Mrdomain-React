import { combineReducers } from '@reduxjs/toolkit';
import usdtPriceReducer from './usdtPriceSlice';
import minPriceInUsdtReducer from './minPriceInUsdtSlice';
import domainDetailsReducer from './domainDetailsSlice';

const rootReducer = combineReducers({
  usdtPrice: usdtPriceReducer,
  minPriceInUsdt: minPriceInUsdtReducer,
  domainDetails: domainDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
