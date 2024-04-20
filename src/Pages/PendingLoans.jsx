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
import { UserAuth } from "../contextApi/UserContext";
import axios from "axios";

function PendingLoans() {
  const navigate = useNavigate();
  const { user, setUser, token, setToken } = UserAuth();

  const [pageNumber, setPageNumber] = useState(0);
  const [userses, setUseses] = useState([]);
  const [uptodown, setUpToDown] = useState(false);
  const [uptodownAmount, setUpToDownAmount] = useState(false);

  const [studentsPerPage, setStudentsPerPage] = useState(10);
  const pagesVisited = pageNumber * studentsPerPage;
  const [checkedUsers, setCheckedUsers] = useState([]);

  const users = [
    {
      id: 1,
      name: "John Doe",
      accountNumber: "1111 2222 3333 4444",
      amountrequested: 1220,
      status: "pending",
    },
    {
      id: 2,
      name: "Alice Smith",
      accountNumber: "2222 3333 4444 5555",
      amountrequested: 1220,
      status: "pending",
    },
    {
      id: 3,
      name: "Bob Johnson",
      accountNumber: "3333 4444 5555 6666",
      amountrequested: 1220,
      status: "pending",
    },
    {
      id: 4,
      name: "Jane Brown",
      accountNumber: "4444 5555 6666 7777",
      amountrequested: 1220,
      status: "pending",
    },
    {
      id: 5,
      name: "David Lee",
      accountNumber: "5555 6666 7777 8888",
      amountrequested: 1220,
      status: "pending",
    },
    {
      id: 6,
      name: "Sarah Kim",
      accountNumber: "6666 7777 8888 9999",
      amountrequested: 1224,
      status: "pending",
    },
    {
      id: 7,
      name: "Michael Chen",
      accountNumber: "7777 8888 9999 0000",
      amountrequested: 922,
      status: "pending",
    },
    {
      id: 8,
      name: "Maria Garcia",
      accountNumber: "8888 9999 0000 1111",
      amountrequested: 1022,
      status: "pending",
    },
    {
      id: 9,
      name: "Mohammed Ahmed",
      accountNumber: "9999 0000 1111 2222",
      amountrequested: 1122,
      status: "pending",
    },
    {
      id: 10,
      name: "Anna Ivanova",
      accountNumber: "0000 1111 2222 3333",
      amountrequested: 10000,
      status: "pending",
    },
  ];

  // useEffect(() => {
  //   axios({
  //     url: "/customers",

  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((res) => {
  //     setUseses(res.data.data);
  //   });
  // }, []);

  useEffect(() => {
    setUseses(users);
  });

  const sortName = () => {
    setUpToDown(!uptodown);

    function sortUsersAlphabetically(users, uptodown) {
      const sortedUsers = [...users].sort((a, b) => {
        if (a.name < b.name) return uptodown ? 1 : -1;
        if (a.name > b.name) return uptodown ? -1 : 1;
        return 0;
      });
      return sortedUsers;
    }

    const sortedUsers = sortUsersAlphabetically(users, uptodown);
    setUseses(sortedUsers);
  };

  const sortAmount = () => {
    setUpToDownAmount(!uptodownAmount);

    function sortUsersAmount(users, uptodownAmount) {
      const sortedUsers = [...users].sort((a, b) => {
        if (a.amountrequested < b.amountrequested)
          return uptodownAmount ? 1 : -1;
        if (a.amountrequested > b.amountrequested)
          return uptodownAmount ? -1 : 1;
        return 0;
      });
      return sortedUsers;
    }

    const sortedAmount = sortUsersAmount(users, uptodownAmount);

    setUseses(sortedAmount); // Update state with sorted users by amountrequested
  };

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
      <Sidebar page="loan" />
      <div className="w-full ">
        <Navbar />
        <div className="w-full  flex justify-between items-center">
          <div className="w-full justify-between">
            <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
              <h4>Loan </h4>
              <FontAwesomeIcon icon={faChevronRight} />
              <h4>Pending Loans </h4>
              <FontAwesomeIcon icon={faChevronRight} />
              <h4>List</h4>
            </div>
            <div className="text-3xl mt-6 font-semibold">Pending Loans</div>
          </div>
        </div>
        <div className="w-full border-2 border-gray-300 rounded-2xl h-4/5 mt-8">
          <div className="flex justify-between items-center  border-b-gray-300 border-b-[2px] py-4 ">
            <div className="flex justify-start ml-4">
              <button className="px-4">
                {
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="text-lg font-bold"
                  />
                }
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
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  ">
                  <button
                    className="flex justify-start gap-2"
                    onClick={sortName}
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
                  Account Number
                </th>

                <th
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-start gap-2 hover:cursor-pointer"
                  onClick={sortAmount}
                >
                  Amt Requested (Ghc)
                  <button className="flex justify-start gap-2">
                    <div>
                      {uptodownAmount ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </button>
                </th>

                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
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
                        ? "bg-gray-50 hover:cursor-pointer hover:opacity-60 "
                        : "hover:cursor-pointer hover:opacity-60 "
                    }
                    onClick={() => {
                      navigate("/loan/pendingloandetails/" + index);
                    }}
                  >
                    <td className="px-4 py-4 whitespace-nowrap ">
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

                    <td className="px-2 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.accountNumber}
                    </td>

                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.amountrequested}
                    </td>

                    <td className="px-2 py-4 whitespace-nowrap">
                      {user.status}
                    </td>

                    <td className="px-2 py-4 whitespace-nowrap">
                      <button
                        className="py-[2px] text-xs px-4 bg-black text-white rounded-lg"
                        onClick={() => {
                          navigate("");
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

export default PendingLoans;
