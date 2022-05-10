// Import the sequelize constructor

const Sequelize = require('sequelize');
require('dotenv').config():

// Create connection to the database from schema file
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;