import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { UserAuth } from "../contextApi/UserContext";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import TransactionHistory from "../components/TransactionHistory";
import UserDetailModal from "../components/UserDetailModal";

function PendingLoanDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser, token, setToken } = UserAuth();
  const handle = useParams();

  const [userDetails, setUserDetails] = useState([]);
  const [buttonPress, setButtonPress] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      height: "80%",
    },
    overlay: {
      backgroundColor: "rgba(128, 128, 128, 0.75)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    setIsLoading(true);
    axios({
      url: "/get_pendinguser/" + handle.id,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUserDetails(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="flex justify-between gap-4">
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {buttonPress === "transaction" ? (
            <TransactionHistory closeModal={closeModal} />
          ) : (
            <UserDetailModal closeModal={closeModal} />
          )}
        </Modal>
      </div>
      <Sidebar page="loan" />

      <div className="w-full px-4">
        <Navbar />

        <div>
          <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
            <h4>Loan </h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>List</h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>Loan Details</h4>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            {
              //   <div className="w-full">
              //   <div className="w-32 h-32 mt-8 ">
              //     <img
              //       src="https://i.pinimg.com/564x/17/f9/5a/17f95a7cd3091e1d5507588f462f2b38.jpg"
              //       className="w-32 h-32 rounded-full"
              //     />
              //   </div>
              // </div>
            }

            <div className="w-full flex justify-end pt-4 gap-4">
              <div>
                <button
                  onClick={() => {
                    setButtonPress("userinfo");
                    console.log(buttonPress, "bbttl");
                    openModal();
                  }}
                  className="border-black border-2 text-black  py-2 px-4 rounded-md hover:opacity-60 text-sm font-semibold"
                >
                  User Info
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setButtonPress("transaction");
                    console.log(buttonPress, "bbtt");
                    openModal();
                  }}
                  className="bg-black text-white  py-2 px-4 rounded-md hover:opacity-60 text-sm font-semibold"
                >
                  Transaction History
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3">
            <div className="w-full">
              <div className="">
                <h4 className="text-sm font-normal text-gray-600">
                  Transaction ID
                </h4>
                <h2 className="text-sm font-medium text-black">12124</h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Account Number
                </h4>
                <h2 className="text-sm font-medium text-black">
                  1212 1343 44343 55554
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Full Name</h4>
                <h2 className="text-sm font-medium text-black">Sarfo Sakyi</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Card No.</h4>
                <h2 className="text-sm font-medium text-black">GH - 1213223</h2>
              </div>
            </div>

            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">
                  Amount Requested
                </h4>
                <h2 className="text-sm font-medium text-black">Ghc 2130</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Amount Approved
                </h4>
                <h2 className="text-sm font-medium text-black">Null</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Date Requested
                </h4>
                <h2 className="text-sm font-medium text-black">
                  12th May, 2024
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Date Approved
                </h4>
                <h2 className="text-sm font-medium text-black">Null</h2>
              </div>
            </div>

            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">Status</h4>
                <h2 className="text-sm font-medium text-black">Pending Loan</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Amount Paid
                </h4>
                <h2 className="text-sm font-medium text-black">0</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Amount Owed
                </h4>
                <h2 className="text-sm font-medium text-black">Null</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Last Payment Date
                </h4>
                <h2 className="text-sm font-medium text-black">null</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-start gap-4 mt-32">
          <div>
            <button className="px-6 py-2 font-semibold text-white rounded-md text-sm my-2 bg-blue-600">
              Approved
            </button>
          </div>

          <div>
            <button className="px-6 py-2 font-semibold text-white rounded-md text-sm my-2 bg-black">
              Suggest Amount
            </button>
          </div>
          <div>
            <button className="px-6 py-2 font-semibold text-black rounded-md text-sm my-2 border-black border-2">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingLoanDetails;
