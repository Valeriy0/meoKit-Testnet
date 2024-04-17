import React, { useMemo } from "react";
import { Modal } from "../../Modal";

export const InfoModal = ({ openedModal, onClose, isAllSet }) => {

  const renderContent = useMemo(() => {
    if (!isAllSet) {
      return {
        img: '/presale/transaction/loading.svg',
        title: 'Incomplete set.',
        desc: 'To be admitted to the Tournament, add the whole set',
      }
    }
    else {
      return {
        img: '/presale/transaction/success.svg',
        title: 'You are equipped and admitted to the MEO Interplanet Tournament.',
      }
    }
  }, [isAllSet]) 

  return (
    <Modal isDisableOnClose isOpened={openedModal} onClose={onClose}>
        <div className="flex flex-col space-y-5 items-center justify-center sm:justify-between bg-[#141517] border border-[1px] border-white-100 w-[343px] rounded-3xl sm:rounded-none sm:rounded-t-3xl p-6 pt-[42px] sm:w-full sm:min-h-[40vh] mt-auto">
          
          <div className="flex flex-col w-full justify-start items-center space-y-5">
            <img className="w-16 h-16" src={renderContent?.img} alt="" />
            <div className="flex flex-col items-center text-center space-y-3 w-full">
              <span className="font-poppins text-2xl text-white font-medium">{renderContent?.title}</span>
              <span className="text-white-600">{renderContent?.desc}</span>
            </div>
          </div>
          <button onClick={() => onClose()} className="w-full py-3 px-5 rounded-[16px] border border-white-100 text-white font-semibold"> Close </button>
        </div>
      </Modal>
  )
}