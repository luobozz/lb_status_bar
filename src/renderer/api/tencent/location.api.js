import md5 from 'md5'
import store from '../../store'
import axios from "../../../util/axios.util"
import { ipcRendererUtil } from "../../util/electron.util"

const locationKey = ()=>{
    return store.getters.apiKey.tencent.location
}

export default {
    getIpLocation: () => {
        const url = `/ws/location/v1/ip?key=${locationKey().key}`
        return ipcRendererUtil.mainRequestAgent(`https://apis.map.qq.com${url}&sig=${md5(url + locationKey().sk)}`, 'get', {})
    }
}