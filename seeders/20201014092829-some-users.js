"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Stefan Kniest",
        email: "stefan_kniest_@hotmail.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "a",
        email: "a@a.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
