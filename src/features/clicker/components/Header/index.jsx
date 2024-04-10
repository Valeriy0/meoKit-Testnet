import React from "react";

export const Header = ({children, minHeight}) => {
  return (
    <div className={`relative flex flex-col items-center justify-center h-full ${minHeight} rounded-b-[30px] overflow-hidden z-[111]`}>
      {children}
      <img className="absolute top-0" src="/clicker/boost/header/stars.png"/>
      <img className="absolute h-full w-full" src="/clicker/boost/header/shadow.png"/>
    </div> 
  )
}