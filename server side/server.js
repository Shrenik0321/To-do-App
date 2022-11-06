// IMPORTS
const express = require("express");
const cors = require("cors");
const workoutRoutes = require("./Routes/workoutRoutes");
const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
app.use(workoutRoutes);

// PORT
app.listen(3001);
