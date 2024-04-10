import React from "react";

export const NftSkins = () => {

    const skinsList = [
        {
            title: 'Iron man',
            img: 'iron.png',
        },
        {
            title: 'Platinum Rare',
            img: 'platinum.png',
        },
        {
            title: 'Silver Stage',
            img: 'silver.png',
        },
        {
            title: 'Pinkomania',
            img: 'pink.png',
        }
    ]
    return (
        <div className="flex flex-col px-4 space-y-[18px] h-full pb-4 z-[1]">
            <span className="text-xl text-white ">Buy NFT Skins</span>
            <div className="flex flex-col rounded-[20px] p-2.5 bg-white-100 h-full space-y-2.5 backdrop-blur-small">
            {skinsList?.map((item, itemIndex) => {
                    return (
                        <button className="flex justify-between items-center w-full" key={itemIndex}>
                            <div className="flex space-x-2.5">
                                <div className="flex items-center justify-center bg-white-100 w-[70px] h-[70px] rounded-[10px] ">
                                    <img src={`/clicker/boost/nft/${item?.img}`} />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <span className="text-white-600 text-lg">{item?.title}</span>
                                    <div className="flex items-center space-x-1">
                                        <img className="w-4 h-4" src="/clicker/boost/nft/frgx.png" />
                                        <span className="text-sm text-white font-light">10,000</span>
                                        <span className="text-sm text-white opacity-30">FRGX</span>
                                    </div>
                                </div>
                            </div>
                            <img className="pr-2" src="/clicker/boost/boosters/arrow.svg" />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}