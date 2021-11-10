import { ipcRendererUtil } from "../../util/electron.util"
import store from '../../store'
import apiUtil from './api.util'

export default {
    getWeather() {
        return new Promise((resolve, reject) => {
            ipcRendererUtil.mainRequestAgent(encodeURI(apiUtil.mapSignUrl(`/weather/v1/?district_id=${store.getters.location.adcode}&data_type=all`)), 'get', {}).then(r => {
                // console.log(r)
                resolve(r)
            }).catch(e => {
                reject(e)
            })
        })
    }
}