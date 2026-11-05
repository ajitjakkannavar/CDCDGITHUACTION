const Apiclient = require('../api/Baseapiclient')
const AuthEndpoints = require('../endpoints/auth.endpoints')

class Authclient extends Apiclient {
    constructor(request) {
        super(request)
    }

    async login(data, options = {}) {
        return this.post(AuthEndpoints.Auth.logIn, data, options)

    }
    async logout(options = {}) {
        return this.post(AuthEndpoints.Auth.logOut, {}, options)

    }
    async getProfile(options = {}) {
        return this.get(AuthEndpoints.Auth.me, options)

    }
    async refreshToken(data, options = {}) {
        return this.post(AuthEndpoints.Auth.refresh, data, options)

    }
}
module.exports = Authclient;