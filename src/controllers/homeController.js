const { getAllUsers } = require("../database/test");
module.exports.getUsers = async (req, res) => {
  try {
    const results = await getAllUsers();
    if (results) return res.status(400).send("no user in table users");
    res.status(201).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};
