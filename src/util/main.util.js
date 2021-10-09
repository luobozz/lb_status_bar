const { BrowserWindow } = require('electron');
const lodash = require('lodash')

module.exports = {
    createWindow: (config) => {
        const mainWindow = new BrowserWindow(config.windowConfig);
        mainWindow.loadURL(config.loadUrl);
        if (config.devTools.open) {
            mainWindow.webContents.openDevTools(config.devTools.props);
        }
    }
}