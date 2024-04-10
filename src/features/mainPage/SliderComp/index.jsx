import React from "react";

export const SliderComp = () => {
  return (
    <div  className="relative flex items-center justify-between w-full py-[74px] px-[80px] bg-[#0F1011] border-[1px] border-white-50 rounded-[30px] overflow-hidden max-w-[1224px] sm:flex-col-reverse sm:max-w-full sm:px-4 sm:py-12">
      <div className="flex flex-col space-y-8 sm:pt-[40px] z-[1]">
        <span className="text-[52px] font-medium leading-[62px] poppins sm:text-[28px] sm:leading-none sm:text-center">FRGX Space: <br className="sm:hidden" /> Where Dreams <br className="sm:hidden" /> Take Flight</span>
        <span className="text-white-800 max-w-[440px] sm:text-sm sm:text-center ">FRGX Space is a SocialFi ecosystem within the DeFi landscape equipped with utilities powered by the FRGX token, offering personal spaces for new and existing products.</span>
        <div className="flex space-x-3">
          <button className="bg-white px-5 h-[56px] rounded-2xl sm:w-full">
            <span className="text-black font-semibold leading-none">Learn More</span>
          </button>
          <button className="bg-white-100 px-5 h-[56px] rounded-2xl">
            <span className="text-white font-semibold leading-none">Login</span>
          </button>
        </div>
      </div>
      <img className="rounded-[20px] z-[1]" src="/mainPage/SliderComp/blueFrgx.png"/>
      <img className="hidden sm:flex absolute h-full w-full z-[0] bottom-0" src="/mainPage/SliderComp/bgMob.png"/>
      <img className="sm:hidden absolute h-full w-full z-[0] left-0" src="/mainPage/SliderComp/bg.png"/>
    </div>
  )
}