import React from "react"

export const NFTPremiumSkins = () => {
    return (
        <div className="flex flex-col px-4 space-y-[18px] h-full z-[1]">
            <span className="text-xl text-white leading-none">NFT Premium Skins</span>
            <div className="flex flex-col rounded-[20px] p-2.5 bg-white-100 h-full space-y-2.5 backdrop-blur-small">
                        <button className="flex justify-between items-center w-full">
                            <div className="flex space-x-2.5">
                                <div className="flex items-center justify-center bg-white-100 w-[70px] h-[70px] rounded-[10px] ">
                                    <img src={`/clicker/profile/NFTPremiumSkins/NFT.png`} />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <span className="text-white-600 text-lg">FRGX NFT Premium skin</span>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-sm text-white">For everyday Boost</span>
                                    </div>
                                </div>
                            </div>
                            <img className="pr-2" src="/clicker/boost/boosters/arrow.svg" />
                        </button>
            </div>
        </div>
    )
}