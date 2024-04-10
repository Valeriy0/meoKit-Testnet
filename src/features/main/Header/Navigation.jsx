import React from "react";

export const Navigation = ({ menuList }) => {

  return (
    <div className="flex-1 flex justify-center items-center sm:hidden">
      <nav className="flex items-center justify-center border border-white-40 p-1 rounded-2xl">
        {menuList.map((item, itemIndex) => {
          return (
            <a className="px-3.5 py-3 text-white rounded-xl poppins" href={item?.href} key={itemIndex}>
              {item?.title}
            </a>
          )
        })}
      </nav>
    </div>
  )
}