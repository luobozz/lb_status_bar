import md5 from 'md5'
import config from "../config/config"
import axios from "./axios.util"
import { ipcRendererUtil } from "./electron.util"

export default{
    getLocation:()=>{
        const url=`http://apis.map.qq.com/ws/location/v1/ip?key=${config.apisMap.apiKey()}`
        console.log(`${url}&sig=${md5(url)}`)
        ipcRendererUtil.mainRequestAgent(`${url}&sig=${md5(url)}`,'get',{}).then(r=>{
            console.log(r)
        })
    }
}