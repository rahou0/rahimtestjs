const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
//config

port = process.env.PORT || 3000;
//DB
require("./database/connection");
const routes = require("./routes/index");

app.use("/", routes);

app.listen(port, () => console.log("server is runing...."));
