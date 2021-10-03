const { app, BrowserWindow,screen } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    // width: screen.getPrimaryDisplay().workAreaSize.width/3, 
    width: 325, 
    height: 35, 
    frame: false,
    x:0,
    y:1000,
    alwaysOnTop:true,
    transparent: true,
    resizable:false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 配置在webpack的entry节点,electron-forge位于package.json
  mainWindow.loadURL(LB_STATUS_BAR_WEBPACK_ENTRY);
  // Open the DevTools.
  mainWindow.webContents.openDevTools({
    mode:"detach"
  });
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
