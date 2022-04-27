const Sequelize = require('sequelize');
const db = require('../../db');
const { Model, DataTypes } = require('sequelize');

module.exports = db.define('Shelters', {
    id: {type:DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    nameShelter: {type:DataTypes.STRING, allowNull: false},
    city: {type:DataTypes.STRING, allowNull: false},
    email:{type:DataTypes.STRING, allowNull: false, unique: true},
    phone: {type:DataTypes.INTEGER, allowNull: false},
    password1: {type:DataTypes.STRING, allowNull: false},
    password2: {type:DataTypes.STRING, allowNull: false}
})