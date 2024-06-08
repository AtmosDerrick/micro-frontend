import { faClose, faPrint, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserAuth } from "../contextApi/UserContext";
import { useParams } from "react-router-dom";

function TransactionHistory({ closeModal, accountNumber }) {
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser, token, setToken } = UserAuth();

  console.log(accountNumber, "transaction number");

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: "/transaction_history/" + accountNumber,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setTransaction(res.data.data);
        console.log(transaction, "working");
        setIsLoading(true);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(true);
      });
  }, []);
  const transactions = [
    {
      transactionId: 1,
      date: "2022-04-01",
      type: "credit",
      amount: 3000,
    },
    {
      transactionId: 2,
      date: "2022-04-02",
      type: "payed",
      amount: -500,
    },
    {
      transactionId: 3,
      date: "2022-04-03",
      type: "payed",
      amount: -1000,
    },
    {
      transactionId: 4,
      date: "2022-04-04",
      type: "payed",
      amount: -200,
    },
    {
      transactionId: 5,
      date: "2022-04-05",
      type: "payed",
      amount: -1200,
    },
    // Add more transactions as needed
  ];
  return (
    <div className="px-2">
      <div className="flex justify-between items-center border-b-[1px] py-2 border-b-gray-400 px-4">
        <div className="text-xl font-medium">Transaction History</div>
        <button onClick={closeModal}>
          <FontAwesomeIcon icon={faClose} className="text-red-500" />
        </button>
      </div>
      <div className="flex justify-between mx-4 py-4">
        <div>
          <h2 className="text-lg font-semibold">Osei Kwame</h2>
        </div>
        <div className="flex justify-end gap-4  ">
          <FontAwesomeIcon icon={faSave} className="text-xl text-blue-500" />
          <FontAwesomeIcon icon={faPrint} className="text-xl text-gray-700" />
        </div>
      </div>

      <div className="mt-12 mx-4 ">
        <div className="">
          <h3 className="text-lg font-semibold text-back text-left">
            Latest Transaction
          </h3>
        </div>

        <table className="min-w-full bg-white border-gray-200">
          <thead>
            <tr className="">
              <th className="pr-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={transaction.transactionId}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="pr-4 py-2 whitespace-nowrap">
                  {transaction.transactionId}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {transaction.date}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {transaction.type}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;
