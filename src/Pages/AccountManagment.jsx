import React from "react";
import Sidebar from "../components/SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

function UserManagement() {
  return (
    <div className="flex justify-justify gap-4">
      <Sidebar page="accountM" />
      <div className="w-full px-4">
        <Navbar />

        <div>
          <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
            <h4>Staff </h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>List</h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>Staff Details</h4>
          </div>
        </div>

        <div id="main"></div>
      </div>
    </div>
  );
}

export default UserManagement;
