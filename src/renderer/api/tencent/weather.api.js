import { ipcRendererUtil } from "../../util/electron.util"
import store from '../../store'
export default {
    getWeather() {
        return new Promise((resolve, reject) => {
            // weather_type	observe 当前天气
            //          	forecast_1h
            //          	forecast_24h
            //          	index 穿衣，舒适度等
            //          	alarm 预警
            //          	tips 天气介绍
            //          	air 空气质量
            //          	rise 日出
            // weather_type	查询类型，多个|分隔
            const weatherType = "air|forecast_1h"
            const location = store.getters.location
            ipcRendererUtil.mainRequestAgent(encodeURI(`https://wis.qq.com/weather/common?source=pc&weather_type=${weatherType}&province=${location.province}&city=${location.city}&county=${location.district}`), 'get', {}).then(r => {
                resolve(r)
            }).catch(e => {
                reject(e)
            })
        })
    }
}