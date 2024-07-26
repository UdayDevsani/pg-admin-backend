const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 2500,
  dialect: process.env.DB_DIALECT,
  logging: false, // Disable logging for cleaner output
});

module.exports = sequelize;
