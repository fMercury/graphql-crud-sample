const fs = require('fs');
require('dotenv').config()

module.exports = {
    development: {
        username: process.env.PRODUCTION_DB_USERNAME,
        password: process.env.PRODUCTION_DB_PASSWORD,
        database: process.env.PRODUCTION_DB_NAME,
        host: process.env.PRODUCTION_DB_HOST,
        dialect: process.env.PRODUCTION_DB_DIALECT,
        port: 3306,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: process.env.CI_DB_HOST,
        dialect: process.env.CI_DB_DIALECT,
        define: {
            createdAt: 'createdat',
            updatedAt: 'updatedat'
        }
    },
    production: {
        username: process.env.PRODUCTION_DB_USERNAME,
        password: process.env.PRODUCTION_DB_PASSWORD,
        database: process.env.PRODUCTION_DB_NAME,
        host: process.env.PRODUCTION_DB_HOST,
        dialect: process.env.PRODUCTION_DB_DIALECT,
        define: {
            createdAt: 'createdat',
            updatedAt: 'updatedat'
        }
    }
};