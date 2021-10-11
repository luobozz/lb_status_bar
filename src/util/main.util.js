const { BrowserWindow, ipcMain } = require('electron');
const lodash = require('lodash')
const config = require('../config/window.config')

module.exports = {
    createWindow: (config) => {
        const window = new BrowserWindow(config.windowConfig);
        window.loadURL(config.loadUrl);
        if (config.devTools.open) {
            window.webContents.openDevTools(config.devTools.props);
        }
        window.setAlwaysOnTop(true, "floating");
    },
    ipcMain: {
        listener() {
            ipcMain.on("mainWindow/functionArea", (event, args) => {
                const actions = {
                    show: () => {
                        const window = BrowserWindow.getAllWindows()[0]
                        const size=window.getSize()
                        window.setSize(size[0]+args.widthIncremental,size[1],true);
                    },
                    hide: () => {
                        const window = BrowserWindow.getAllWindows()[0]
                        window.setSize(config.mainWindow.windowConfig.width,config.mainWindow.windowConfig.height,true);
                    }
                }
                actions[args.action]()
            })

        }
    }
}