const path = require('path');
const { app} = require('electron');

module.exports = {
    tray: {
        tips:"lb_status_bar",
        icon: path.join(__dirname, 'assets/ico/lb_16.ico'),
        template: [
            {
                label: '测试',
                click: () => {
                    // app.quit()
                    console.log(123)
                }
            },
            { type: 'separator' },
            {
                label: '退出',
                click: () => {
                    app.quit()
                }
            },
        ]
    },
    mainWindow: {
        loadUrl: LB_STATUS_BAR_WEBPACK_ENTRY,
        devTools: {
            open: true,
            props: {
                mode: "detach"
            }
        },
        windowConfig: {
            width: 200,
            height: 135,
            // frame: false,
            x: 65,
            y: 1047,
            // alwaysOnTop: true,
            // transparent: true,
            resizable: true,
            // skipTaskbar: true,
            webPreferences: {
                nodeIntegration: true
            }
        }
    }
}
