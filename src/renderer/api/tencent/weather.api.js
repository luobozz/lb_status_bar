import { ipcRendererUtil } from "../../util/electron.util"
import store from '../../store'
export default {
    getWeaherIcon(weather) {
        //TODO 2021年10月14日抓全国腾讯天气数据只有这些，如果出现bug图标则补充code
        const codeIcon = [
            {
                "code": 0,
                "name": "晴",
                "icon": "if-a-qingtianbaitian"
            },
            {
                "code": 1,
                "name": "多云",
                "icon": "if-duoyun"
            },
            {
                "code": 2,
                "name": "阴",
                "icon": "if-yintian"
            },
            {
                "code": 3,
                "name": "阵雨",
                "icon": "if-zhenyu"
            },
            {
                "code": 4,
                "name": "雷阵雨",
                "icon": "if-leizhenyu"
            },
            {
                "code": 6,
                "name": "雨夹雪",
                "icon": "if-yujiaxue"
            },
            {
                "code": 7,
                "name": "小雨",
                "icon": "if-xiaoyu"
            },
            {
                "code": 8,
                "name": "中雨",
                "icon": "if-zhongyu"
            },
            {
                "code": 9,
                "name": "大雨",
                "icon": "if-dayu"
            },
            {
                "code": 10,
                "name": "暴雨",
                "icon": "if-baoyu"
            },
            {
                "code": 11,
                "name": "大暴雨",
                "icon": "if-baoyu"
            },
            {
                "code": 13,
                "name": "阵雪",
                "icon": "if-zhenxue"
            },
            {
                "code": 14,
                "name": "小雪",
                "icon": "if-xiaoxue"
            },
            {
                "code": 15,
                "name": "中雪",
                "icon": "if-zhongxue"
            },
            {
                "code": 16,
                "name": "大雪",
                "icon": "if-daxue"
            },
            {
                "code": 17,
                "name": "暴雪",
                "icon": "if-baoxue"
            },
            {
                "code": 18,
                "name": "大暴雪",
                "icon": "if-baoxue"
            },
            {
                "code": 18,
                "name": "雾",
                "icon": "if-wu"
            },
            {
                "code": 21,
                "name": "小到中雨",
                "icon": "cc"
            },
            {
                "code": 22,
                "name": "中到大雨",
                "icon": "if-zhongyu"
            },
            {
                "code": 53,
                "name": "霾",
                "icon": "if-wumai"
            },
            {
                "code": 301,
                "name": "雨",
                "icon": "if-zhongyu"
            }
        ]
        const findIcon=codeIcon.filter(p => p.code == parseInt(weather.weather_code))
        weather.icon = findIcon.length>0?findIcon[0].icon:"fa-bug"
        return weather;
    },
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
            const weatherType = "observe|air"
            const location = store.getters.location
            ipcRendererUtil.mainRequestAgent(encodeURI(`https://wis.qq.com/weather/common?source=pc&weather_type=${weatherType}&province=${location.province}&city=${location.city}&county=${location.district}`), 'get', {}).then(r => {
                resolve(r)
            }).catch(e => {
                reject(e)
            })
        })
    }
}