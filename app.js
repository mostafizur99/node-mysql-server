var mysql = require('mysql');
require('dotenv').config()

const dbConnectionConfig = {
    host: 'localhost',
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE,
}

const connection = mysql.createConnection(dbConnectionConfig);

connection.connect((err) => {
    if (err) {
        console.error('DB Connection Error: ' + err.stack);
    } else {
        console.log('DB Connected');
    }
});