const Sequelize = require("sequelize");

module.exports = sequelize.define("Image", {
  id: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: false,
    autoincrement: true,
    primaryKey: true,
  },
  path: {
    type: Sequelize.DataTypes.STRING(256),
    allowNull: false,
    unique: true,
  },
});
