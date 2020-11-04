'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_pedidos', { 
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nm_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nm_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },      
      id_mesa: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_mesas', key: 'id_mesa'},
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
    await queryInterface.dropTable('tb_pedidos');    
  }
};
