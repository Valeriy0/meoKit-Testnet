import React from "react";

export const ProjectList = () => {

  const bgClixWindow = {
    backgroundImage: `url('/mainPage/ProjectList/clixGame/bg.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  };
  return (
    <div className="flex flex-col space-y-[60px] max-w-[1224px] sm:w-full sm:space-y-6 sm:max-w-full">
      <span className="text-[40px] poppins font-medium sm:text-2xl sm:text-center">Projects on the <br className="hidden sm:flex"/> FRGX Space</span>
      <div className="flex space-x-6 sm:space-x-3 sm:overflow-auto sm:w-full ">
        <div className="flex justify-between h-[420px] bg-[#6640FF] w-full rounded-[30px] p-10 sm:flex-col-reverse sm:h-full sm:p-0 sm:px-4 sm:pb-12 sm:rounded-3xl sm:min-w-[311px] sm:min-h-[590px] relative">
          <div className="flex flex-col justify-end space-y-[30px]">
            <div className="flex flex-col space-y-3 sm:items-center ">
              <span className="text-[32px] font-bold text-white poppins leading-none sm:text-xl sm:text-center">MEO WORLD <br className="sm:hidden"/> P2E Game</span>
              <span className="text-white-800 font-ligth sm:text-sm sm:text-center sm:max-w-[279px]">MEO WORLD is a mobile game with an NFT battle pass and a P2E coin. Collect Cougars, upgrade them, compete with other players, and earn crypto!</span>
            </div>
            <button className="bg-white rounded-2xl px-5 py-3 w-fit sm:w-full">
              <span className="text-[#5334CC] font-semibold">Explore MEO World</span>
            </button>
          </div>
          <img className="sm:absolute sm:top-0 sm:left-1/2  sm:-translate-x-1/2" src="/mainPage/ProjectList/meoWorld/meoWorld.png"/>
        </div>
        <div style={bgClixWindow} className="relative flex justify-between h-[420px] bg-[#0F1011] w-full rounded-[30px] sm:flex-col sm:h-full sm:rounded-3xl sm:min-w-[311px] sm:min-h-[590px] sm:overflow-hidden">
          <div className="flex flex-col justify-end space-y-[30px] p-10  sm:p-0 sm:px-4 sm:pt-12">
            <div className="flex flex-col sm:items-center">
              <span className="text-[32px] font-bold text-white poppins sm:text-xl sm:text-center">CLIX GAME</span>
              <span className="text-white-800 font-ligth sm:text-sm sm:text-center sm:max-w-[279px] ">CLIX is a mobile game where you can earn tokens by tapping. Get referral rewards, activate boosts and autoclickers, open lootboxes and get rewards in FRGX!</span>
            </div>
            <button className="bg-white rounded-2xl px-5 py-3 w-fit sm:w-full">
              <span className="text-[#EAA812] font-semibold">Explore CLIX</span>
            </button>
          </div>
            <img className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:-bottom-[20%]" src="/mainPage/ProjectList/clixGame/phone.png"/>
        </div>
      </div>
    </div>
  )
}