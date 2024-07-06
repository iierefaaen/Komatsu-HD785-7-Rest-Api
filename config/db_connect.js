const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "part_number"
})

connection.connect((err) => {
    if(!err) {
        console.log("MySQL connect sucess ...");
    }
    else {
        console.log("MySQL connect ERROR. NOT CONNECTED :" + err);
    }
})

module.exports = { connection }
