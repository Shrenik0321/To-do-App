const workoutModels = require("../Models/workoutModels");

const main = async (req, res) => {
  let data = await workoutModels.displayDb();
  res.status(200).send(data);
};

const addWorkouts = async (req, res) => {
  const workout = req.body.title;
  const load = req.body.load;
  const reps = req.body.reps;
  let data = await workoutModels.addDb(workout, load, reps);
  res.send(data);
};

const deleteWorkouts = async (req, res) => {
  const workoutId = req.params.id;
  let data = await workoutModels.delDb(workoutId);
  res.send(data);
};

module.exports = { main, addWorkouts, deleteWorkouts };
