import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TransactionHistory({ closeModal }) {
  return (
    <div className="px-2">
      <div className="flex justify-between items-center border-b-[1px] py-2 border-b-gray-400 px-4">
        <div className="text-xl font-medium">Transaction History</div>
        <button onClick={closeModal}>
          <FontAwesomeIcon icon={faClose} className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default TransactionHistory;
