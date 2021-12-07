const querystinrg = require('querystring')
const handleUserRouter = require('./src/route/user')
const handleBlogRouter = require('./src/route/blog')

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const url = req.url
    req.path = url.split('?')[0]
    req.query = querystinrg.parse(url.split('?')[1])

    getPostData(req).then(postData => {
        req.body = postData
        const bolgResult = handleBlogRouter(req, res)
        const userResult = handleUserRouter(req, res)

        if(bolgResult) {
            res.end(JSON.stringify(bolgResult))
            return
        }

        if(userResult) {
            res.end(JSON.stringify(userResult))
            return
        }

        res.writeHead(404, {"Content-type": "text-plain"});
        res.write("404 not found/n");
        res.end();
    })

}

module.exports = serverHandle