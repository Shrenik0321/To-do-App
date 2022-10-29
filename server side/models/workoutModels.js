// import mysql from 'mysql2';

// //Create DB connection
// let con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mern_db",
// }).promise();
  
// export async function displayDb() {
//     // Scan DB
//     let sql = `SELECT id,workout, loads, reps FROM workout_tb`;
//     const [rows] = await con.query(sql);
//     return rows;
// }