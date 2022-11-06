const express = require("express");
const router = express.Router();
const workoutController = require("../Controllers/workoutControllers");

router.get("/", workoutController.main);

router.post("/add", workoutController.addWorkouts);

router.delete("/del/:id", workoutController.deleteWorkouts);

module.exports = router;
