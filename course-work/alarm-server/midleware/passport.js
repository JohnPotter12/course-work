const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')
const keys = require('../config/keys')
const jwt = require('jsonwebtoken');
const secretKey = require('../config/keys');
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new jwtStrategy(options, async (payload, done) => {
            try {
                const user = await User.model.findById(payload.userId).select('email id')

                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (e) {
                console.log(error);
            }
        })
    )
}

module.exports.Token = function () {
    const token = jwt.sign({}, secretKey, {});
    console.log('Generated JWT token:', token);
}