import React, {useState, useEffect, useMemo, useRef} from "react";
import { useModal } from "../../../../helpers/hooks/useModal";
import { ActivateModal } from "../../../../components/modals/ActivateModal";
import { useWeb3React } from "@web3-react/core";
import { CONTRACT_NAMES } from "../../../../helpers/constants";
import { useGetContract } from "../../../../helpers/hooks/useGetContract";
import { DEFAULT_GAS_LIMIT } from "../../../../helpers/constants";
import {increaseByPercent, toWei} from "../../../../helpers/numbers";
import { Timer } from "../../../../components/Timer";
import { cardsTimers, allNfts } from "../../../../helpers/cards";
import { setCookie, parseCookies } from 'nookies';
import {convernImgUrl, parseErrorToUserReadableMessage} from "../../../../helpers/format";
import { RightList } from "./RightList";
import { CardParamsList } from "./CardParamsList";
import {useCallTransaction} from "../../../../helpers/hooks/useCallTransaction";
import {callNotification} from "../../../../helpers/notification";
import { TransactionModal } from "../../../../components/modals/TransactionModal";
import { isBefore, add } from "date-fns";
import { Reflink } from "../Reflink";

export const BuyBlock = ({ checkNft, nftList, isAllowReflink }) => {
  const { onCallTransaction, transactionInfo } = useCallTransaction()
  const [isLoadingTransaction, setIsLoadingTransactions] = useState(false);

  useEffect(() => {
    if (transactionInfo.hash && transactionInfo?.isWaiting) {
      onOpenTransModal();
    }
  }, [transactionInfo]);

  const indexActive = [...cardsTimers].reduce((result, item, index) => {
    const now = Date.now() / 1000
    if (now < cardsTimers[0].startTime) {
      return result
    }
    else if (now > cardsTimers[cardsTimers.length-1].endTime) {
      return cardsTimers.length - 1
  } else if (now > item.startTime && now < item.endTime) {
      return index
    }
    return result
  }, 0)

  const [currentNumCard, setCurrentNumCard] = useState(indexActive);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false)
  const { openedModal, onOpen, onClose } = useModal();
  const { openedModal: openedTransModal, onOpen: onOpenTransModal, onClose: onCloseTransModal } = useModal();
  const { account } = useWeb3React();
  const { getContract } = useGetContract();

  const [isCheckingRefData, setIsCheckingRefData] = useState(true);
  const [refWallet, setRefWallet] = useState(null);

  const checkReflink = () => {
    const refData = new URL(window.location.toString()).searchParams.get('ref');
    if (refData) {
      setRefWallet(refData);
      setCookie(null, 'ref_meo', refData, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } else {
      setRefWallet(parseCookies()?.['ref_meo'] || '0x0000000000000000000000000000000000000000');
    }

    setIsCheckingRefData(false);
  }

  useEffect(() => {
    checkReflink();
  }, [])

  useEffect(() => {
    if (transactionInfo?.isSuccess) {
      checkNft();
    }
    if (account) {
      checkNft();
    }
  }, [transactionInfo, account]);


  const buyCard = async (id) => {
    if(!isLoadingTransaction) {
      setIsLoadingTransactions(true)
      try {
        const contract = await getContract(CONTRACT_NAMES.SCLIX_SALE);
        let gas = null;
        const priceNft = toWei(fecthingNftList[currentNumCard]?.price);

        const arrayWithIds = [Number(id)];
        const arrayWithAmounts = [1];

        try {
          gas = await contract.estimateGas.buy(refWallet, arrayWithIds, arrayWithAmounts, {
            value: priceNft,
          });
        } catch (e) {
          //
        }

        const result = await contract.buy(refWallet, arrayWithIds, arrayWithAmounts, {
          value: priceNft,
          gasLimit: parseInt(gas) ? increaseByPercent(gas) : DEFAULT_GAS_LIMIT
        });

        onCallTransaction(result)
      } catch (e) {
        callNotification({ type: 'error', message: parseErrorToUserReadableMessage(e) });
      }

      setIsLoadingTransactions(false)
    }
  }

  const [fecthingNftList, setFetchingNftList] = useState(allNfts);


  const renderButton = useMemo(() => {
    if(isFinished) {
      return (
        <button
          disabled={true}
          className={`bg-[#1C1D1E] rounded-[16px] p-5 font-bold sm:text-sm`}
        >
          Sold out
        </button>
      )
    }

    if(!isStarted) {
      return (
        <button
          disabled={true}
          className={`bg-[#1C1D1E] rounded-[16px] p-5 font-bold sm:text-sm`}
        >
          <Timer onComplete={() => setIsStarted(true)} spanClass='text-sm sm:text-xs' time={cardsTimers[currentNumCard]?.startTime} />
        </button>
      )
    }

    return (
      <button
        disabled={isCheckingRefData || isLoadingTransaction}
        onClick={account ? () => buyCard(fecthingNftList[currentNumCard]?.id) : () => onOpen()}
        className={`${isLoadingTransaction ? 'bg-[#1C1D1E]' : account ? 'bg-[#1F86FF]' : 'bg-orange'} rounded-[16px] p-5 font-bold sm:text-sm`}
      >
        {isLoadingTransaction ? 'Loading...' : account ? `Buy Now for ${fecthingNftList[currentNumCard]?.price} BNB` : 'Connect Wallet and Buy'}
      </button>
    )
  }, [currentNumCard, isLoadingTransaction, isFinished, isStarted, account, fecthingNftList])

  const setNextActiveCard = () => {
      setCurrentNumCard(prev => prev + 1);
  }

  const renderTime = useMemo(() => {
    return (
      <Timer onComplete={() => setNextActiveCard()} spanClass='text-sm sm:text-xs' time={cardsTimers[currentNumCard]?.endTime} />
    )
  }, [currentNumCard])

  return (
    <div className="bg-white-50 backdrop-blur-2xl sm:bg-transparent sm:backdrop-blur-none overflow-hidden border border-white-50 px-5 flex justify-between rounded-[40px] sm:rounded-none max-h-[650px] sm:px-0 sm:bg-transparent sm:border-none sm:flex-col sm:justify-start sm:max-h-fit sm:space-y-6 max-w-[1224px] w-full">
      {/* <div className="flex items-center justify-center flex-1 sm:min-h-[400px]">

        <span className="text-2xl text-white-600">Presale closed</span>
      </div> */}
      <div className="py-5 flex items-center justify-center sm:py-0">
        <div className="relative overflow-hidden flex items-center justify-center sm:px-[28px] sm:py-[37px] sm:bg-[#1C1D1E] sm:rounded-[24px]">
          <img className="z-[10] rounded-[16px] w-[400px] sm:w-[90%]" src={convernImgUrl(fecthingNftList[currentNumCard]?.id)} alt="" />
          <img className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full" src="/presale/buyCardBlur.svg" alt="" />
        </div>
      </div>
      <div className="w-[392px] flex flex-col justify-between py-5 sm:py-0 sm:w-full">
        <CardParamsList fecthingNftList={fecthingNftList} currentNumCard={currentNumCard} />
        <div className="space-y-5 flex flex-col sm:space-y-6 sm:order-1 sm:mb-6">
          {renderButton}
          {indexActive === currentNumCard && (
            <div className="flex items-center justify-center space-x-1.5 sm:text-xs">
              <span>Sale ends in</span>
              {renderTime}
            </div>
          )}

        </div>
      </div>

      <Reflink checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} wrapperStyle="hidden sm:w-full sm:flex sm:flex-col sm:space-x-0 sm:space-y-5 sm:py-5" inputStyle={'w-full'} />

      <RightList currentNumCard={currentNumCard} fecthingNftList={fecthingNftList} nftList={nftList} setCurrentNumCard={(number) => {
        const now = Date.now() / 1000

        setCurrentNumCard(number)
        setIsStarted(cardsTimers[number].startTime < now)
        setIsFinished(cardsTimers[number].endTime < now)
      }} />
      <TransactionModal transaction={transactionInfo} openedModal={openedTransModal} onClose={onCloseTransModal} />
      <ActivateModal openedModal={openedModal} handleCloseModal={onClose} />
    </div>
  )
}