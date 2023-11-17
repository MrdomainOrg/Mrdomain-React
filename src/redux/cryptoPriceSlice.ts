import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface CryptoPriceState {
  symbol: string;
  isClosed: boolean;
  bestSell: number;
  bestBuy: number;
  volumeSrc: number;
  volumeDst: number;
  latest: number;
  dayLow: number;
  dayHigh: number;
  dayOpen: number;
  dayClose: number;
  dayChange: number;
}

const initialState: { [symbol: string]: CryptoPriceState } = {};

const cryptoPriceSlice = createSlice({
  name: 'cryptoPrices',
  initialState,
  reducers: {
    addCryptoPrice: (state, action: PayloadAction<CryptoPriceState>) => {
      const { symbol } = action.payload;
      state[symbol] = action.payload;
    },
    updateCryptoPrice: (
      state,
      action: PayloadAction<{ symbol: string; newPrice: CryptoPriceState }>,
    ) => {
      const { symbol, newPrice } = action.payload;
      state[symbol] = newPrice;
    },
  },
});

export const { addCryptoPrice, updateCryptoPrice } = cryptoPriceSlice.actions;

export const selectCryptoPrices = (state: RootState) => state.cryptoPrices;

export default cryptoPriceSlice.reducer;
