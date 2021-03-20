const router = require("express").Router();
const { places } = require("../helpers/Data");
const homeController = require("../controllers/homeController");

router.get("/", homeController.getUsers);

router.get("/tranding", (req, res) => {
  return res.status(200).send(JSON.stringify(places));
});

module.exports = router;
