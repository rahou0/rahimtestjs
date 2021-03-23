"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("places", {
      id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      place: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING(4096),
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
      latitude: {
        type: Sequelize.INTEGER(8),
        allowNull: false,
      },
      latitude: {
        type: Sequelize.INTEGER(8),
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      views: {
        type: Sequelize.INTEGER(7),
        allowNull: false,
        defaultValue: 0,
      },
      userId: Sequelize.INTEGER(11),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("places");
  },
};
