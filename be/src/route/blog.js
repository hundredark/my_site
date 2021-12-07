const {getList, getDetail, newBlog, updateBlog, delBlog} = require('../controller/blog');
const {SuccessModule, ErrorModule} = require('../module/resModule')

const handleBlogRouter = (req, res) => {
    const method = req.method;
    const path = req.path;
    const id = req.query.id || '';

    // 获取博客列表
    if(method === 'GET' && path === '/api/blog/list') {
        const tag = req.query.tag || ''
        const keyword = req.query.keyword || ''
        const result = getList(tag, keyword)
        
        return new SuccessModule(result)
    }

    // 获取博客详情
    if(method === 'GET' && path === '/api/blog/detail') {
        const result = getDetail(id)
        return new SuccessModule(result)
    }

    // 新建博客
    if(method === 'POST' && path === '/api/blog/new') {
        let result = newBlog(req.body);
        return new SuccessModule(result)
    }

    // 更新博客
    if(method === 'POST' && path === '/api/blog/update') {
        let flag = updateBlog(id, req.body);
        if(flag) {
            return new SuccessModule('更新博客成功');
        } else {
            return new ErrorModule('更新博客失败');
        }
    }

    // 删除博客
    if(method === 'POST' && path === '/api/blog/del') {
        const flag = delBlog(id);
        if(flag) {
            return new SuccessModule('删除博客成功');
        } else {
            return new ErrorModule('删除博客失败');
        }
    }
}

module.exports = handleBlogRouter;