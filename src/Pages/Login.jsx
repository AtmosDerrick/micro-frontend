import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/dashboard");

    // Add your sign-in logic here
    if (username === "your_username" && password === "your_password") {
      setError("");
      console.log("Sign in successful");
      // Redirect or perform other actions upon successful sign-in
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-screen flex justify-between items-center bg-white">
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
          <form onSubmit={handleSignIn} className=" w-5/6 mx-auto mt-8">
            <div className="mb-4">
              <div className="mb-2 text-white">
                <label htmlFor="username">Username:</label>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button
              type="submit"
              className=" w-full mt-8 py-3 rounded-2xl text-white bg-gray-900">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
