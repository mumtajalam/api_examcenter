const mysql = require("mysql2");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mumtaj#@1",
  database: "online_exam",
});
