'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: '75a16b5d-14fd-4ca8-9af8-b8d0164e7c88',
        email: 'test@test.com',
        first_name: 'John',
        last_name: 'Builder',
        date_of_birth: ''
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
