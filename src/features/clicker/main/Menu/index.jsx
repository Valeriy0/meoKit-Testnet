import React, { useState } from "react";

export const Menu = ({ energy, isWidth}) => {

   
    const menuList = [
        {
          title: 'Team',
          href: 'team',
        },
        {
          title: 'Earn',
          href: 'earn',
        },
        {
          title: 'Boost',
          href: 'boost',
        },
      ]

      const finalWidth = (energy/5000 * 100);

    return(
        <div className="flex flex-col w-full space-y-2.5 pb-4 z-[10]">
            <div className="flex space-x-2.5 w-full">
                {menuList?.map((item, itemIndex) => {
                    return (
                        <a href={`/clicker/${item?.href}`} className="flex flex-col items-center justify-center bg-white-200 w-full h-[70px] rounded-[20px] space-y-[3px]" key={itemIndex}>
                            <img className="w-[36px] h-[36px]" src={`/clicker/main/menu/${item?.href}.png`}/>
                            <span className="text-xs text-white">{item?.title}</span>
                        </a>
                );
                })}
            </div>
            <div style={{ width: `${finalWidth}%` }} className="flex items-center space-x-2.5 w-full h-[44px] energy_bg rounded-white rounded-[40px] px-5 py-[5px]">
                <img src="/clicker/main/flashIcon.png"/>
                <div className="flex items-center space-x-[5px] whitespace-nowrap">
                    <span className="text-xl text-white font-medium">{energy}</span>
                    <span className="text-xl text-white font-medium opacity-30">/ 5000</span>
                </div>
            </div>
        </div>
    )
}