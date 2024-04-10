import React from "react";
import { useDeactivationWallet } from "../../../helpers/hooks/useDeactivationWallet";
import { Modal } from "../../Modal";
import { Reflink } from "../../../features/presale/clicker/Reflink";
import { useCheckNft } from "../../../helpers/hooks/useCheckNft";

export const WalletModal = ({ openedModal, onClose }) => {

  const { checkNft, nftList, isAllowReflink } = useCheckNft();

  const { deactivationWallet } = useDeactivationWallet();

  const clickToDeactivate = () => {
    deactivationWallet();
    onClose();
  }

  return (
      <Modal  isOpened={openedModal} onClose={onClose}>
        <div className="flex flex-col space-y-5 items-center justify-center sm:justify-between bg-[#141517] border border-[1px] border-white-100 w-[343px] rounded-3xl sm:rounded-none sm:rounded-t-3xl p-6 pt-[42px] sm:w-full sm:min-h-[45vh] mt-auto">
          
          <div className="flex flex-col justify-start w-full space-y-5">
            <div className="flex flex-col items-center text-center space-y-3 w-full">
              <span className="font-poppins text-2xl text-white font-medium">Wallet connected</span>
            </div>
            <div className="flex flex-col items-center space-y-4 w-full py-5">
              <Reflink checkNft={checkNft} nftList={nftList} isAllowReflink={isAllowReflink} wrapperStyle="w-full flex-col space-y-3 text-white !space-x-0" inputStyle="!max-w-auto " withoutShare />
            </div>
          </div>
          <button onClick={() => clickToDeactivate()} className="w-full py-3 px-5 rounded-[16px] border border-white-100 text-white font-semibold"> Disconnect wallet </button>
        </div>
      </Modal>
  );
};
