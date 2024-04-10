import React, { useState } from "react";

export const ProjectLaunch = () => {

  const stepsList = [
    {
        title: <span>Space <br/> Ambassador Program</span>,
        desc: 'Create daily tasks and activities with rewards in FRGX. Promote the project and raise awareness.',
        bg: 'space_ambassador_bg ',
    },
    {
        title: <span>Become <br/> a Community</span>,
        desc: 'Engage new users in your project through collaboration with FRGX Space. Make a deposit in FRGX and get project moderation and income in FRGX tokens.',
        bg: 'bg-[#121314]',
    },
    {
        title: <span>Space <br/> for your Projects</span>,
        desc: 'Create your projects from scratch or list your existing projects to unlock access to limitless possibilities.',
        bg: 'bg-[#1F2225]',
    },
    {
        title: <span className="text-black">Launch <br/> your Own Matrix</span>,
        desc: <span className="text-black">Create your own matrix with rewards for recruiting new members, and we will take care of the technical aspects.</span>,
        bg: 'bg-[#E5EDF2]',
    },
  ]


  return (
    <div className="flex flex-col space-y-[60px] max-w-[1224px] pt-10 sm:max-w-full sm:space-y-6">
      <span className="text-[40px] poppins font-medium sm:text-2xl sm:text-center">Launch Your Project <br className="hidden sm:flex"/> in Our Space</span>
      <div className="flex space-x-6 sm:space-x-3 sm:overflow-auto">
      {stepsList?.map((item, itemIndex) => {
        return (
        <div className={`flex flex-col py-[30px] px-5 ${item?.bg} rounded-[30px] w-full h-full min-h-[520px] sm:min-w-[311px] sm:min-h-[440px] space-y-3`} key={itemIndex}>
            <span className="text-xl text-white font-medium poppins sm:text-lg ">
                {item?.title}
            </span>
            <span className="text-white-800 font-light sm:text-sm">
                {item?.desc}
            </span>
        </div>
            )
        })}

      </div>
    </div>
  )
}