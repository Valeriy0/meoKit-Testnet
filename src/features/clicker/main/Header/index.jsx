import React from "react";

export const Header = () => {
    return(
        <div className="relative flex w-full space-x-4 z-[10]">
            <div className="flex p-2.5 bg-white-100 w-full h-[70px] rounded-[20px] space-x-2.5">
                <img src="/clicker/main/frgxBanner/frgxLogo.png"/>
                <div className="flex flex-col justify-center space-y-0.5">
                    <img src="/clicker/main/frgxBanner/frgxSpaceLogo.png" />
                    <span className="text-[12px] text-white">Claim your FRGX</span>
                </div>
            </div>
            <a className="flex items-center" href="/clicker/profile">
                <img className="rounded-full" src="/clicker/main/cat.png" />
            </a>
        </div>
    )
}