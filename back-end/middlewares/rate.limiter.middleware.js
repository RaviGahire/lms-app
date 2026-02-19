const Redis = require('ioredis')

// Created instance 
const redisClient = new Redis()

const rateLimiter = async (req, res, next) => {

    const key = `rate:${req.ip}` // user ip
    const limit = 5 // 5 requests
    const window = 60 // seconds

    try {

        const current = await redisClient.incr(key)

        if (current === 1) {
            await redisClient.expire(key, window)
        }

        if (current > limit) {
            return res.status(429).json({
                message: "Too many requests"
            })
        }

        next()

    } catch (error) {
        console.error('Rate limiter error:', error)
        // Fail open - allow request if Redis is down
        next()
    }

}

module.exports = rateLimiter;