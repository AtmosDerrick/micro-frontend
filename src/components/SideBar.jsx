import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChalkboardUser,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronDown,
  faChevronRight,
  faCircleXmark,
  faClipboardUser,
  faDonate,
  faFileInvoice,
  faFileInvoiceDollar,
  faGauge,
  faGear,
  faHourglass,
  faHourglassHalf,
  faLeftLong,
  faMarker,
  faMars,
  faMarsStroke,
  faSheetPlastic,
  faUser,
  faUserEdit,
  faUserGraduate,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar(page) {
  const [openWide, setOpenWide] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [loanMenuActive, setLoanMenuActive] = useState(true);

  const classes = {
    container:
      "flex justify-start gap-x-[1px] mb-4 hover:bg-gray-200 py-2 px-2 rounded-md",
    activeMenu:
      "flex justify-start gap-x-[1px] mb-4  bg-gray-100 py-2 px-4 rounded-lg",
    iconsContainer: "w-1/6",
    icons: "text-lg text-black",
    activeIcon: "text-black",
    text: "text-sm pl-[3px] text-black",
    activeText: "text-primary",
  };

  return (
    <div
      className={
        !openWide
          ? "w-1/4 rounded-md  h-screen transition-all duration-500 "
          : "w-1/7 rounded-md  h-screen transition-all duration-500 px-8"
      }
    >
      <div className={"w-full px-2"}>
        <div className="pt-10 flex justify-between items-center">
          <h2
            className={
              !openWide
                ? "text-lg font-bold text-black"
                : "text-sm font-bold text-black  hidden"
            }
          >
            Admin
          </h2>
          <button
            onClick={() => {
              setOpenWide(!openWide);
              setLoanMenuActive(false);
            }}
          >
            <FontAwesomeIcon
              icon={openWide ? faChevronCircleRight : faChevronCircleLeft}
              className="text-xl text-black"
            />
          </button>
        </div>
        <div className="mt-8">
          <Link
            to="/dashboard"
            className={
              page.page === "dashboard" ? classes.activeMenu : classes.container
            }
          >
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
                    ? "text-sm pl-[3px] text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-sm pl-[3px] text-black"
                  : "text-sm pl-[3px] text-black hidden"
              }
            >
              DashBoard
            </div>
          </Link>
          <Link
            to="/users"
            className={
              page.page === "customers" ? classes.activeMenu : classes.container
            }
          >
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
                    ? "text-sm pl-[3px] text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-sm pl-[3px] text-black"
                  : "text-sm pl-[3px] text-black hidden"
              }
            >
              Customers
            </div>
          </Link>

          <div className="w-full mb-4">
            <div
              to="/loan"
              className={
                page.page === "loan"
                  ? classes.activeMenu + "w-full"
                  : classes.container
              }
              onClick={() => {
                setLoanMenuActive((prev) => !prev);
              }}
            >
              <div className={classes.iconsContainer}>
                <FontAwesomeIcon
                  icon={faFileInvoice}
                  className={
                    page.page === "loan" ? classes.activeIcon : classes.icons
                  }
                />
              </div>
              <div className="flex w-full justify-between items-center">
                <div
                  className={
                    page.page === "loan"
                      ? !openWide
                        ? "text-sm pl-[3px] text-primary"
                        : " hidden"
                      : !openWide
                      ? "text-sm pl-[3px] text-black"
                      : "text-sm pl-[3px] text-black hidden"
                  }
                >
                  Loan Requests
                </div>
                <div className={classes.iconsContainer}>
                  {!openWide ? (
                    loanMenuActive ? (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={page.page === "loan" ? "text-sm" : "text-sm"}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className={
                          page.page === "loan"
                            ? classes.activeIcon
                            : classes.icons
                        }
                      />
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div
              className={
                loanMenuActive
                  ? "ml-12 -mt-4 text-black h-32 overflow-hidden max-h-32 transition-all duration-1000 "
                  : "ml-12 -mt-4 text-black h-0 overflow-hidden max-h-0 transition-all duration-1000"
              }
            >
              <div className="mt-2">
                <Link
                  to="/loan/pendingloan"
                  className="tracking-normal flex justify-start  "
                >
                  {
                    <div className={classes.iconsContainer}>
                      <FontAwesomeIcon
                        icon={faHourglassHalf}
                        className={
                          page.page === "defaultors"
                            ? "text-sm text-gray-700"
                            : "text-sm text-gray-700"
                        }
                      />
                    </div>
                  }
                  <div className="text-sm text-gray-700">Pending Loans</div>
                </Link>
              </div>

              <div className="mt-2">
                <Link
                  to="/loan/activeloan"
                  className="tracking-wider flex justify-start"
                >
                  <div className={classes.iconsContainer}>
                    <FontAwesomeIcon
                      icon={faWallet}
                      className={
                        page.page === "defaultors"
                          ? "text-sm text-gray-700"
                          : "text-sm text-gray-700"
                      }
                    />
                  </div>
                  <div className="text-sm text-gray-700">Active Loans</div>
                </Link>
              </div>

              <div className="mt-2">
                <Link
                  to="/loan/completedloans"
                  className="tracking-wider flex justify-start"
                >
                  <div className={classes.iconsContainer}>
                    <FontAwesomeIcon
                      icon={faDonate}
                      className={
                        page.page === "defaultors"
                          ? "text-sm text-gray-700"
                          : "text-sm text-gray-700"
                      }
                    />
                  </div>
                  <div className="text-sm text-gray-700">Completed Loans</div>
                </Link>
              </div>

              <div className="mt-2 mb-8">
                <Link
                  to="/loan/defaultors"
                  className="tracking-wider flex justify-start"
                >
                  <div className={classes.iconsContainer}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className={
                        page.page === "defaultors"
                          ? "text-sm text-gray-700"
                          : "text-sm text-gray-700"
                      }
                    />
                  </div>
                  <div className="text-sm text-gray-700">Defaultors</div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/loansettings"
            className={
              page.page === "parents" ? classes.activeMenu : classes.container
            }
          >
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
                    ? "text-sm pl-[3px] text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-sm pl-[3px] text-black"
                  : "text-sm pl-[3px] text-black hidden"
              }
            >
              Loan Settings
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
                  ? "text-sm pl-[3px] text-black"
                  : "text-sm pl-[3px] text-black hidden"
              }
            >
              Reports
            </div>
          </Link>

          <Link
            to="/account"
            className={
              page.page === "account" ? classes.activeMenu : classes.container
            }
          >
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faUser}
                className={
                  page.page === "account" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              className={
                page.page === "account"
                  ? !openWide
                    ? "text-sm pl-[3px] text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-sm pl-[3px] text-black"
                  : "text-sm pl-[3px] text-black hidden"
              }
            >
              Staff
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
                  ? "text-sm pl-[3px] text-black"
                  : "text-sm pl-[3px] text-black hidden"
              }
            >
              User Management
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
                  ? "text-sm pl-[3px] text-black"
                  : "text-sm pl-[3px] text-black hidden"
              }
            >
              Setting
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
