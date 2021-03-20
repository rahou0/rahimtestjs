const { connection } = require("../config/database");
module.exports.getAllUsers = async () => {
  connection.query("SELECT * FROM `Users`", function (err, results) {
    if (err) throw new Error(err);
    return results;
  });
};