const jwt = require("jsonwebtoken");
module.exports.verifyHeaderToken = (req, res, next) => {
  //check if token exist
  const token = req.header("authentication");
  if (!token) return res.status(401).send("Access Dnied!");
  try {
    //verify if the token valide
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
module.exports.verifyActivationToken = (req, res, next) => {
  //check if token exist
  const token = req.params.id;
  if (!token) return res.status(401).send("Access Dnied!");
  try {
    //verify if the token valide
    const verified = jwt.verify(token, process.env.ACCTIVATION_TOKEN_SECRET);
    req.user = verified;
    console.log(req.user._id);
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
module.exports.verifyResetToken = (req, res, next) => {
  //check if token exist
  const token = req.params.id;
  if (!token) return res.status(401).send("access Dnied!");
  try {
    //verify if the token valide
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;

    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
