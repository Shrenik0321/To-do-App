import React from "react";
import hand from "../images/protest (2).png";
import { Link } from "react-router-dom";

const LoginNav = ({ setAddTask, setToggle }) => {
  const handleAddTask = (e) => {
    if (e.target.click) {
      setAddTask((prev) => !prev);
      setToggle("add");
    }
  };

  return (
    <nav className="p-5 md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <div className="hand">
          <img src={hand} alt="" />
        </div>
        <span className="text-5xl cursor-pointer text-primary font-bold">
          Power Hour
        </span>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <div className="nav-task">
          <span
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md"
            onClick={(e) => handleAddTask(e)}
          >
            Add task
          </span>
        </div>
        <Link to="/">
          <div className="nav-logout">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md">
              Logout
            </span>
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default LoginNav;
