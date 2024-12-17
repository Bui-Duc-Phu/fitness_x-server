// This file configures application-level tools and middleware for an Express.js ap
var morgan = require('morgan')
const chalk = require('chalk')
const bodyParser = require("body-parser");
const cors = require('cors');
const conFigViewEngine = (app) => {
  require('dotenv').config()
  require('express-async-errors'); 

  app.use(morgan((tokens, req, res) => {
      return [
          '', 
          chalk.green('-------------> requests have just been sent'),
          chalk.green(`HTTP:`) + chalk.white(` ${tokens.method(req, res)}`),
          chalk.green(`URL:`) + chalk.white(` ${req.originalUrl}`),
          chalk.green(`Status:`) + chalk.white(` ${tokens.status(req, res)}`),
          chalk.green(`Hostname:`) + chalk.white(` ${req.hostname}`),
          req.body && Object.keys(req.body).length > 0 
              ? chalk.green(`Request Body:`) + chalk.white(` ${JSON.stringify(req.body, null, 2)}`) 
              : chalk.green(`Request Body:`) + chalk.white(` No body`), 
          req.params && Object.keys(req.params).length > 0 
              ? chalk.green(`Params:`) + chalk.white(` ${JSON.stringify(req.params, null, 2)}`) 
              : chalk.green(`Params:`) + chalk.white(` No params`), 
      ].join('\n'); 
  }));

  app.use(bodyParser.json({limit: "50mb"}));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
}

module.exports = conFigViewEngine