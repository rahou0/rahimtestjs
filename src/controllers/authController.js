const bcrypt = require("bcrypt");
const {
  loginValidation,
  registerValidation,
} = require("../validations/authValidation");
const jwt = require("jsonwebtoken");
const { findUser, addUser } = require("../database/auth");

module.exports.registre = async (req, res) => {
  //validate data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //verify if user exist
  const userExist = await findUser(req.body.email);
  if (userExist) return res.status(400).send("this email already taken");
  //create hashed password
  const user = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  //create user
  //user = { ...user, password: hashedpassword };
  try {
    const savedUser = await addUser(user);
    res.status(201).send("you are successfully registered");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.login = async (req, res) => {
  //validate user credinetial
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //verify if email exist in database
  const user = await findUser(req.body.email);
  if (!user) return res.status(400).send("email or password is wrong!");
  //check if the password match
  const validePass = await bcrypt.compare(req.body.password, user.password);
  if (!validePass) return res.status(400).send("email or password is wrong!");
  try {
    //create and assign a token
    const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
    //send token with header request
    res.header("authentication", token).status(200).send(token);
  } catch (error) {
    res.status(500).send(error);
  }
};
