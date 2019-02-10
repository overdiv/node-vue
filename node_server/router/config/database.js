const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'test'
})

// 어디든 사용할 수 있게 export
module.exports = connection