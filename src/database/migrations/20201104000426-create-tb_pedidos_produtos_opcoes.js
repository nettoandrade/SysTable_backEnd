'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_pedidos_produtos_op', { 
      id_pedido_produto_op: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },       
      id_pedido_produto: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_pedidos_produtos', key: 'id_pedido_produto'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',        
        allowNull: false,
      },  
      id_produto_opcao: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_produtos_opcoes', key: 'id_produto_opcao'},
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
    await queryInterface.dropTable('tb_pedidos_produtos_opcoes');    
  }
};
