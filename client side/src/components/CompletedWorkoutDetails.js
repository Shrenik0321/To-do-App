import Axios from "../axios.js";
import logo from "../images/muscle (3).png";
import deleteBtn from "../images/delete.png";

let author = sessionStorage.getItem("Author");

const CompletedWorkoutDetails = ({ workout }) => {
  const handleCheck = async (e, id) => {
    window.location.href = "/home";
    console.log(id);
    try {
      if (e.target.checked) {
        console.log("ff");
        await Axios.post("/status/" + id, {
          status: "1",
        });
      } else {
        console.log("jj");
        await Axios.post("/status/" + id, {
          status: "0",
        });
      }
    } catch {
      console.log("Error");
    }
  };

  const handleDelete = async (id) => {
    try {
      await Axios.delete("/del/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="workout-details bg-slate-900 rounded-md">
      <span>Author: {author}</span>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="detail-title">
        <h3>{workout.workout}</h3>
      </div>
      <div className="detail-load">
        <p>
          <strong style={{ color: "#f37a24" }}>Load (kg): </strong>
          {workout.loads}
        </p>
      </div>
      <div className="detail-reps">
        <p>
          <strong style={{ color: "#f37a24" }}>Number of reps: </strong>
          {workout.reps}
        </p>
      </div>
      <div className="del">
        <img src={deleteBtn} alt="" onClick={handleDelete} />
      </div>
      <div className="check-box">
        <input
          defaultChecked={true}
          type="checkbox"
          id="completed"
          name="completed"
          onChange={(e) => handleCheck(e, workout.id)}
        />
      </div>
    </div>
  );
};

export default CompletedWorkoutDetails;
