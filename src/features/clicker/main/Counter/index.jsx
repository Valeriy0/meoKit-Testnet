
import { React, useState } from 'react';
import { AnimatedCounter } from '../../../../components';


export const Counter = ({ setClick, click }) => {

    
    return (
        <div className="flex flex-col flex-1 items-center space-y-8">
            <div className="flex items-center justify-between space-x-2.5 ">
                <img className="w-[54px] h-[54px]" src="/clicker/main/clicker/whiteClicker.png"/>
                <span className="text-[44px] text-white font-semibold "> 
                    <AnimatedCounter endNum={click} />
                </span>
            </div>
            <button onClick={() => setClick(click + 1)} className="relative flex flex-col items-center justify-center flex-1">
                <img className="max-w-[85%] sm:max-w-[80%]" src="/clicker/main/clicker/whiteClicker.png"/>
                <img className="absolute bottom-[-5%] left-1/2 -translate-x-1/2" src="/clicker/main/shadowUnderClicker.png"/>
            </button>
        </div>
    )
}