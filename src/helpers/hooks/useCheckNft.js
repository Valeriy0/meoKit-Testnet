import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useGetContract } from './useGetContract';
import { CONTRACT_NAMES } from '../constants';

export const useCheckNft = () => {
  const { account } = useWeb3React();
  const { getContract} = useGetContract();
  const [isAllowReflink, setIsAllowReflink] = useState(false);
  const [nftList, setNftList] = useState([]);

  const checkNft = async () => {
    try {
      const contract = await getContract(CONTRACT_NAMES.SCLIX);
      const result = await contract.lockedBalanceOfBatch(account);
      if (result) {
        const arr = result.balance.map((item) => {
          return parseInt(item);
        });
        const isAllowRef = !!arr.find(item => item > 0);
        setIsAllowReflink(isAllowRef)
        setNftList(arr);
      }
    } catch (e) {
      console.log(e)
  }
  }

  return {
    nftList,
    isAllowReflink,
    checkNft, 
  };
};
