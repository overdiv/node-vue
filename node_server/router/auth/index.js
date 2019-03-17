const jwt = require('jsonwebtoken')
const secret = 'token scret';
const expiresIn = 365 * 24 * 3600; // 365 days

const auth = {
	signToken(id) {
		return jwt.sign({id}, secret, {expiresIn})
	},
	returnAuth() {
    return (req, res, next) => {
      const { authorization } = req.headers
  
      console.log('==== middle ware ====');
      console.log('authorization = ', authorization)

      if (!authorization) {
        res.status(401)
        throw Error('No Authorization headers')
      }

      try {
        req.user = this.verify(authorization)
      } catch (e) {
        res.status(401)
        throw e
      }

      next()
    }
  },
  verify(token) {
    console.log('jwt.verify = ', jwt.verify(token.replace(/^Bearer\s/, ''), secret));
    return jwt.verify(token.replace(/^Bearer\s/, ''), secret)
  }
}

module.exports = auth