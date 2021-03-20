const router = require("express").Router();
const { places } = require("../helpers/Data");

router.get("/", (req, res) => {
  return res.status(200).send({ titile: "home page" });
});

router.get("/tranding", (req, res) => {
  return res.status(200).send(JSON.stringify(places));
});

module.exports = router;
