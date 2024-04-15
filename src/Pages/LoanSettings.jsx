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
function Loansettings() {
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
      </div>
    </div>
  );
}

export default Loansettings;
