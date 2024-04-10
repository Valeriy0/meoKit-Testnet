import React from "react";

export const Burger = ({ menuList, isOpen, setIsOpen }) => {
  return (
    <div className={`hidden sm:flex absolute top-0 left-0 flex-col space-y-6 w-full h-screen bg-[#0E0F10] p-4 transition ease-in-out duration-500  ${isOpen ? 'left-0' : '-translate-x-[100vw]'}`}>
      <div className="flex items-center justify-between">
        <img className="h-[32px]" src="/main/space-logo.svg" alt="" />
        <button onClick={() => setIsOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-full border border-white-50">
          <img className="h-6 w-6" src="/icons/arrow_right.svg" alt="" />
        </button>
      </div>
      <div className="flex-1 flex flex-col w-full space-y-4">
        {menuList.map((item, itemIndex) => {
          return (
            <a className="poppins text-white text-[32px] leading-[32px] font-semibold w-full" href={item?.href} key={itemIndex}>
              {item?.title}
            </a>
          )
        })}
      </div>
      <div className="flex flex-col">
        <button className="text-sm font-bold text-black bg-white py-5 px-5 rounded-[16px]">Login</button>
        <hr className="border-t border-[#272829] my-6" />
        <div className="flex flex-col items-center space-y-6">
          <span className="poppins text-xl font-semibold">Join us</span>
          <div className="">socials</div>
        </div>
      </div>
    </div>
  )
}