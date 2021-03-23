module.exports.addUser = async (data) => {
  const User = require("../models/User");
  const errHandler = (err) => {
    console.log("Error: ", err);
  };
  const user = await User.create(data).catch(errHandler);
  return user;
};
module.exports.addUser = async (data) => {
  const User = require("../models/User");
  const errHandler = (err) => {
    console.log("Error: ", err);
  };
  const user = await User.create(data).catch(errHandler);
  return user;
};
