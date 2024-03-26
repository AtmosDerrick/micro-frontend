import React, { useCallback, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Webcam from "react-webcam";

function CreateCustomer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    location: "",
    profileImage: null,
    cardImage: null,
  });
  const [imageActive, setImageActive] = useState(false);

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileImageChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleCardImageChange = (e) => {
    setFormData({ ...formData, cardImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your form submission logic
  };

  // const handleTakePicture = () => {
  //   navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  //     const video = document.createElement("video");
  //     document.body.appendChild(video);
  //     video.srcObject = stream;
  //     video.play();

  //     const canvas = document.createElement("canvas");
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;

  //     const context = canvas.getContext("2d");
  //     context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //     const dataURL = canvas.toDataURL("image/jpeg");

  //     setFormData({ ...formData, profileImage: dataURL });

  //     stream.getTracks().forEach((track) => track.stop());
  //     video.srcObject = null; // Stop the video stream
  //     document.body.removeChild(video);
  //     document.body.removeChild(canvas);
  //   });
  // };

  return (
    <div className="flex justify-between ">
      <Sidebar page="customers" />
      <div className="w-full px-4">
        <Navbar />
        <div className="">
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
            <div className="w-full mx-auto  p-4 bg-white rounded-lg mt-8">
              <h2 className="text-xl font-bold mb-4">Registration Form</h2>
              <form onSubmit={handleSubmit}>
                <div className=" my-4 flex justify-start gap-4">
                  <div className="flex items-center justify-start gap-16">
                    <div className="mb-4">
                      <label
                        htmlFor="profileImage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Profile Image
                      </label>
                      <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImageActive(false);
                          document.getElementById("profileImage").click();
                        }}
                        className="inline-block mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Upload Image
                      </button>
                    </div>
                    <div>OR</div>
                    <div>
                      {!imageActive ? (
                        <button
                          className="border-gray-500 border-[2px] text-black  w-48 h-48 rounded-lg"
                          onClick={() => {
                            setImageActive(true);
                          }}
                        >
                          <FontAwesomeIcon icon={faCamera} /> Capture
                        </button>
                      ) : imgSrc ? (
                        <div className="">
                          <button
                            className="absolute z-40 hover:cursor-pointer bg-red-500 text-white rounded-full ml-2 p-[5px] mt-2"
                            onClick={() => {
                              setImageActive(false);
                            }}
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </button>

                          <img src={imgSrc} alt="webcam" />

                          <div className="btn-container flex justify-center mt-4">
                            <button
                              onClick={retake}
                              className="w-10 h-10 shadow-md rounded-full  border-2 border-gray-700 flex justify-center items-center "
                            >
                              <FontAwesomeIcon icon={faXmark} />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-200 shadow-md p-2 rounded-md">
                          <button
                            className="absolute z-40 hover:cursor-pointer bg-red-500 text-white rounded-full ml-2 p-[5px] mt-2"
                            onClick={() => {
                              setImageActive(false);
                            }}
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </button>
                          <Webcam
                            height={200}
                            width={200}
                            ref={webcamRef}
                            className="rounded-lg"
                          />
                          <div className="btn-container flex justify-center mt-4">
                            <button
                              onClick={capture}
                              className="w-10 h-10 shadow-md rounded-full bg-gray-200 border-2 border-gray-700"
                            ></button>
                          </div>
                        </div>
                      )}

                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="cardImage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card Image
                    </label>
                    <input
                      type="file"
                      id="cardImage"
                      name="cardImage"
                      accept="image/*"
                      onChange={handleCardImageChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 my-12"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCustomer;
