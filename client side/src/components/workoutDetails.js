import Axios from "../axios.js";

const WorkoutDetails = ({ workout }) => {
  const handleDelete = async (id) => {
    try {
      const resp = await Axios.delete("/del/" + id);
      window.location.href = window.location.href;
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.workout}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.loads}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <button onClick={() => handleDelete(workout.id)}>Delete</button>
    </div>
  );
};

export default WorkoutDetails;
