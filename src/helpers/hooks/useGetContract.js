import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { CONTRACT_NAMES } from "../constants";
import config from "../config";

export const useGetContract = () => {
  const { account, provider } = useWeb3React();

  const types = {
    [CONTRACT_NAMES.SCLIX]: [
      config.nftAddress,
      config.nftAbi,
    ],
    [CONTRACT_NAMES.SCLIX_SALE]: [
      config.nftSaleAddress,
      config.nftSaleAbi,
    ],
  };

  const getContract = type => {
    return new Promise(function(resolve, rejected) {
      if (types[type] && provider) {
        const contract = new Contract(
          ...types[type],
          provider?.getSigner(account).connectUnchecked() || provider
        );

        resolve(contract);
      } else {
        rejected("error init contract: " + type);
      }
    });
  };
  return {
    getContract,
  };
};
