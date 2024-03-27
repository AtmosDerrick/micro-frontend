import React from "react";
import Sidebar from "../components/SideBar";
import { LineChart } from "@mui/x-charts/LineChart";
import Navbar from "../components/Navbar";

function Dashboard() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = ["Jan.", "Feb.", "Mar.", "Apr", "May", "Jun", "Jul"];

  let transactions = [
    {
      userId: 1,
      transactionId: "abc123",
      amount: 100,
      type: "Deposit",
      status: "completed",
    },
    {
      userId: 2,
      transactionId: "def456",
      amount: 50,
      type: "Payment",
      status: "pending",
    },
    {
      userId: 1,
      transactionId: "ghi789",
      amount: 200,
      type: "Loan",
      status: "failed",
    },
    {
      userId: 2,
      transactionId: "jkl012",
      amount: 75,
      type: "Deposit",
      status: "completed",
    },
    {
      userId: 3,
      transactionId: "mno345",
      amount: 150,
      type: "Payment",
      status: "completed",
    },
    {
      userId: 3,
      transactionId: "pqr678",
      amount: 300,
      type: "Loan",
      status: "pending",
    },
  ];

  return (
    <div className="flex justify-between mb-12 mx-4">
      <Sidebar page="dashboard" />
      <div className="w-full pt-8 mx-4">
        <Navbar />
        <h1 className="text-2xl font-bold">Overview</h1>
        <h6 className="pt-4 text-gray-500 text-sm">
          Welcome back, admin. Here is a high-level view of the platform
        </h6>

        <h4 className="text-xl font-bold text-black mt-4">Activity</h4>
        <div className="grid grid-cols-4 mt-8 gap-4">
          <div className="h-[7rem] rounded-lg bg-gray-100 p-4">
            <h5 className="text-sm font-semibold text-gray-700">
              Daily Active Users
            </h5>
            <h2 className="text-2xl font-bold mt-4">1,000</h2>
          </div>
          <div className="h-[7rem] rounded-lg bg-gray-100 p-4">
            <h5 className="text-sm font-semibold text-gray-700">
              New Users (30 Days)
            </h5>
            <h2 className="text-2xl font-bold mt-4">500</h2>
          </div>
          <div className="h-[7rem] rounded-lg bg-gray-100 p-4">
            <h5 className="text-sm font-semibold text-gray-700">Total Loans</h5>
            <h2 className="text-2xl font-bold mt-4">5,000</h2>
          </div>
          <div className="h-[7rem] rounded-lg bg-gray-100 p-4">
            <h5 className="text-sm font-semibold text-gray-700">Defaultors</h5>
            <h2 className="text-2xl font-bold mt-4">2,000</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-8">
          <div className="w-full  h-[20rem] p-4 rounded-md">
            <h3 className="text-base font-medium text-gray-600">
              Users Overtime
            </h3>

            <div className="mt-[-1rem]">
              <LineChart
                width={800}
                height={300}
                series={[
                  { data: pData, label: "Users OverTime", id: "pvId" },
                  { data: uData, label: "Loan Requests", id: "uvId" },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                sx={{
                  ".MuiLineElement-root, .MuiMarkElement-root": {
                    strokeWidth: 1,
                  },
                  ".MuiLineElement-series-pvId": {
                    strokeDasharray: "5 5",
                  },
                  ".MuiLineElement-series-uvId": {
                    strokeDasharray: "3 4 5 2",
                  },
                  ".MuiMarkElement-root:not(.MuiMarkElement-highlighted)": {
                    fill: "#fff",
                  },
                  "& .MuiMarkElement-highlighted": {
                    stroke: "none",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold py-4">Latest Transactions</h3>
          <div>
            <table className="min-w-full bg-white border-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white text-gray-500"
                        : "bg-gray-100 text-gray-500"
                    }
                  >
                    <td className="px-6 py-2 whitespace-nowrap">
                      {transaction.userId}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      {transaction.transactionId}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      {transaction.amount}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap  ">
                      <div
                        className={
                          transaction.type === "Deposit"
                            ? "text-green-500"
                            : transaction.type === "Loan"
                            ? "text-red-500"
                            : "text-blue-500"
                        }
                      >
                        {transaction.type}
                      </div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      {transaction.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
