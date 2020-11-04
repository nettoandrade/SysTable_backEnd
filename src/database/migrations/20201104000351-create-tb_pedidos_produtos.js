'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_pedidos_produtos', { 
      id_pedido_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },       
      id_pedido: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_pedidos', key: 'id_pedido'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',        
        allowNull: false,
      },  
      id_produto: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_produtos', key: 'id_produto'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',        
        allowNull: false,
      },
      nu_quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nm_observacao: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('tb_pedidos_produtos');    
  }
};
