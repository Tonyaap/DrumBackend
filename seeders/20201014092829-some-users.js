"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Stefan Kniest",
        email: "stefan_kniest_@hotmail.com",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "a",
        email: "a@a.com",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
