
import React from "react";

export const ReferalLink = () => {
    return (
        <div className="flex flex-col px-4 space-y-[18px] ">
            <span className="text-xl text-white leading-none">Your Referal Link</span>
            <div className="flex flex-col space-y-3.5">
                <div className="flex items-center justify-between bg-white-100 backdrop-blur-small rounded-[20px] h-[60px] pl-5 pr-2.5 py-2.5">
                    <span className="text-white-300">https//:iwfiijejfefdsvc.tapcoin</span>
                    <button className="flex items-center jsutify-center bg-[#1B68FF] p-2 rounded-[10px]">
                        <img src="/clicker/team/copyIcon.svg"/>
                    </button>
                </div>
                <div className="flex items-center justify-center w-full h-[60px] bg-[#1B68FF] rounded-[20px] ">
                    <span className="text-white ">Invite a New Players</span>
                </div>
            </div>
            <button>
                <span className="text-[#4383FF]">What will I get? </span>
            </button>
        </div>
    )
}