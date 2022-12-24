const con = require("../Models/workoutModels");
const bcrypt = require("bcrypt");

const main = async (req, res) => {
  let sql = `SELECT id,workout, loads, reps, status FROM workout_tb`;
  con.query(sql, (err, result) => {
    if (err) {
      return res.send(err);
    } else if (result) {
      return res.status(200).send(result);
    }
  });
};

const addWorkouts = async (req, res) => {
  const workout = req.body.title;
  const load = req.body.load;
  const reps = req.body.reps;
  let sql = "INSERT INTO workout_tb (workout, loads, reps, status) VALUES ?";
  values = [[workout, load, reps, "0"]];
  con.query(sql, [values], (err, result) => {
    if (err) {
      return res.send(err);
    } else if (result) {
      return res.status(200).send(result);
    }
  });
};

const editWorkouts = async (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM workout_tb WHERE id=" + id;
  con.query(sql, (err, result) => {
    if (err) {
      return res.send(err);
    } else if (result) {
      return res.status(200).send(result);
    }
  });
};

const workoutStatus = async (req, res) => {
  let id = req.params.id;
  let status = req.body.status;
  let sql =
    "UPDATE workout_tb SET status = '" + status + "' WHERE id = '" + id + "'";
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result.affectedRows + " record(s) updated");
    }
  });
};

const deleteWorkouts = async (req, res) => {
  let id = req.params.id;
  let sql = "DELETE FROM workout_tb WHERE id=?";
  con.query(sql, [id], (err, result) => {
    if (err) {
      return res.send(err);
    } else if (result) {
      return res.send("Workout Deleted");
    }
  });
};

const login = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let sql = "SELECT * FROM users_tb WHERE username=?";
  values = [[username]];
  con.query(sql, values, (err, result) => {
    if (err) {
      return res.send(err);
    } else if (result) {
      if (result.length === 0) {
        return res.json({
          auth: false,
          msg: "Unavailable username, Register!",
        });
      } else if (result.length > 0) {
        // Check password
        const isPasswordCorrect = bcrypt.compareSync(
          password,
          result[0].password
        );
        if (!isPasswordCorrect) {
          let data = result[0];
          delete data.password;
          data["auth"] = false;
          data["msg"] = "Wrong username or password, try again!";
          return res.send(data);
        } else {
          let data = result[0];
          delete data.password;
          data["auth"] = true;
          return res.send(data);
          // const token = jwt.sign({ id }, "jwtSecret", {
          //   expiresIn: 300,
          // });
          // data["token"] = token;
          // res
          //   .cookie("access_token", token, {
          //     httpOnly: true,
          //   })
          //   .status(200)
          //   .send(data);
        }
      }
    }
  });
};

const register = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  let sql1 = "SELECT id FROM users_tb WHERE username=?";
  values = [[username]];
  con.query(sql1, [values], (err, result) => {
    if (err) {
      return res.send(err);
    } else if (result) {
      if (result.length == 0) {
        values2 = [[username, hash]];
        let sql2 = "INSERT INTO users_tb (username, password) VALUES ?";
        con.query(sql2, [values2], (err2, result2) => {
          if (err2) {
            return res.send(err2);
          } else if (result2) {
            return res.send(true);
          }
        });
      } else if (result.length > 0) {
        return res.send("User already exists");
      }
    }
  });
};

const updateWorkout = async (req, res) => {
  // **** Issue to be clarified  **** //
  // let workout = req.body.title;
  // let reps = req.body.reps;
  // let load = req.body.load;
  // let id = req.body.id;
  // con.connect(function (err) {
  //   if (err) throw err;
  //   let sql = `UPDATE workout_tb SET
  //   workout = '${workout}',
  //   reps='${reps}',
  //   load ='${load}'
  //   WHERE id = '${id}'`;
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result.affectedRows + " record(s) updated");
  //   });
  // });
};

module.exports = {
  main,
  addWorkouts,
  editWorkouts,
  deleteWorkouts,
  login,
  register,
  workoutStatus,
  updateWorkout,
};
