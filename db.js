const Sequelize = require('sequelize');
const db = new Sequelize('Shelters', 'root', '01152205',{
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

module.exports = db;