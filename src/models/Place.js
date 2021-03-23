const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Place", {
  id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  place: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING(4096),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  latitude: {
    type: DataTypes.INTEGER(8),
    allowNull: false,
  },
  latitude: {
    type: DataTypes.INTEGER(8),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  views: {
    type: DataTypes.INTEGER(7),
    allowNull: false,
    defaultValue: 0,
  },
});
