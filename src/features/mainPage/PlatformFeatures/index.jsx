import React from "react";

export const PlatformFeatures = () => {
    const featuresList = [ 
        {
            icon: 'fairLaunch',
            title: 'Fair Launch',
            desc: 'Transparent conditions and equal opportunities without any whitelists, backdoors, or tokens held by owners. All tokens belong to the community. Every purchased token pumps the price.',
        },
        {
            icon: 'liquidityPool',
            title: 'Liquidity pool and token burning',
            desc: 'A liquidity pool and allocating a part of the tokens to be burned will ensure stable growth of the token price without sharp drops.',
        },
        {
            icon: 'security',
            title: 'Security and Protection',
            desc: 'Industry professionals provide extra security measures, such as security audit, contract verification, liquidity pool lock and protection, listing on DEX/CEX exchanges, and anti-bot solutions.',
        },
    ]
    return (
        <div className="flex justify-between w-full space-x-6 max-w-[1224px] pt-10 sm:flex-col sm:space-x-0 sm:space-y-6">
            {featuresList?.map((item, itemIndex) => {
                return (
                    <div className="bg-[#121314] space-y-6 rounded-[30px] w-full px-10 py-[30px] sm:px-4 sm:py-6" key={itemIndex}>
                        <img src={`/mainPage/PlatformFeatures/${item?.icon}.svg`} />
                        <div className="flex flex-col space-y-3">
                            <span className="text-xl text-white poppins font-medium sm:text-lg">{item?.title}</span>
                            <span className="text-white-800 font-light sm:text-sm">{item?.desc}</span>
                        </div>
                    </div>
                )
                })}   
        </div>
    )
}