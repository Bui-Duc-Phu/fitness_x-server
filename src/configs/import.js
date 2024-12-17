
// This configuration file centralizes essential settings and dependencies for the application,
// promoting modularity and maintainability. It includes the following components:


require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  hostname: process.env.HOST_NAME || 'localhost',
  printColoredConsole: require('../utils/coloredConsole'),
  conFigViewEngine: require("./viewEngine"),
  express: require("express"),
  connectToDatabase : require('./db'),  
};

module.exports = config;
