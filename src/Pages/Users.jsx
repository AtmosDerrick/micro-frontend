import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
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
import axios from "axios";
import { UserAuth } from "../contextApi/UserContext";
import loading from "../assets/images/loading1.gif";
import Skeleton from "../components/Skeleton";

function Users() {
  const navigate = useNavigate();
  const { user, setUser, token, setToken } = UserAuth();

  const [pageNumber, setPageNumber] = useState(0);
  const [userses, setUseses] = useState([]);
  const [uptodown, setUpToDown] = useState(false);

  const [studentsPerPage, setStudentsPerPage] = useState(10);
  const pagesVisited = pageNumber * studentsPerPage;
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: "/customers",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUseses(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  function sortUsersAlphabetically(users, uptodown) {
    const sortedUsers = [...users].sort((a, b) => {
      if (a.fname < b.fname) return uptodown ? 1 : -1;
      if (a.fname > b.fname) return uptodown ? -1 : 1;
      return 0;
    });
    return sortedUsers;
  }

  useEffect(() => {
    if (userses.length > 0) {
      const sortedUsers = sortUsersAlphabetically(userses, uptodown);
      setUseses(sortedUsers);
    }
  }, [uptodown]);

  const pageCount = Math.ceil(userses.length / studentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const checkAll = () => {
    const names = userses.map((user) => user.accountNumber);
    setCheckedUsers(names);
  };

  const uncheckAll = () => {
    setCheckedUsers([]);
  };

  return isLoading ? (
    <div className="w-full h-full">
      <Skeleton />
    </div>
  ) : (
    <div className="flex justify-between gap-4 mx-4">
      <Sidebar page="customers" />
      <div className="w-full">
        <Navbar />
        <div className="w-full flex justify-between items-center">
          <div className="w-full justify-between">
            <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
              <h4>Customers</h4>
              <FontAwesomeIcon icon={faChevronRight} />
              <h4>List</h4>
            </div>
            <div className="text-3xl mt-6 font-semibold">Customers</div>
          </div>
          <div className="w-full flex justify-end">
            <Link
              to="/creatcustomer"
              className="bg-black py-2 px-6 rounded-md font-normal text-white text-sm"
            >
              New Customers
            </Link>
          </div>
        </div>
        <div className="w-full border-2 border-gray-300 rounded-2xl h-4/5 mt-8">
          <div className="flex justify-between items-center border-b-gray-300 border-b-[2px] py-4">
            <div className="flex justify-start ml-4">
              <button className="px-4">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="text-lg font-bold"
                />
              </button>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-[25rem] border-2 border-gray-400 py-1 rounded-lg px-2 mr-4">
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
              <div>
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
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      e.target.checked ? checkAll() : uncheckAll();
                    }}
                  />
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex justify-start gap-2"
                    onClick={() => {
                      setUpToDown(!uptodown);
                    }}
                  >
                    <div>First Name</div>
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
                  Last Name
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account Number
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  View
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
                        ? "bg-gray-50 hover:cursor-pointer hover:opacity-60"
                        : "hover:cursor-pointer hover:opacity-60"
                    }
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={checkedUsers.includes(user.name)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setCheckedUsers((prev) => {
                            if (checked) {
                              return [...prev, user.name];
                            } else {
                              return prev.filter((name) => name !== user.name);
                            }
                          });
                        }}
                      />
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.fname}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.lname}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.transid}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <button
                        className="py-[2px] text-xs px-4 bg-black text-white rounded-lg"
                        onClick={() => {
                          navigate("/customerDetails/" + user.transid);
                        }}
                      >
                        View
                      </button>
                    </td>
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

export default Users;
