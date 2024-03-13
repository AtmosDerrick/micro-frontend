import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faChevronCircleLeft,
  faChevronCircleRight,
  faClipboardUser,
  faFileInvoice,
  faFileInvoiceDollar,
  faGauge,
  faGear,
  faLeftLong,
  faSheetPlastic,
  faUser,
  faUserGraduate,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar(page) {
  const [openWide, setOpenWide] = useState(false);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    console.log(page.page, "page");
  }, [isActive]);
  const classes = {
    container:
      "flex justify-start gap-x-[1px] mb-6 hover:bg-gray-200 py-2 px-2 rounded-md",
    activeMenu:
      "flex justify-start gap-x-[1px] mb-6  bg-gray-100 py-2 px-4 rounded-lg",
    iconsContainer: "w-1/6",
    icons: "text-lg text-black",
    activeIcon: "text-black",
    text: "text-base text-black",
    activeText: "text-primary",
  };

  return (
    <div
      className={
        !openWide
          ? "w-1/4 rounded-md bg-gradient-to-b from-primary to-blue-500 h-screen transition-all duration-500"
          : "w-1/7 rounded-md bg-gradient-to-b from-primary to-blue-500 h-screen transition-all duration-500 px-8"
      }>
      <div className={"w-4/5 mx-auto"}>
        <div className="pt-10 flex justify-between items-center">
          <h2
            className={
              !openWide
                ? "text-lg font-bold text-black"
                : "text-sm font-bold text-black  hidden"
            }>
            Admin
          </h2>
          <button
            onClick={() => {
              setOpenWide(!openWide);
            }}>
            <FontAwesomeIcon
              icon={openWide ? faChevronCircleRight : faChevronCircleLeft}
              className="text-xl text-black"
            />
          </button>
        </div>
        <div className="mt-12">
          <Link
            to="/dashboard"
            className={
              page.page === "dashboard" ? classes.activeMenu : classes.container
            }>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faGauge}
                className={
                  page.page === "dashboard" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              className={
                page.page === "dashboard"
                  ? !openWide
                    ? "text-base text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-base text-black"
                  : "text-base text-black hidden"
              }>
              DashBoard
            </div>
          </Link>
          <Link
            to="/users"
            className={
              page.page === "customers" ? classes.activeMenu : classes.container
            }>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faUsers}
                className={
                  page.page === "customers" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              className={
                page.page === "loan"
                  ? !openWide
                    ? "text-base text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-base text-black"
                  : "text-base text-black hidden"
              }>
              Customers
            </div>
          </Link>

          <Link
            to="/loan"
            className={
              page.page === "loan" ? classes.activeMenu : classes.container
            }>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faFileInvoice}
                className={
                  page.page === "loan" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              className={
                page.page === "loan"
                  ? !openWide
                    ? "text-base text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-base text-black"
                  : "text-base text-black hidden"
              }>
              Loan Requests
            </div>
          </Link>

          <Link
            to="/parent"
            className={
              page.page === "parents" ? classes.activeMenu : classes.container
            }>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faWallet}
                className={
                  page.page === "parents" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              to="/parent"
              className={
                page.page === "parents"
                  ? !openWide
                    ? "text-base text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-base text-black"
                  : "text-base text-black hidden"
              }>
              Savings
            </div>
          </Link>

          <Link to="/dashboard" className={classes.container}>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faSheetPlastic}
                className={classes.icons}
              />
            </div>
            <div
              to="/link"
              className={
                !openWide
                  ? "text-base text-black"
                  : "text-base text-black hidden"
              }>
              Reports
            </div>
          </Link>

          <Link to="/dashboard" className={classes.container}>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                className={classes.icons}
              />
            </div>
            <div
              to="/link"
              className={
                !openWide
                  ? "text-base text-black"
                  : "text-base text-black hidden"
              }>
              Account
            </div>
          </Link>

          <Link to="/dashboard" className={classes.container}>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon icon={faGear} className={classes.icons} />
            </div>
            <div
              to="/link"
              className={
                !openWide
                  ? "text-base text-black"
                  : "text-base text-black hidden"
              }>
              Setting
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
