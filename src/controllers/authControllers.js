const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  findUser,
  addUser,
  findUserById,
  activateAccount,
} = require("../database/authQueries");
const { sendEmail } = require("../services/sendEmail");

const {
  registerValidation,
  loginValidation,
  resendEmailValidation,
  resetPasswordValidation,
} = require("../validations/authValidations");

module.exports.registre = async (req, res) => {
  //validate data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //verify if user exist
  const userExist = await findUser(req.body.email);
  if (userExist) return res.status(400).send("this email already taken");
  //create hashed password
  const user = await hashPassword(req.body);
  try {
    const savedUser = await addUser(user);
    const token = jwt.sign(
      { _id: savedUser.id },
      process.env.ACCTIVATION_TOKEN_SECRET
    );
    await sendEmail(req.body.email, token);
    res.status(201).send({
      msg: "you are successfully registered",
      user: savedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports.activateAccount = async (req, res) => {
  const user = await activateAccount(req.user._id);
  if (!user) return res.status(400).send("this user dont exist");
  res.send({ user: user });
  //user li jina man token verification
};
module.exports.login = async (req, res) => {
  //validate data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await findUser(req.body.email);
  if (!user) return res.status(400).send("this email dont exist");
  //verify if password correct
  const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  //if password wrong
  if (!passwordMatch) return res.status(400).send("email or password wrong!");
  //create and assign a token
  const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
  res
    .header("auth-token", token)
    .status(200)
    .send({ token, fullname: user.fullname });
};
module.exports.resend = async (req, res) => {
  const { error } = resendEmailValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await findUser(req.body.email);
  if (!user) return res.status(400).send("this email dont exist");
  // if user exist send reset password email!
};
module.exports.resetPassword = async (req, res) => {
  const { error } = resetPasswordValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //user li jina man token verification
};
const hashPassword = async (user) => {
  const salt = await bcrypt.genSalt(10);
  console.log(user.password);
  const hashedpassword = await bcrypt.hash(user.password, salt);
  const updatedUser = { ...user, password: hashedpassword };
  delete updatedUser.repeat_password;
  return updatedUser;
};
