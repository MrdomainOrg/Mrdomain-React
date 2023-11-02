import { combineReducers } from '@reduxjs/toolkit';
import usdtPriceReducer from './usdtPriceSlice';
import domainDetailsReducer from './domainDetailsSlice';

const rootReducer = combineReducers({
  usdtPrice: usdtPriceReducer,
  domainDetails: domainDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
