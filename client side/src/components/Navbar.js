import { Link } from "react-router-dom";

const Navbar = () => {
  // const handleAddTask = (e) => {
  //   if (e.target.click) {
  //     setAddTask((prev) => !prev);
  //   }
  // };

  return (
    <div className="navbar">
      <div className="nav-title">
        <h1>Workout Buddy</h1>
      </div>
      <div className="nav-content">
        <div className="nav-task">
          <span>Add task</span>
        </div>
        <Link to="/register">
          <div className="nav-signnup">
            <span>Sign up</span>
          </div>
        </Link>
        <Link to="/login">
          <div className="nav-signnup">
            <span>Sign in</span>
          </div>
        </Link>
        <Link to="/">
          <div className="nav-logout">
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
