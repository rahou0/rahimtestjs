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
app.get("/tranding", (req, res) => {
  const results = [
    {
      id: 1,
      title: "Djemila",
      address: "Setif, Algeria",
    },
    {
      id: 2,
      title: "Prince Abdel Kader Mosque",
      address: "Constantine, Algeria",
    },
    {
      id: 3,
      title: "Fort Santa Cruz",
      address: "Oran, Algeria",
    },
    {
      id: 4,
      title: "Kasbah of Algiers",
      address: "Algiers, Algeria",
    },
    {
      id: 5,
      title: "Memorial du Martyr",
      address: "Algiers, Algeria",
    },
    {
      id: 6,
      title: "Timgad",
      address: "Batna, Algeria",
    },
  ];
  return res.status(200).send(results);
});
app.listen(port, () => console.log("server is runing...."));
