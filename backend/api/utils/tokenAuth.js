const jwt = require('jsonwebtoken')

const generateUserToken = (res, user) => {
    let token = jwt.sign(user, process.env.TOKEN_KEY, { expiresIn: '7d' })
    res.status(200).send({
        success: true,
        message: 'Authorized correctly',
        data: {user, token}
    })
}

const validateToken = (req, res) => {
    let token = req.headers.authorization
    if (token) {
        try {
            let validation = jwt.verify(token, process.env.TOKEN_KEY)
            return({
                success: true,
                date: Date.now(),
                message: 'Token valid',
                info: validation
            })
        } catch(error) {
            console.log(error)
            return({
                success: false,
                date: Date.now(),
                message: 'Token invalid',
            })
        }
    } else {
        return({
            success: false,
            message: 'Unauthorized',
        })
    }
}

const tokenAuth = {generateUserToken, validateToken}

module.exports = tokenAuth