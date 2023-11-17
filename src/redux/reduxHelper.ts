import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

// انتخابگر (Selector) برای بررسی آیا قیمت برای یک نماد تنظیم شده است یا نه
const isPriceSet = (symbol: string) =>
  createSelector(
    (state: RootState) => state.cryptoPrices[symbol],
    (price) => !!price,
  );

export default isPriceSet;
