const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
var mysql = require("mysql");
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

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
const routes = require("./routes/index");

app.use("/", routes);

app.listen(port, () => console.log("server is runing...."));