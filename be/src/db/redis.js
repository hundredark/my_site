const redis = require('redis')
const { redis_config } = require('../config/prd')

console.log(redis_config)
const redisClient = redis.createClient(redis_config.port, redis_config.host)
redisClient.on('error', err => {
    console.log(err)
})

const set = (key, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }

    redisClient.set(key, value, redis.print)
}

const get = (key) => {
    const promise = new Promise(((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }

            if (val === null) {
                resolve(null)
                return
            }

            try {
                resolve(JSON.parse(val))
            } catch (ex) {
                resolve(val)
            }
        })
    }))
    return promise
}

module.exports = {
    set,
    get,
}