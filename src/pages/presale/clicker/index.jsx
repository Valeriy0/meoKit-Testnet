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

  return (
    <BaseLayout parentStyle='space-y-[60px] sm:space-y-6 '>
      <div className="max-w-[1224px] w-full flex items-center justify-between text-left w-full">
        <span className="poppins text-[40px] font-semibold sm:text-[24px]">MEO NFT Interplanet Kit</span>
        <Reflink checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} wrapperStyle="sm:hidden" />
      </div>
      <div className="flex-1 flex items-center justify-center w-full">
        <BuyBlock checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} />
        </div>
      <About />
    </BaseLayout>
  )
}