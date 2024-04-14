import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEdit } from "@fortawesome/free-solid-svg-icons";

function StaffProfile() {
  const [isEditActive, setIsEditActive] = useState(false);

  return (
    <div className="flex justify-between gap-4">
      <Sidebar page="profile" />

      <div className="w-full px-4">
        <Navbar />

        <div>
          <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
            <h4>My Profile </h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>Profile</h4>
          </div>
        </div>

        <div>
          {
            //     <div className="flex justify-between">
            //     <div className="w-full flex justify-end pt-4 gap-4">
            //       <div>
            //         <button
            //           className="border-black border-2 text-black  py-2 px-4 rounded-md hover:opacity-60 text-sm font-semibold"
            //           onClick={() => {
            //             setIsEditActive(true);
            //           }}
            //         >
            //           My Activities
            //         </button>
            //       </div>
            //     </div>
            //   </div>
          }
          <div className="mt-8 grid grid-cols-3">
            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">
                  First Name
                </h4>

                <h2 className="text-sm font-medium text-black">Emmanuella</h2>
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
                  +233 56329870
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Card No.</h4>
                <h2 className="text-sm font-medium text-black">GH - 1213223</h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">
                  Date Created
                </h4>
                <h2 className="text-sm font-medium text-black">
                  17th March, 2023
                </h2>
              </div>
            </div>

            <div className="w-full">
              <div>
                <h4 className="text-sm font-normal text-gray-600">Last Name</h4>
                <h2 className="text-sm font-medium text-black">Osei</h2>
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
                  credit@gmail.com
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Branch</h4>
                <h2 className="text-sm font-medium text-black">
                  Greater Accra
                </h2>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-normal text-gray-600">Role</h4>
                <h2 className="text-sm font-medium text-black">
                  Branch Manager
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
                  Access Level
                </h4>
                <h2 className="text-sm font-medium text-red-500">
                  Dashboard, Branch Customer, Loan, Branch Staffs
                </h2>
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

export default StaffProfile;
