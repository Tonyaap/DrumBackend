"use strict";

// const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("compositions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      compositionName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      kick: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      snare: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      clap: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      closedhat: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      openhat: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      hitom: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      lotom: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      rim: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      cymbal: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("compositions");
  },
};
