import React, { useEffect, useState } from "react";
import photo1 from "../images/ali3-1.jpg";
import { Link } from "react-router-dom";
import Axios from "../axios.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, errorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", {
        username: username,
        password: password,
      });
      if (response.data.auth !== true) {
        errorMsg(response.data.msg);
      } else {
        errorMsg("");
        window.location.href = "/home";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <section>
        <div className="card border-solid border-4 rounded-md">
          <form action="">
            <span>
              <h2 className="text-2xl font-bold">Login</h2>
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
            <label className="font-semibold">Enter Password :</label>
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
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
            {error && <p className="errorMsg">{error}</p>}
            <div className="form-footer">
              <hr></hr>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
