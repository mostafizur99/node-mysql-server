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
        // insertData(connection)
        // deleteDataByID(connection)
        // updateData(connection)
        findData(connection)
    }
});

const insertData = (con) => {
    const sqlQuery = "INSERT INTO employee_data (name,age,gender,salary) VALUES(?,?,?,?)"
    const insertedData = ['Bob Yard', '25', 'Male', '2500']
    con.query(sqlQuery, insertedData, (err) => {
        if (err) {
            console.error('Data Insertion Failed', err);
        } else {
            console.log('Data Inserted Successfully');
        }
    })
}

const deleteDataByID = (con) => {
    const sqlQuery = "DELETE FROM employee_data WHERE id=2";
    con.query(sqlQuery, (err) => {
        if (err) {
            console.log("Failed to Delete Data");
        }
        else {
            console.log("Data Deleted Successfully");
        }
    })
}


const updateData = (con) => {
    const sqlQuery = "UPDATE employee_data SET age='26', salary='2700' WHERE  id='3'";
    con.query(sqlQuery, (err) => {
        if (err) {
            console.log("Failed to Update Data");
        }
        else {
            console.log("Data Updated Successfully");
        }
    })
}

const findData = (con) => {
    const sqlQuery = "SELECT * FROM employee_data";
    con.query(sqlQuery, (err, result) => {
        if (err) {
            console.log("Failed to Fetch Data");
        }
        else {
            console.log("Data Fetched Successfully:", result);
        }
    })
}
