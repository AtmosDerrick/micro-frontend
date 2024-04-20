import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronRight,
  faMagnifyingGlass,
  faPercentage,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
function Loansettings() {
  const navigate = useNavigate();

  const [number, setNumber] = useState(25); // Initial value for the number
  const [range, setRange] = useState(25); // Initial value for the range

  const [selectedWeek, setSelectedWeek] = useState(""); // Initial selected week state

  // Handle change event when a week is selected
  const handleWeekChange = (e) => {
    setSelectedWeek(e.target.value);
  };

  // Update the number state when the number input changes
  const handleNumberChange = (e) => {
    const newNumber = parseInt(e.target.value);
    setNumber(newNumber);
    if (range === "") {
      setRange(1);

      setRange(newNumber);
    }
  };

  // Update the range state when the range input changes
  const handleRangeChange = (e) => {
    const newRange = parseInt(e.target.value);
    setRange(newRange);
    if (range === "") {
      setRange(1);

      setRange(newRange);
    }
  };

  return (
    <div className="flex justify-between mx-4 gap-4">
      <Sidebar page="loan" />
      <div className="w-full">
        <Navbar />
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="w-full rounded-lg h-[10rem] bg-gray-200">
            <div className="w-full px-4 pt-4 pb-2 flex justify-between border-b-[1px] border-gray-400">
              <h4 className="text-sm font-medium text-black">Interest Rate</h4>
              <FontAwesomeIcon icon={faPercentage} className="text-base " />
            </div>

            <div className=" px-4 mt-2">
              <div className="flex justify-start gap-2 mb-2  items-center ">
                <label htmlFor="numberInput" className="text-xs font-medium">
                  Number Input:
                </label>
                <input
                  type="number"
                  id="numberInput"
                  value={number}
                  onChange={handleNumberChange}
                  min="0"
                  max="50"
                  className="w-2/4 border-[1px] rounded-sm ring-gray-900  border-gray-500 shadow-sm px-1"
                />
              </div>

              <label
                htmlFor="rangeInput"
                className="text-xs font-medium  mb-2 mt-2"
              >
                Range Input:
              </label>
              <span className="ml-4 text-xs text-orange-500 font-medium">
                {range && range}%
              </span>
              <input
                type="range"
                id="rangeInput"
                value={range}
                onChange={handleRangeChange}
                min="0"
                max="50"
                className="w-full mt-2"
              />
            </div>
          </div>
          <div className="w-full rounded-lg h-[10rem] bg-gray-200">
            <div className="w-full px-4 pt-4 pb-2 flex justify-between border-b-[1px] border-gray-400">
              <h4 className="text-sm font-medium text-black">Period (Weeks)</h4>
              <FontAwesomeIcon icon={faCalendar} className="text-base " />
            </div>

            <div className="px-4 mt-2">
              <select
                id="weekSelect"
                value={selectedWeek}
                onChange={handleWeekChange}
                className="w-full border-[1px] rounded-sm ring-gray-900  border-gray-500 shadow-sm p-1"
              >
                <option value=" ">Select Period </option>

                <option value="week1">Week 1</option>
                <option value="week2">Week 2</option>
                <option value="week3">Week 3</option>
                <option value="week4">Week 4</option>
                <option value="week5">Week 5</option>
                <option value="week6">Week 6</option>
              </select>
            </div>
          </div>{" "}
          <div className="w-full rounded-lg h-[10rem] bg-gray-200"></div>
          <div className="w-full rounded-lg h-[10rem] bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default Loansettings;
