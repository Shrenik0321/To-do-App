import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../axios.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, errorMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/register", {
        username: username,
        password: password,
      });
      if (response.data !== true) {
        errorMsg(response.data);
      } else {
        errorMsg("");
        window.location.href = "/login";
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="card border-solid border-4 rounded-md">
        <form action="">
          <span>
            <h2 className="text-2xl font-bold">Register</h2>
          </span>
          <label className="font-semibold">Enter Username :</label>
          <input
            required
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <label className="font-semibold">Enter Pasword :</label>
          <input
            required
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button
            className="font-bold text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md"
            onClick={handleRegister}
          >
            Register
          </button>
          {error && <p>{error}</p>}
          <div className="form-footer">
            <hr></hr>
            <p>
              Go back? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
