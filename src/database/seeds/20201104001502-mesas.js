'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
      await queryInterface.bulkInsert('tb_mesas', [
        {
          nm_nome: 'Mesa 01',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
        {
          nm_nome: 'Mesa 02',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
        {
          nm_nome: 'Mesa 03',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
        {
          nm_nome: 'Mesa 04',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
        {
          nm_nome: 'Mesa 05',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('tb_mesas', null, {});     
  }
};
