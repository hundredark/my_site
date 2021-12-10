const mysql = require('mysql')

if (process.env.NODE_ENV === 'dev') {
    const { db_config } = require('../config/dev')
} else if (process.env.NODE_ENV === 'production') {
    const { db_config } = require('../config/prd')
} else {
    const db_config = null
}

const con = mysql.createConnection(db_config)
con.connect()

const exec = (sql) => {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject()
                return
            } else {
                resolve(result)
            }
        })
    })
    return promise
}

module.exports = exec