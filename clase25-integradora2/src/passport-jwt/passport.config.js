const passport    = require('passport')
const passportJWT = require('passport-jwt')
const { config } = require('../config/config')

const JWTStrategy = passportJWT.Strategy
const ExtractJWT  = passportJWT.ExtractJwt

// jwt setadas las cookies en el cliente
// req -> obj req(cookies)
// coderCookieToken: 'jfasldflasjdfasdf.jlasdjfl'
let cookieExtractor = req => {
    let token = null
    if (req && req.cookies) {
        token = req.cookies[coderCookieToken] // nombre del campo de cookie donde esta el token
    }
    return token
}

const configStrategy  = {
    jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
    secretOrKey: config.privateKeyJwt
}

const initializePassport = () => {
    passport.use('jwt', new JWTStrategy(configStrategy, async (jwt_payload, done)=>{
        try {
            return done(null, jwt_payload) // user 
        } catch (error) {
            return done(error)
        }
    }))
}

module.exports = {
    initializePassport
}


