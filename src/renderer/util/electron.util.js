import { ipcRenderer } from 'electron'
export const ipcRendererUtil = {
    listener() {
        ipcRenderer.on("ipcRenderer_test", (event, args) => {
            console.log(args)
        })
    },
    showMianWindowFunctionArea(w) {
        ipcRenderer.send("mainWindow/functionArea", {
            action: "show",
            widthIncremental: w
        })
    }
}