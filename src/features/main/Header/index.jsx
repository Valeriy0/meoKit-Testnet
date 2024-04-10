import React, { useState, useMemo } from "react";
import { useModal } from "../../../helpers/hooks/useModal";
import { useWeb3React } from "@web3-react/core";
import { ActivateModal } from "../../../components/modals/ActivateModal";
import { WalletModal } from "../../../components/modals/WalletModal";
import { shortenAddress } from "../../../helpers/format";

export const Header = () => {
  const { openedModal, onOpen, onClose } = useModal();
  const { openedModal: openedWalletModal, onOpen: onOpenWallet, onClose: onCloseModal } = useModal();
  const { account } = useWeb3React();

  const infoButton = useMemo(() => {
    if (account) {
      return (
        <button onClick={() => onOpenWallet()} className="flex items-center space-x-2.5 bg-transparent py-2.5 px-5 rounded-[16px] sm:rounded-[13px] bg-white-10 border border-white-300">
          <img className="w-6 h-6" src="/icons/wallet.svg" alt="" />
          <span className="font-semibold">{shortenAddress(account)}</span> 
        </button>
      )
    }
    return (
      <button onClick={() => onOpen()} className="whitespace-nowrap bg-orange py-2.5 px-10 rounded-[16px] sm:rounded-[13px]">Connect wallet</button>
    )
  }, [account])

  return (
    <header className="fixed top-0 bg-[#0D0E0F] flex items-center justify-center w-full py-7 sm:py-4 px-4 z-[111]">
      <div className="w-full max-w-[1224px]  flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start">
          <a href="/">
            <img className="max-h-[23px] h-full sm:max-h-[20px]" src="/main/logoMeo.png" alt="" />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-end">
        {infoButton}
        </div>
      </div>
      <WalletModal onClose={onCloseModal} openedModal={openedWalletModal} />
      <ActivateModal handleCloseModal={onClose} openedModal={openedModal} />
    </header>
  )
}