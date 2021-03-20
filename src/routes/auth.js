const router = require("express").Router();

router.post("/login", (req, res) => {
  return res.status(200).send({ titile: "login page" });
});

router.post("/registre", (req, res) => {
  return res.status(200).send({ titile: "login page" });
});
module.exports = router;
