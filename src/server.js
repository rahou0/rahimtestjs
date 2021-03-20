const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
//config
dotenv.config();
port = process.env.PORT || 5000;

const routes = require("./routes/index");

app.use("/", routes);

app.listen(port, () => console.log("server is runing...."));
