import Axios from "../axios.js";
import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (e) => {
    if (title !== "") {
      try {
        const resp = await Axios.post("/add", {
          title: title,
          load: load,
          reps: reps,
        });
      } catch (error) {
        console.log(error.resp);
      }
    }
  };

  return (
    <div className="card">
      <div className="container">
        <form className="formClass">
          <h3>Add a New Workout</h3>

          <label>Exercise Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />

          <label>Load (in kg):</label>
          <input
            type="text"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            id="load"
          />

          <label>Number of Reps:</label>
          <input
            type="text"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            id="reps"
          />
          <button onClick={handleSubmit}>Add Workout</button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;
