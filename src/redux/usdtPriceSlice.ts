import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { priceConfig } from '../constants/SiteConfigs';

export interface UsdtPriceState {
  value: number;
}

// Define the initial state using that type
const initialState: UsdtPriceState = {
  value: priceConfig.usdInTomanMinimum,
}

const usdtPriceSlice = createSlice({
  name: 'usdtPrice',
  initialState,
  reducers: {
    setUsdtPrice: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});
