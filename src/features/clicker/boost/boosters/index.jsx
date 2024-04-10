import React from "react";

export const Boosters = () => {

    const boostersList = [
        {
            title: 'Multitap',
            img: 'multitap.png',
        },
        {
            title: 'Energy Limit',
            img: 'energy.png',
        },
        {
            title: 'Recharging Speed',
            img: 'speed.png',
        },
        {
            title: 'Tap bot',
            img: 'bot.png',
        }
    ]
    return (
        <div className="flex flex-col px-4 space-y-[18px] h-full z-[1]">
            <span className="text-xl text-white ">Boosters</span>
            <div className="flex flex-col rounded-[20px] p-2.5 bg-white-100 h-full space-y-2.5 backdrop-blur-small">
            {boostersList?.map((item, itemIndex) => {
                    return (
                        <button className="flex justify-between items-center w-full" key={itemIndex}>
                            <div className="flex space-x-2.5">
                                <div className="flex items-center justify-center bg-white-100 w-[70px] h-[70px] rounded-[10px] ">
                                    <img src={`/clicker/boost/boosters/${item?.img}`} />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <span className="text-white-600 text-lg">{item?.title}</span>
                                    <div className="flex items-center space-x-1">
                                        <img className="w-4 h-4 " src="/clicker/boost/boosters/frgxPink.png" />
                                        <span className="text-sm text-white font-light">10,000</span>
                                        <img src="/clicker/boost/boosters/x.svg" />
                                        <span className="text-sm text-white opacity-30">1 lvl</span>
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