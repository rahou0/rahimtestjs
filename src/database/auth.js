const { connection } = require("../config/database");
const { use } = require("../routes");

module.exports.findUser = async (email) => {
  connection.query(
    "SELECT * FROM `Users` WHERE `email` = ? ",
    [email],
    function (err, results) {
      if (err) throw new Error(err);
      return results;
    }
  );
};

module.exports.addUser = (user) => {
  connection.query(
    "INSERT INTO `Users` (fullname,email,password,gender,image,city,state,phoneNumber,job,birthday,bio) VALUES (?,?,?,?,?,?,?,?,?,?,?",
    [
      user.fullname,
      user.email,
      user.password,
      user.gender,
      user.image,
      user.city,
      user.state,
      user.phoneNumber,
      user.job,
      user.birthday,
      user.bio,
    ],
    function (err, results) {
      if (err) throw new Error(err);
      return results;
    }
  );
};
