import React, { useState } from "react";

export const Features = () => {

  const featuresList = [
    {
      img: 'rocket',
      title: 'About Space',
      content: [
        {
          title: 'About FRGX Space',
          desc: 'FRGX Space is a SocialFi ecosystem within the DeFi landscape, offering personal spaces for the launch of new and existing products, equipped with a comprehensive suite of utilities powered by the FRGX token.',
          picture: 'roadmap',
        }
      ],
    },
    {
      img: 'token',
      title: 'FRGX Token',
      content: [
        {
          title: 'FRGX Token',
          desc: '',
          picture: '',
        }
      ],
    },
    {
      img: 'p2e',
      title: 'P2E Solutions',
      content: [
        {
          title: 'P2E Solutions',
          desc: '',
          picture: '',
        }
      ],
    },
    {
      img: 'mySpace',
      title: 'My Space',
      content: [
        {
          title: 'My Space',
          desc: '',
          picture: '',
        }
      ],
    },
    {
      img: 'roadMap',
      title: 'Road Map',
      content: [
        {
          title: 'Get early access to decentralized finance with lightning fast transactions while scaling up with massive audience',
          desc: "The DeFi market is experiencing significant growth. While it's still maturing, there's great opportunity for new products to gain a massive audience quickly",
          picture: 'roadMap',
        }
      ],
    },
  ]

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center bg-[#121314] py-[120px] rounded-[40px] w-full sm:py-8 ">
      <div className="flex flex-col max-w-[1224px] w-full space-y-[60px] sm:space-y-0 sm:max-w-full">
        <span className="text-[40px] poppins font-medium sm:text-2xl sm:text-center">What’s Inside <br className="hidden sm:flex"/> FRGX Space</span>
        <div className="flex space-x-10 bg-[#1C1D1E] border border-[1px] border-white-50 w-full h-[560px] rounded-[30px] py-10 sm:flex-col sm:py-6 sm:h-full sm:space-x-0 sm:px-4 sm:bg-transparent sm:border-none sm:space-y-6 ">

          <div className="flex">
                <div className="flex flex-col items-start w-[260px] sm:w-full sm:flex-row sm:overflow-auto  sm:space-x-3">
                  {featuresList?.map((item, itemIndex) => {
                      const isActive = itemIndex === currentTab;
                      return (
                        <div className="flex w-full  ">
                          <button onClick={() => {setCurrentTab(itemIndex)}} className={`flex space-x-4 pl-10 py-3 sm:pl-0 sm:py-0 w-full sm:items-center sm:justify-center sm:rounded-3xl sm:min-w-[157px] sm:h-[40px] sm:space-x-[10px] sm:border-[1px] sm:border-white-100  ${isActive ? 'bg-[#272829]' : ''}`} key={itemIndex}>
                            <img className="sm:w-6 sm:h-6" src={`/mainPage/Features/${item?.img}.svg`}/>
                            <span className="text-xl text-white poppins sm:text-sm">{item?.title}</span>
                          </button>
                          <div className={`border-[1px] border-[#18B6FA] sm:hidden ${isActive ? 'flex' : 'hidden'}`} />
                        </div>
                      )
                  })}
                </div>
            <div className="border-[1px] border-[#272829] h-full"/>
          </div>

            {featuresList[currentTab].content.map((item, itemIndex) => {
              return (
                <div className="flex w-full justify-beеtwen space-x-10 sm:flex-col sm:space-x-0 sm:space-y-8 sm:bg-[#1C1D1E] sm:border sm:border-[1px] sm:border-white-50 sm:py-6 sm:px-4 sm:rounded-3xl">
                    <div className="flex flex-col space-y-3 " key={itemIndex}>
                      <span className="text-white text-2xl w-[363px] sm:text-lg sm:w-full">
                        {item?.title}
                      </span>
                      <span className="text-xl font-light text-white opacity-60 w-[363px] sm:text-sm sm:w-full">
                        {item?.desc}
                      </span>
                    </div>
                    <div className="sm:w-full">
                      <img src={`/mainPage/Features/${item?.picture}.png`} />
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
   
    </div>
  )
}