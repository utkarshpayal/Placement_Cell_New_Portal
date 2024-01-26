import React, { useState } from "react";
import BKBIET from "../assets/BKBIET.png";
import Cookies from "js-cookie";
export const USERNAME_COOKIENAME = "username";
import '../index.css'
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      window.location.href = "/";
      Cookies.set(USERNAME_COOKIENAME, username, { expires: 1 / 24 });
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1544991185-13fe5d113fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} > 
      <div className="flex flex-col items-center ">
        <img
          src="https://imgs.search.brave.com/ugR9DJ3OF2facjPF2tvSXRaH1WxryXB-9ZKqmZuThB0/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMi8yMy9M/b2dvX0JLX0Jpcmxh/X0luc3RpdHV0ZV9v/Zl9FbmdpbmVlcmlu/Z18lMjZfVGVjaG5v/bG9neV9QaWxhbmku/cG5n"           alt="Logo 2"
          className="mb-8 w-40"
        />
        <img src={BKBIET} alt="Logo 1" className="mb-4" />
      </div>
        
     
     
      <div className="w-1/3 h-1/2 bg-white p-8  shadow-md " 
       style={{
        backgroundImage: `url('https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <h1 className="text-white text-3xl font-bold mb-6 pl-4 flex justify-center">
          Login
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="mt-4 bg-blue-500 text-white p-3 w-full rounded hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};