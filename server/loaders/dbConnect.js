const mysql = require('mysql');
const config = require('../config');

const connectToDatabase = () => {
    const connection = mysql.createConnection(config.dbconfig);
      
    connection.connect();
      
    console.log('mysql connected...')
      
    connection.end();
}

module.exports = connectToDatabase