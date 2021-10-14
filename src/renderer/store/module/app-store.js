import { reject } from "lodash";
import { stat } from "original-fs";
import locationApi from "../../api/tencent/location.api"
const defaultAppProperties = {
    location: {
        interval: null,
        province: "四川省",
        city: "成都市",
        county: "武侯区"
    }
}

export default {
    state: {
        ...defaultAppProperties
    },
    actions: {
        setAppProperties(context, data) {
            context.commit('SET_APP_PROPERTIES', data)
        },
        initLocationOnce(context) {
            if (context.state.location.interval == null) {
               const interval = setInterval(() => {
                    context.dispatch("getLocation").then(r => {
                        window.clearInterval(context.state.location.interval)
                    });
                }, 500);
                context.commit('SET_LOCATION_INTERVAL', interval);
            }
        },
        getLocation(context) {
            return new Promise((resolve, reject) => {
                locationApi.getIpLocation().then(r => {
                    context.commit('SET_LOCATION', r.result.ad_info);
                    resolve(r)
                }).catch(e => {
                    reject(e)
                })
            })
        }
    },
    mutations: {
        SET_APP_PROPERTIES(state, payload) {
            Object.assign(state, payload)
        },
        SET_LOCATION_INTERVAL(state, payloda) {
            state.location.interval = payloda
        },
        SET_LOCATION(state, payload) {
            Object.assign(state.location, payload)
        }
    }
}