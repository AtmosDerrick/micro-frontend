import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loading from "../assets/images/loading1.gif";

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Add your sign-in logic here
    if (email !== "" && password !== "") {
      axios
        .post("https://alphamega.gitplus.app/api/login/", {
          email,
          password,
        })
        .then((res) => {
          // console.log(res.data);
          navigate("/dashboard");
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError("Password or Email is not correct");
        });
      // Redirect or perform other actions upon successful sign-in
    } else {
      setError();
      setTimeout(() => {
        setError("Invalid email or password");
      }, 500);
    }
  };

  return (
    <div className="h-screen flex justify-between items-center bg-white">
      {isLoading && (
        <div className="w-full h-full bg-white opacity-75 absolute z-10 ">
          <div className="w-full flex justify-center items-center h-full">
            <img src={loading} alt="loading" className="w-64" />
          </div>
        </div>
      )}
      <div className="w-full mx-auto para ">
        <div className="w-2/4 mx-auto  rounded-2xl   py-8 ">
          <div>
            <h2 className="text-center text-xl font-semibold font-sans">
              Micro Finance Dashboard
            </h2>
            <h5 className="text-center text-base text-primary font-semibold">
              Login
            </h5>
          </div>

          {error && (
            <div style={{ color: "red" }} className="text-center mt-8">
              {error}
            </div>
          )}
          <form onSubmit={handleSignIn} className=" w-5/6 mx-auto mt-2">
            <div className="mb-4">
              <div className="mb-2 text-white">
                <label htmlFor="email">email:</label>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full border-[2px] border-gray-800 rounded-xl h-12 p-2  shadow-sm"
              />
            </div>
            <div>
              <div className="mb-4 text-white">
                <label htmlFor="password">Password:</label>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-[2px] border-gray-800 rounded-xl h-12 p-2  shadow-sm"
              />
            </div>

            <div className="flex justify-end text-xs mt-4 text-gray-500">
              <h3>Forgot Password?</h3>
            </div>

            <button
              type="submit"
              className=" w-full mt-8 py-3 rounded-2xl text-white bg-gray-900"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
