import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
function Loan() {
  const [pageNumber, setPageNumber] = useState(0);

  const [studentsPerPage, setStudentsPerPage] = useState(5);

  const pagesVisited = pageNumber * studentsPerPage;

  const requests = [
    {
      profileImage:
        "https://i.pinimg.com/564x/6e/58/47/6e584718e75889b879160d69fea23dd6.jpg",
      name: "John Doe",
      amountRequest: 1000,
      status: "approve",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/90/73/76/907376044c556d64e38003b5f2ab881c.jpg",
      name: "Alice Smith",
      amountRequest: 1500,
      status: "decline",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/74/fc/5f/74fc5f9c73880ff75b301babec974cf4.jpg",
      name: "Bob Johnson",
      amountRequest: 2000,
      status: "review",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/07/df/6c/07df6ca74d979ccd0412025474298055.jpg",
      name: "Jane Brown",
      amountRequest: 1200,
      status: "approve",
    },
    {
      profileImage:
        "https://i.pinimg.com/736x/1e/e9/50/1ee9506b65361e9e817e2a661609bf5c.jpg",
      name: "David Lee",
      amountRequest: 1800,
      status: "review",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/d6/c2/46/d6c246fcf366106a364998ce6bcc3dbe.jpg",
      name: "Sarah Kim",
      amountRequest: 2200,
      status: "approve",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/17/f9/5a/17f95a7cd3091e1d5507588f462f2b38.jpg",
      name: "Michael Chen",
      amountRequest: 1300,
      status: "decline",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/57/d5/85/57d5851cf927c34e70e680e60850b114.jpg",
      name: "Maria Garcia",
      amountRequest: 1600,
      status: "approve",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/2e/1c/19/2e1c19ca543f939a1b94d6b5b0222b41.jpg",
      name: "Mohammed Ahmed",
      amountRequest: 1900,
      status: "review",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/09/a8/a2/09a8a2f134de8e03765a88e631189a1a.jpg",
      name: "Anna Ivanova",
      amountRequest: 1400,
      status: "approve",
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/36/02/72/360272af63ae815a3cfbafadbace6759.jpg",
      name: "Luisa Fernandez",
      amountRequest: 1700,
      status: "decline",
    },

    {
      profileImage: "path/to/image13.jpg",
      name: "Yui Takahashi",
      amountRequest: 1500,
      status: "approve",
    },

    {
      profileImage: "path/to/image15.jpg",
      name: "Juan Perez",
      amountRequest: 2200,
      status: "approve",
    },
    {
      profileImage: "path/to/image16.jpg",
      name: "Maja Novak",
      amountRequest: 1300,
      status: "decline",
    },
    {
      profileImage: "path/to/image17.jpg",
      name: "Sophie Dupont",
      amountRequest: 1600,
      status: "approve",
    },

    {
      profileImage: "path/to/image19.jpg",
      name: "Maria Silva",
      amountRequest: 1200,
      status: "approve",
    },
  ];

  const navigate = useNavigate();

  const viewedRequest = requests.filter((item) => {
    return item.status === "approve" || item.status === "decline";
  });
  const pageCount = Math.ceil(requests.length / studentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex justify-between mx-4">
      <Sidebar page="loan" />
      <div className="w-full">
        <Navbar />
        <div className="mt-4 flex justify-between items-center">
          <div>
            <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
              <h4>Loan </h4>
              <FontAwesomeIcon icon={faChevronRight} />
              <h4>Loan Request</h4>
            </div>
            <h1 className="text-2xl font-bold text-black">Loan Requests</h1>
          </div>
          <div>
            <button className="py-1 px-4 bg-black text-white rounded-md text-sm font-medium">
              New Request
            </button>
          </div>
        </div>
        <div className="mt-8 w-full border-2 border-gray-400 py-1 rounded-lg px-2 mr-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search for a request"
            className="border-none ml-2 text-base font-normal focus:outline-none w-5/6"
          />
        </div>
        <div className="mt-8">
          <h1 className="text-lg  font-bold py-2 mb-4">New</h1>
          {requests.map(
            (item) =>
              item.status === "review" && (
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-8 mb-4">
                    <div>
                      <img
                        src={item.profileImage}
                        className="w-14 h-14 rounded-full bg-gray-200"
                      />
                    </div>
                    <div>
                      <h2 className="text-base font-medium">John Smith</h2>
                      <h6 className="text-xs mt-[2px] font-normal text-gray-600">
                        Requested:
                        <span>
                          Ghc <span>10,000</span>
                        </span>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <button
                      className="px-4 py-1 bg-gray-300 rounded-xl text-xs"
                      onClick={() => {
                        navigate("/loandetails");
                      }}>
                      Review
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="mt-4">
          <h1 className="text-lg  font-bold py-2 mb-4">Viewed</h1>
          {viewedRequest
            .slice(pagesVisited, pagesVisited + studentsPerPage)
            .map((item) =>
              item.status == "decline" || item.status == "approve" ? (
                <div className="flex items-center justify-between">
                  <div className="flex justify-start items-center gap-8 mb-4">
                    <div>
                      <img
                        src={item.profileImage}
                        className="w-14 h-14 rounded-full bg-gray-200"
                      />
                    </div>
                    <div>
                      <h2 className="text-base font-medium">John Smith</h2>
                      <h6 className="text-xs mt-[2px] font-normal text-gray-600">
                        Requested:{" "}
                        <span>
                          Ghc <span>10,000</span>
                        </span>
                      </h6>
                      <h6 className="text-xs text-blue-600 font-medium mt-2">
                        {item.status}
                      </h6>
                    </div>
                  </div>
                  <div>
                    <button
                      className="px-4 py-1 bg-gray-300 rounded-xl text-xs"
                      onClick={() => {
                        navigate("/loandetails");
                      }}>
                      Review
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
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
  );
}

export default Loan;
