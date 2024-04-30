import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { priceConfig } from '../constants/SiteConfigs';
import { RootState } from './store';

export interface minPriceInUsdtState {
  price: number;
  isSet: boolean;
}

// Define the initial state using that type
const initialState: minPriceInUsdtState = {
  price: priceConfig.minimumDomainPriceInUsd,
  isSet: false,
};

export const minPriceInUsdtSlice = createSlice({
  name: 'minPriceInUsdt',
  initialState,
  reducers: {
    setMinPriceInUsdt: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
      state.isSet = true;
    },
  },
});

export const { setMinPriceInUsdt } = minPriceInUsdtSlice.actions;

export const selectMinPriceInUsdtSlice = (state: RootState) =>
  state.minPriceInUsdt;

export default minPriceInUsdtSlice.reducer;
