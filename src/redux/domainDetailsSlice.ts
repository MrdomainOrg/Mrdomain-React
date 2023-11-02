import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { priceConfig } from '../constants/SiteConfigs';

export interface OldDomainDetailsState {
  domainForSaleId: number;
  domainId: number;
  domainName: string;
  domainPart: string;
  domainLength: number;
  tldPart: string;
  domainPriceInToman: number;
  domainPriceInUSD: number;
  persianName?: string;
  visitedCount: number;
  priceType: string;
  usdtToToman?: number | null;
  commentInPersian?: string | null;
  commentInEnglish?: string | null;
  isSet?: boolean;
}

// Define the initial state using that type
const initialState: OldDomainDetailsState = {
  domainForSaleId: 0,
  domainId: 0,
  domainName: '',
  domainPart: '',
  domainLength: 0,
  tldPart: '',
  domainPriceInToman:
    priceConfig.usdInTomanMinimum * priceConfig.minimumDomainPriceInUsd,
  domainPriceInUSD: priceConfig.minimumDomainPriceInUsd,
  persianName: '',
  visitedCount: 1,
  priceType: 'USD',
  usdtToToman: priceConfig.usdInTomanMinimum,
  commentInPersian: '',
  commentInEnglish: '',
  isSet: false,
};

export const domainDetailsSlice = createSlice({
  name: 'domainDetails',
  initialState,
  reducers: {
    setDomainDetails: (state, action: PayloadAction<OldDomainDetailsState>) => {
      state.domainForSaleId = action.payload.domainForSaleId;
      state.domainId = action.payload.domainId;
      state.domainName = action.payload.domainName;
      state.domainPart = action.payload.domainPart;
      state.domainLength = action.payload.domainLength;
      state.tldPart = action.payload.tldPart;
      state.domainPriceInToman = action.payload.domainPriceInToman;
      if (
        action.payload.domainPriceInUSD !== null &&
        action.payload.domainPriceInUSD !== undefined &&
        action.payload.domainPriceInUSD > 0
      ) {
        state.domainPriceInUSD = action.payload.domainPriceInUSD;
      }
      state.persianName = action.payload.persianName;
      state.visitedCount = action.payload.visitedCount;
      state.priceType = action.payload.priceType;
      state.usdtToToman = action.payload.usdtToToman;
      state.commentInPersian = action.payload.commentInPersian;
      state.commentInEnglish = action.payload.commentInEnglish;
      state.isSet = true;
    },
  },
});

export const { setDomainDetails } = domainDetailsSlice.actions;

export const selectDomainDetails = (state: RootState) => state.domainDetails;

export default domainDetailsSlice.reducer;
