import React, { useEffect } from "react";
import { AboutItem } from "./AboutItem";

export const About = () => {

  const list = [
    {
      title: 'Interplanet Tournament',
      grafic: () => {
        return (
          <img className="rounded-[16px]" src='/presale/2.webp' />
        )
      },
      desc: () => {
        return (
          <div className="flex flex-col text-white-600 font-light space-y-1.5 sm:text-sm">
            <span>All Cougars get ready for the first Interplanet Tournament!</span>
            <span>You will compete with each other for the first time, and the strongest will be the one who gets the most MEnergy!</span>
            <span>Put on one of the Interplanet Suits that will boost your abilities to an incredible level and go ahead to craft!</span>
            <span>Leaderboards with daily rewards will appear on meo.world </span>
            <a className="hover:underline text-white" href="https://meo.world/docs/meo_interplanet_tournament.pdf" target="_blank">More information at MEO Interplanet Tournament PDF</a>
          </div>
        )
      }
    },
    {
      title: 'About referral program',
      grafic: () => {
        return (
          <img className="rounded-[16px]" src='/presale/1.webp' />
        )
      },
      desc: () => {
        return (
          <div className="flex flex-col text-white-600 font-light space-y-1.5 sm:text-sm">
            <span>MEO Interplanet NFT referral program — invite people and earn BNB every time they buy an NFT sets. </span>
            <span>Share your referral link and get 20% of every purchased NFT in BNB directly to your wallet.</span>
            <span>Send the link to your friends and share it on social media and online. The NFT sale time is limited, so be as active as possible before the start of the Tournament to get more people to join the sale via your link.</span>
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