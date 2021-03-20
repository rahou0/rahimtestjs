const router = require("express").Router();
const auth = require("./auth");
const contact = require("./contact");
const contribute = require("./contribute");
const home = require("./home");
const place = require("./place");

router.use("/", auth);
router.use("/contact", contact);
router.use("/contribute", contribute);
router.use("/", home);
router.use("/", place);

module.exports = router;
