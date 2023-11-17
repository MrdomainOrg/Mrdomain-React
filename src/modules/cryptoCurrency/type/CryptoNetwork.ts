export interface CryptoNetwork {
  networkID: string;
  networkName: string;
  persianName: string;
  active: boolean;
  evm: boolean;
  tokenSupport: boolean;
  tokenStandard?: string;
}

export const BTCNetwork: CryptoNetwork = {
  networkID: 'BTC',
  networkName: 'Bitcoin',
  persianName: 'بیت کوین',
  active: true,
  evm: false,
  tokenSupport: false,
};

export const ETHNetwork: CryptoNetwork = {
  networkID: 'ETH',
  networkName: 'Ethereum',
  persianName: 'اتریوم',
  active: true,
  evm: true,
  tokenSupport: true,
  tokenStandard: 'ERC20',
};

export const TRONNetwork: CryptoNetwork = {
  networkID: 'TRX',
  networkName: 'Tron',
  persianName: 'ترون',
  active: true,
  evm: true,
  tokenSupport: true,
  tokenStandard: 'TRC20',
};

export const PolygonNetwork: CryptoNetwork = {
  networkID: 'MATIC',
  networkName: 'Polygon',
  persianName: 'پلیگان',
  active: true,
  evm: true,
  tokenSupport: true,
  tokenStandard: 'ERC20',
};

export const BSCNetwork: CryptoNetwork = {
  networkID: 'BSC',
  networkName: 'Binance Smart Chain',
  persianName: 'بایننس اسمارت چین',
  active: true,
  evm: true,
  tokenSupport: true,
  tokenStandard: 'BEP20',
};

export const BCNetwork: CryptoNetwork = {
  networkID: 'BC',
  networkName: 'Binance Coin',
  persianName: 'بایننس کوین',
  active: true,
  evm: false,
  tokenSupport: true,
  tokenStandard: 'BEP2',
};

export const XMRNetwork: CryptoNetwork = {
  networkID: 'XMR',
  networkName: 'Monero',
  persianName: 'مونرو',
  active: true,
  evm: false,
  tokenSupport: false,
};

export const ADANetwork: CryptoNetwork = {
  networkID: 'ADA',
  networkName: 'Cardano',
  persianName: 'کاردانو',
  active: true,
  evm: false,
  tokenSupport: true,
  tokenStandard: 'ERC20',
};

export const XRPNetwork: CryptoNetwork = {
  networkID: 'XRP',
  networkName: 'Ripple',
  persianName: 'ریپل',
  active: true,
  evm: false,
  tokenSupport: false,
};

export const DOGENetwork: CryptoNetwork = {
  networkID: 'DOGE',
  networkName: 'Dogecoin',
  persianName: 'دوج کوین',
  active: true,
  evm: false,
  tokenSupport: false,
};

export const LTCNetwork: CryptoNetwork = {
  networkID: 'LTC',
  networkName: 'Litecoin',
  persianName: 'لایت کوین',
  active: true,
  evm: false,
  tokenSupport: false,
};
