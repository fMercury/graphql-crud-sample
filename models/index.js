'use strict';
require('dotenv').config()

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  console.log("opcion 1")
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  if (process.env.NODE_ENV == 'development') {
    console.log(process.env.NODE_ENV)
    console.log("opcion 2")
    sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
  else{
    //production
    console.log(process.env.NODE_ENV)
    console.log("opcion 3")
    sequelize = new Sequelize(process.env.PRODUCTION_DB_NAME, process.env.PRODUCTION_DB_USERNAME, process.env.PRODUCTION_DB_PASSWORD, config);
  }

  
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
