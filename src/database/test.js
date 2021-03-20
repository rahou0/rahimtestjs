const { connection } = require("../config/database");
module.exports.getAllUsers = async () => {
  return await connection.query(
    "SELECT * FROM `Users`",
    function (err, results) {
      if (err) throw new Error(err);
      console.log(results);
      return results;
    }
  );
};
