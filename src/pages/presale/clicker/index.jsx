import React from "react";
import { BaseLayout } from "../../../layouts/BaseLayout";
import { BuyBlock } from "../../../features/presale/clicker/BuyBlock";
import { About } from "../../../features/presale/clicker/About";
import { Reflink } from "../../../features/presale/clicker/Reflink";
import {cardsStartTimers} from "../../../helpers/cards";
import { useCheckNft } from "../../../helpers/hooks/useCheckNft";

export const ClickerPresale = () => {
  const { checkNft, nftList, isAllowReflink } = useCheckNft();

  console.log(nftList);

  const wearList = [0,0,0,0];

  return (
    <BaseLayout parentStyle='space-y-[60px] sm:space-y-6 '>
      <div className="max-w-[1224px] w-full flex items-center justify-between text-left w-full">
        <span className="poppins text-[40px] font-semibold sm:text-[24px]">MEO NFT Interplanet Kit</span>
        <Reflink checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} wrapperStyle="sm:hidden" />
      </div>
      <div className="relative flex-1 flex items-center justify-center w-full">
        {/* <div className="bg-white-50 backdrop-blur-2xl rounded-[16px] p-[5px] space-x-[5px] flex absolute top-[-75px] left-1/2 -translate-x-1/2 w-[225px]">
          {wearList.map((item, itemIndex) => {
            return (
              <div className="flex items-center justify-center ">
                {!!item ? <img src={`/icons/presale/${itemIndex+1}-active.svg`} alt="" /> : <img src={`/icons/presale/${itemIndex+1}-disable.svg`} alt="" />}
              </div>
            )
          })}
        </div> */}
        <BuyBlock checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} />
        </div>
      <About />
    </BaseLayout>
  )
}