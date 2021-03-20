const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
var mysql = require("mysql2");
const app = express();
app.use(express.json());
app.use(cors());
//config
dotenv.config();
port = process.env.PORT || 5000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "rahim",
  password: "Rahim2016-",
  database: "doordz",
});

connection.query("SELECT * FROM `Users`", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
const routes = require("./routes/index");

app.use("/", routes);

app.listen(port, () => console.log("server is runing...."));
