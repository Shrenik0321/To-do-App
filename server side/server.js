import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

// Create DB Connection
let con = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mern_db",
  })
  .promise();

async function displayDb() {
  // Scan DB
  let sql = `SELECT id,workout, loads, reps FROM workout_tb`;
  const [rows] = await con.query(sql);
  return rows;
}

app.get("/", async (req, res) => {
  let data = await displayDb();
  res.status(200).send(data);
});

app.post("/add", async (req, res) => {
  let sql = "INSERT INTO workout_tb (workout, loads, reps) VALUES (?,?,?)";
  const workout = req.body.title;
  const load = req.body.load;
  const reps = req.body.reps;
  con.query(sql, [workout, load, reps], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
});

app.delete("/del/:id", async (req, res) => {
  const workoutId = req.params.id;
  let sql = "DELETE FROM workout_tb WHERE id=?";
  con.query(sql, [workoutId], (err, data) => {
    if (err) return res.json(err);
    return res.join("Workout Deleted");
  });
});

app.listen(3001);
