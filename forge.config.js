const appPubulicName = "LbStatusBar"
const path = require("path")
module.exports = {
    "packagerConfig": {
        "name": appPubulicName,
        "asar": true,
        "icon": "./src/assets/ico/lb_256",
        "ignore": null
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": appPubulicName,
                "iconUrl": path.join(__dirname, '/src/assets/ico/lb_256.ico'),
                'setupIcon': path.join(__dirname, '/src/assets/ico/lb_256.ico'),
                "noMsi": false,
            }
        },
        { "name": '@electron-forge/maker-zip' }
    ],
    "plugins": [
        [
            "@electron-forge/plugin-webpack",
            {
                "mainConfig": "./webpack.main.config.js",
                "renderer": {
                    "config": "./webpack.renderer.config.js",
                    "entryPoints": [
                        {
                            "html": "./src/renderer/index.html",
                            "js": "./src/renderer/main.js",
                            "name": "main_window",
                            "preload": {
                                "js": "./src/preload/mainWindow.preload.js"
                            }
                        }
                    ]
                }
            }
        ]
    ]
}