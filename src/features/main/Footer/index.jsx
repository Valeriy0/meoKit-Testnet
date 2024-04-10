import React from "react";

export const Footer = () => {

  const footerNavs = {
    'Website': [
      {
        title: 'frgx.finance',
        href: 'https://frgx.finance/',
      },
      {
        title: 'frgx.space',
        href: 'https://frgx.space/',
      },
    ],
    'Help': [
      {
        title: 'GitBook',
        href: 'https://clix-game.gitbook.io/clix-game/',
      },
    ],
    'Telegram': [
      {
        title: 'FRGX Channel',
        href: 'https://t.me/frgxfinance',
      },
      {
        title: 'FRGX Chat',
        href: 'https://t.me/frgxgroup',
      },
    ],
  }

  const colItem = (col, array) => {
    return array[col].map((item, itemIndex) => {
      return (
        <a className="hover:underline" href={item?.href} target="_blank" key={itemIndex}>{item?.title}</a>
      )
    })
  }

  const socials = [
    {
      title: 'telegram',
      url: 'https://t.me/frgxfinance',
      icon: '/icons/social/telegram.svg',
    },
    {
      title: 'twitter',
      url: 'https://twitter.com/FRGXfinance',
      icon: '/icons/social/twitter.svg',
    },
    {
      title: 'discord',
      url: 'https://discord.gg/frgxfinance',
      icon: '/icons/social/discord.svg',
    },
    // {
    //   title: 'youtube',
    //   url: '/',
    //   icon: '/icons/social/youtube.svg',
    // },
  ]

  return (
    <footer className="flex flex-col max-w-[1224px] w-full pb-10 pt-[165px] px-4 sm:pt-[70px]">
      <div className="flex justify-between w-full sm:flex-col sm:space-y-6">
        {/* <div className="flex flex-col space-y-7 max-w-[360px] w-full sm:max-w-full sm:space-y-6">
          <span className="poppins font-semibold text-2xl sm:text-xl">Subscribe News</span>
          <input className="h-[48px] bg-[#171819] border border-white-10 px-5 py-1 rounded-[16px]" type="email" placeholder="Email" />
        </div> */}
        {Object.keys(footerNavs).map((col, colIndex) => {
          return (
            <div className="flex flex-col space-y-7 sm:space-y-5" key={colIndex}>
              <span className="poppins text-2xl font-semibold sm:text-xl">{col}</span>
              <div className="flex flex-col space-y-2.5 text-white-600">
                {colItem(col, footerNavs)}
              </div>
            </div>
          )
        })}
      </div>
      <hr className="border-t border-[#272829] my-10" />
      <div className="flex justify-between w-full sm:flex-col sm:justify-center">
        <img className="max-h-[24px] h-full sm:max-h-[20px] sm:order-2 sm:mt-6" src="/main/logoMeo.png" alt="" />
        <div className="sm:order-1 flex flex-col justify-center items-center sm:space-y-6 sm:mb-2.5">
          <span className="hidden sm:block poppins text-xl font-semibold">Join us</span>
          <div className="flex items-center justify-center space-x-5">
            {socials.map((item, itemIndex) => {
              return (
                <a className="flex items-center justify-center w-[30px] h-[30px]" href={item?.url} target="_blank" key={itemIndex}>
                  <img src={item?.icon} alt={`social_${item.title}`} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}