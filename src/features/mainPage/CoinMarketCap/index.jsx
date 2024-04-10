import React, { useState } from "react";

export const CoinMarketCap = () => {

  return (
    <div className="flex justify-between w-full max-w-[1224px] pt-10 sm:flex-col">
      <div className="flex flex-col space-y-6 sm:items-center">
        <span className="poppins text-[40px] text-white font-medium sm:text-2xl sm:text-center">FRGX Finance, the driving <br className="sm:hidden"/> power of FRGX Space</span>
        <span className="text-lg text-white-800 font-light max-w-[520px] sm:text-sm sm:text-center">FRGX Token is a free market token on the BNB Chain blockchain with an open smart contract code and a limited emission. FRGX serves as a utility token through a wide selection of projects within the FRGX Space ecosystem.</span>
        <button className='coin_market_cap px-5 h-[48px] w-[130px] rounded-2xl'>
          <span className="font-semibold">Learn More</span>
        </button>
      </div>
      <div className="rounded-[30px] bg-white">
        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currencyid="9611" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="false" data-volume="true" data-statsticker="true" data-stats="USD"></div>
      </div>
    </div>
  )
}