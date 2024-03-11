import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="h-[10vh] bg-white  flex justify-between items-center">
      <div>Welcome Mr. Austine</div>

      <div className="flex justify-center items-center gap-x-8">
        <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
        <FontAwesomeIcon icon={faBell} className="text-primary" />
        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-gray-800"></div>
      </div>
    </div>
  );
}

export default Navbar;
