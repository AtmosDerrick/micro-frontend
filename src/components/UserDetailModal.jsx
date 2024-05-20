import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserAuth } from "../contextApi/UserContext";
import { useParams } from "react-router-dom";

function UserDetailModal({ closeModal }) {
  const handle = useParams();
  const [customerDetails, setCustomerDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser, token, setToken } = UserAuth();

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
  return (
    <div>
      <div className="flex justify-between items-center border-b-[1px] py-2 border-b-gray-400 px-4">
        <div className="text-xl font-medium">User Details</div>
        <button onClick={closeModal}>
          <FontAwesomeIcon icon={faClose} className="text-red-500" />
        </button>
      </div>
      <div>
        <div className="flex justify-start gap-8  items-center">
          <div className="">
            <div className="w-32 h-32 mt-8 ">
              <img
                src="https://i.pinimg.com/564x/17/f9/5a/17f95a7cd3091e1d5507588f462f2b38.jpg"
                className="w-32 h-32 rounded-full"
              />
            </div>
          </div>

          <div className="w-full pt-8">
            <div>
              <h2 className="text-lg font-medium text-black">
                {customerDetails.fname} {customerDetails.lname}
              </h2>
              <h2 className="text-sm font-medium text-gray-500">
                {customerDetails.phone}
              </h2>
              <h2 className="text-sm font-medium text-gray-600">
                Ho - Volta Region
              </h2>
              <h2 className="text-xs font-medium text-green-500">Active</h2>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 px-4 ">
          <div className="w-full">
            <div className="">
              <h4 className="text-sm font-normal text-gray-600">
                Date of Birth
              </h4>
              <h2 className="text-sm font-medium text-black">16th May, 1998</h2>
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
            <div className="">
              <h4 className="text-sm font-normal text-gray-600">Email</h4>
              <h2 className="text-sm font-medium text-black">
                {customerDetails.email}
              </h2>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-normal text-gray-600">Occupation</h4>
              <h2 className="text-sm font-medium text-black">Teacher</h2>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-normal text-gray-600">
                Approval Date
              </h4>
              <h2 className="text-sm font-medium text-black">18th May, 2023</h2>
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
              <h2 className="text-sm font-medium text-black">+233 595324699</h2>
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
  );
}

export default UserDetailModal;
