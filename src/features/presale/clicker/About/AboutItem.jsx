import React from "react";

export const AboutItem = ({ title, grafic, desc }) => {
  return (
    <div className="flex flex-col flex-1 space-y-6">
      <span className="poppins font-semibold text-[40px] leading-[42px] sm:text-xl sm:leading-[26px]">{title}</span>
      {grafic()}
      {desc()}
    </div>
  )
}