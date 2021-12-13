const { exec } = require('../db/mysql')

const checkLogin = (username, password) => {
    let cmd = `select username from users where username='${username}' and password='${password}'`

    return exec(cmd).then(rows => rows[0] || {})
}

module.exports = {
    checkLogin
}
