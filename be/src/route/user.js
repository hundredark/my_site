const {checkLogin} = require("../controller/user")
const { SuccessModule, ErrorModule } = require("../module/resModule")


const handleUserRouter = (req, res) => {
    const method = req.method
    const path = req.path
    
    // 用户登录
    if(method === 'POST' && path === '/api/user/login') {
        const {username, password} = req.body
        const result = checkLogin(username, password)

        return result.then(data => {
            if(data.username) {
                return new SuccessModule('登录成功');
            } else {
                return new ErrorModule('登录失败');
            }
        })
    }
}

module.exports = handleUserRouter;
