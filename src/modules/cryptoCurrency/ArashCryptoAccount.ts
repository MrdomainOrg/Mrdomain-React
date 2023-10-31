import { type CryptoAccount, CryptoNetworkTypeId } from './type/CryptoTypes';

export const BTC = [
  {
    coinName: 'Bitcoin',
    symbol: 'BTC',
    cryptoNetwork: CryptoNetworkTypeId.BTC,
    cryptoAddress: '1PYRdJdCoxk3B5kd7gg2acTXRZ8ewtyRrR',
    isActive: true,
    isToken: false,
    isMultiNetwork: true
  },
  {
    coinName: 'Bitcoin',
    symbol: 'BTC',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: false,
    isMultiNetwork: true
  }
];

export const ETH = [
  {
    coinName: 'Ethereum',
    symbol: 'ETH',
    cryptoNetwork: CryptoNetworkTypeId.ETH,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: false,
    isMultiNetwork: true
  },
  {
    coinName: 'Ethereum',
    symbol: 'ETH',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: false,
    isMultiNetwork: true
  }
];

export const usdtTrc20: CryptoAccount = {
  coinName: 'Tether',
  symbol: 'USDT',
  cryptoNetwork: CryptoNetworkTypeId.TRX,
  cryptoAddress: 'THCxzRMvnwisHoAaphSxwcByNzNGaZAno5',
  isActive: true,
  isToken: true,
  isMultiNetwork: true
};

export const usdtPolygon: CryptoAccount = {
  coinName: 'Tether',
  symbol: 'USDT',
  cryptoNetwork: CryptoNetworkTypeId.POLYGON,
  cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
  isActive: true,
  isToken: true,
  isMultiNetwork: true
};

export const usdtErc20: CryptoAccount = {
  coinName: 'Tether',
  symbol: 'USDT',
  cryptoNetwork: CryptoNetworkTypeId.ETH,
  cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
  isActive: true,
  isToken: true,
  isMultiNetwork: true
};

export const usdtBep20: CryptoAccount = {
  coinName: 'Tether',
  symbol: 'USDT',
  cryptoNetwork: CryptoNetworkTypeId.BSC,
  cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
  isActive: true,
  isToken: true,
  isMultiNetwork: true
};

export const USDT = [
  usdtTrc20,
  usdtPolygon,
  usdtErc20,
  usdtBep20
];

export const USDC = [
  {
    coinName: 'USD Coin',
    symbol: 'USDC',
    cryptoNetwork: CryptoNetworkTypeId.TRX,
    cryptoAddress: 'THCxzRMvnwisHoAaphSxwcByNzNGaZAno5',
    isActive: true,
    isToken: true,
    isMultiNetwork: true
  },
  {
    coinName: 'USD Coin',
    symbol: 'USDC',
    cryptoNetwork: CryptoNetworkTypeId.ETH,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: true,
    isMultiNetwork: true
  },
  {
    coinName: 'USD Coin',
    symbol: 'USDC',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: true,
    isMultiNetwork: true
  }
];

export const DAI = [
  {
    coinName: 'Dai',
    symbol: 'DAI',
    cryptoNetwork: CryptoNetworkTypeId.POLYGON,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: true,
    isMultiNetwork: true
  },
  {
    coinName: 'Dai',
    symbol: 'DAI',
    cryptoNetwork: CryptoNetworkTypeId.ETH,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: true,
    isMultiNetwork: true
  },
  {
    coinName: 'Dai',
    symbol: 'DAI',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: true,
    isMultiNetwork: true
  }
];

export const BNB = [
  {
    coinName: 'Binance coin',
    symbol: 'BNB',
    cryptoNetwork: CryptoNetworkTypeId.BSC,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: false,
    isMultiNetwork: true
  },
  {
    coinName: 'Binance coin',
    symbol: 'BNB',
    cryptoNetwork: CryptoNetworkTypeId.BNB,
    cryptoAddress: 'bnb137cxdlxc8ch4mezf0tjk4lwe8vlfqtgjvwv4sr',
    isActive: true,
    isToken: false,
    isMultiNetwork: true
  }
];

export const MATIC = [
  {
    coinName: 'Matic',
    symbol: 'MATIC',
    cryptoNetwork: CryptoNetworkTypeId.POLYGON,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: false,
    isMultiNetwork: true
  },
  {
    coinName: 'Matic',
    symbol: 'MATIC',
    cryptoNetwork: CryptoNetworkTypeId.ETH,
    cryptoAddress: '0x06aD7D3FB4de5302f7659aB9455541D3c88786A2',
    isActive: true,
    isToken: false,
    isMultiNetwork: true
  }
];

export const DOGE: CryptoAccount = {
  coinName: 'Dogecoin',
  symbol: 'DOGE',
  cryptoNetwork: CryptoNetworkTypeId.DOGE,
  cryptoAddress: 'DHoS7ji9oMCDkS4i7e5XAXurQzwyi7zGjM',
  isActive: true,
  isToken: false,
  isMultiNetwork: false
};

export const LTC: CryptoAccount = {
  coinName: 'Litecoin',
  symbol: 'LTC',
  cryptoNetwork: CryptoNetworkTypeId.LTC,
  cryptoAddress: 'Lha38p2oA2Z4kd6XZHzESjWq3YANYHB4gw',
  isActive: true,
  isToken: false,
  isMultiNetwork: false
};

export const ADA: CryptoAccount = {
  coinName: 'Cardano',
  symbol: 'ADA',
  cryptoNetwork: CryptoNetworkTypeId.ADA,
  cryptoAddress: 'addr1qyqjrzft999zudyzvsums80f28sm9svadyklmv6se6kh8zrjm67nslkjnz2zguz5rt8eththp7qqf8yw23xls4uj26ys8ljatn',
  isActive: true,
  isToken: false,
  isMultiNetwork: true
};

export const TRX: CryptoAccount = {
  coinName: 'Tron',
  symbol: 'TRX',
  cryptoNetwork: CryptoNetworkTypeId.TRX,
  cryptoAddress: 'THCxzRMvnwisHoAaphSxwcByNzNGaZAno5',
  isActive: true,
  isToken: false,
  isMultiNetwork: true
};
