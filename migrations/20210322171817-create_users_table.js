"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      fullname: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      profile_image: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      job: {
        type: Sequelize.STRING(64),
        allowNull: true,
      },
      birthdate: {
        type: Sequelize.DATE(),
        allowNull: false,
      },
      bio: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      activated: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
