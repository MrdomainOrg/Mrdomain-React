import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { priceConfig } from '../constants/SiteConfigs';
import { RootState } from './store';

export interface UsdtPriceState {
  price: number;
  isSet: boolean;
}

// Define the initial state using that type
const initialState: UsdtPriceState = {
  price: priceConfig.usdInTomanMinimum,
  isSet: false,
};

export const usdtPriceSlice = createSlice({
  name: 'usdtPrice',
  initialState,
  reducers: {
    setUsdtPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
      state.isSet = true;
    },
  },
});

export const { setUsdtPrice } = usdtPriceSlice.actions;

export const selectUsdtPrice = (state: RootState) => state.usdtPrice;

export default usdtPriceSlice.reducer;
