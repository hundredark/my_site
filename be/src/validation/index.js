// 获取cookie过期时间
const getCookieExpires = () => {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))

    return d.toGMTString();
}

const setCookie = (res, userId) => {
    res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
}

const parseCookie = (cookieStr) => {
    let o = {}
    cookieStr.split(';').forEach(item => {
        if (!item) return

        let tmp = item.split("=")
        let key = tmp[0].trim()
        let val = tmp[1].trim()
        o[key] = val
    })

    return o
}

module.exports = {
    setCookie,
    parseCookie,
}