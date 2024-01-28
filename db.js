const mysql = require('mysql2/promise')

const mysqlpool = mysql.createPool({
    host:'localhost',
    port:'3307',
    user:'root',
    password:'12345',
    database:'crud'
})

module.exports = mysqlpool