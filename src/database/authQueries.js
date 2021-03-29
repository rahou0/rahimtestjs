const User = require("../models/User");
const errHandler = require("../helpers/errorHandler");
module.exports.findUser = async (email) => {
  const user = await User.findAll({
    where: { email: email },
  }).catch(errHandler);
  if (user.length === 0) return null;
  return user[0];
};
module.exports.findUserById = async (id) => {
  const user = await User.findAll({
    where: { id },
  }).catch(errHandler);
  if (user.length === 0) return null;
  return user[0];
};
module.exports.addUser = async (userData) => {
  const user = await User.create(userData).catch(errHandler);
  return user;
};
module.exports.activateAccount = async (id) => {
  console.log(id)
  const user = await User.update(
    { fullname: 'true' },
    {
      where: { id },
    }
  ).catch(errHandler);
  console.log('user',user)
  return user;
};
