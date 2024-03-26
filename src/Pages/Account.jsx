import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faEllipsisVertical,
  faFilter,
  faMagnifyingGlass,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { useNavigate, Link } from "react-router-dom";
import AddAdminModel from "../components/AddAdminModel";

function Account() {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);
  const [userses, setUseses] = useState([]);
  const [uptodown, setUpToDown] = useState(false);

  const [studentsPerPage, setStudentsPerPage] = useState(10);
  const pagesVisited = pageNumber * studentsPerPage;
  const [checkedUsers, setCheckedUsers] = useState([]);

  let users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      location: "New York, USA",
      phone: "+1 (555) 123-4567",
      role: "Admin",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice.smith@example.com",
      location: "London, UK",
      phone: "+44 1234 567890",
      role: "Secretary",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      location: "Sydney, Australia",
      phone: "+61 2 3456 7890",
      role: "Marketter",
    },
    {
      id: 4,
      name: "Jane Brown",
      email: "jane.brown@example.com",
      location: "Paris, France",
      phone: "+33 1 2345 6789",
      role: "Branch Manager",
    },
    {
      id: 5,
      name: "David Lee",
      email: "david.lee@example.com",
      location: "Tokyo, Japan",
      phone: "+81 3 4567 8901",
      role: "Branch Manager",
    },
    {
      id: 6,
      name: "Sarah Kim",
      email: "sarah.kim@example.com",
      location: "Seoul, South Korea",
      phone: "+82 2 3456 7890",
      role: "Marketter",
    },
    {
      id: 7,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      location: "Beijing, China",
      phone: "+86 10 1234 5678",
      role: "Admin",
    },
    {
      id: 8,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      location: "Madrid, Spain",
      phone: "+34 91 234 5678",
      role: "Marketter",
    },
    {
      id: 9,
      name: "Mohammed Ahmed",
      email: "mohammed.ahmed@example.com",
      location: "Cairo, Egypt",
      phone: "+20 2 3456 7890",
      role: "Branch Manager",
    },
  ];

  function sortUsersAlphabetically(users, uptodown) {
    const sortedUsers = [...users].sort((a, b) => {
      if (a.name < b.name) return uptodown ? 1 : -1;
      if (a.name > b.name) return uptodown ? -1 : 1;
      return 0;
    });
    return sortedUsers;
  }

  // Inside the Users component
  useEffect(() => {
    const sortedUsers = sortUsersAlphabetically(users, uptodown);
    setUseses(sortedUsers);
    console.log(checkedUsers, "imagee");
  }, [uptodown, checkedUsers]);

  const pageCount = Math.ceil(users.length / studentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const checkAll = () => {
    const names = userses.map((user) => user.name);
    setCheckedUsers(names);
  };

  const uncheckAll = () => {
    setCheckedUsers([]);
  };

  return (
    <div className="flex justify-between gap-4 mx-4">
      <Sidebar page="account" />
      <div className="w-full ">
        <Navbar />

        <div className="w-full  flex justify-between items-center">
          <div className="w-full justify-between">
            <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
              <h4>Staffs</h4>
              <FontAwesomeIcon icon={faChevronRight} />
              <h4>List</h4>
            </div>
            <div className="text-3xl mt-6 font-semibold">Staffs</div>
          </div>
          <div className="w-full flex justify-end  ">
            <AddAdminModel />
          </div>
        </div>
        <div className="w-full border-2 border-gray-300 rounded-2xl h-4/5 mt-8">
          <div className="flex justify-between items-center  border-b-gray-300 border-b-[2px] py-4  pl-4 ">
            <div className="flex justify-start items-center">
              <div className="w-[25rem] border-[2px] border-gray-400 py-1 rounded-lg px-2 mr-4">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none ml-2 text-base font-normal focus:outline-none w-5/6"
                />
              </div>
              <div className="  ">
                <div className="mr-4 flex justify-start gap-2 items-center">
                  <div>
                    <FontAwesomeIcon icon={faFilter} className="text-xl" />
                  </div>
                  <div className="font-medium text-orange-300">12</div>
                </div>
              </div>
            </div>
          </div>
          <table className="min-w-full bg-white border-gray-200">
            <thead>
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  <button
                    className="flex justify-start gap-2"
                    onClick={() => {
                      setUpToDown(!uptodown);
                    }}
                  >
                    <div>Name</div>
                    <div>
                      {uptodown ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </button>
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {userses
                .slice(pagesVisited, pagesVisited + studentsPerPage)
                .map((user, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-gray-50 hover:cursor-pointer hover:opacity-60 "
                        : "hover:cursor-pointer hover:opacity-60 "
                    }
                    onClick={() => {
                      navigate("");
                    }}
                  >
                    <td className="px-2 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.location}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.phone}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">{user.role}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="mx-4 mt-12 flex justify-between pb-4">
            <div className="w-full flex justify-start gap-2 items-center">
              No. Per Page:
              <select
                name="quantity"
                className="w-[4rem] border-[2px] rounded-md"
                onChange={(e) => {
                  setStudentsPerPage(e.target.value);
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
            <ReactPaginate
              previousLabel={"Prev."}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                "pagination flex justify-end items-center gap-8 mt-4 mx-4"
              }
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={
                "pagination__link--active p-2 rounded-full bg-primary text-white w-6 h-6 flex justify-center items-center rounded-full bg-black"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
