import { combineReducers } from '@reduxjs/toolkit';
import usdtPriceReducer from './usdtPriceSlice';

const rootReducer = combineReducers({
  usdtPrice: usdtPriceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
