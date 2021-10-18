const path = require('path');
const { app } = require('electron');

module.exports = {
    tray: {
        tips: "lb_status_bar",
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
        loadUrl: MAIN_WINDOW_WEBPACK_ENTRY,
        devTools: {
            open: true,
            // open: false,
            props: {
                mode: "detach"
            }
        },
        windowConfig: {
            width: 460+16,
            height: 30+16,
            frame: false,
            x: 70,
            y: 1042,
            alwaysOnTop: {
                flag: true,
                level: "screen-saver",
            },
            transparent: true,
            resizable: false,
            skipTaskbar: true,
            webPreferences: {
                preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
            },
        }
    }
}
