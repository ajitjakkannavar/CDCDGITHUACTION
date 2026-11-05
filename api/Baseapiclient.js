class Apiclient {
    constructor(request) {
        this.request = request
    }

    async get(url, option = {}) {
        return await this.request.get(url, option)
    }
    async post(url, data = {}, option = {}) {
        return await this.request.post(url, { data, ...option })
    }
    async put(url, data = {}, option = {}) {
        return await this.request.put(url, { data, ...option })
    }
    async patch(url, data = {}, option = {}) {
        return await this.request.patch(url, { data, ...option })
    }
    async delete(url, option = {}) {
        return await this.request.delete(url, option)
    }
}
module.exports = Apiclient;