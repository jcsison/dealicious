'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: '908f48dd-ca29-497a-9ea8-295c5177cc98',
        name: 'Test Product 1',
        description: 'Test Description 1',
        price: 1.0,
        image_url: 'Test URL 1'
      },
      {
        id: '71536b38-3adf-465f-a4a4-caf6c1b7d2b9',
        name: 'Test Product 2',
        description: 'Test Description 2',
        price: 2.0,
        image_url: 'Test URL 2'
      },
      {
        id: '0b006f92-b77a-4156-aa85-b191ddb4963f',
        name: 'Test Product 3',
        description: 'Test Description 3',
        price: 3.0,
        image_url: 'Test URL 3'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
