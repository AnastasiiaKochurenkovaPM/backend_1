const { Model, DataTypes } = require('sequelize');
'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.createTable('shelters', {
        id: {type:DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        nameShelter: {type:DataTypes.STRING, allowNull: false, unique: true},
        city: {type:DataTypes.STRING, allowNull: false},
        email:{type:DataTypes.STRING, allowNull: false, unique: true},
        phone: {type:DataTypes.INTEGER, allowNull: false},
        password1: {type:DataTypes.STRING, allowNull: false},
        password2: {type:DataTypes.STRING, allowNull: false},
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE
      });
        
      },
    
      async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('shelters');
      }
    };
