const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/registre", authController.registre);
module.exports = router;
