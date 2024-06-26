import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faBell,
  faEnvelope,
  faList,
  faMagnifyingGlass,
  faOutdent,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="border-b-2 border-orange-200 py-4 mb-4">
      <div className="h-[5vh]  bg-white  flex justify-between items-center">
        <div>Welcome Mr. Austine</div>

        <div className="flex justify-center items-center gap-x-8">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
          <FontAwesomeIcon icon={faBell} className="text-primary" />
          <button
            className="flex justify-start items-baseline gap-2"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-gray-800 overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/74/fc/5f/74fc5f9c73880ff75b301babec974cf4.jpg"
                alt="profile"
              />
            </div>
            {isActive ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="text-primary text-sm"
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-primary text-sm"
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={
          isActive
            ? "absolute right-4  backdrop-blur-md  mt-[10px]  rounded-md  py-2 w-1/6 text-left border-[1px] shadow-md border-gray-300 bg-white transition-all duration-500"
            : "absolute right-4  backdrop-blur-md mt-[-1000px]  rounded-md  py-2 w-1/6 text-left border-[1px] shadow-md border-gray-300 bg-white transition-all duration-500"
        }
      >
        <div className="mb-4 font-medium text-gray-700 border-b-gray-300 py-1 px-4 text-sm">
          <button
            onClick={() => {
              navigate("/staffprofile/" + 1);
            }}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            My Profile
          </button>
        </div>

        <div className="mb-4 font-medium text-gray-700  border-b-gray-300 py-1 px-4 text-sm">
          <button>
            <FontAwesomeIcon icon={faList} className="mr-2" />
            My Activities
          </button>
        </div>

        <div className="text-red-500 font-medium px-4 text-sm">
          <button>
            <FontAwesomeIcon icon={faSignOut} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
