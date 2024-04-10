import { BigNumber } from "@ethersproject/bignumber";

export const CONTRACT_NAMES = {
  SCLIX: "SClix",
  SCLIX_SALE: "SClixSale",
};

export const DEFAULT_GAS_LIMIT = BigNumber.from(2000000);

export const ADD_CHAIN_ETHS_PARAMS = {
  56: {
    chainName: "Binance Smart Chain",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
    chainId: "0x38",
  },
  97: {
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-2-s3.binance.org:8545"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
    chainId: "0x61",
  },
};