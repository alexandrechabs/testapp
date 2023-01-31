const { expressjwt: expressJwt } = require('express-jwt');
const util = require('util');
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req, res) {
    console.log('azertyuiop')
    const middleware = expressJwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/register',
            '/api/users/authenticate'
        ]
    });
    console.log('middleware')
    console.log(middleware)

    return util.promisify(middleware)(req, res);
}