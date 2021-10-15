const { BrowserWindow, ipcMain } = require('electron');
const lodash = require('lodash')
const config = require('../config/window.config')
const axios = require('./axios.util')

module.exports = {
    createWindow: (config) => {
        const window = new BrowserWindow(config.windowConfig);
        window.loadURL(config.loadUrl);
        if (config.devTools.open) {
            window.webContents.openDevTools(config.devTools.props);
        }
        if (config.windowConfig.alwaysOnTop) {
            window.setAlwaysOnTop(config.windowConfig.alwaysOnTop.flag, config.windowConfig.alwaysOnTop.level, config.windowConfig.alwaysOnTop.relativeLevel || 0);
        }
        if (config.windowConfig.onfocus && typeof config.windowConfig.onfocus == 'function') {
            window.on("focus", config.windowConfig.onfocus)
        }
    },
    ipcMain: {
        listener() {
            ipcMain.on("window/mainWindow/functionArea", (event, args) => {
                const actions = {
                    show: () => {
                        const window = BrowserWindow.getAllWindows()[0]
                        const size = window.getSize()
                        window.setSize(size[0] + args.widthIncremental, size[1], true);
                    },
                    hide: () => {
                        const window = BrowserWindow.getAllWindows()[0]
                        window.setResizable(true)
                        window.setSize(config.mainWindow.windowConfig.width, config.mainWindow.windowConfig.height, true);
                        window.setResizable(false)
                    }
                }
                actions[args.action]()
            })

            //TODO 尝试使用contextBridge 
            // 代理绕过浏览器的请求(比如绕过同源策略，即跨域)
            ipcMain.handle("main/request/agent", async (event, args) => {
                const res = await axios[args.type](args.url, args.config || {}).then(r => {
                    return r.data
                }).catch(e => {
                    return e
                })
                return res
            })
        }
    }
}