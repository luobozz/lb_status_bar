const { app, BrowserWindow, Tray, Menu } = require('electron');
const config = require('./config/window.config')
const mainUtil = require("./util/main.util")

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

app.on('ready', () => {
  appTray = new Tray(config.tray.icon);
  appTray.setToolTip(config.tray.tips);
  appTray.setContextMenu(Menu.buildFromTemplate(config.tray.template));

  mainUtil.createWindow(config.mainWindow)

  mainUtil.ipcMain.listener()
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    mainUtil.createWindow(config.mainWindow)
  }
});