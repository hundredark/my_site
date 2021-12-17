const mysql = require('mysql')
const {db_config} = require('../config/prd.js')

const con = mysql.createConnection(db_config)
con.connect()

const exec = (sql) => {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            } else {
                resolve(result)
            }
        })
    })
    return promise
}

module.exports = {
    exec,
}
