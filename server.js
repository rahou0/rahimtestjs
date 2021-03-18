const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
//config
dotenv.config();
port = process.env.PORT || 5000;

//import routes
// const authRoutes = require("./src/routes/authRoutes");
// const postRoute = require("./src/routes/postRoute");

//Route middlewares
// app.use("/", authRoutes);
// app.use("/", postRoute);

const places = [
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
  return res.status(200).send(JSON.stringify(places));
});
app.get("/place/:id", (req, res) => {
  const place = places.find(({ id }) => id.toString() === req.params.id);
  if (place === null) return res.status(400).send("dont exist");
  return res.status(200).send(place);
});
app.get("/search/", (req, res) => {
  console.log(req.query.name);
  console.log(req.query.city);
  const place = null;
  if (req.query.name === "all" || req.query.city === "all")
    return res.status(200).send(JSON.stringify(places));
  if (req.query.name !== null && req.query.city === null)
    place = places.find(({ title }) => title === req.query.name);
  if (req.query.city !== null && req.query.name === null)
    place = places.find(({ address }) => address === req.query.city);
  console.log(place);
  if (place === null) return res.status(400).send("dont exist");
  return res.status(200).send(place);
});
app.listen(port, () => console.log("server is runing...."));
