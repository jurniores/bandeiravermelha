'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('tags',
      { 
        id: {
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        tags:{
          type: Sequelize.STRING,
          allowNull: false
        },
        id_post:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'posts',
            key:'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        }
      }
        );
     
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('tags');
     
  }
};
