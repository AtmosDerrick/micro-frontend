import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircle,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

function LoanDetailPage() {
  const loanRequest = {
    amountRequested: 10000,
    name: "John Doe",
    amountApproved: 8000,
    location: "New York",
    profileImage:
      "https://i.pinimg.com/564x/90/73/76/907376044c556d64e38003b5f2ab881c.jpg",
    requestDate: "2024-03-06",
    loanPurpose: "Home renovation",
  };
  return (
    <div className="flex justify-between mx-4">
      <Sidebar page="loan" />
      <div className="w-full">
        <Navbar />
        <div>
          <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs mt-8">
            <h4>Loan </h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>Review Loan Request</h4>
          </div>
          <h1 className="text-2xl mt-2 font-bold text-black">
            Review Loan Requests
          </h1>
          <h3 className="text-gray-500 pt-2 text-sm font-normal">
            Customer has been pre-approved for Ghc{loanRequest.amountRequested}
          </h3>
        </div>

        <div className="mt-12 flex justify-between ">
          <div className="w-full">
            <h4 className="text-gray-500 pt-2 text-sm font-normal">
              Requested for Ghc{loanRequest.amountRequested}
            </h4>
            <h2 className="text-lg font-semibold mt-1 text-black">
              Alexandra Daddario
            </h2>
            <h6 className="text-xs font-medium text-gray-400">
              {loanRequest.location}
            </h6>
          </div>
          <div className=" w-full flex justify-end">
            <img
              src={loanRequest.profileImage}
              className="h-[12rem] w-[22rem] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-bold text-black">Loan Details</h3>
          <div className="grid grid-cols-2 mt-4">
            <div className="text-gray-500 font-medium text-base">
              Request Date
            </div>
            <div className="text-gray-500 font-medium text-lg text-right">
              Oct 1, 2022
            </div>

            <div className="text-gray-500 font-medium text-base mt-2">
              Loan Amount
            </div>
            <div className="text-gray-500 font-medium text-base text-right mt-2">
              {loanRequest.amountApproved}
            </div>
            <div className="text-gray-500 font-medium text-base mt-2">
              Loan Purpose
            </div>
            <div className="text-gray-500 font-medium text-base text-right mt-2">
              {loanRequest.loanPurpose}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-2xl mt-2 font-bold text-black">History</h1>
          <div className="mt-4 flex justify-start gap-2 items-center">
            <div className="w-8 h-8 flex justify-center items-center rounded-md bg-gray-100">
              <FontAwesomeIcon icon={faCreditCard} className="p-2 text-black" />
            </div>
            <div>
              <h2 className="text-sm font-semibold">Loan Request</h2>
              <div className="flex justify-start text-xs pt-[1px] gap-2 items-center text-gray-600">
                <h6>Oct 1, 2022</h6>
                <FontAwesomeIcon icon={faCircle} className="text-xs " />
                <h6 className="text-xs font-semibold">Requested</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl mt-2 font-bold text-black">Actions</h1>
          <div className="mt-2 flex justify-end gap-8">
            <div>
              <button className="py-2 px-4 bg-gray-200 text-base font-medium text-black rounded-md shadow-sm">
                Decline
              </button>
            </div>

            <div>
              <button className="py-2 px-4 bg-gray-200 text-base font-medium text-black rounded-md shadow-sm">
                Suggest different amount
              </button>
            </div>
            <div>
              <button className="py-2 px-4 bg-blue-500 text-base font-medium text-white rounded-md shadow-sm">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanDetailPage;
