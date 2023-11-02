import axios from 'axios';
import { type OldDomainDetailTypeResponse } from '../types';

const apiClient = axios.create({
  baseURL: 'https://oldapi.mrdomain.ir',
  headers: {
    'Content-type': 'application/json',
  },
});

const findOldDomainDetailsPricePromise = async (
  domain: string | undefined,
): Promise<OldDomainDetailTypeResponse> => {
  const response = await apiClient.get<OldDomainDetailTypeResponse>(
    `/publicApi/api/mostImportantCompanyData/getDomainForSaleDetails?domain=${domain}`,
  );
  return response.data;
};

const OldMrdomainPublicService = {
  findOldDomainDetailsPricePromise,
};

export default OldMrdomainPublicService;
