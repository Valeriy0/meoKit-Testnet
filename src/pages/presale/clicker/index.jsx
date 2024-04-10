import React from "react";
import { BaseLayout } from "../../../layouts/BaseLayout";
import { BuyBlock } from "../../../features/presale/clicker/BuyBlock";
import { About } from "../../../features/presale/clicker/About";
import { Reflink } from "../../../features/presale/clicker/Reflink";
import {cardsTimers} from "../../../helpers/cards";
import { useCheckNft } from "../../../helpers/hooks/useCheckNft";

export const ClickerPresale = () => {
  const isAnySet = cardsTimers.some(card => !!card.startTime);

  const { checkNft, nftList, isAllowReflink } = useCheckNft();

  return (
    <BaseLayout parentStyle='space-y-[60px] sm:space-y-6 '>
      <div className="max-w-[1224px] w-full flex items-center justify-between text-left w-full">
        <span className="poppins text-[40px] font-semibold sm:text-[24px]">CLIX NFT Sale of the Day</span>
        <Reflink checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} wrapperStyle="sm:hidden" />
      </div>
        {isAnySet && (
          <BuyBlock checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} />
        )}
      <About />
    </BaseLayout>
  )
}