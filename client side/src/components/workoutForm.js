import Axios from "../axios.js";
import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      try {
        const response = await Axios.post("/add", {
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
      <div className="card">
        <div className="form-container">
          <form className="formClass">
            <h2>Add a New Workout</h2>

            <label className="w-form-label" style={{ "margin-right": "580px" }}>
              Exercise Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />

            <label className="w-form-label" style={{ "margin-right": "580px" }}>
              Load (in kg):
            </label>
            <input
              type="text"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
              id="load"
            />

            <label className="w-form-label" style={{ "margin-right": "550px" }}>
              Number of Reps:
            </label>
            <input
              type="text"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              id="reps"
            />
            <button type="submit" onClick={handleSubmit}>
              Add Workout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkoutForm;
