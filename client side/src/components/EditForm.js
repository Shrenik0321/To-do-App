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
      <div className="card-e-form border-solid border-4 rounded-md">
        <div className="form-container">
          <form className="formClass text-2xl font-bold">
            <h2>Edit Workout</h2>

            <label className="w-form-label">Exercise Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />

            <label className="w-form-label">Load (in kg):</label>
            <input
              type="text"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
              id="load"
            />

            <label className="w-form-label">Number of Reps:</label>
            <input
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
              Update Workout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
