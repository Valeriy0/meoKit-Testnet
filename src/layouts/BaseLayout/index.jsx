import React from "react";
import { Header } from "../../features/main/Header";
import { Footer } from "../../features/main/Footer";

export const BaseLayout = ({ children, parentStyle = '' }) => {
  return (
    <div className="text-white flex flex-col items-center bg-[#0D0E0F] text-white w-full min-h-screen h-full overflow-auto pt-[115px] sm:pt-[80px]">
      <Header />
      <div className={`flex flex-col flex-1 items-center w-full ${parentStyle} px-4`}>
        {children}
      </div>
      <Footer />
    </div>
  )
}