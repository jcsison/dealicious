'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('favorites', [
      {
        id: 'bea35d11-91eb-4f67-88a8-039e3e2562e4',
        productId: '908f48dd-ca29-497a-9ea8-295c5177cc98',
        userId: '75a16b5d-14fd-4ca8-9af8-b8d0164e7c88'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('favorites', null, {});
  }
};
