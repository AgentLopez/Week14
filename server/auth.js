const jwt = require('jsonwebtoken')
const models = require('./models')


function auth(req, res, next) {
    let headers = req.headers['authorization']
    if(headers) {
        const token = headers.split(' ')[1]
        const decoded = jwt.verify(token, 'PRINTERBROKE')
        if(decoded) {
            const username = decoded.username
            models.Boss.findOne({
                where: {
                    username: username
                }
            }) .then((user) => {
                if (user) {
                    next()
                }
            })
        }
    }
}

module.exports = auth