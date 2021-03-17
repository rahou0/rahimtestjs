const express = require("express");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());

//config
dotenv.config();
port = process.env.PORT || 5000;

//import routes
// const authRoutes = require("./src/routes/authRoutes");
// const postRoute = require("./src/routes/postRoute");

//Route middlewares
// app.use("/", authRoutes);
// app.use("/", postRoute);

app.get("/login", (req, res) => {
  return res.status(200).send({ titile: "login page" });
});
app.get("/post", (req, res) => {
  return res.status(200).send({ titile: "post page" });
});
app.get("/", (req, res) => {
  return res.status(200).send({ titile: "home page" });
});

app.listen(port, () => console.log("server is runing...."));
