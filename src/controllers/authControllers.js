const bcrypt = require("bcrypt");
const {
  registerValidation,
  loginValidation,
} = require("../validations/authValidations");
const User = require("../models/User");
const errHandler = (err) => {
  console.log("Error: ", err);
};
module.exports.registre = async (req, res) => {
  //validate data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //verify if user exist
  const userExist = await User.findAll({
    where: { email: req.body.email },
  }).catch(errHandler);

  if (userExist.length !== 0)
    return res.status(400).send("this email already taken");

  //create hashed password
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  //create user
  const user = { ...req.body, password: hashedpassword };
  delete user.post2021;
  try {
    const savedUser = await User.create(user).catch(errHandler);
    res
      .status(201)
      .send({ msg: "you are successfully registered", user: savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports.login = async (req, res) => {
  //validate data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //verify if user exist
  const user = await User.findAll({
    where: { email: req.body.email },
  }).catch(errHandler);

  if (user.length === 0) return res.status(400).send("this email dont exist");

  //verify if password correct
  const isvalidepassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  //if password wrong
  if (!isvalidepassword)
    return res.status(400).send("email or password wrong!");
  //create new token for the user and send it to the user 

  try {
    const savedUser = await User.create(user).catch(errHandler);
    res
      .status(201)
      .send({ msg: "you are successfully registered", user: savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
