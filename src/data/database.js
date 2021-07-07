const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "be24",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool.promise();