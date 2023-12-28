//Migration code and Rate limiter code has been written here.

//Migration code 
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/./config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const modelDefiner = require(path.join(__dirname, file));

    // Check if the file exports a function for defining the model
    if (typeof modelDefiner === 'function') {
      const model = modelDefiner(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


//Rate Limiter Code

//require("dotenv") - loads the dotenv module, which provides a way to read variables from a .env file.
//.config() - reads the variables from the .env file and adds them to the process.env object, making them accessible throughout the application.

require("dotenv").config();

console.log(`RATE_LIMIT_MAX :${process.env.RATE_LIMIT_MAX}`);
console.log(`DB :${process.env.DB_USER}`);


const express = require('express');
// Import the express-rate-limit middleware
const rateLimit = require('express-rate-limit');

// Create an Express application
const app = express();


// Use rate limiting middleware
//This middleware is designed to limit the rate of requests to Express application. 
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // time window for which the rate limiting is applied . Here, it is 15 minutes. calculates to 15 minutes in milliseconds
    max: process.env.RATE_LIMIT_MAX, // Max requests per window
    message: 'Too many requests from this IP, please try again later.',
  });
  
  app.use(limiter); // adds the rate limiter middleware (limiter) to the Express application
  
  // Define a simple route for the root path
  app.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
  });


  // Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

