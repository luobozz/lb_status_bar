import { ipcRenderer } from 'electron'
export const ipcRendererUtil = {
    listener() {
        ipcRenderer.on("ipcRenderer_test", (event, args) => {
            console.log(args)
        })
    },
    showMianWindowFunctionArea(sh, w) {
        ipcRenderer.send("window/mainWindow/functionArea", {
            action: sh,
            widthIncremental: w
        })
    },
    mainRequestAgent(url, type, config) {
        return ipcRenderer.invoke('main/request/agent', {
            url: url,
            type: type,
            config:config||{}
        })
    }
}