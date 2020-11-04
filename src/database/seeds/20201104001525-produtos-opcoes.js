'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
      await queryInterface.bulkInsert('tb_produtos_opcoes', [
        {
          nm_nome: 'Sem Verdura',
          id_produto: '3',
          createdAt: '2020-09-29',
          updatedAt: '2020-09-29',
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('tb_produtos_opcoes', null, {});     
  }
};
