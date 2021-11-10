import md5 from 'md5'
import store from '../../store'

const mapAk = () => {
    return store.getters.apiKey.baidu.map
}

const mapApiAddress = "https://api.map.baidu.com"

export default {
    mapSignUrl(url) {
        url=`${url}&ak=${mapAk().ak}`
        return `${mapApiAddress}${url}&sn=${md5(encodeURIComponent(`${url}${mapAk().sk}`))}`
    }
}