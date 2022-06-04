const Sequelize = require('sequelize');
require('dotenv').config();

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  'library_db',
  // User
  'root',
  // Password
  'myPassword',
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
