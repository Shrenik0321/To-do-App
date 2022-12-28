import Axios from "../axios.js";
import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  let userId = sessionStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      try {
        const response = await Axios.post("/add", {
          userId: userId,
          title: title,
          load: load,
          reps: reps,
        });
        window.location.reload();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="workout-form animate__animated animate__fadeInDown">
      <div className="card-w-form border-solid border-4 rounded-md">
        <div className="form-container">
          <form className="formClass">
            <h2
              className="text-2xl font-bold"
              style={{ "margin-bottom": "35px" }}
            >
              Add a New Workout
            </h2>
            <label className="w-form-label font-semibold">
              Exercise Title:
            </label>
            <input
              style={{ "margin-bottom": "25px" }}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />

            <label className="w-form-label font-semibold">Load (in kg):</label>
            <input
              style={{ "margin-bottom": "25px" }}
              type="text"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
              id="load"
            />

            <label className="w-form-label font-semibold">
              Number of Reps:
            </label>
            <input
              style={{ "margin-bottom": "25px" }}
              type="text"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              id="reps"
            />
            <button
              className="font-bold text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md"
              type="submit"
              onClick={handleSubmit}
            >
              Add Workout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkoutForm;
