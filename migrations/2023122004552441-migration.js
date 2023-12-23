'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try{
    await queryInterface.createTable('TestTable5', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: tru,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    });
    }catch (error) {
      console.error('Error in up function:', error);
      // Throw the error to stop the migration
      
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TestTable5');
  },
};
