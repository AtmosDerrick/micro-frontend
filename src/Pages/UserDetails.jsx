import React from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserAuth } from "../contextApi/UserContext";
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import Modal from "react-modal";
import TransactionHistory from "../components/TransactionHistory";

function UserDetails() {
  const handle = useParams();
  const [customerDetails, setCustomerDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser, token, setToken } = UserAuth();

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
      url: "/get_customer/" + handle.id,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setCustomerDetails(res.data.data);
        console.log(customerDetails, "working");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <div className="w-full h-full">
      <Skeleton />
    </div>
  ) : (
    <div className="flex justify-between gap-4">
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <TransactionHistory closeModal={closeModal} />
        </Modal>
      </div>
      <Sidebar page="customers" />

      <div className="w-full px-4">
        <Navbar />

        <div>
          <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
            <h4>Customers </h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>List</h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>Customer Details</h4>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <div className="w-full">
              {" "}
              <div className="w-32 h-32 mt-8 ">
                <img
                  src="https://i.pinimg.com/564x/17/f9/5a/17f95a7cd3091e1d5507588f462f2b38.jpg"
                  className="w-32 h-32 rounded-full"
                />
              </div>
            </div>

            <div className="w-full flex justify-end pt-4 gap-4">
              <div>
                <button className="border-black border-2 text-black  py-2 px-4 rounded-md hover:opacity-60 text-sm font-semibold">
                  Loan Request
                </button>
              </div>
              <div>
                <button
                  onClick={openModal}
                  className="bg-black text-white  py-2 px-4 rounded-md hover:opacity-60 text-sm font-semibold"
                >
                  Transaction Record
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3">
            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">
                  First Name
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {customerDetails.fname}
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Date of Birth
                </h4>
                <h2 className="text-sm font-medium text-black">
                  16th May, 1998
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Contact</h4>
                <h2 className="text-sm font-medium text-black">
                  {customerDetails.phone}
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Card No.</h4>
                <h2 className="text-sm font-medium text-black">
                  {customerDetails.gh_card_no}
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Date Created
                </h4>
                <h2 className="text-sm font-medium text-black">
                  {customerDetails.created_at}
                </h2>
              </div>
            </div>

            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">Last Name</h4>
                <h2 className="text-sm font-medium text-black">
                  {customerDetails.lname}
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Location</h4>
                <h2 className="text-sm font-medium text-black">
                  Ho - Volta Region
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Email</h4>
                <h2 className="text-sm font-medium text-black">
                  {customerDetails.email}
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Occupation
                </h4>
                <h2 className="text-sm font-medium text-black">Teacher</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Approval Date
                </h4>
                <h2 className="text-sm font-medium text-black">
                  18th May, 2023
                </h2>
              </div>
            </div>

            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">Garranter</h4>
                <h2 className="text-sm font-medium text-black">Osei Yeboah</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Garranter Contact
                </h4>
                <h2 className="text-sm font-medium text-black">
                  +233 595324699
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Garranter Location
                </h4>
                <h2 className="text-sm font-medium text-black">Hohoe</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Account Status
                </h4>
                <h2 className="text-sm font-medium text-red-500">Active</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Last Transaction
                </h4>
                <h2 className="text-sm font-medium text-black">
                  2nd January, 2024
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
