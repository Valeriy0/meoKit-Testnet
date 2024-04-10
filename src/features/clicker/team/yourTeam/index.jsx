
import React from "react";

export const YourTeam = () => {
    return (
        <div className="flex flex-col px-4 space-y-[18px] z-[1] pb-4 ">
            <span className="text-xl text-white leading-none">Your Team</span>
            <div className="flex flex-col space-y-3.5 bg-white-100 backdrop-blur-small w-full h-full rounded-[20px] py-2.5 pl-2.5 pr-5">
                <div className="flex items-center justify-between  ">
                    <div className="flex items-center space-x-2.5 ">
                        <img src="/clicker/team/userIcon.png"/>
                        <div className="flex flex-col ">
                            <span className="text-white-600 font-light">Alex</span>
                            <div className="flex items-center space-x-1">
                                <img className="w-4 h-4 " src="/clicker/boost/boosters/frgxPink.png" />
                                <span className="text-white text-sm font-light">1,340,586</span>
                            </div>
                        </div>
                    </div>
                    <span className="text-sm text-[#60F62C]">+10k</span>
                </div>

                <div className="flex items-center justify-between  ">
                    <div className="flex items-center space-x-2.5 ">
                        <img src="/clicker/team/userIcon.png"/>
                        <div className="flex flex-col ">
                            <span className="text-white-600 font-light">Alex</span>
                            <div className="flex items-center space-x-1">
                                <img className="w-4 h-4 " src="/clicker/boost/boosters/frgxPink.png" />
                                <span className="text-white text-sm font-light">1,340,586</span>
                            </div>
                        </div>
                    </div>
                    <span className="text-sm text-[#60F62C]">+10k</span>
                </div>
                
            </div>
        </div>
    )
}