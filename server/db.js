const Sequelize = require('sequelize');
const db = new Sequelize('heroku_f520802781111f9', 'bf7ff2ffc45a70', '80c38566',{
    host: 'eu-cdbr-west-02.cleardb.net',
    //port: 3306,
    dialect: 'mysql'
});

module.exports = db;