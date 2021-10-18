const { contextBridge, ipcRenderer } = require('electron');
const axios = require('../util/axios.util.js')
const osUtils = require('os-utils')

console.log("[electron] main window preload js is loaded..")

//各类node模块桥接，按需暴露
contextBridge.exposeInMainWorld('nodeModules', {
    electron: {
        ipcRenderer: {
            send(channel, ...args) {
                ipcRenderer.send(channel, ...args)
            },
            invoke(channel, ...args) {
                return ipcRenderer.invoke(channel, ...args)
            }
        }
    },
    osUtils: {
        ...osUtils
    },
    axios: {
        ...axios
    }
});
