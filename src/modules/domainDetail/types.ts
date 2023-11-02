export interface OldDomainDetailTypeResponse {
  data: {
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
  };
  code: number;
  message: string;
  totalPage: number | null;
  totalElement: number | null;
}
