const mysql = require("mysql");
// Create DB Connection
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mern_db",
});

// async function getLogin(username, password) {
//   let sql =
//     "SELECT username,password FROM login_tb WHERE username=? AND password=? ";
//   try {
//     const [rows] = await con.query(sql, [username, password]);
//     return rows;
//   } catch (err) {
//     return err;
//   }
// }

// async function addLogin(username, password) {
//   let sql = "INSERT INTO login_tb (username, password) VALUES (?,?)";
//   await con.query(sql, [username, password], (err, data) => {
//     if (err) {
//       return err;
//     } else {
//       return "Register Successful!";
//     }
//   });
// }

module.exports = con;
