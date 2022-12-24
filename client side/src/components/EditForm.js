import Axios from "../axios.js";
import { useState, useEffect } from "react";

const EditForm = ({ editID }) => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [editWorkout, setEditWorkout] = useState([]);

  const handleSubmit = async (e) => {
    if (title !== "") {
      try {
        await Axios.post("/update", {
          id: editID,
          title: title,
          load: load,
          reps: reps,
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchWorkoutToEdit = async (editID) => {
      try {
        const response = await Axios.get("/edit/" + editID);
        console.log(response.data[0]);
        setEditWorkout(response.data[0]);
        setTitle(response.data[0]["workout"]);
        setLoad(response.data[0]["loads"]);
        setReps(response.data[0]["reps"]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWorkoutToEdit(editID);
  }, []);

  return (
    <div className="workout-form animate__animated animate__fadeInDown">
      <div className="card">
        <div className="form-container">
          <form className="formClass">
            <h2>Edit Workout</h2>

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

export default EditForm;
