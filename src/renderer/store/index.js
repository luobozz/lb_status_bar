import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import apiKeyStore from './module/apiKey-store.js'
import appStore from './module/app-store.js'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        apiKeyStore,
        appStore,
    },
    plugins: [
        persistedState({
            storage: sessionStorage,
            reducer(val) {
                return {
                }
            }
        }), persistedState({
            storage: localStorage,
            reducer(val) {
                return {
                    appStore: {
                        location: {
                            province: val.appStore.location.province,
                            city: val.appStore.location.city,
                            county: val.appStore.location.county
                        }
                    }
                }
            }
        })],
    getters,
    mutations: {
    }
})
