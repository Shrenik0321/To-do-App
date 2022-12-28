import { useEffect, useState } from "react";
import Axios from "../axios.js";
import WorkoutDetails from "../components/workoutDetails.js";
import CompletedWorkoutDetails from "../components/CompletedWorkoutDetails.js";
import WorkoutForm from "../components/workoutForm.js";
import LoginNav from "./LoginNav.js";
import EditForm from "../components/EditForm.js";

const Home = () => {
  // To ensure that the data remains
  const [workouts, setWorkout] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [editID, setEditID] = useState("");
  const [toggle, setToggle] = useState("");
  let userId = sessionStorage.getItem("userId");
  // We use useEffect because useEffect will be run at the very start and any time the dependency is changed. Therefore, all the data
  // will be fetched at the very start.
  useEffect(() => {
    const fetchAllWorkout = async () => {
      try {
        const response = await Axios.get("/home/" + userId);
        setWorkout(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllWorkout();
  }, []);

  return (
    <div className="home">
      <LoginNav setAddTask={setAddTask} setToggle={setToggle} />
      {/* <div style={{ color: "white" }}>{addTask}</div> */}
      {toggle === "add"
        ? addTask && (
            <div className="add-tasks">
              <WorkoutForm />
            </div>
          )
        : editTask && (
            <div className="add-tasks">
              <EditForm editID={editID} />
            </div>
          )}

      <div className="current-tasks border-solid border-4 border-sky-500">
        <h2 className="text-3xl font-semibold">Current Tasks</h2>
        {workouts.map(
          (row) =>
            row.status === "0" && (
              <div className="workouts">
                <WorkoutDetails
                  workout={row}
                  key={row._id}
                  setEditTask={setEditTask}
                  setEditID={setEditID}
                  setToggle={setToggle}
                />
              </div>
            )
        )}
      </div>
      <div className="completed-tasks border-solid border-4 border-sky-500">
        <h2 className="text-3xl font-semibold">Completed Tasks</h2>
        {workouts.map(
          (row) =>
            row.status === "1" && (
              <div className="workouts">
                <CompletedWorkoutDetails workout={row} key={row._id} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Home;
