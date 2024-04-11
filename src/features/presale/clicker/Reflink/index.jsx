import React, { useMemo, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { copy } from "../../../../helpers/text";

export const Reflink = ({ checkNft, isAllowReflink, wrapperStyle = '', inputStyle = '' , withoutShare = true }) => {
  const { account } = useWeb3React();
  
  useEffect(() => {
    if (account) { 
      checkNft();
    }
  }, [account])
  
  const refBlock = useMemo(() => {
    if (!isAllowReflink) {
      return (
        <>
          <div className={`sm:text-center font-medium px-5 py-3 bg-[#1C1D1E] rounded-[16px] text-white-300 ${inputStyle}`}>Buy NFT and Get Your Referral Link</div>
        </>
      )
    }
    return (
      <>
          <div className={`whitespace-nowrap max-w-[330px] w-full sm:max-w-full flex items-center justify-between font-medium p-1 pl-3 bg-black-400 backdrop-blur-2xl rounded-[16px] ${inputStyle}`}> 
            <span className="scroll-hidden max-w-[286px] sm:max-w-full w-full overflow-auto"> https://presale.meo.world?ref={account} </span>
            <button onClick={() => copy(`https://presale.meo.world?ref=${account}`)} className="ml-2.5 rounded-[12px] flex-shrink-0 w-10 h-10 bg-purple flex items-center justify-center">
              <img className="w-6 h-6" src="/icons/copy.svg" alt="" />
            </button>
          </div>
          {!withoutShare && (
            <button className="w-[48px] h-[48px] flex-shrink-0 bg-[#1C1D1E] flex items-center justify-center rounded-[16px]">
              <img className="w-6 h-6" src="/icons/share.svg" alt="" />
            </button>
          )}
      </>
    )
  }, [isAllowReflink, withoutShare, wrapperStyle, account])

  return (
    <div className={`flex items-center justify-end space-x-4 ${wrapperStyle}`}>
      <span className="text-xl font-medium poppins">Referral link</span>
      {refBlock}
  </div>  
  )
}