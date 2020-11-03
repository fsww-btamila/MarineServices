const dbConfig = require('../config/db.config');

const config = {
  server: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
  "options": {
    "encrypt": false,
    "enableArithAbort": true
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
  }
};

module.exports = config;
