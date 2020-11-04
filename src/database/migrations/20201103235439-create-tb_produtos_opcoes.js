'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_produtos_opcoes', { 
      id_produto_opcao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nm_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_produtos', key: 'id_produto'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',        
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tb_produtos_opcoes');    
  }
};
