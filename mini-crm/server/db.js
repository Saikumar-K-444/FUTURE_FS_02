const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "process.env.DB_PASSWORD",
  database: "mini_crm",
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("MySQL Connected");
});

module.exports = db;
