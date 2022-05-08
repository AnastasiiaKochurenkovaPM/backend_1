const Sequelize = require('sequelize');
const db = require('../../db');
const { Model, DataTypes } = require('sequelize');

const Shelters = db.define('Shelters', {
    id: {type:DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    nameShelter: {type:DataTypes.STRING, allowNull: false},
    city: {type:DataTypes.STRING, allowNull: false},
    email:{type:DataTypes.STRING, allowNull: false, unique: true},
    phone: {type:DataTypes.STRING, allowNull: false},
    password: {type:DataTypes.STRING, allowNull: false},
    role:{type:DataTypes.STRING, defaultValue: "USER"}
})

const Adverts = db.define('Adverts', {
    id: {type:DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    nameAnimal: {type:DataTypes.STRING, allowNull: false},
    type: {type:DataTypes.STRING, allowNull: false},
    sex:{type:DataTypes.STRING, allowNull: false, unique: true},
    age: {type:DataTypes.INTEGER, allowNull: false},
    size: {type:DataTypes.STRING, allowNull: false},
    ster:{type:DataTypes.STRING, allowNull: false},
    vac:{type:DataTypes.STRING, allowNull: false},
    city:{type:DataTypes.STRING, allowNull: false},
    contact:{type:DataTypes.STRING, allowNull: false},
    img: {type:DataTypes.STRING, allowNull: false}
})


Shelters.hasMany(Adverts)
Adverts.belongsTo(Shelters)


module.exports = {
    Shelters, Adverts
}