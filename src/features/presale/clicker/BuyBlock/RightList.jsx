import React, {useEffect, useRef, useState} from "react";
import { cardsStartTimers, cardsEndTimer } from "../../../../helpers/cards";
import { fromUnixTime, format } from 'date-fns';
import { convernImgUrl } from "../../../../helpers/format";
import {Timer} from "../../../../components/Timer";


export const RightList = ({ currentNumCard, fecthingNftList, setCurrentNumCard, nftList }) => {
  const ref = useRef(null);
  const [elementWithTimerIndex, setElementWithTimerIndex] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const refList = ref.current?.childNodes;
    const lastItems = refList?.length - 1 || 0;
    let activeItemIndex = null;
    refList.forEach((item, index) => {
      if (item.classList.contains('isActive')) activeItemIndex = index
    })
    const childHeight = refList?.[lastItems - activeItemIndex]?.getBoundingClientRect?.()?.height;
    if (activeItemIndex === null) {
      setElementWithTimerIndex(0)
    } else if (activeItemIndex <= refList.length - 1) {
      setElementWithTimerIndex(activeItemIndex + 1)
    }

    const timer = setTimeout(() => {
      const scrollTo = (refList.length * childHeight) - ((refList.length - activeItemIndex) * childHeight);
      ref.current?.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }, 0);


    return () => clearTimeout(timer)
  }, [isStarted]);

  return (
    <div ref={ref} className="custom-scroll pr-1 w-[300px] flex flex-col overflow-auto space-y-2.5 pt-5 pb-5 sm:w-full sm:max-h-[380px] sm:pt- sm:border sm:border-white-100 sm:p-4 sm:rounded-[24px]">
        {fecthingNftList.map((item,itemIndex) => {
          const currentCountNft = !!nftList[fecthingNftList[itemIndex]?.id - 1] && nftList[fecthingNftList[itemIndex]?.id - 1];
          const now = Date.now() / 1000
          const isActive = cardsStartTimers[itemIndex] <= now && now <= cardsEndTimer;
          const isBeforeActive =  now > cardsEndTimer;
          const isNeedTimer = elementWithTimerIndex === itemIndex && now <= cardsStartTimers[itemIndex];

          const isChoosedCard = currentNumCard === itemIndex ? isActive ? '!border-[#1BFF5B] isActive' : '!border-white' : '';

          return (
            <div onClick={() => setCurrentNumCard(itemIndex)} className={`relative cursor-pointer flex items-center bg-black-400 rounded-[20px] space-x-10 p-2.5 border border-transparent ${isChoosedCard}`} key={itemIndex}>
             <img className="rounded-[10px] h-[80px]" src={convernImgUrl(item?.id)} alt="" />
              <div className="flex flex-col space-y-3 sm:space-y-1">
                {isActive ? (
                  <span className="text-[#1BFF5B] font-bold text-xl">Available Now</span>
                ) : (
                  <>
                    <span className="text-sm text-white-300 sm:text-xs">{isBeforeActive ? 'Sold Out' : 'Date Sale'}</span>
                    <span className="text-xl font-semibold text-white-300 sm:text-base">{format(fromUnixTime(cardsStartTimers[itemIndex]), "dd MMMM")}</span>
                  </>
                )}
              </div>
              {currentCountNft && <div
                className={`bg-white-100 border border-white-50 absolute top-2.5 right-2.5 text-white px-2.5 py-0.5 rounded-full flex items-center justify-center !ml-0 font-medium sm:text-sm ${isActive ? '!text-[#1BFF5B]' : ''}`}>x{currentCountNft}</div>}

            </div>
          )
        })}
      </div>
  )
}