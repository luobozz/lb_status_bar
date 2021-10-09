const { app, BrowserWindow,Tray,Menu } = require('electron');
const config=require('./config/window.config')
const mainUtil=require("./util/main.util")

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

app.on('ready', () => {
  appTray = new Tray(config.tray.icon);
  appTray.setToolTip(config.tray.tips);
  appTray.setContextMenu( Menu.buildFromTemplate(config.tray.template));

  mainUtil.createWindow(config.mainWindow)
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
