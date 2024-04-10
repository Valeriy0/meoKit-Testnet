import React, { useEffect } from "react";
import { AboutItem } from "./AboutItem";

export const About = () => {

  const list = [
    {
      title: 'Invite and Earn BNB',
      grafic: () => {
        return ( 
          <video autoPlay muted loop controls={false} controlsList="nofullscreen" className="rounded-[16px]" src='/presale/inviteAnimation.mp4' />
        )
      },
      desc: () => {
        return (
          <div className="flex flex-col text-white-600 font-light space-y-1.5 sm:text-sm">
            <span>CLIX NFT referral program — invite people and earn BNB every time they buy an NFT Skin</span>
            <span>Share your referral link and get 20% of every purchased NFT Skin in BNB directly to your wallet.</span>
            <span>Send the link to your friends and share it on social media and online. The NFT sale time is limited, so be as active as possible these nine days to get more people to join the sale via your link.</span>
          </div>
        );
      },
    },
    {
      title: 'About CLIX',
      grafic: () => {
        return (
          <img className="rounded-[16px]" src='/presale/about.svg' />
        )
      },
      desc: () => {
        return (
          <div className="flex flex-col text-white-600 font-light space-y-1.5 sm:text-sm">
            <span>CLIX is an online clicker game. Here you can earn CLIX cryptocurrency and exchange it for Loot Boxes, where you can get FRGX tokens, which have real value and are traded on exchangers.</span>
            <span>Before the game is launched, you can buy NFT Skins, which will make the game even more interesting. With them, you will have access to autoclicker, increased energy and its quick recovery, as well as a one-time bonus in CLIX tokens.</span>
            <span>Click not just for the sake of clicking, but for a real chance to get rewards!</span>
          </div>
        )
      }
    },
  ]

  return (
    <div className="flex items-start justify-between w-full space-x-24 sm:flex-col sm:space-x-0 sm:space-y-[32px] max-w-[1224px]">
      {list.map((item, itemIndex) => {
        return <AboutItem {...item} key={itemIndex} />
      })}
    </div>
  )
}