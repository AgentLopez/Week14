'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      address2: {
        type: Sequelize.STRING
      },
      choice: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      },
      shipped: {
        type: Sequelize.BOOLEAN
      },
      tracknum: {
        type: Sequelize.STRING
      },
      shipdate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cards');
  }
};