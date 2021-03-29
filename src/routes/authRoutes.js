const router = require("express").Router();
const authControllers = require("../controllers/authControllers");
const { verifyActivationToken } = require("../middlewares/verifyToken");

router.post("/registre", authControllers.registre);
router.post("/login", authControllers.login);
router.post("/reset", authControllers.login);
router.post("/resend", authControllers.login);
router.get(
  "/activate/:id",
  verifyActivationToken,
  authControllers.activateAccount
);

module.exports = router;
