const { getBlogList, getBlogById } = require('../services/Blog'),
      { getGalleryPage, getGalleryLength } = require('../services/Gallery'),
      { returnInfo } = require('../libs/utils'),
      { API } = require('../config/error_config');

class Index {
  async getBlogs (ctx, next) {
    const blogList = await getBlogList()

    ctx.body = blogList
               ? returnInfo(API.RETURN_SUCCESS, blogList)
               : returnInfo(API.RETURN_FAILED);
  }

  async getBlogById (ctx, next) {
    const id = parseInt(ctx.request.query.id)
    const data = await getBlogById(id);

    ctx.body = data
             ? returnInfo(API.RETURN_SUCCESS, data)
             : returnInfo(API.RETURN_FAILED);
  }

  async getBatchImgByPage (ctx, next) {
    const page = parseInt(ctx.request.query.page)
    const pageSize = parseInt(ctx.request.query.pageSize)
    const data = await getGalleryPage(page, pageSize);

    ctx.body = data
      ? returnInfo(API.RETURN_SUCCESS, data)
      : returnInfo(API.RETURN_FAILED);
  }
}

module.exports = new Index();










