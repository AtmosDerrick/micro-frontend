import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { UserAuth } from "../contextApi/UserContext";
import { useParams } from "react-router-dom";
import TransactionHistory from "../components/TransactionHistory";
import UserDetailModal from "../components/UserDetailModal";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Space } from "antd";

const PendingLoanDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, token } = UserAuth();
  const { id } = useParams();
  const navigation = useNavigate();

  console.log(id, "use params");

  const [userDetails, setUserDetails] = useState({});
  const [buttonPress, setButtonPress] = useState(null);
  const [approveResponse, setApproveResponse] = useState();
  const [checkSuccess, setCheckSuccess] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenSuccess, setIsOpenSuccess] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: buttonPress ? "60%" : "30%",
      height: buttonPress ? "80%" : "30%",
    },
    overlay: {
      backgroundColor: "rgba(128, 128, 128, 0.75)",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/get_pendingUser/${id}`, {
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
  }, [id, token]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openSuccessModal = () => setIsOpenSuccess(true);
  const closeSuccessModal = () => setIsOpenSuccess(false);

  const handleApproveLoan = () => {
    Modal.warning({
      title: "Are sure you want to approve this loan?",
      okText: "Yes",
      centered: true,
      closable: true,
      onOk: () => {
        console.log("working");
        axios
          .put(
            `/approve_loan/${id}`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            setApproveResponse(res.data.data);
            Modal.success({
              content: "Loan Approval Successful",
            });
            navigation("/loan/pendingloan/");
          })
          .catch((err) => {
            console.error(err);
            Modal.error({
              title: "Something went wrong",
              content: "Not able to approve loan",
            });
            closeModal();
          });
      },
    });
  };

  const openPrompt = () => {
    setButtonPress(null);
    openModal();
  };

  return (
    <div className="flex justify-between gap-4">
      <Sidebar page="loan" />

      <div className="w-full px-4">
        <Navbar />

        <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
          <h4>Loan</h4>
          <FontAwesomeIcon icon={faChevronRight} />
          <h4>List</h4>
          <FontAwesomeIcon icon={faChevronRight} />
          <h4>Loan Details</h4>
        </div>

        <div>
          <div className="flex justify-between">
            <div className="w-full flex justify-end pt-4 gap-4">
              <button
                onClick={() => {
                  setButtonPress("userinfo");
                  openModal();
                }}
                className="border-black border-2 text-black py-2 px-4 rounded-md hover:opacity-60 text-sm font-semibold"
              >
                User Info
              </button>
              <button
                onClick={() => {
                  setButtonPress("transaction");

                  openModal();
                }}
                className="bg-black text-white py-2 px-4 rounded-md hover:opacity-60 text-sm font-semibold"
              >
                Transaction History
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3">
            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">
                  Transaction ID
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.transaction_id || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Account Number
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.account_anumber || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Full Name</h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.user_name || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Card No.</h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.card_number || "N/A"}
                </h2>
              </div>
            </div>

            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">
                  Amount Requested
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.loan_amount || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Amount Approved
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.amount_paid || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Date Requested
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.date_requested || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Date Approved
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.date_approved || "N/A"}
                </h2>
              </div>
            </div>

            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">Status</h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.status || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Amount Paid
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.amount_paid || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Amount Owed
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.amount_owed || "N/A"}
                </h2>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Last Payment Date
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {userDetails.last_payment_date || "N/A"}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-start gap-4 mt-32">
          <button
            className="px-6 py-2 font-semibold text-white rounded-md text-sm my-2 bg-blue-600"
            onClick={handleApproveLoan}
          >
            Approve
          </button>
          <button className="px-6 py-2 font-semibold text-black rounded-md text-sm my-2 border-black border-2">
            Decline
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="User Details Modal"
      >
        {buttonPress === "userinfo" ? (
          <UserDetailModal closeModal={closeModal} userDetails={userDetails} />
        ) : buttonPress === "transaction" ? (
          <TransactionHistory
            closeModal={closeModal}
            accountNumber={userDetails.account_anumber}
          />
        ) : (
          <>
            <h4 className="text-sm text-gray-600 font-semibold">
              Are you sure you want to Approve this Loan?
            </h4>
            <div className="w-full flex justify-center gap-4 mt-8">
              <button
                className="px-6 py-2 font-semibold text-white rounded-md text-sm my-2 bg-blue-600"
                onClick={handleApproveLoan}
              >
                Yes
              </button>
              <button
                className="px-6 py-2 font-semibold text-black rounded-md text-sm my-2 border-black border-2"
                onClick={closeModal}
              >
                No
              </button>
            </div>
          </>
        )}
      </Modal>

      <Modal
        isOpen={modalIsOpenSuccess}
        onRequestClose={closeSuccessModal}
        style={customStyles}
        contentLabel="Success Modal"
      >
        <div>
          <h4 className="text-lg text-gray-600 font-semibold">Successful</h4>
          <div className="w-full flex justify-center gap-4 mt-8">
            <button
              className="px-6 py-2 font-semibold text-white rounded-md text-sm my-2 bg-blue-600"
              onClick={closeSuccessModal}
            >
              Ok
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PendingLoanDetails;
