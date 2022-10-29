import { useEffect, useState } from "react";
import Axios from "../axios.js";
import WorkoutDetails from "../components/workoutDetails.js";
import WorkoutForm from "../components/workoutForm.js";
const Home = () => {
  // To ensure that the data remains
  const [workouts, setWorkout] = useState([]);

  // We use useEffect because useEffect will be run at the very start and any time the dependency is changed. Therefore, all the data
  //   will be fetched at the very start.
  useEffect(() => {
    const fetchAllWorkout = async () => {
      try {
        const res = await Axios.get("/");
        setWorkout(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllWorkout();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((row) => (
          <WorkoutDetails workout={row} key={row._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
