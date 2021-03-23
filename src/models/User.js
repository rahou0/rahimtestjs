const { DataTypes } = require("sequelize");

module.exports = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  profile_image: {
    type: DataTypes.STRING(64),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  job: {
    type: DataTypes.STRING(64),
    allowNull: true,
  },
  birthdate: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
});
