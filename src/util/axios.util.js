const axipsApi=require("axios")

const service=axipsApi.create({
    headers: {
        "Accept": "*/*"
    },
    timeout: 10000
})


service.interceptors.request.use(
    config => {
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const msg = error || 'Network Error'
        throw new Error(msg)
    }
)

const axios = () => {
    return service
}

module.exports = {
    get: (url, config) => {
        return axios().get(url, config)
    },
    post(url, config) {
        return axios().post(url, config.data, config)
    },
    put(url, config) {
        return axios().put(url, config.data, config)
    },
    delete(url, config) {
        return axios().delete(url, config)
    }
}