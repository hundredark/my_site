const { exec } = require('../db/mysql')

const getList = (tag, keyword) => {
    // 加上 1=1 防止没有 tag 和 keyword 时，sql 语句不成立
    let cmd = `select * from blogs where 1=1 `
    if (tag) {
        cmd += `and tag = ${tag} `
    }
    if (keyword) {
        cmd += `and title like '%${keyword}%' `
    }
    cmd += `order by createtime desc;`

    return exec(cmd)
}

const getDetail = (id) => {
    let cmd = `select * from blogs where id='${id}'`
    return exec(cmd).then(rows => rows[0])
}

const newBlog = (blogData = {}) => {
    let cmd = `
        insert into blogs (title, content, creattime, tag)
        values ('${blogData.title}', '${blogData.content}', ${blogData.createtime}, '${blogData.tag}')
    `

    return exec(cmd).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}

const updateBlog = (id, blogData = {}) => {
    let cmd = `
        update blogs set title='${blogData.title}', content='${blogData.content}', tag='${blogData.tag}' where id=${id};  
    `

    return exec(cmd).then(result => result.affectedRows > 0)
}

const delBlog = (id) => {
    let cmd = `
        delete from blogs where id='${id}'
    `

    return exec(cmd).then(result => result.affectedRows > 0)
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}