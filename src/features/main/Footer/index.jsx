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
      url: 'https://t.me/meoworldgame',
      icon: '/icons/social/telegram.svg',
    },
    {
      title: 'twitter',
      url: 'https://x.com/meoworldgame',
      icon: '/icons/social/twitter.svg',
    },
    {
      title: 'youtube',
      url: 'https://youtube.com/@meoworldgame',
      icon: '/icons/social/youtube.svg',
    },
  ]

  return (
    <footer className="flex flex-col max-w-[1224px] w-full pb-10 pt-[165px] px-4 sm:pt-[70px]">
      <div className="flex justify-between w-full sm:flex-col sm:justify-center sm:items-center">
        <img className="max-h-[24px] h-full sm:max-h-full sm:max-w-[50%] sm:order-2 sm:mt-6" src="/main/logoMeo.png" alt="" />
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