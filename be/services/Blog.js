const BlogModel = require('../db/models/blog')

class BlogService {

  async getBlogList () {
    return await BlogModel.findAll({
      where: { status: 1},
      attributes: {
        exclude: ['content']
      }
    })
  }

  async getBlogById (id) {
    return await BlogModel.findOne({
      where: { id },
      attributes: {
        exclude: ['status']
      }
    })
  }
}

module.exports = new BlogService()
