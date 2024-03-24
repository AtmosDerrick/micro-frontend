import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function CreateCustomer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to submit the form data
  };
  return (
    <div className="flex justify-between ">
      <Sidebar page="customers" />
      <div className="w-full px-4">
        <Navbar />
        <div>
          <div className="flex justify-start gap-4 items-center font-semibold text-gray-500 text-xs">
            <h4>Customers </h4>
            <FontAwesomeIcon icon={faChevronRight} />
            <h4>List</h4> <FontAwesomeIcon icon={faChevronRight} />
            <h4>CreateCustomer</h4>
          </div>
          <div className="text-3xl mt-6 font-semibold">Create Customers</div>
        </div>
        <div>
          <div className="container mx-auto mt-4 p-4 bg-white rounded-lg mt-8">
            <h2 className="text-xl font-bold mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-black text-white text-center px-4 py-2 rounded-md  w-1/4 mt-12">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCustomer;
