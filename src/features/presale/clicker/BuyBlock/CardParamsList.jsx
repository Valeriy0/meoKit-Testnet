import React from "react";

export const CardParamsList = ({ fecthingNftList, currentNumCard }) => {
  const defaultAttrs = [
    {
      "trait_type": "Wear type",
      "value": "??",
    },
    {
      "trait_type": "Energy bonus",
      "value": "??",
    },
  ]

  const paramItem = (item) => {
    switch (item?.type) {
      case 'multitap':
      case 'energy restore':
      case 'energy limit':
        return `level ${item?.value}`;
      case 'price':
        return `${item?.value} BNB`;
      case 'skin':
        return <span className="uppercase">{item?.value}</span>;
      default:
        return item?.value;
    }
}

  return (
    <div className="grid grid-cols-2 gap-2.5 mb-5 sm:mb-0 sm:w-full sm:order-2">
          {(fecthingNftList[currentNumCard]? fecthingNftList[currentNumCard].attributes : defaultAttrs).map((item, itemIndex) => {
            return (
              <div className="flex flex-col justify-between bg-black-400 p-6 space-y-3 rounded-[20px] sm:p-4 sm:space-y-2 sm:w-full" key={itemIndex}>
                <span className="text-white-400 capitalize">{item?.trait_type}</span>
                <div className="font-semibold text-xl leading-[20px]">
                  {paramItem(item)}
                </div>
              </div>
            )
          })}
          {!!fecthingNftList[currentNumCard]?.price && (
            <div className="flex flex-col justify-between bg-black-400 p-6 space-y-3 rounded-[20px] sm:p-4 sm:space-y-2 sm:w-full" >
              <span className="text-white-400 capitalize">Price</span>
              <div className="font-semibold text-xl leading-[20px]">
                {fecthingNftList[currentNumCard]?.price} BNB
              </div>
            </div>
          )}  
        </div>
  )
}