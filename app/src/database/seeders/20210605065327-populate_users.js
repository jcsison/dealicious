'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: '75a16b5d-14fd-4ca8-9af8-b8d0164e7c88',
        email: 'test@test.com',
        first_name: 'John',
        last_name: 'Builder',
        date_of_birth: '2021-06-19 00:44:17'
      },
      {
        id: '1a9aaf6b-01ca-40e6-acf9-584ae4475adb',
        email: 'john.doe@test.com',
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '2021-06-20 00:44:17'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
