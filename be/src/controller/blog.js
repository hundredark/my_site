const getList = (tag, keyword) => {
    let blogList = [
        {
            id: 1
        },
        {
            id: 2
        }
    ]
    return blogList
}

const getDetail = (id) => {
    return {id: 1}
}

const newBlog = (blogData = {}) => {
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    return true
}

const delBlog = (id) => {
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}