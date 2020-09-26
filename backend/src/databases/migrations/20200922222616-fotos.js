'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable(
       'fotos',
        { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false
        },
        id_post:{
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'posts',
            key: 'id',
          },
        onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
         },
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        }
        });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('fotos');
     
  }
};
