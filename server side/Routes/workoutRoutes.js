const express = require("express");
const router = express.Router();
const workoutController = require("../Controllers/workoutControllers");

router.get("/home", workoutController.main);

router.get("/edit/:id", workoutController.editWorkouts);

router.post("/add", workoutController.addWorkouts);

router.post("/status/:id", workoutController.workoutStatus);

router.post("/update", workoutController.updateWorkout);

router.delete("/del/:id", workoutController.deleteWorkouts);

router.post("/login", workoutController.login);

router.post("/register", workoutController.register);

module.exports = router;
