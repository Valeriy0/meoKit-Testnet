import React from 'react';


export const BackButton = ({href}) => {
  return (
    <a href={href} className="flex justify-center items-center space-x-2 absolute top-6 left-4 z-[111]">
        <img src="/clicker/backButton/leftArrow.svg"/>
        <span className="text-lg text-white">Back</span>
    </a>
  )
};
