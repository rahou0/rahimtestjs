const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("dbpc", "rahim", "Rahim2016-", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
global.sequelize = sequelize;
