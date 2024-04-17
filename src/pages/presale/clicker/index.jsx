import React, { useEffect, useState } from "react";
import { BaseLayout } from "../../../layouts/BaseLayout";
import { BuyBlock } from "../../../features/presale/clicker/BuyBlock";
import { About } from "../../../features/presale/clicker/About";
import { Reflink } from "../../../features/presale/clicker/Reflink";
import {cardsStartTimers} from "../../../helpers/cards";
import { useCheckNft } from "../../../helpers/hooks/useCheckNft";

export const ClickerPresale = () => {
  const { checkNft, nftList, isAllowReflink } = useCheckNft();
  const [wearList, setWearList] = useState([0,0,0,0]);

  const updateWearLIST = () => {
    let wearTemp = wearList;
    if (!!nftList[1] || !!nftList[5] || !!nftList[9]) {
      wearTemp.splice(0, 1, 1);
    } else if (!!nftList[2] || !!nftList[6] || !!nftList[10]) {
      wearTemp.splice(1, 1, 1);
    } else if (!!nftList[3] || !!nftList[7] || !!nftList[11]) {
      wearTemp.splice(2, 1, 1);
    } else if (!!nftList[4] || !!nftList[8] || !!nftList[12]) {
      wearTemp.splice(3, 1, 1);
    }
    setWearList(wearTemp);
  }

  useEffect(() => {
    updateWearLIST();
  }, [nftList])

  console.log(wearList, 123);

  return (
    <BaseLayout parentStyle='space-y-[85px] sm:space-y-12 '>
      <div className="max-w-[1224px] w-full flex items-center justify-between text-left w-full">
        <span className="poppins text-[40px] font-semibold sm:text-[24px]">MEO NFT Interplanet Kit</span>
        <Reflink checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} wrapperStyle="sm:hidden" />
      </div>
      <div className="relative flex-1 flex items-center justify-center w-full">
        <div className="bg-white-50 backdrop-blur-2xl rounded-[16px] p-[5px] space-x-[5px] flex absolute top-[-75px] sm:top-[-35px] z-[3] left-1/2 -translate-x-1/2 w-[225px] shadow-2xl">
          {wearList.map((item, itemIndex) => {
            return (
              <div className="flex items-center justify-center ">
                {!!item ? <img src={`/icons/presale/${itemIndex+1}-active.svg`} alt="" /> : <img src={`/icons/presale/${itemIndex+1}-disable.svg`} alt="" />}
              </div>
            )
          })}
        </div>
        <BuyBlock checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} />
        </div>
      <About />
    </BaseLayout>
  )
}