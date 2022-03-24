const router = require('koa-router')(),
      indexController = require('../controllers/Index')

function test() {}
router.prefix('/api')
router.get('/blog/get_blogs', indexController.getBlogs)
router.get('/blog/get_blog_by_id', indexController.getBlogById)
router.get('/gallery/get_imgs', indexController.getBatchImgByPage)
router.get('/testApi', test)

module.exports = router
