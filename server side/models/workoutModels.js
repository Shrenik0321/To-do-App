const mysql = require("mysql2");
// Create DB Connection
let con = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mern_db",
  })
  .promise();

// Scan DB
async function displayDb() {
  let sql = `SELECT id,workout, loads, reps FROM workout_tb`;
  // An array of arrays of objects will be returned. The first array of objects within the array contains the read data from the db and the second array contains meta data.
  const [rows] = await con.query(sql);
  return rows;
}

// Add workout to DB
async function addDb(workout, load, reps) {
  let sql = "INSERT INTO workout_tb (workout, loads, reps) VALUES (?,?,?)";
  con.query(sql, [workout, load, reps], (err, result) => {
    if (err) {
      return err;
    } else {
      return "Values Inserted";
    }
  });
}

async function delDb(workoutId) {
  let sql = "DELETE FROM workout_tb WHERE id=?";
  con.query(sql, [workoutId], (err, data) => {
    if (err) {
      return err;
    } else {
      return "Workout Deleted";
    }
  });
}

module.exports = { displayDb, addDb, delDb };
