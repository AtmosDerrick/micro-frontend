import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronRight,
  faEdit,
  faMagnifyingGlass,
  faPercentage,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
function Loansettings() {
  const navigate = useNavigate();

  const [number, setNumber] = useState(25); // Initial value for the number
  const [range, setRange] = useState(25); // Initial value for the range

  const [selectedWeek, setSelectedWeek] = useState(""); // Initial selected week state
  const [isEditing, setIsEditing] = useState(false);

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
      <Sidebar page="loansettings" />
      <div className="w-full">
        <Navbar />
        <div className="w-full flex justify-end py-4">
          {isEditing ? (
            <div className="w-full flex justify-end gap-4">
              <button className="bg-blue-800 py-2 px-4 text-white text-sm font-medium rounded-lg">
                <FontAwesomeIcon icon={faSave} className="mr-2" />
                Save Changes
              </button>
              <button
                className="bg-blue-800 py-2 px-4 text-white text-sm font-medium rounded-lg"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-800 py-2 px-4 text-white text-sm font-medium rounded-lg"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              Edit
            </button>
          )}
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="w-full rounded-lg h-[10rem] bg-blue-900">
            <div className="w-full px-4 pt-4 pb-2 flex justify-between border-b-[1px] border-gray-400">
              <h4 className="text-sm font-medium text-white">Interest Rate</h4>
            </div>

            <div className=" px-4 mt-2">
              <div className="w-full gap-2 mb-2  items-center ">
                <input
                  type="number"
                  id="numberInput"
                  placeholder="Interest rate"
                  value={range}
                  onChange={handleRangeChange}
                  min="0"
                  max="100"
                  className="w-full border-[1px] rounded-sm ring-gray-900  border-white shadow-sm px-1"
                />
              </div>

              <div className="w-full justify-between gap-2 mt-2">
                <div>
                  <input
                    type="range"
                    value={range}
                    onChange={handleRangeChange}
                    min="0"
                    max="100"
                    className="w-full mt-4"
                  />
                </div>
                {/* <div className=" text-xs white font-medium">
                  <span className="bg-white w-8 h-8 flex justify-center items-center rounded-full text-blue-800">
                    {range && range}%
                  </span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg h-[10rem] bg-orange-700">
            <div className="w-full px-4 pt-4 pb-2 flex justify-between border-b-[1px] border-gray-400">
              <h4 className="text-sm font-medium text-white">Period (Weeks)</h4>
            </div>

            <div className="px-4 mt-2">
              <select
                id="weekSelect"
                value={selectedWeek}
                onChange={handleWeekChange}
                className="w-full border-[1px] rounded-sm ring-gray-900  border-white shadow-sm px-1"
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
