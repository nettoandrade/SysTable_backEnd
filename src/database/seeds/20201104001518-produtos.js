'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
      await queryInterface.bulkInsert('tb_produtos', [
        {
          nm_nome: 'Coxinha',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
        {
          nm_nome: 'Açai',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
        {
          nm_nome: 'Hamburguer',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('tb_produtos', null, {});     
  }
};
