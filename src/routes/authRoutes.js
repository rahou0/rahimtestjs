const router = require("express").Router();
const authControllers = require("../controllers/authControllers");

router.post("/registre", authControllers.registre);
router.post("/login", authControllers.login);

module.exports = router;
