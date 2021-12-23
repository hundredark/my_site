const { exec } = require('../db/mysql')

const checkLogin = (username, password) => {
    console.log('check login', username, password)
    let cmd = `select id, username from users where username='${username}' and password='${password}'`

    return exec(cmd).then(rows => {
        return rows[0] || {}
    })
}

module.exports = {
    checkLogin
}
